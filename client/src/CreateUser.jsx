import React from 'react'
import {Link} from 'react-router-dom'

const CreateUser = () => {
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-item-center mt-20 '>
      <div className="w-50 bg-white rounded p-3">
        <form action="">
          <h2>Create user</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Enter name" className="form-control" name="" id="" />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input type="email" placeholder="Enter email" className="form-control" name="" id="" />
          </div>
          <div className="mb-2">
            <label htmlFor="">Age</label>
            <input type="text" placeholder="Enter age" className="form-control" name="" id="" />
          </div>
          
          <button className="btn btn-success ">Submit</button>
          <Link to="/" className="btn btn-secondary m-2">Back</Link>
        </form>
      </div>
    </div>
  )
}

export default CreateUser