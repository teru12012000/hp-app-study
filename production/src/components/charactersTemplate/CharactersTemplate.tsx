import { HPType, characters } from "@/model/fetcher"
import Image from "next/image"
import Link from "next/link"
import styles from "./style.css"

interface props {
    data: HPType[]
}

export const CharactersTemplate = async (props: props) => {
    return (
        <main className={styles.container}>
            <section>
                <h1>RSCでのハリーポッター図鑑</h1>
            </section>
            {/*ここを書いてもらう*/}
            <section className={styles.itemImage}>
                {props.data.map((item) => (
                    <div key={item.id}>
                        <Link href={`/serverSide/${item.id}`}>
                            <Image
                                src={item.image}
                                width={163}
                                height={227}
                                alt={item.name}
                            />
                        </Link>
                    </div>
                ))}
            </section>
        </main>
    )
}
