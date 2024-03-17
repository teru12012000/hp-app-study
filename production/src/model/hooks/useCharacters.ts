import useSWR from "swr"
import { characters } from "../fetcher"

export const useCharacters = () => {
    const { data, isLoading } = useSWR(process.env.NEXT_PUBLIC_URL1, (url) =>
        characters(),
    )

    const resData = data ?? []

    return { resData, isLoading }
}
