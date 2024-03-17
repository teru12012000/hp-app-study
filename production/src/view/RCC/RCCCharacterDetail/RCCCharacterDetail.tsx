"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { CharacterDetailTemplate } from "@/components/layout/characterDetailTemplate/characterDetailTemplate"
import { useCharacterDetail } from "@/model/hooks"

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
        setIsDifferent(id !== resData?.id)
    }, [resData])

    return <CharacterDetailTemplate data={resData} isLoading={isDifferent} />
}

export default RCCCharacterDetail
