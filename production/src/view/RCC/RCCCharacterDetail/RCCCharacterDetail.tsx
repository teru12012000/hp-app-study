"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { CharacterDetailTemplate } from "@/components/layout/characterDetailTemplate/characterDetailTemplate"
import { useCharacterDetail } from "@/model/hooks"

const RCCCharacterDetail = () => {
    const searchParam = useSearchParams()
    const id = searchParam.get("id")
    const [isDifferent, setIsDifferent] = useState<boolean>(true)

    const { resData, isLoading } = useCharacterDetail(id as string)

    /**
     * ここはキャッシュが効いちゃってるのでバグが起こります。
     * 検証したければこの部分を削除してみてください！
     */
    useEffect(() => {
        console.log(id, resData)
        if (resData !== null && id !== null) setIsDifferent(id !== resData.id)
        else setIsDifferent(true)
    }, [resData, id])

    return <CharacterDetailTemplate data={resData} isLoading={isDifferent} />
}

export default RCCCharacterDetail
