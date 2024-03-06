import { HPType } from ".."

export const character = async (id: string): Promise<HPType> => {
    const res = await fetch(process.env.NEXT_PUBLIC_URL as string)

    const resData = (await res.json()) as HPType[]

    const data = resData.find((ele) => ele.id === id)

    return data as HPType
}
