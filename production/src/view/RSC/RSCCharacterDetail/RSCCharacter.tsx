import { character } from "@/model"
import Image from "next/image"
import styles from "./style.css"

interface props {
    id: string
}

const RSCCharacter = async (props: props) => {
    const data = await character(props.id)

    return (
        <main className={styles.container}>
            <section className={styles.imageSection}>
                <picture className={styles.imageBox}>
                    <Image
                        src={data.image}
                        alt={data.id}
                        width={163}
                        height={227}
                    />
                </picture>
            </section>
            <section className={styles.tableSection}>
                <table border={1} cellSpacing={0} className={styles.table}>
                    <tbody>
                        <tr>
                            <td>name</td>
                            <td>{data.name}</td>
                        </tr>

                        {data.alternate_names.map((item, index) => (
                            <tr key={index}>
                                {index === 0 ? (
                                    <td>alterant names</td>
                                ) : (
                                    <td></td>
                                )}
                                <td>{item}</td>
                            </tr>
                        ))}

                        <tr>
                            <td>actor</td>
                            <td>{data.actor}</td>
                        </tr>
                        <tr>
                            <td>gender</td>
                            <td>{data.gender}</td>
                        </tr>
                        <tr>
                            <td>data of birth</td>
                            <td>
                                {data.dateOfBirth !== null
                                    ? data.dateOfBirth
                                    : "unknown"}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </main>
    )
}

export default RSCCharacter
