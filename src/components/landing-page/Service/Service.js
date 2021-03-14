

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
		<div className="Service" >
			<Nav isLight={isLight}/>
			<section className="service-section">
				<p className="toUpper font-xl">Services</p>
				<div className="container">
					<div className="cards">
						<img alt="graphic design" className="services-img" src={graphic_design}></img>
						<p>Graphic Design</p>
					</div>
					<div className="cards">
						<img alt="hardware repair" className="services-img" src={harware_repair}></img>
						<p>Hardware Repair</p>
					</div>
					<div className="cards">
						<img alt="web development" className="services-img" src={web_development}></img>
						<p>Web Development</p>
					</div>
				</div>
			</section>
			<section className="details">
				<div className="mar-b-em-8">
					<h1 className="font-xl font-1"><span className="font-2">Graphic</span> Design</h1>
					<div className="">
						<div className="project-container flexed-evenly">
							/*  projects card here */
						</div>
						<p className="al-center faded font-4 font-lg">No Project Yet 😶</p>
					</div>
				</div>
				<div className="mar-b-em-8">
					<h1 className="font-xl font-5">Hardware Repair</h1>
					<div className="">
						<div className="project-container flexed-evenly">
							/*  projects card here */
						</div>
						<p className="al-center faded font-4 font-lg">No Project Yet 😶</p>
					</div>
				</div>
				<div className="mar-b-em-8">
					<h1 className="font-xl font-6"><span className="font-2">WEB</span> Development</h1>
					<div className="">
						<div className="project-container flexed-evenly">
							/*  projects card here */
						</div>
						<p className="al-center faded font-4 font-lg">No Project Yet 😶</p>
					</div>
				</div>
			</section>
			<Footer isLight={isLight}/>
		</div>
	)
}

export default Service