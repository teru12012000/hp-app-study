import { CharactersTemplate } from "@/components/layout/charactersTemplate"
import { characters } from "@/model/fetcher"

const RSC = async () => {
    //ここも書く
    const data = await characters()

    return (
        <CharactersTemplate
            title="React Server component"
            data={data}
            path="/serverSide/"
        />
    )
}

export default RSC
