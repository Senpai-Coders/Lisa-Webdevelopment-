

import React from 'react'
import "./Service.scss"

import Nav from "../../Global_Component/Nav/Nav";
import Footer from "../../Global_Component/Footer/Footer"

import graphic_design from "../../../Assets/Imgs/Services/Graphic Design.png"
import harware_repair from "../../../Assets/Imgs/Services/Hardware Repair.png"
import web_development from "../../../Assets/Imgs/Services/Web Development.png"

const isLight = true;

const Service = () => {
	return (
		<div className="Service bg-c-4" >
			<Nav isLight={isLight}/>
			<section className="service-section">
				<p className="toUpper font-xl">Services</p>
				<div className="container">
					<div className="cards">
						<img alt="graphic design" className="services-img" src={graphic_design}></img>
						<h1 className="" >Graphic Design</h1>
					</div>
					<div className="cards">
						<img alt="hardware repair" className="services-img" src={harware_repair}></img>
						<h1>Hardware Repair</h1>
					</div>
					<div className="cards">
						<img alt="web development" className="services-img" src={web_development}></img>
						<h1>Web Development</h1>
					</div>
				</div>
			</section>
			<Footer isLight={isLight}/>
		</div>
	)
}

export default Service