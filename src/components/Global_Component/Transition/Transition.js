

import React from 'react'
import "./Transition.scss"
import Sketch from './Sketch'

import LisaLogo from '../../../Assets/Imgs/lisa-PNG.png'
const Transition =() => {
	return (
		<div className="Transition">
			< Sketch/>
			<div className = 'message-center'>
				<img src = {LisaLogo} alt = 'LisaLogo' />
			</div>
		</div>

	)
}

export default Transition