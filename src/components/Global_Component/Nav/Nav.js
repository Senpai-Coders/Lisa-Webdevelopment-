

import React,{useState} from 'react'
import { Link,useLocation } from 'react-router-dom'

import "./Nav.scss"

import Home_ico from '../../../Assets/Imgs/home.png'
import About_ico from '../../../Assets/Imgs/about.png'
import Contact_ico from '../../../Assets/Imgs/contact.png'
import Services_ico from '../../../Assets/Imgs/service.png'
import NavLisa_ico from '../../../Assets/Imgs/Lisa2.2.1.png'

import Home_ico_d from '../../../Assets/Imgs/home-drk.png'
import About_ico_d from '../../../Assets/Imgs/about-drk.png'
import Contact_ico_d from '../../../Assets/Imgs/contact-drk.png'
import Services_ico_d from '../../../Assets/Imgs/service-drk.png'
import NavLisa_ico_d from '../../../Assets/Imgs/Lisa2.2.1-drk.png'


import Transition from '../Transition/Transition'

const Nav = ({isLight}) => {
	const location = useLocation();
	const [ activeButton , setActiveButton  ] = useState(location.pathname.replace("/",''))
	return (
		<nav className={"flexed-between "+(isLight? 'txt-gray7':'txt-gray1')}>
			{/* <Transition/> */}
			<div className = "circle-nav"></div>
			<div alt="Lisa Logo" className="logoDesu">
				{/* <p>Lisa</p> */}
				<img src= {!isLight? NavLisa_ico:NavLisa_ico_d} className = 'logo-lisa' alt = 'lisa_ico'/>
			</div>


			<ul className={ "flexed-evenly "}>
				<li className ={ activeButton == ''? 'active':''}>
					<Link to="/" className={isLight? 'txt-gray7':'txt-gray1'}>
						<img className="nav_ico" alt="Home" src={!isLight? Home_ico : Home_ico_d} />
						<span className="nav-links">Home</span>
					</Link>
				</li>
				<li className = { activeButton  == 'About'? 'active':''}>
					<Link to="/About" className={isLight? 'txt-gray7':'txt-gray1'}>
						<img className="nav_ico" alt="About" src={!isLight? About_ico : About_ico_d} />
						<span className="nav-links">About</span>
					</Link>
				</li>
				<li className = { activeButton == 'Contact'? 'active':''}>
					<Link to="/Contact" className={isLight? 'txt-gray7':'txt-gray1'}>
						<img className="nav_ico" alt="Contact" src={!isLight? Contact_ico: Contact_ico_d } />
						<span className="nav-links">Contact</span>
					</Link>
				</li >
				<li className = { activeButton == 'Service'? 'active':''}>
					<Link to="/Service" className={isLight? 'txt-gray7':'txt-gray1'}>
						<img className="nav_ico" alt="Services" src={!isLight? Services_ico : Services_ico_d} />
						<span className="nav-links">Services</span>
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Nav