import React from 'react'

const BooksSection = ({ data }) => {
    console.log(data);
  return (
    <div className='d-flex justify-content-around align-items-center flex-wrap p-3'>
        {data && 
            data.map((item,index) => (
            <div className='m-3' style={{ width:"300px", height: "400px", border: "1px solid white", borderRadius: "15px"}}>
                <div> <img style={{ width: "300px", height:"270px", borderRadius:"15px" }}className='img-fluid p-1' src={item.image} alt="/" /> </div>
                <h6 style={{ fontSize: "15px" }} className="text-white p-2"> {item.bookname.slice(0,35)}... </h6>
                <b className='text-white px-2' style={{ fontSize: "15px" }} >£ {item.price} </b>
                <div className='d-flex justify-content-around align-items-center py-2 mx-5'>
                    <button className='btn btn-primary'>Update</button>
                    <button className='btn btn-danger'>Delete</button>
                </div>
                
                
            </div>
        ))}
    </div>
  )
}

export default BooksSection