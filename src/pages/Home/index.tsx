import { Form, Button, FormControl, FormLabel, FormGroup, Container } from 'react-bootstrap';
import { MainContainer } from "../../components/Common/MainContainer"
import { FormEvent, useState } from "react"
import { usersApi } from '../../api/auth/users';
import { Layout } from '../../components/Common/Layout';
import { Outlet } from 'react-router-dom';
import { User, UserPayload } from '../../types';


const Login = (user: User) => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handleSubmit = (e: {preventDefault: () => void}) => {
        e.preventDefault()

        const user = {email, pass}

        usersApi.add(user)

        console.log(user)
    }


    return(
        <>
        <Outlet />
        <Layout>
            <Container>
                <Form className='content-main' onSubmit={handleSubmit}>
                    <FormGroup>

                        <FormLabel htmlFor='email'>
                            Email
                        </FormLabel>
                        <FormControl 
                            className='my-2' 
                            type='email' 
                            value={email}
                            onChange={(e) => {setEmail(e.target.value)}}>                
                        </FormControl>

                        <FormLabel htmlFor='pass'>
                            Password
                        </FormLabel>
                        <FormControl 
                            className='my-2' 
                            type='pass' 
                            value={pass}
                            onChange={(e) => {setPass(e.target.value)}}>                
                        </FormControl>
                    </FormGroup>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </Layout>     
        </>
        
    )

}

export { Login }