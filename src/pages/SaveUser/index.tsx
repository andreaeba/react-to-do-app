import { FormEvent, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Button, Container, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap"
import { Outlet } from "react-router-dom"
import { Layout } from "../../components/Common/Layout"
import { usersApi } from "../../api/auth/users"
import { SaveCategory, User, UserPayload } from "../../types"
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState: UserPayload = { name: '', email: '', pass: '' }

const SaveUser = () => {

    const { id } = useParams()

    const [user, setUser] = useState<UserPayload>(initialState)

    const handleSubmit = ( e: {preventDefault: () => void} ) => {
        e.preventDefault()

        // eslint-disable-next-line no-restricted-globals
        usersApi.saveUser(name, email)
    }

    // useEffect(() => {
    //     id &&
    //     usersApi.saveUser(id).then((resp) => {
           
    //     })
    // }, [])

    // useEffect(() => {
    //     console.log(user)
    // }, [])

    // const handleControlChange = (
    //         e: { target: { value: string } },
    //         key: string
    //     ) => {
    //         setUser((prevState) => ({
    //             ...prevState,
    //             [key]: e.target.value
    //         }))
        
    // }
    

    return(
        <>

        <Layout>
            <Form className='content-main' onSubmit={handleSubmit}>
            <h1>Save user</h1>
            <div>Id: {id}</div>

            <div>
            {JSON.stringify(user)} 
            </div>
                    <FormGroup>
                        <FormLabel htmlFor='name'>
                            Enter a name
                        </FormLabel>
                        <FormControl 
                            className='my-2' 
                            type='name' 
                            value={user?.name}
                            onChange={(e) => setUser(prevState => ({...prevState, name: e.target.value}))}
                            // onChange={handleSubmit}
                            >                
                        </FormControl>

                        <FormLabel htmlFor='email'>
                            Enter a email
                        </FormLabel>
                        <FormControl 
                            className='my-2' 
                            type='email' 
                            value={user?.email}
                            onChange={(e) => setUser(prevState => ({...prevState, email: e.target.value}))}
                            >                
                        </FormControl>

                        <FormLabel htmlFor='pass'>
                            Enter a password
                        </FormLabel>
                        <FormControl 
                            className='my-2' 
                            type='pass' 
                            value={user?.pass}
                            onChange={(e) => setUser(prevState => ({...prevState, pass: e.target.value}))}
                            >                
                        </FormControl>

                    </FormGroup>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            
        </Layout>     

        </>
    )
}

export { SaveUser }

function email(name: void, email: any, pass: any) {
    throw new Error("Function not implemented.")
}
function pass(name: void, email: (name: void, email: any, pass: any) => void, pass: any) {
    throw new Error("Function not implemented.")
}

