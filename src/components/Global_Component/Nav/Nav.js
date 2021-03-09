

import React from 'react'
import { Link } from 'react-router-dom'

import "./Nav.scss"

import Home_ico from '../../../Assets/Imgs/home.png'
import About_ico from '../../../Assets/Imgs/about.png'
import Contact_ico from '../../../Assets/Imgs/contact.png'
import Services_ico from '../../../Assets/Imgs/service.png'

import Transition from '../Transition/Transition'

const Nav = () => {
	return (
		<nav className="flexed-between">
			<Transition/>
			<div alt="Lisa Logo" className="logoDesu">
				<p>Lisa</p>
			</div>
			<ul className="flexed-evenly">
				<li><Link to="/"><img className="nav_ico" alt="Home" src={Home_ico} /><span className="nav-links">Home</span></Link></li>
				<li><Link to="/About"><img className="nav_ico" alt="Home" src={About_ico} /><span className="nav-links">About</span></Link></li>
				<li><Link to="/Contact"><img className="nav_ico" alt="Home" src={Contact_ico} /><span className="nav-links">Contact</span></Link></li>
				<li><Link to="/Service"><img className="nav_ico" alt="Home" src={Services_ico} /><span className="nav-links">Services</span></Link></li>
			</ul>
		</nav>
	)
}

export default Nav