'use client'
import {useState} from "react";
import {useUser} from "@clerk/nextjs";
import {useRouter} from "next/navigation";
import { v4 as uuidv4 } from 'uuid';
import {db, storage} from "@/firebase";
import {getDownloadURL, ref, uploadBytesResumable} from "@firebase/storage";
import {doc, setDoc} from "@firebase/firestore";

export enum StatusText{
    UPLOADING = "Uploading files...",
    UPLOADED = "File uploaded successfully",
    SAVING = "Saving file to database...",
    GENERATING = "Generating AI Embeddings, This will only take a few seconds",
}
export type Status = StatusText[keyof StatusText];

function UseUpload() {
    const [progess, setProgess] = useState<number | null>(null);
    const [status, setStatus] = useState<Status | null>(null);
    const [fileId, setFileId] = useState<string | null>(null);
    const {user} = useUser();
    const router = useRouter;

    const handleUpload = async (file : File) => {
        if(!file || !user) return;

        // Free and PRO plan Limit
      const fileIdToUploadTo = uuidv4();
      const storageRef =ref(storage,`users/${user.id}/files/${fileIdToUploadTo}`);


      const uploadTask =uploadBytesResumable(storageRef,file);
      uploadTask.on('state_changed', (snapshot) => {
          const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);

          setStatus(StatusText.UPLOADING);
          setProgess(percent);
      }, (err) => {
          console.log("Error in Uploading");
      }, async () => {
          setStatus(StatusText.UPLOADED);
          const downloadUrl  = await getDownloadURL(uploadTask.snapshot.ref);
          setStatus(StatusText.SAVING);
          await setDoc(doc(db, "users", user.id, "files", fileIdToUploadTo), {
              name: file.name,
              size : file.size,
              type : file.type,
              downloadUrl : downloadUrl,
              ref : uploadTask.snapshot.ref.fullPath,
              createdAt : new Date(),
          })
      })

    };

}

export default UseUpload
