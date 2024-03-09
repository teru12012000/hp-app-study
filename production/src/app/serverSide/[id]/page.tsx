import { characters } from "@/model/fetcher/characters/characters"
import RSCCharacter from "@/view/RSC/RSCCharacterDetail/RSCCharacter"

interface props {
    id: string
}

//ここの部分を書いてもらう
export const generateStaticParams = async () => {
    const data = await characters()

    const paths = data.map((item) => {
        return { id: item.id }
    })

    return paths
}

//ここの部分もちょろっと
const ClientCharacter = ({ params }: { params: props }) => {
    return <RSCCharacter id={params.id} />
}

export default ClientCharacter
