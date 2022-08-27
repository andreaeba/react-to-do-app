import { useState } from "react"
import { Button, Container, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap"
import { Outlet, useParams } from "react-router-dom"
import { Layout } from "../../components/Common/Layout"

const EditUser = () => {

    const [name, setName] = useState('')

    const { id } = useParams()

    return(
        <>
        <Layout>
            <Container>

                <p>Id: {id}</p>
                <Form className='content-main' onSubmit={}>

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

export { EditUser }