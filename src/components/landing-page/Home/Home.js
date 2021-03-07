import React from 'react'
import "./Home.scss"
import { Link } from 'react-router-dom'

const Home = () => {
	return (
		<div className="Home">
			<nav className="nabigisyon flexed-between">
				<div alt="Lisa Logo" className="logoDesu">
					<p>Lisa</p>
				</div>
				<ul className="flexed-evenly">
					<li><Link to="/"><span className ="nav-links">Home</span></Link></li>
					<li><Link to="/About"><span className="nav-links">About</span></Link></li>
					<li><Link to="/Contact"><span className="nav-links">Contact</span></Link></li>
					<li><Link to="/Service"><span className="nav-links">Services</span></Link></li>
				</ul>
			</nav> 
		</div>
	)
}

export default Home