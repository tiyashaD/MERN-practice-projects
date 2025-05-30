import React from 'react'

const BooksSection = ({ data }) => {
    console.log(data);
  return (
    <div className='d-flex justify-content-around align-items-center flex-wrap p-3 my-3'>
        {data && 
            data.map((item,index) => (
            <div className='' style={{ width:"300px", height: "350px", backgroundColor: "orange"}}>
                <div> <img style={{ width: "300px", height:"270px" }}className='img-fluid' src={item.image} alt="/" /> </div>
                <h6 style={{ fontSize: "15px" }} className="p-2"> {item.bookname.slice(0,35)}... </h6>
                <p className='px-2' style={{ fontSize: "15px" }} >£ {item.price} </p>
            </div>
        ))}
    </div>
  )
}

export default BooksSection