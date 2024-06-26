import Image from "next/image"
import Link from "next/link"
import { Loading } from "../loading"
import styles from "./style.css"
import { HPType } from "@/model/fetcher"
import { BackButton } from "@/components/ui/backButton"
//import { BackButton } from "@/components/ui/backButton"

interface props {
    title: string
    data: HPType[]
    path: string
    isLoading?: boolean
}

export const CharactersTemplate = (props: props) => {
    const { isLoading = false } = props

    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <div className={styles.backButton}>
                    <BackButton />
                </div>
                <div className={styles.titleTextBox}>
                    <h1>{props.title}でのハリーポッター図鑑</h1>
                </div>
            </header>

            {isLoading ? (
                <Loading />
            ) : (
                <section>
                    <div className={styles.itemImage}>
                        {props.data.map((item) => (
                            <div key={item.index}>
                                <Image
                                    src={item.image}
                                    width={175}
                                    height={250}
                                    alt={item.fullName}
                                />
                                <div>
                                    <Link
                                        href={`${props.path}${item.fullName}`}
                                    >
                                        <button className={styles.button}>
                                            detail
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </main>
    )
}
