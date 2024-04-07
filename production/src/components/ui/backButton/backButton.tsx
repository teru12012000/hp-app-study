"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import styles from "./style.css"
import ICON from "@/assets/leftArrow.svg"

export const BackButton = () => {
    const router = useRouter()

    const onClick = () => {
        router.back()
    }

    return (
        <div>
            <button className={styles.button} onClick={onClick}>
                <Image src={ICON} width={30} height={30} alt="" />
            </button>
        </div>
    )
}
