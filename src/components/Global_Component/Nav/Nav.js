

import React,{useState} from 'react'
import { Link,useLocation } from 'react-router-dom'

import "./Nav.scss"

import Home_ico from '../../../Assets/Imgs/home.png'
import About_ico from '../../../Assets/Imgs/about.png'
import Contact_ico from '../../../Assets/Imgs/contact.png'
import Services_ico from '../../../Assets/Imgs/service.png'
import NavLisa_ico from '../../../Assets/Imgs/Lisa2.2.1.png'
import Transition from '../Transition/Transition'

const Nav = () => {
	const location = useLocation();
	const [ activeButton , setActiveButton  ] = useState(location.pathname.replace("/",''))
	return (
		<nav className="flexed-between">
			{/* <Transition/> */}
			<div className = "circle-nav"></div>
			<div alt="Lisa Logo" className="logoDesu">
				{/* <p>Lisa</p> */}
				<img src= {NavLisa_ico} className = 'logo-lisa' alt = 'lisa_ico'/>
			</div>


			<ul className="flexed-evenly">
				<li className ={ activeButton == ''? 'active':''}>
					<Link to="/">
						<img className="nav_ico" alt="Home" src={Home_ico} />
						<span className="nav-links">Home</span>
					</Link>
				</li>
				<li className = { activeButton  == 'About'? 'active':''}>
					<Link to="/About">
						<img className="nav_ico" alt="Home" src={About_ico} />
						<span className="nav-links">About</span>
					</Link>
				</li>
				<li className = { activeButton == 'Contact'? 'active':''}>
					<Link to="/Contact">
						<img className="nav_ico" alt="Home" src={Contact_ico} />
						<span className="nav-links">Contact</span>
					</Link>
				</li >
				<li className = { activeButton == 'Service'? 'active':''}>
					<Link to="/Service">
						<img className="nav_ico" alt="Home" src={Services_ico} />
						<span className="nav-links">Services</span>
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Nav