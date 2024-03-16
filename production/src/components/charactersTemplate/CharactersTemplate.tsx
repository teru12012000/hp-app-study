import { HPType, characters } from "@/model/fetcher"
import Image from "next/image"
import Link from "next/link"
import styles from "./style.css"

interface props {
    title: string
    data: HPType[]
    path: string
}

export const CharactersTemplate = (props: props) => {
    return (
        <main className={styles.container}>
            <section className={styles.title}>
                <h1>{props.title}でのハリーポッター図鑑</h1>
            </section>
            {/*ここを書いてもらう*/}
            <section className={styles.itemImage}>
                {props.data.map((item) => (
                    <div key={item.id}>
                        <Image
                            src={item.image}
                            width={163}
                            height={227}
                            alt={item.name}
                        />
                        <Link href={`${props.path}${item.id}`}>
                            <button className={styles.button}>detail</button>
                        </Link>
                    </div>
                ))}
            </section>
        </main>
    )
}
