// #arjungsanal

import Image from "next/image";
import {
    BrainCogIcon,
    EyeIcon,
    GlobeIcon,
    MonitorSmartphoneIcon,
    ServerCogIcon,
    ZapIcon,
} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Header from "@/components/Header";
import React from "react";

const features = [
    {
        name: "store your documents",
        description: "Keep all your important PDF files securely stored and easily accessible anytime, anywhere",
        icon : GlobeIcon,
    },
    {
        name: "Blazing Fast Response",
        description: "Experience lightning fast answers to your queries,ensuring you get the information you need instantly",
        icon:ZapIcon,
    },
    {
        name: "Chat Memorization",
        description: "Experience Lightning-fast answer to your queries, ensuring you get the information you need instantly.",
        icon: BrainCogIcon,
    },
    {
        name: "Interactive PDF Viewer",
        description: "Engage with your PDFs like never before using our intuitive and interactive viewer.",
        icon: EyeIcon,
    },
    {
        name: "Cloud Backup",
        description: "Rest assured knowing your documents are safely backed up on the cloud, protected from loss or damage.",
        icon: ServerCogIcon,
    },
    {
        name: "responsive Across Devices",
        description : "Access and chat with your PDFs seamlessly on any device,whether it's your desktop, tablet or smartphone.",
        icon : MonitorSmartphoneIcon,
    },
];

export default function Home() {
  return (
    <main className="flex-1 overflow-scroll p-2 lg:p-5 bg-gradient-to-bl from-white to-indigo-600">
        <div className="bg-white py-10 sm:py-10 rounded-md drop-shadow-xl">
            <div>
                {<Header/>}
            </div>
            <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8  mt-10">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600">Your interactive Document
                        Companion</h2>

                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Transform Your PDFs
                        into Interactive Conversation</p>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Introducing{" "}
                        <span className="font-bold text-indigo-600">Dialog PDF</span>
                        <br/>
                        <br/>
                        Upload your document, and our chatbot will answer questions, summarize content, and answer all
                        your Qs. Ideal for everyone, <span className="text-indigo-600">Dialog PDF</span>{" "}
                        turns static documents into{" "}
                        <span className="font-bold">dynamic conversations</span>, enhancing productivity 10x fold
                        effortlessly.
                    </p>
                </div>

                <Button asChild className='mt-10'>
                    <Link href='/dashboard'>Get Started</Link>
                </Button>
            </div>

            <div className='relative overflow-hidden pt-16 '>
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <Image src="https://i.imgur.com/Jwoe7G2.png" alt="App Screenshot"
                           width={2432} height={1442} className="mb-[0%] rounded-xl shadow-2xl ring-1 ring-gray-900/10 "
                    />

                    <div aria-hidden='true' className='relative'>
                        <div className='absolute bottom-0 -inset-x-32 bg-gradient-to-t from-white/95 pt-[5%] '/>
                    </div>
                </div>
            </div>

            <div className='mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24'>
                <dl className='mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16'>
                    {features.map((feature, index) => (
                        <div key={index} className="relative pl-9">
                            <dt className="inline font-semiold text-gray-900 ">
                                <feature.icon
                                    aria-hidden='true'
                                    className="absolute left-1 top-1 h-5 w-5 text-indigo-600 "
                                />
                            </dt>
                            <dd>{feature.description}</dd>
                        </div>
                    ))

                    }
                </dl>
            </div>
            <div className={'flex justify-center items-center bg-white shadow-sm p-5 border-t mt-10 text-gray-600'}>
                <p>Developed by @arjungsanal | © 2024</p>
            </div>
        </div>
    </main>
  );
}
