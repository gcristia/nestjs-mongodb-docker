export interface Result {
    name: string
    url: string
}

export interface PokeResponse {
    count: number
    next: string
    previous?: null
    results: Result[]
}
