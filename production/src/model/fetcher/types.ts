export type wandType = {
    wood: string
    core: string
    length: number
}

export type HPType = {
    id: string
    name: string
    alternate_names: string[] //代替名
    species: string //種
    gender: string
    house: string
    dateOfBirth: string | null
    yearOfBirth: number
    wizard: boolean
    ancestry: string
    eyeColour: string
    hairColour: string
    wand: wandType
    patronus: string
    hogwartsStudent: boolean
    hogwartsStaff: boolean
    actor: string
    alternate_actors: string[]
    alive: boolean
    image: string
}
