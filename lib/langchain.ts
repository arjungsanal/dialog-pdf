import {ChatOpenAI} from "@langchain/openai";
import {PDFLoader} from "@langchain/community/document_loaders/fs/pdf";
import {RecursiveCharacterTextSplitter} from "@langchain/textsplitters";
import {OpenAIEmbeddings} from "@langchain/openai";
import {createStuffDocumentsChain} from "langchain/chains/combine_documents";
import {ChatPromptTemplate} from "@langchain/core/prompts";
import {createRetrievalChain} from "langchain/chains/retrieval";
import {createHistoryAwareRetriever} from "langchain/chains/history_aware_retriever";
import {HumanMessage , AIMessage} from "@langchain/core/messages";
import pineconeClient from "@/lib/pinecone";
import {PineconeStore} from "@langchain/pinecone";
import {PineconeConflictError} from "@pinecone-database/pinecone/dist/errors";
import {Index , RecordMetadata} from "@pinecone-database/pinecone";
import {adminDb} from "@/firebaseAdmin";
import {auth} from "@clerk/nextjs/server";

//Intialising the model
const model = new ChatOpenAI({
    apiKey : process.env.OPENAI_API_KEY,
    modelName: "gpt-4o-mini",
});

export const indexName = "dialogpdf";

export async function generateDocs(docId:string){
    const {userId} = await auth();
    if(!userId) {throw new Error("User not found in generateDocs");}

    console.log("Fetching file");
    const firebaseRef = await adminDb.collection("users").doc(userId).collection("files").doc(docId).get();

    const downloadUrl = firebaseRef.data()?.downloadUrl;
    if(!downloadUrl) {throw new Error("File not found in generateDocs");}

    console.log("Fetched URL Sucessfully");
    const response = await fetch(downloadUrl);

    // Load pdf into PDF document object
    const data = await response.blob();

    // Still not in actual PDF format so
    const loader = new PDFLoader(data);
    const docs = await loader.load();

    // Spliting the document into chuncks
    console.log("Splitting of document begins here");
    const splitter = new RecursiveCharacterTextSplitter();

    const splitDocs = await splitter.splitDocuments(docs);
    console.log(`Split into ${splitDocs.length} chunks`);

    return splitDocs;
}




//Helper class for index
async function namespaceExists(index : Index<RecordMetadata>  , namespace: string){
    if(namespace===null){ throw new Error("No namespace value provided");}
    const {namespaces} = await index.describeIndexStats();
    return namespaces?.[namespace] !== undefined;
}

export async function generateEmbeddingsInPinecodeVectorStore(docId:string){
    const {userId} = await auth();

    if(!userId){
        throw new Error("User not found");
    }

    let pineconeVectorStore;
    console.log("Generating Embedding from the split document");
    const embeddings = new OpenAIEmbeddings();

    const index = await pineconeClient.index(indexName);
    const namespaceAleradyExists = await namespaceExists(index,docId);

    if(namespaceAleradyExists){
        console.log(`Namespace ${docId} already exists`);

        pineconeVectorStore = await PineconeStore.fromExistingIndex(embeddings,{
            pineconeIndex : index,
            namespace : docId,
        });

        return pineconeVectorStore
    } else{
        //Download PDF from store generate and store it in pinecode
        const splitDocs = await generateDocs(docId);

        console.log(`Storing the embeddings in namespace ${docId} in the ${indexName} of Pinecone Vector Store`);
        pineconeVectorStore = await PineconeStore.fromDocuments(
            splitDocs,
            embeddings,
            {
                pineconeIndex : index,
                namespace : docId,
            }
        );
        return pineconeVectorStore
    }
}