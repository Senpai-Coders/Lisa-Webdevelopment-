import React from 'react'
import "./Loading_screen.scss"
import Loading_Image from "../../../Assets/Imgs/Loading.gif";

const Loading_screen = () => {
	return (
		<div className="Loading_screen">
			<img alt="loading" className="loading_img" src={Loading_Image} />
		</div>
	)
}

export default Loading_screen