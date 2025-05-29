import React from 'react'
import "./Home.css";

const Home = () => {
  return (
    <div className='Home-Page bg-dark text-white container-fluid d-flex justify-content-center align-items-center'>
        <div className="row container">
            <div 
                className="col-lg-6 d-flex justify-content-center align-items-center align-items-lg-start flex-column"
                style={{height: "91.5vh" }}>

                <h2 style={{ fontSize: "80px" }}> BOOK STORE </h2>
                <h3 style={{ fontSize: "50px" }}> FOR YOU </h3>
                <p className="mb-0" style={{color: "silver"}}> Checkout the books from here</p>
                <button className='viewBook my-3'>View Books</button>
            </div>
        
            <div 
                className="col-lg-6 d-flex justify-content-center align-items-end flex-column"
                style={{height: "91.5vh" }}>
                    <img className="img-fluid homeImg" src="https://static.vecteezy.com/system/resources/previews/047/495/993/non_2x/cute-girl-reading-a-book-portrait-of-a-girl-with-a-book-in-profile-education-and-recreation-concept-illustration-in-flat-style-vector.jpg" 
                        alt="/" />
            </div>
        </div>
    </div>
  )
}

export default Home