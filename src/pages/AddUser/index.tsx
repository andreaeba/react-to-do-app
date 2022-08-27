import { Form, Button, FormControl, FormLabel, FormGroup, Container } from 'react-bootstrap';
import { MainContainer } from "../../components/Common/MainContainer"
import { FormEvent, useState } from "react"
import { AuthApi } from '../../api/auth/users';
import { Layout } from '../../components/Common/Layout';
import { Outlet } from 'react-router-dom';
import { User, UserPayload } from '../../types';


const AddUser = (user: User) => {

    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [pass2, setPass2] = useState('')


    const handleSubmit = (e: {preventDefault: () => void}) => {
        e.preventDefault()

        const user = {name, email, pass}

        AuthApi.add(user)

        console.log(user)
    }

    const handleChange = (e: FormEvent) => {
        console.log(e.target.value)
        setName(e.target.value)
        setEmail(e.target.value)
        setPass(e.target.value)
        // const setUsername(e.target.value)
    }


    return(
        <>
        <Outlet />
        <Layout>
            <Container>
                <Form className='content-main' onSubmit={handleSubmit}>
                    <FormGroup>
                        <FormLabel htmlFor='name'>
                            Enter a name
                        </FormLabel>
                        <FormControl 
                            className='my-2' 
                            type='name' 
                            value={name}
                            onChange={(e) => {setName(e.target.value)}}>                
                        </FormControl>

                        <FormLabel htmlFor='email'>
                            Enter a email
                        </FormLabel>
                        <FormControl 
                            className='my-2' 
                            type='email' 
                            value={email}
                            onChange={(e) => {setEmail(e.target.value)}}>                
                        </FormControl>

                        <FormLabel htmlFor='pass'>
                            Enter a password
                        </FormLabel>
                        <FormControl 
                            className='my-2' 
                            type='pass' 
                            value={pass}
                            onChange={(e) => {setPass(e.target.value)}}>                
                        </FormControl>
                        <FormLabel htmlFor='pass2'>
                            Repeat password
                        </FormLabel>
                        <FormControl 
                            className='my-2' 
                            type='pass2' 
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

export { AddUser }