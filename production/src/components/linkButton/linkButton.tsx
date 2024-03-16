import Link from "next/link"
import { paths } from "./data"
import styles from "./style.css"

/**
 * This is routing button of Top page.
 */
export const LinkBtn = () => {
    return (
        <>
            {paths.map((item, index) => (
                <div key={index} className={styles.linkItem}>
                    <Link href={item.path}>
                        <button className={styles.button}>{item.name}</button>
                    </Link>
                </div>
            ))}
        </>
    )
}
