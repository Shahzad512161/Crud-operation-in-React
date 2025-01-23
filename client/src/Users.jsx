import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"
const Users = () => {

    const [user, setUser] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3001")
        .then(result => setUser(result.data))
        .catch(err => console.log(err))
    })
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-item-center mt-20 '>
            <div className="w-50 bg-white rounded p-3">
                <Link to="/create" className='btn btn-success'>Add +</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((user) => {
                                return <tr>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td>
                                        <Link to="/update" className='btn btn-success'>Edit</Link>
                                        <button className='btn btn-danger'>Delete</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users