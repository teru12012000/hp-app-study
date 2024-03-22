"use client"

import { Suspense } from "react"
import { RCCCharacterDetail } from "@/view/RCC/RCCCharacterDetail/RCCCharacterDetail"

const RCS = () => {
    return (
        <Suspense>
            <RCCCharacterDetail />
        </Suspense>
    )
}

export default RCS
