import { FC, ReactNode } from 'react';
import { Form, Button, FormControl, FormLabel, FormGroup, Container } from 'react-bootstrap';

const SimpleFormBootstrap = () => {

    return(
        <Form>
            <Form.Group className="mb-3" controlId="userName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
    </Form>
    )
}

type Props = {
    children?: ReactNode,
    className?: string,
    labelName?: string,
    type?: string,
    placeholder?: string
}

const SimpleForm: FC<Props> = ({children, className, labelName, type, placeholder}) => {

    return(
            <Form className='content-main'>
                <FormGroup>
                    <FormLabel>
                        {labelName}
                    </FormLabel>
                    <FormControl className='my-2'>
                        {/* {type} */}
                        {placeholder}
                    </FormControl>
                </FormGroup>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
    )

}

export { SimpleForm, SimpleFormBootstrap }