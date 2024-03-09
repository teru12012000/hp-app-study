"use client"

import { CharactersTemplate } from "@/components/charactersTemplate"
import { useCharacters } from "@/model/hooks"

const RCC = () => {
    const { resData } = useCharacters()

    return (
        <CharactersTemplate
            title="ブラウザ側で作成するコンポーネント"
            data={resData}
            path="/clientSide/characterDetail?id="
        />
    )
}

export default RCC
