"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { CharacterDetailTemplate } from "@/components/layout/characterDetailTemplate/characterDetailTemplate"
import { useCharacterDetail } from "@/model/hooks"

export const RCCCharacterDetail = () => {
    const searchParam = useSearchParams()
    const id = searchParam.get("id")
    const [isDifferent, setIsDifferent] = useState<boolean>(true)

    const { resData } = useCharacterDetail(id as string)

    /**
     * ここはキャッシュが効いちゃってるのでバグが起こります。
     * 検証したければこの部分を削除してみてください！
     */
    useEffect(() => {
        if (resData !== null && id !== null)
            setIsDifferent(id !== String(resData.fullName))
        else setIsDifferent(true)
    }, [resData, id])

    return <CharacterDetailTemplate data={resData} isLoading={isDifferent} />
}
