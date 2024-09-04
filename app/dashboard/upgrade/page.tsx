import {CheckIcon} from "lucide-react";

function PricingPage() {
    return (
        <div>
            <div className={'py-24 sm:py-16 '}>
                <div className={'max-w-4xl mx-auto text-center'}>
                    <h2 className={'text-base font-semiboldloading-7 text-indigo-600'}>Pricing</h2>
                    <p className={'mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'}>Supercharge your document companion</p>

                </div>
                <p className={'mx-auto mt-6 max-w-2xl px-10 text-center text-lg leading-8 text-gray-600'}>Choose an affordable plan thats packed with the best features for interacting with your PDFs, enhancing productivity, and streamlining your workflow.</p>

                <div className={'max-w-md mx-auto mt-10 '}>
                    <div className={'ring-1 ring-gray-200 p-8 h-fit pb-12 rounded-3xl'}>
                        <h3 className={'text-lg font-semibold leading-8 text-gray-900'}>Starter Plan</h3>
                        <p className={'mt-4 text-sm leading-6 text-gray-600'}>Explore Core Features at No Cost</p>
                        <p className={'mt-6 flex items-baseline gap-x-1'}>
                            <span className={'text-4xl font-bold tracking-tight text-gray-900'}>Free</span>
                        </p>

                        <ul
                            role={'list'}
                            className={'mt-8 space-y-3 text-sm leadinng-6 text-gray-600'}
                        >
                            <li className={'flex gap-x-3'}>
                                <CheckIcon className={'w-6 h-5 flex-none text-indigo-600'}/>Small size Documents
                            </li>
                            <li className={'flex gap-x-3'}>
                                <CheckIcon className={'w-6 h-5 flex-none text-indigo-600'}/>No hidden charges
                            </li>
                            <li className={'flex gap-x-3'}>
                                <CheckIcon className={'w-6 h-5 flex-none text-indigo-600'}/>Try out the AI Chat
                                Functionality
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PricingPage
