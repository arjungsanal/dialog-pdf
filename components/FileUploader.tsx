'use client'
import  {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import {
    CheckCircleIcon,
    CircleArrowDown,
    HammerIcon, Rocket,
    RocketIcon,
    SaveIcon,
} from 'lucide-react'
function FileUploader() {

    const(progess,status,fileId,handleUpload) = useUpload();

    const onDrop = useCallback(async (acceptedFiles : File[]) => {
        // Do something with the files
        console.log(acceptedFiles);
        const file = acceptedFiles[0];
        if(file){
            // await handle upload
            await handleUpload(file);
        }else{
            // Toast notification
        }

    }, [])

    const {getRootProps, getInputProps, isDragActive , isFocused} =
        useDropzone({
            onDrop,
            maxFiles : 1,
            accept :{
                "application/pdf" : [".pdf"],
            }
        })
    return (
        <div className={'flex flex-col gap-4 items-center max-w-7xl mx-auto'}>
            {/*Loading */}
        <div {...getRootProps()}
                className={`p-10 border-2 border-dashed mt-10 w-[90%] border-indigo-600 text-indigo-600 rounded-lg h-96 flex items-center justify-center ${isFocused || isDragActive ? "bg-indigo-300" : "bg-indigo-100"}`}
        >
            <input {...getInputProps()} />
            <div className={'flex flex-col items-center justify-center'}>
            {
                isDragActive ?(
                    <>
                    <RocketIcon className={'h-10 w-10 animate-ping'}/>
                    <p>Drop the files here ...</p> :
                    </>):(
                        <>
                            <CircleArrowDown className={'h-10 w-10 animate-bounce'}/>
                    <p>Drag & drop some files here, or click to select files</p>
                        </>
                ) }
            </div>
        </div>
        </div>
    )
}

export default FileUploader
