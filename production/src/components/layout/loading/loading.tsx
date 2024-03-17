import styles from "./style.css"

export const Loading = () => {
    return (
        <section className={styles.container}>
            <div className={styles.spinBorder}>
                <div className={styles.spin} />
            </div>
        </section>
    )
}
