import useSWR from "swr"

import { character } from "../fetcher"

export const useCharacterDetail = (id: string) => {
    const { data, isLoading } = useSWR(
        `${process.env.NEXT_PUBLIC_URL2}/${id}`,
        (url: string) => character(id),
    )

    const resData = data ?? null

    return { resData, isLoading }
}
