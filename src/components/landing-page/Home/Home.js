import React from 'react'

import "./Home.scss"

import Nav from "../../Global_Component/Nav/Nav";
import Footer from "../../Global_Component/Footer/Footer"


const Home = () => {
	return (
		<div className="Home">
			<Nav />
			<h1>This is Home </h1>
			
			<Footer/>
		</div>
	)
}

export default Home