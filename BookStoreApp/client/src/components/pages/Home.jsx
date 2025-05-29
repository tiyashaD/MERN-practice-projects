import React from 'react'
import "./Home.css";

const Home = () => {
  return (
    <div className='Home-Page bg-dark text-white container-fluid'>
        <div className="row container">
            <div 
                className="col-lg-6 d-flex justify-content-center align-items-center align-items-lg-start flex-column"
                style={{height: "91.5vh" }}>

                <h2 style={{ fontSize: "60px" }}> BOOK STORE FOR YOU </h2>
                <button className='viewBook my-3'>View Books</button>
            </div>
        
        <div 
            className="col-lg-6 d-flex justify-content-center align-items-center flex-column"
            style={{height: "91.5vh" }}>
                Hello
        </div>
        </div>
    </div>
  )
}

export default Home