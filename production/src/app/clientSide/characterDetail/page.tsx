"use client"

import RCCCharacterDetail from "@/view/RCC/RCCCharacterDetail/RCCCharacterDetail"
import { Suspense } from "react"

const RCS = () => {
    return (
        <Suspense>
            <RCCCharacterDetail />
        </Suspense>
    )
}

export default RCS
