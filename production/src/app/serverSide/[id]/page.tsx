import { characters } from "@/model/characters/characters"

interface props {
    id: string
}

export const generateStaticParams = async () => {
    const data = await characters()

    const paths = data.map((item) => {
        return { id: item.id }
    })

    return paths
}

const ClientCharacter = ({ params }: { params: props }) => {
    return <div>{params.id}</div>
}

export default ClientCharacter
