import React from 'react'
import {Link} from 'react-router-dom';
const Nav =(props)=>{
    return(
        <div className="container-fluid  fixed-top bg-white mb-5  ">

<nav className=" navbar navbar-expand-lg  navbar-light text-light mt-3 ">
            
                <a href="#" className="navbar-brand  ml-5">
                    <h3 className=" display-4 color ">{props.nav.nav_brand}</h3></a>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#bar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse pt-4" id="bar">
                    <ul className="navbar-nav  ml-auto   mr-4">

                        <Link  to="/">
                        <li className="nav-item ml-5">
                          Home
                        </li>
                        </Link>
                        <Link to="/portfolio" >
                        <li className="nav-item ml-5">
                            Portfolio
                        </li>
                        </Link>
                        <Link   to="/about">
                        <li className="nav-item ml-5">
                            About

                        </li>
                        </Link>
                        <Link  to="/books" >
                        <li className="nav-item ml-5">
                            Books
                        </li>
                        </Link>
                        <Link  to="/contact" >
                        <li className="nav-item ml-5">
                            Contact
                        </li>
                        </Link>
                    
                       

                    </ul>

                </div>


            </nav>
























            


        </div>
    )
}
export default Nav;