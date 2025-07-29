import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';

const Navbar = () => {

    const [ username, setUsername ] = useState(''); // username variable and setUsername function to change value. Useful to display the logged-in user's name. 
    
    const navigate = useNavigate();
    
    //logout function
    const logoutHandler = () => {
        localStorage.removeItem('todoapp');
        navigate('/login');
        toast.success("User logged out!");
    }
    // get username to be displayed on Navbar
    useEffect(() => {
      const userData = JSON.parse(localStorage.getItem('todoapp'));
      console.log("User data ===>" + userData && userData.user.username);
      setUsername( userData && userData.user.username );
    }, [])

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <h4 className='navbar-brand'>
                            <i className="fa-solid fa-user-tie" /> &nbsp;
                            <i>Welcome</i> {username}!
                        </h4>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/todolist">My ToDo List</Link>
                            </li>
                            <li className="nav-item" title="logout">
                                <button className="nav-link" onClick={logoutHandler}>
                                    <i className="fa-solid fa-power-off text-danger"  />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
  )
}

export default Navbar