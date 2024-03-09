import { HPType } from ".."

//ここを作ってもらう
export const characters = async (): Promise<HPType[]> => {
    const res = await fetch(process.env.NEXT_PUBLIC_URL1 as string)

    const resData = (await res.json()) as HPType[]

    const data = resData.filter((item) => item.image !== "")

    return data
}
