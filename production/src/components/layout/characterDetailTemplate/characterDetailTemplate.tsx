import Image from "next/image"
import { Loading } from "../loading"
import { BackButton } from "@/components/ui/backButton"
import { HPType } from "@/model/fetcher"
import styles from "./style.css"

interface props {
    data: HPType | null
    isLoading?: boolean
}

export const CharacterDetailTemplate = (props: props) => {
    const { isLoading = false } = props

    return (
        <>
            {props.data === null || isLoading ? (
                <Loading />
            ) : (
                <main className={styles.container}>
                    <section className={styles.button}>
                        <BackButton />
                    </section>
                    <section className={styles.imageSection}>
                        <picture className={styles.imageBox}>
                            <Image
                                src={props.data.image}
                                alt={props.data.fullName}
                                width={175}
                                height={250}
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
                                    <td>{props.data.fullName}</td>
                                </tr>
                                <tr>
                                    <td>nickname</td>
                                    <td>{props.data.nickname}</td>
                                </tr>
                                <tr>
                                    <td>data of birth</td>
                                    <td>{props.data.birthdate}</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </main>
            )}
        </>
    )
}
