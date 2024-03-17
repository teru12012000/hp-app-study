import { LinkBtn } from "@/components/linkButton"
import styles from "./style.css"
import Image from "next/image"
import IMG from "@/assets/backgroundImage.png"

const Top = () => {
    return (
        <main className={styles.container}>
            <section
                style={{
                    width: "100vw",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <picture
                    style={{
                        width: 522,
                        height: 260,
                    }}
                >
                    <Image
                        src={IMG}
                        width={522}
                        height={260}
                        layout="responsive"
                        alt=""
                    />
                </picture>
            </section>
            <section className={styles.linkBox}>
                <LinkBtn />
            </section>
        </main>
    )
}

export default Top
