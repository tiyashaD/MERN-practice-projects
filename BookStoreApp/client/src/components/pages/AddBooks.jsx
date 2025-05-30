import React from 'react'

const AddBooks = () => {
  return (
    <div className='bg-dark text-white d-flex justify-content-center align-items-center' style={{ minHeight: "91.5vh" }}>
        <form className='container p-4'>
            <div className="form-group">
                <label for="exampleFormControlInput1">Book Name: </label>
                <input name="bookname" type="text" className="form-control my-2" id="exampleFormControlInput1" placeholder="Enter book name"/>
            </div>

            <div className="form-group">
                <label for="exampleFormControlInput1">Description: </label>
                <input name="description" type="text" className="form-control my-2" id="exampleFormControlInput1" placeholder="Enter book description"/>
            </div>

            <div className="form-group">
                <label for="exampleFormControlInput1">Author: </label>
                <input name="author" type="text" className="form-control my-2" id="exampleFormControlInput1" placeholder="Enter author name"/>
            </div>

            <div className="form-group">
                <label for="exampleFormControlInput1">Image: </label>
                <input name="image" type="text" className="form-control my-2" id="exampleFormControlInput1" placeholder="Enter image URL"/>
            </div>

            <div className="form-group">
                <label for="exampleFormControlInput1">Price: </label>
                <input name="price" type="text" className="form-control my-2" id="exampleFormControlInput1" placeholder="Enter book price"/>
            </div>

            <button className='btn my-2'
                    style={{
                        outline: "none", 
                        border: "1px solid white", 
                        backgroundColor: "transparent", 
                        padding: "5px 10px", 
                        color: "white", 
                        fontSize: "15px",
                        textDecoration: "none" 
                    }}> 
                    Submit </button>  
        </form>

        
    </div>
  )
}

export default AddBooks