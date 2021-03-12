import React from 'react'

import "./Home.scss"

import Nav from "../../Global_Component/Nav/Nav";
import Footer from "../../Global_Component/Footer/Footer"
import Sketch from './Sketch'

const Home = () => {
	return (
		<div className="Home">
			<Nav />
				<div className = "home-sketch">
					< Sketch/>
				</div>
				<div className = 'home-title'>
					<p className = 'home-title-text'> <strong> LISA </strong> <br/> TECH </p>	
					<p> We are a team of promising college students that excel in graphic design, web development, hardware services, software installations, and creating systems for your business.</p>
				</div>
			<Footer/>
		</div>
	)
}

export default Home