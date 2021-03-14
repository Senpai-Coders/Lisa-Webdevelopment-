

import React from 'react'
import "./Service.scss"

import Nav_Light from "../../Global_Component/Navlight/Navlight";
import Footer from "../../Global_Component/Footer/Footer"

const Service = () => {
	return (
		<div className="Service">
			<Nav_Light/>
			<div className="bg-white mar-2">
				<h1> Services </h1>
			</div>
			<Footer/>
		</div>
	)
}

export default Service