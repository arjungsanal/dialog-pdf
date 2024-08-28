import PlaceholderDocument from "@/components/PlaceholderDocument";

function Documents() {
    return (
        <div className={"flex flex-wrap p-5 bg-gray-100 justify-center lg:justify-start rounded-sm gap-5 max-w-7xl mx-auto"}>
            {/*Map documents from Firestore */}

            {/*Placeholder */}
            <PlaceholderDocument />
        </div>
    )
}

export default Documents
