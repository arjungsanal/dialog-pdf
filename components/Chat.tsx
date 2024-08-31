'use client'
import {FormEvent , useEffect , useState , useTransition} from "react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
//import {askQuestion ,Message} from '@/actions/askQuestion'
import {Loader2Icon} from "lucide-react";
//import ChatMessage from './ChatMessage';
import {useCollection} from "react-firebase-hooks/firestore";
import {useUser} from "@clerk/nextjs";
import {collection,orderBy,query} from "@firebase/firestore";
import {db} from "@/firebase";


function Chat({id} : {id : string}) {
    return (
        <div>Chat</div>
    )
}

export default Chat
