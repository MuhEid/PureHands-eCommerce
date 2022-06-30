import React from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


export default function Login() {

    const navigate = useNavigate()

    const handleSubmit = ()=>{
        localStorage.setItem("isLoggedIn" , "1")
        navigate('/welcome')
    }

    const handleLogout = ()=>{
        localStorage.removeItem('isLoggedIn')
    }

  return (
    <div>
        <Link to='/cart'>Cart</Link>
        <form onSubmit={handleSubmit}>
            <input type="text" />
            <input type="password" />
            <button>Submit</button>

        </form>

        <button onClick={handleLogout}>logout</button>

    </div>
  )
}
