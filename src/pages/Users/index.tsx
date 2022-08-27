import { Link, Outlet } from "react-router-dom"
import { useEffect, useState } from "react"
import { Layout } from "../../components/Common/Layout"
import { User } from "../../types"
import { Table } from "react-bootstrap"
import { usersApi } from "../../api/auth/users"


const Users = () => {

    const [users, setUsers] = useState<User[]>([])

    // const [temp, setTemp ] = useState(0)

    useEffect(() => {

        usersApi.getAll().then(resp => setUsers(resp))
        // console.log(resp)

    }, [])

    return(
        <>
        <Outlet />
        <Layout>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                        {users.map(user => {
                        return(
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link to={`/users/save/${user.id}`}>Edit
                                    </Link>
                                </td>
                                <td>
                                    <Link to={`/users/details/${user.id}`}>Details
                                    </Link>
                                </td>
                            </tr>
                        )
                    })}       
                </tbody>
            </Table>
        </Layout>
        </>
    )

}

export { Users }

