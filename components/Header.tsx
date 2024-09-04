import Link from "next/link";
import {SignedIn, UserButton} from "@clerk/nextjs";
import {Button} from "@/components/ui/button";
import {FilePlus, FilePlus2} from "lucide-react";
import Image from "next/image";

function Header() {
    return (
        <div className="flex justify-between bg-white shadow-sm p-5 border-b">
            <Link className='text-2xl' href='/'> <Image src="https://i.imgur.com/JbJphcE.png" alt="App Screenshot" width={100} height={100} className="mb-[0%] rounded-xl "/></Link>

            <SignedIn>
                <div className="flex items-center space-x-2">
                    <Button asChild variant="link" className="hidden md:flex">
                        <Link href='/dashboard/upgrade'>Pricing</Link>
                    </Button>

                    <Button asChild variant={"outline"}>
                        <Link href='/dashboard'>My Documents</Link>
                    </Button>

                    <Button asChild variant={"outline"} className={"border-indigo-600"} >
                        <Link href="/dashboard/upload"><FilePlus2 className={"text-indigo-600"} /></Link>
                    </Button>
                    {/*Upgrade Button */}
                    <UserButton />
                </div>
            </SignedIn>
        </div>
    )
}

export default Header
