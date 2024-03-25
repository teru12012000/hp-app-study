import Image from "next/image"
import Link from "next/link"
import { Loading } from "../loading"
import styles from "./style.css"
import { HPType } from "@/model/fetcher"

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
            <section className={styles.title}>
                <h1>{props.title}でのハリーポッター図鑑</h1>
            </section>
            {/*ここを書いてもらう*/}
            {isLoading ? (
                <Loading />
            ) : (
                <section className={styles.itemImage}>
                    {props.data.map((item) => (
                        <div key={item.index}>
                            <Image
                                src={item.image}
                                width={175}
                                height={250}
                                alt={item.fullName}
                            />
                            <Link href={`${props.path}${item.fullName}`}>
                                <button className={styles.button}>
                                    detail
                                </button>
                            </Link>
                        </div>
                    ))}
                </section>
            )}
        </main>
    )
}
