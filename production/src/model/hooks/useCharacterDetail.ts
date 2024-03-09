import useSWR from "swr"
import { character } from "../fetcher"

export const useCharacterDetail = (id: string) => {
    const { data } = useSWR(process.env.NEXT_PUBLIC_URL2, (url) =>
        character(id),
    )

    const resData = data ?? null

    return { resData }
}
