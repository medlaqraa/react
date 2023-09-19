import React, {useState} from 'react'
import './navbar.css'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
const Navbar = () => {
    const [active , setActive] = useState('navBar');
    // function to show toogle navBar
    const showNavBar = () => {
        setActive('navBar activeNavBar');

    }// function to hide toogle navBar
    const hideNavBar = () => {
        setActive('navBar');
    }


  return (
    <section className='navBarSection'>
        <header className="header flex">
            <div className="logoDiv">
                <a href="#" className="logo flex">
                    <h1><MdOutlineTravelExplore  className="icon"/> Travel.</h1>
                </a>
            </div>

            <div className={active}>
                <ul className="navLists flex">
                    <li className="navItem">
                        <a href="#h" className="navLink">Home</a>
                    </li>
                
                    <li className="navItem">
                        <a href="#d" className="navLink">Packages</a>
                    </li>
                
                    <li className="navItem">
                        <a href="#g" className="navLink">Shop</a>
                    </li>
                
                    <li className="navItem">
                        <a href="#d" className="navLink">About</a>
                    </li>
                
                    <li className="navItem">
                        <a href="#d" className="navLink">Pages</a>
                    </li>
                
                    <li className="navItem">
                        <a href="#d" className="navLink">News</a>
                    </li>
                
                    <li className="navItem">
                        <a href="#d" className="navLink">Contact</a>
                    </li>

                    <button className='btn'>
                        <a href="#s">BOOK NOW</a>
                    </button>
                </ul>

                <div onClick={hideNavBar} className="closeNavBar">
                    <AiFillCloseCircle className='icon'/>
                </div>
            </div>
                
            <div onClick={showNavBar} className="toogleNavBar">
                <TbGridDots className='icon'/>
            </div>
        </header>
    </section>
  )
}

export default Navbar
