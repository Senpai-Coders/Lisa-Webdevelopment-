import React from 'react'
import "./Home.scss"

const Home = () => {
	return (
		<div className="Home">
			<nav class="nabigisyon flexed-between">
				<div alt="Lisa Logo" class="logoDesu">
					<p>Lisa</p>
				</div>
				<ul class="flexed-evenly">
					<li><a class="nav-links">Home</a></li>
					<li><a class="nav-links">About</a></li>
					<li><a class="nav-links">Contact</a></li>
					<li><a class="nav-links">Services</a></li>
				</ul>
			</nav>
		</div>
	)
}

export default Home