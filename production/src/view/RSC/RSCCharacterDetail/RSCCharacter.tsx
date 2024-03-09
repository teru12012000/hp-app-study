import { CharacterDetailTemplate } from "@/components/characterDetailTemplate/characterDetailTemplate"
import { character } from "@/model/fetcher"

interface props {
    id: string
}

const RSCCharacter = async (props: props) => {
    const data = await character(props.id)

    return <CharacterDetailTemplate data={data} />
}

export default RSCCharacter
