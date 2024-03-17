"use client"

import { CharactersTemplate } from "@/components/layout/charactersTemplate"
import { useCharacters } from "@/model/hooks"

const RCC = () => {
    const { resData, isLoading } = useCharacters()

    return (
        <CharactersTemplate
            title="ブラウザ側で作成するコンポーネント"
            data={resData}
            path="/clientSide/characterDetail?id="
            isLoading={isLoading}
        />
    )
}

export default RCC
