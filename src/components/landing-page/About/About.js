

import React from 'react'
import "./About.scss"

import Nav from "../../Global_Component/Nav/Nav";
import Footer from "../../Global_Component/Footer/Footer"

const About = () => {
	return (
		<div className="About">
			<Nav />
			<h1>This page is About</h1>
			<Footer/>
		</div>

	)
}

export default About;