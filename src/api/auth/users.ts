import { mapToArray } from '../../helpers'
import { User, UserPayload } from '../../types'



// const add = (user: UserPayload) => {

//     const options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(user)
//     }

//     fetch('https://to-do-august22-default-rtdb.firebaseio.com/users.json', options)
// }

const getAll = async (): Promise<User[]> => {
    // get
    const response = await fetch('https://to-do-august22-default-rtdb.firebaseio.com/users.json')

    const data = await response.json()

    return mapToArray(data)

}

// const get = async (id: string): Promise<User[]> => {

//     const response = await fetch(`https://to-do-august22-default-rtdb.firebaseio.com/users/${id}.json`)
    
//     const data = await response.json()

//     return data

// }

const saveUser = async (user: UserPayload, id: string | undefined) => {

    const options = {
        method: id ? 'PATCH' : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }
    
    await fetch(`https://to-do-august22-default-rtdb.firebaseio.com/users/${id}.json`, options)
    
}

// const remove = () => {
//     // remove
// }

// const update = () => {
//     // update
// }

export const usersApi = { getAll, saveUser }