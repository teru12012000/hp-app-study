"use client"

import Image from "next/image"
import ICON from "@/assets/leftArrow.svg"
import styles from "./style.css"
import { useRouter } from "next/navigation"

export const BackButton = () => {
    const router = useRouter()

    const onClick = () => {
        router.back()
    }

    return (
        <div>
            <button className={styles.button} onClick={onClick}>
                <Image src={ICON} width={64} height={64} alt="" />
            </button>
        </div>
    )
}
