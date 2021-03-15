import React, { useState, useEffect } from 'react';

import axios from 'axios';

import Nav from "../../Global_Component/Nav/Nav";
import Footer from "../../Global_Component/Footer/Footer";
import Loading from "../../Global_Component/Loading_screen/Loading_screen"
import Sketch from "./Sketch"
import "./Contact.scss"

import background1 from "../../../Assets/Imgs/Background/ContactBackground/1.png"
import background2 from "../../../Assets/Imgs/Background/ContactBackground/2.png"
import background3 from "../../../Assets/Imgs/Background/ContactBackground/3.png"
import background4 from "../../../Assets/Imgs/Background/ContactBackground/4.png"
import background5 from "../../../Assets/Imgs/Background/ContactBackground/5.png"
import background6 from "../../../Assets/Imgs/Background/ContactBackground/6.png"
import background7 from "../../../Assets/Imgs/Background/ContactBackground/7.png"
import background8 from "../../../Assets/Imgs/Background/ContactBackground/8.png"
import background8_1 from "../../../Assets/Imgs/Background/ContactBackground/8.1.png"
import background9 from "../../../Assets/Imgs/Background/ContactBackground/9.png"
import background10 from "../../../Assets/Imgs/Background/ContactBackground/10.png"
const VALIDATORXD = require("email-validator");

