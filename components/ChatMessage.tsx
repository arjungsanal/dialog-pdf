'use client'
import {Message} from "@/components/Chat";
import {useUser} from "@clerk/nextjs";
import {BotIcon, Loader2Icon, Volume2Icon, VolumeXIcon} from "lucide-react";
import Markdown from 'react-markdown';
import Image from "next/image";
import { useState } from 'react';

function ChatMessage({message} : {message : Message}) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

    const speak = async (text: string) => {
        if (isPlaying && audio) {
            audio.pause();
            setIsPlaying(false);
            return;
        }

        try {
            setIsLoading(true);
            const response = await fetch('/api/tts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text }),
            });

            if (!response.ok) throw new Error('TTS request failed');

            const audioBlob = await response.blob();
            const audioUrl = URL.createObjectURL(audioBlob);
            const newAudio = new Audio(audioUrl);

            newAudio.onended = () => {
                setIsPlaying(false);
                URL.revokeObjectURL(audioUrl);
            };

            setAudio(newAudio);
            await newAudio.play();
            setIsPlaying(true);
        } catch (error) {
            console.error('TTS error:', error);
            setIsPlaying(false);
        } finally {
            setIsLoading(false);
        }
    };

    const isHuman = message.role === "human";
    const {user} = useUser();
    
    return (
        <div className={`chat ${isHuman ? "chat-end" : "chat-start"}`}>
            <div className={'chat-image avatar'}>
                <div className={'w-10 rounded-full'}>
                    {
                        isHuman ? (
                            user?.imageUrl && (
                                <Image
                                    src={user?.imageUrl}
                                    alt={"Profile Pic"}
                                    width={30}
                                    height={30}
                                    className={"rounded-full"}
                                    />
                                )
                        ) : (
                            <div className={'h-10 w-10 bg-indigo-600 flex items-center justify-center'}>
                                <BotIcon className={'text-white h-7 w-7'}/>
                            </div>
                        )
                    }
                </div>
            </div>

            <div className={`chat-bubble prose relative ${isHuman && "bg-indigo-600 text-white"}`}>
                {message.message === 'Thinking' ? (
                    <div className={'flex items-center justify-center'}>
                        <Loader2Icon className={'animate-spin h-5 w-5 text-white'} />
                    </div>
                ) : (
                    <div className="flex flex-col space-y-2">
                        <Markdown>{message.message}</Markdown>
                        {!isHuman && (
                            <div className="flex justify-end mt-4">
                                <button 
                                    onClick={() => speak(message.message)}
                                    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 bg-gray-100 dark:bg-gray-600 shadow-sm transition-all duration-200 transform hover:scale-105 disabled:opacity-50"
                                    aria-label={isPlaying ? "Stop speaking" : "Read message aloud"}
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <Loader2Icon className="h-5 w-5 text-gray-700 dark:text-gray-200 animate-spin" />
                                    ) : isPlaying ? (
                                        <VolumeXIcon className="h-5 w-5 text-gray-700 dark:text-gray-200" />
                                    ) : (
                                        <Volume2Icon className="h-5 w-5 text-gray-700 dark:text-gray-200" />
                                    )}
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ChatMessage
