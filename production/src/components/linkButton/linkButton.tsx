import Link from "next/link"
import { paths } from "./data"
import styles from "./style.css"

export const LinkButton = () => {
    return (
        <>
            {paths.map((item, index) => (
                <div key={index} className={styles.linkItem}>
                    <Link href={item.path} className={styles.button}>
                        <button className={styles.button}>{item.name}</button>
                    </Link>
                </div>
            ))}
        </>
    )
}
