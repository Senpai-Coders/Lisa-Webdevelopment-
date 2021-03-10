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
	const [isSent, setIsSent] = useState(false);
	const URL = 'http://localhost:5000/Contact';

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

	const checkMessage = () => {
		var msg = message.replace(/\d+/g, '')
		var words = msg.split(" ");
		const result = words.filter(word => word.length > 0).length >= 4;
		setMessageValid(result);
		return result;
	}

	const handleSubmitButton = () => {

		var validate = VALIDATORXD.validate(email)
		setEmailValid(validate);

		console.log(validate + " : " + !messageIsValid)
		if (validate && checkMessage()) {
			let data = {
				name: name,
				email: email,
				message: message,
			}
			axios.post(URL, data)
				.then(res => {
					setIsSent(true)
					resetForm()
					console.log("\n✔ Email sent to us successfully!\n") 
				}).catch((err) => {
					console.log(`\n✖ Failed sending email to us ${err}!\n`) 
				})
		}
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
						cols="20" rows="10"
						type="textarea"
						name="description"
						className="description"
						placeholder="your message ... " />
				</div>
				{/* End of single item */}
				<div className="submit-button">
					<button onClick={handleSubmitButton} type="submit"> submit </button>
				</div>
				{
					!emailIsValid ? <div> Invalid Email </div> : (!messageIsValid ? <div>Message should contain more than 3 words</div> : null)
				}
			</div>
			<Footer />
		</div>

	)
}

export default Contact