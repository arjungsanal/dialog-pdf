import React from 'react'
import {auth} from "@clerk/nextjs/server";
import {adminDb} from "@/firebaseAdmin";
import PdfView from "@/components/PdfView";
import Chat from "@/components/Chat";

async function ChatToFilePage ({
params : {id}}:{
    params : {id : string}
}
) {
    auth().protect();
    const {userId} = await auth();

    const ref = await adminDb.collection("users").doc(userId!).collection("files").doc(id).get();
    const url = ref.data()?.downloadUrl;
    return (
        <div className={'grid lg:grid-cols-5 h-full overflow-hidden'}>
            {/*Two sections on both sides */}
            {/*Right*/}
            <div className={'col-span-5 lg:col-span2 overflow-y-auto'}>
                {/*Chat Component */}
                <Chat id={id}/>
            </div>
            {/*Left*/}
            <div className={'col-span-5 lg:col-span-3 bg-gray-100 border-r-2 lg:border-indigo-600 lg:-order-1 overflow-auto'}>
                {/*PDF Render */}
                <PdfView url={url}/>
            </div>
        </div>
    )
}

export default ChatToFilePage
