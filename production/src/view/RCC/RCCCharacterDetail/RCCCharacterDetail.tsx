"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { CharacterDetailTemplate } from "@/components/layout/characterDetailTemplate/characterDetailTemplate"
import { useCharacterDetail } from "@/model/hooks"

export const RCCCharacterDetail = () => {
    const searchParam = useSearchParams()
    const id = searchParam.get("id")

    const { resData, isLoading } = useCharacterDetail(id as string)

    return <CharacterDetailTemplate data={resData} isLoading={isLoading} />
}
