import { HPType } from ".."

export const character = async (id: string): Promise<HPType> => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL1 as string}?search=${id}`,
    )

    const resData = await res.json()

    const data = resData[0]

    return data as HPType
}
