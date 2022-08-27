export type User = {
    id: string
    name: string
    email?: string
    pass?: string
}

export type UserPayload = Omit<User, 'id'>

export type Category = {
    id?: string
    name?: string
    slug?: string
}

export type SaveCategory = Omit<User, 'id'>

export type Task = {
    id?: string
    title?: string
    date?: string
    description?: string
    user?: string
    category?: string
    status?: "pending" | "in process" | "done"
}


