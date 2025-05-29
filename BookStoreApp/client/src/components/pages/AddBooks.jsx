import React from 'react'

const AddBooks = () => {
  return (
    <div className='bg-dark text-white d-flex justify-content-center align-items-center' style={{ minHeight: "91.5vh" }}>
        <form className='container p-4'>
            <div className="form-group">
                <label for="exampleFormControlInput1">Book Name: </label>
                <input type="text" className="form-control my-3" id="exampleFormControlInput1" placeholder="Enter book name"/>
            </div>

            <div className="form-group">
                <label for="exampleFormControlInput1">Description: </label>
                <input type="text" className="form-control my-3" id="exampleFormControlInput1" placeholder="Enter book description"/>
            </div>

            <div className="form-group">
                <label for="exampleFormControlInput1">Author: </label>
                <input type="text" className="form-control my-3" id="exampleFormControlInput1" placeholder="Enter author name"/>
            </div>

            <div className="form-group">
                <label for="exampleFormControlInput1">Image: </label>
                <input type="text" className="form-control my-3" id="exampleFormControlInput1" placeholder="Enter image URL"/>
            </div>

            <div className="form-group">
                <label for="exampleFormControlInput1">Price: </label>
                <input type="text" className="form-control my-3" id="exampleFormControlInput1" placeholder="Enter book price"/>
            </div>

            <button className='btn btn-success'> Submit </button>  
        </form>

        
    </div>
  )
}

export default AddBooks