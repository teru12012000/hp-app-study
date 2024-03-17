import Image from "next/image"
import styles from "./style.css"
import { HPType } from "@/model/fetcher"
import { Loading } from "../loading"

interface props {
    data: HPType | null
    isLoading?: boolean
}

export const CharacterDetailTemplate = (props: props) => {
    const { isLoading = false } = props

    return (
        <>
            {props.data === null || props.isLoading ? (
                <Loading />
            ) : (
                <main className={styles.container}>
                    <section className={styles.imageSection}>
                        <picture className={styles.imageBox}>
                            <Image
                                src={props.data.image}
                                alt={props.data.id}
                                width={163}
                                height={227}
                            />
                        </picture>
                    </section>
                    <section className={styles.tableSection}>
                        <table
                            border={1}
                            cellSpacing={0}
                            className={styles.table}
                        >
                            <tbody>
                                <tr>
                                    <td>name</td>
                                    <td>{props.data.name}</td>
                                </tr>

                                {props.data.alternate_names.map(
                                    (item, index) => (
                                        <tr key={index}>
                                            {index === 0 ? (
                                                <td>alterant names</td>
                                            ) : (
                                                <td></td>
                                            )}
                                            <td>{item}</td>
                                        </tr>
                                    ),
                                )}

                                <tr>
                                    <td>actor</td>
                                    <td>{props.data.actor}</td>
                                </tr>
                                <tr>
                                    <td>gender</td>
                                    <td>{props.data.gender}</td>
                                </tr>
                                <tr>
                                    <td>data of birth</td>
                                    <td>
                                        {props.data.dateOfBirth !== null
                                            ? props.data.dateOfBirth
                                            : "unknown"}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </main>
            )}
        </>
    )
}
