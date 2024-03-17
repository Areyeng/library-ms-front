import { Metadata } from "next";

type Props = {
    params: {
        catalogId: string
    }
}
export const generateMetadata = ({params}: Props) : Metadata =>{
    {/*Can await a fetch request */}
    return {
        title: `Book ${params.catalogId}`

    }
}


export default function CatalogDetails({params} : Props){

    return <h1>Details about book {params.catalogId}</h1>
}

