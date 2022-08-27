type User = {
    id: string
    name?: string
    email: string
    pass: string
}

type UserPayload = Omit<User, 'id'> & { pass: string }

export { User, UserPayload }

