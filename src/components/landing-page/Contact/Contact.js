import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from "../../Global_Component/Nav/Nav";

import "./Contact.scss"

const Contact = () => {

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [isSent, setIsSent] = useState(false);


	useEffect(() => {

	}, [setName, setEmail, setMessage, setIsSent])
	const resetForm = () => {
		setName('')
		setEmail('')
		setMessage('')
		setIsSent(false)
		setTimeout(() => {
			setIsSent(false)
		}, 3000)
	}
	const handleSubmitButton = () => {
		let data = {
			name: name,
			email: email,
			message: message,
		}
		axios.post('/Contact', data)
			.then(res => {
				setIsSent(true)
				resetForm()
			}).catch(() => {
				console.log("message not sent")
			})
	}
	return (
		<div className="Contact">
			<Nav />
			<div >
				{/* Single item */}
				<div>
					<label htmlFor="name"> name </label>
					<input
						onChange={(e) => { setName(e.target.value) }}
						value={name}
						type="text"
						name="name"
						className="name"
						placeholder="your name :" />
				</div>
				{/* End of single item */}



				{/* Single item */}
				<div>
					<label htmlFor="Email"> Email </label>
					<input
						onChange={(e) => { setEmail(e.target.value) }}
						value={email}
						type="Email"
						name="Email"
						className="Email"
						placeholder="Email@example.com" />
				</div>
				{/* End of single item */}



				{/* Single item */}
				<div>
					<label htmlFor="description"> Description </label>
					<textarea
						onChange={(e) => { setMessage(e.target.value) }}
						value={message}
						cols="30" rows="20"
						type="textarea"
						name="description"
						className="description"
						placeholder="your message ... " />
				</div>
				{/* End of single item */}
				<div className="submit-button">
					<button onClick={handleSubmitButton} type="submit"> submit </button>
				</div>
			</div>
		</div>

	)
}

export default Contact