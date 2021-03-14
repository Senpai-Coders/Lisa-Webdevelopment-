import React, { useState, useEffect } from 'react';

import axios from 'axios';

import Nav from "../../Global_Component/Nav/Nav";
import Footer from "../../Global_Component/Footer/Footer";

import "./Contact.scss"

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
			console.log(0)
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
		<div className="Contact">
			<Nav />
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
					{
						isEmailSending ? <h1> Is sending </h1> : null
					}
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

			<Footer />
		</div>

	)
}

export default Contact