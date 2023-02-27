import React from 'react'
import './Title.css';
import {Outlet, Link } from 'react-router-dom'
export default function Main() {
  return (
    <>
    <div className="Title">

    <h1>Hello NXG Solution  -Gautam </h1>
   </div>
    
            <Link to="home">Home</Link>
            <br></br>
         <Link to="/todo">Todo</Link>
  
            <br></br>
            <div>
            <Link to="/contact">Contact</Link>
            </div>     
     

      <Outlet />
    </>
  )

};
