import React from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate();

  const handleSignout=()=>{
    navigate("/")
    localStorage.clear("token");
  }
  return (
    <>
    <Navbar/>
    <div>
      <h1> This is the dashboard which demostrate protected route Functionality</h1>
      <p>
        This project is made with Reactjs and Tailwind css
      </p>
    </div>
    <button style={{border:"1px solid blue", cursor:"pointer"}} onClick={handleSignout}>Signout</button>
    </>
  )
}

export default Dashboard