const Contact = () => {

	const [emailIsValid, setEmailValid] = useState(true);
	const [messageIsValid, setMessageValid] = useState(true);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [file, setFile ]= useState("");
	const [fileName, setFileName ] = useState("")
	

	const [isEmailSending ,SetIsEmailSending] = useState(null)
	const [resetE , setResetE] = useState(null)

	const [mouse, setMouse]= useState({x:0,y:0})
	useEffect(() => {

	}, [setName, setEmail, setMessage, setFile ,setFileName ])
	const resetForm = () => {
		setFile('')
		setName('')
		setEmail('')
		setMessage('')
		resetAttachment();
		
		
	}
	const resetAttachment = ()=>{
		if(resetE != null){
			setFileName('')
			resetE.target.value = null;
		}
	}
	const checkMessage = () => {
		var msg = message.replace(/\d+/g, '')
		var words = msg.split(" ");
		const result = words.filter(word => word.length > 0).length >= 4;
		setMessageValid(result);
		return result;
	}

	// const callAPI= ()=>{
	// 	fetch(URL)
	// 		.then(res => res.text())
	// 		.then(res => console.log("api called"+res))
	// }
	const handleSubmitButton = () => {
		
		var validate = VALIDATORXD.validate(email)
		
		setEmailValid(validate);
		
		// console.log(validate + " : " + !messageIsValid)
		if (validate && checkMessage()) {
			SetIsEmailSending( true )
			let data = {
				name: name,
				email: email,
				message: message,
				file:file,
			}

			axios.post("/api/Contact", data)
				.then(res => {
					SetIsEmailSending(false)
					resetForm()
					console.log(`\n✔ Successfully sending email to us !\n`) 
				}).catch((err) => {
					SetIsEmailSending(false)
					console.log(`\n✖ Failed sending email to us ${err}!\n`) 
				})
		}
	}

	const  selectFile = (e)=>{
		let files = e.target.files;
		setResetE(e);
		
		if( files.length>=1 ){
			setFileName(files[0].name)
			let reader = new FileReader();
			reader.readAsDataURL( files[0] );
			reader.onload = (e) =>{
				setFile(e.target.result)
				
			}
		}else{
			setFileName('')
			resetAttachment();
		}
	}
	return (
		<div className="Contact"  onMouseMove = {(e)=>setMouse({x: e.screenX, y: e.screenY})}>
			<Nav isLight = {false}/>
			
			{ isEmailSending ? <Loading/> : null }
			<div className = 'background-animation'></div>
			<div className = 'contact-container'>
				<h1>Contact us</h1>
				
				<div >
					{/* Single item */}
					<div>
						<label htmlFor="name"> Your name </label>
						<br/>
						<input
							onChange={(e) => { setName(e.target.value) }}
							value={name}
							type="text"
							name="name"
							className="name"
							placeholder="your name :" />
					</div>
					{/* End of single item */}
					<br/>


					{/* Single item */}
					<div>
						<label htmlFor="Email"> Your Email Address </label>
						<br/>
						<input
							onChange={(e) => { setEmail(e.target.value) }}
							value={email}
							type="Email"
							name="Email"
							className="Email"
							placeholder="Email@example.com" />
					</div>
					{/* End of single item */}

					<br/>

					{/* Single item */}
					<div>
						<label htmlFor="description"> Enter your Message </label>
						<br/>
						<textarea
							onChange={(e) => { setMessage(e.target.value) }}
							value={message}
							 rows="5"
							type="textarea"
							name="description"
							className="description"
							placeholder="your message ... " />
					</div>
					{/* End of single item */}

					<br/>

					{/* Single item */}
					
					{/* End of single item */}
					<br/>

					<div className = "invalid-answers">
					{
						!emailIsValid ? 
						<div> Invalid Email </div> 
						: (!messageIsValid ? 
						<div>Message should contain more than 3 words</div> 
						: null)
					}
					</div>
					<div className="submit-button">
						<button onClick={handleSubmitButton} type="submit"> submit </button>
					</div>
				
					<div className = 'file-input'>
						<label className="custom-file-upload" onClick = {()=>resetAttachment()} >
							<p>Remove File</p>
						</label>
						<label className="custom-file-upload">
							<input 
								type = 'file' 
								name = 'file' 
								className  = 'file-attachment' 
								onChange = {(e)=>  selectFile(e)}
							/>
							<p>Add File </p>
							{' '}
							
						</label>
						{ 
						fileName != ''? 
						<label className="custom-file-upload file-name-text">
							<p className = 'file-name-text'>{fileName}</p>
						</label>
						:null
						}
						
					</div>
				</div>
			</div>
			<div className = 'background-parallax'>
				< Sketch />
				{/* <img style = {{top:(mouse.y*0.01)+'px',left:(mouse.x*0.01)+'px'}} src = {background10} alt = 'bg-1'/> */}
				<img style = {{top:(mouse.y*0.01)+'px',left:(mouse.x*0.01)+'px'}}src = {background9} alt = 'bg-9'/>
				<img style = {{top:(mouse.y*0.04)+'px',left:(mouse.x*0.04)+'px'}} src = {background8_1} alt = 'bg-8'/>
				<img style = {{top:(mouse.y*0.02)+'px',left:(mouse.x*0.02)+'px'}} src = {background8} alt = 'bg-8'/>
				<img style = {{top:(mouse.y*0.03)+'px',left:(mouse.x*0.03)+'px'}}src = {background7} alt = 'bg-7'/>
				<img style = {{top:(mouse.y*0.04)+'px',left:(mouse.x*0.04)+'px'}}src = {background6} alt = 'bg-6'/>
				<img style = {{top:(mouse.y*0.05)+'px',left:(mouse.x*0.05)+'px'}} src = {background5} alt = 'bg-5'/>
				<img style = {{top:(mouse.y*0.06)+'px',left:(mouse.x*0.06)+'px'}} src = {background4} alt = 'bg-4'/>
				<img style = {{top:(mouse.y*0.07)+'px',left:(mouse.x*0.07)+'px'}} src = {background3} alt = 'bg-3'/>
				<img style = {{top:(mouse.y*0.08)+'px',left:(mouse.x*0.08)+'px'}} src = {background2} alt = 'bg-2'/>
				<img style = {{top:(mouse.y*0.09)+'px',left:(mouse.x*0.09)+'px'}} src = {background1} alt = 'bg-1'/>
				
				
			</div>
			<Footer />
		</div>

	)
}

export default Contact