import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  //navbar scroll when active state
  const [navbar, setNavbar] = useState(false)


  //navbar scroll changeBackground function
  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 120) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  }, [])


  return (
    <>
      <nav className={navbar ? "navbar active navbar-expand-lg navbar-light" : "navbar navbar-expand-lg navbar-light"}>
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            <img src="assets/img/logo.png" alt="" />
          </NavLink>
          <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav menus navbar-collapse">
              <NavLink to="/" className=" nav-link" exact activeClassName="active_class active" aria-current="page">Home</NavLink>
              <NavLink to="" className=" nav-link" exact activeClassName="active_class">About</NavLink>
              <NavLink to="" className=" nav-link" exact activeClassName="active_class">Services</NavLink>
              <NavLink to="" className=" nav-link" exact activeClassName="active_class">Blogs</NavLink>
              <NavLink to="" className=" nav-link" exact activeClassName="active_class">Contact</NavLink>
              <NavLink to="" className=" nav-link" exact activeClassName="active_class">Price Estimator</NavLink>
            </div>
            <div className="navbar-nav mx-auto">
              <NavLink to="" className=" my-1 text-center  signup">Get Started</NavLink>
              <NavLink to="" className="my-1 text-center  login">Sign In</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
