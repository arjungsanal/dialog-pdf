'use server'

import {auth} from "@clerk/nextjs/server";
import {revalidatePath} from "next/cache";
import {generateEmbeddingsInPinecodeVectorStore} from "@/lib/langchain";

export async function generateEmbeddings(docId:string){
    auth().protect(); //Prevent users from generating embeddings without being logged in

    //PDF into Embeddings
    await generateEmbeddingsInPinecodeVectorStore(docId);

    revalidatePath('/dashboard')

    return {completed : true};

}