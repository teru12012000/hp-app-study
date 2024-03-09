"use client"

import { CharacterDetailTemplate } from "@/components/characterDetailTemplate/characterDetailTemplate"
import { useCharacterDetail } from "@/model/hooks"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

const RCCCharacterDetail = () => {
    const searchParam = useSearchParams()
    const id = searchParam.get("id")
    const [isDifferent, setIsDifferent] = useState<boolean>(false)

    const { resData } = useCharacterDetail(id as string)

    /**
     * ここはキャッシュが効いちゃってるのでバグが起こります。
     * 検証したければこの部分を削除してみてください！
     */
    useEffect(() => {
        setIsDifferent(id === resData?.id)
    }, [resData])

    return <>{isDifferent && <CharacterDetailTemplate data={resData} />}</>
}

export default RCCCharacterDetail
