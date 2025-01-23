import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from "axios"

const UpdateUser = () => {
  const { id } = useParams()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:3001/getUser/" + id)
      .then(result => {
        setName(result.data.name)
        setEmail(result.data.email)
        setAge(result.data.age)
      })
      .catch(err => console.log(err))
  }, [id])

  const update = (e) => {
    e.preventDefault()
    axios.put("http://localhost:3001/updateUser/"+ id, { name, email, age })
      .then(result => {
        console.log(result)
        navigate("/")
      })
      .catch(err => console.log(err))
  }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-item-center mt-20 '>
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={update}>
          <h2>Update user</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Enter name" className="form-control" id=""
              value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input type="email" placeholder="Enter email" className="form-control" id=""
              value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-2">
            <label htmlFor="">Age</label>
            <input type="text" placeholder="Enter age" className="form-control" id=""
              value={age} onChange={(e) => setAge(e.target.value)} />
          </div>

          <button className="btn btn-success ">Update</button>
          <Link to="/" className="btn btn-secondary m-2">Back</Link>
        </form>
      </div>
    </div>
  )
}

export default UpdateUser