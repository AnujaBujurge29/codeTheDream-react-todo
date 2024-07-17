// import React from 'react'
import { Link } from "react-router-dom"

const LandingPage = () => {
    return (
        <div>
            <h1>To Do APP</h1>
            <h2>Code The Dream - Grackle Project (ReactJS)</h2>
            <h3>by <br></br>Anuja Bujurge</h3>
            {/* <button>Go to Form </button> */}
            <Link to="/todos" ><button className="box footer">Todo List</button></Link>
            {/* <button className="box footer" path="/todos">Go to Form</button> */}
        </div >
    )
}

export default LandingPage
