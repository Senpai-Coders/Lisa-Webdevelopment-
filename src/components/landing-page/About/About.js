

import React from 'react'
import "./About.scss"

import Nav from "../../Global_Component/Nav/Nav";
import Footer from "../../Global_Component/Footer/Footer"


import axios from 'axios'
const URL = 'http://localhost:5000/Aabout';


const About = () => {
	const submitHandler = () =>{
		let data = {
			name: "name",
			email: "email",
			message: "message",
		}
		axios.post(URL, data);
		
	}
	return (
		<div className="About">
			<Nav />
				<button onClick= {()=> submitHandler()}>ABOUT</button>
			<Footer/>
		</div>

	)
}

export default About;