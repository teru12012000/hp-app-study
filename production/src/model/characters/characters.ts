import { HPType } from ".."

export const characters = async (): Promise<HPType[]> => {
    const res = await fetch(process.env.NEXT_PUBLIC_URL as string)

    const resData = (await res.json()) as HPType[]

    const data = resData.filter((item) => item.image !== "")

    return data
}
