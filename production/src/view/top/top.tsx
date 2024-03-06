import { LinkButton } from "@/components/linkButton"
import styles from "./style.css"

const Top = () => {
    return (
        <main className={styles.container}>
            <section className={styles.title}>
                <h1>ハリーポッター図鑑</h1>
            </section>
            <section>
                <LinkButton />
            </section>
        </main>
    )
}

export default Top
