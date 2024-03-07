import { HPType } from ".."

//ここを作ってもらう

export const character = async (id: string): Promise<HPType> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL2 as string}/${id}`)

    const resData = await res.json()

    const data = resData[0]

    return data as HPType
}
