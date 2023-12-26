import React from 'react'
import { useMemo, useState } from "react";
import CustomSelect from "../Select/Custom-Select";
import countryList from "react-select-country-list";
import { TextareaAutosize } from "@mui/material";
import ArrowUpright from "../ArrowUpright/ArrowUpright";
import './SpeakerApp.css'


const SpeakerApp = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
    const [work, setWork] = useState("");

	const reach = [
		{
			label: 'Email',
			value: 'email'
		},
		{
			label: 'Phone',
			value: 'phone'
		}
	]

	const countries = useMemo(() => countryList().getData(), [])

	// States for checking the errors
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);

	// Handling the name change
	const handleFirstName = (e) => {
		setFirstName(e.target.value);
		setSubmitted(false);
	};

	// Handling the email change
	const handleEmail = (e) => {
		setEmail(e.target.value);
		setSubmitted(false);
	};

		const handleWork = (e) => {
		setWork(e.target.value);
		setSubmitted(false);
	};

	// Handling the password change
	const handlePhoneNumber = (e) => {
		setPhoneNumber(e.target.value);
		setSubmitted(false);
	};

	// Handling the form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		if (firstName === "" || lastName === "" || email === "" || phoneNumber === "" || work === "") {
			setError(true);
		} else {
			setSubmitted(true);
			setError(false);
		}
	};

	// Showing success message
	const successMessage = () => {
		return (
			<div
				className="success"
				style={{
					display: submitted ? "" : "none",
				}}
			>
				<h1>Hello {firstName}, your registration has been confirmed.</h1>
			</div>
		);
	};

	// Showing error message if error is true
	const errorMessage = () => {
		return (
			<div
				className="error"
				style={{
					display: error ? "" : "none",
				}}
			>
				<h1>Please enter all the fields</h1>
			</div>
		);
	};

  return (
    <div>
        <div className="formReg">
			<div className='mb-lg-3'>
				<h1 id='reg'>Complete Your Speaker Application<span>.</span></h1>
                <p className="text-start">Lorem ipsum dolor sit amet consectetur. Sed vel.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ipsum dolor Tur adipiscing elit, sed do eiusmod sed do</p>
			</div>

			<form className="Partner">
                <div>
                    <h3>Personal Information</h3>
                </div>
                <label for='Partneration' className="mt-2">
                    <p className="text-start">Your email address will not be published. Required fields are marked <span>*</span></p>
                </label>
				{/* inputs for form data */}
                <div className="container mb-lg-3" id="container">
                    <div className="row">
                        <div className="col-md-6 pb-3">
				            <input
                                placeholder="Title"
				            	onChange={handleName}
				            	className="input"
				            	value={name}
				            	type="text"
				            />
                        </div>
                        
                        <div className="col-md-6 pb-3">
				            <input
                                placeholder="Your firstname"
				            	onChange={handleFirstName}
				            	className="input"
				            	value={firstName}
				            	type="text"
				            />
                        </div>

                        <div className="col-md-6 pb-3">
				            <input
                                placeholder="Your lastname"
				            	onChange={handleName}
				            	className="input"
				            	value={name}
				            	type="text"
				            />
                        </div>

                        <div className="col-md-6 pb-3">
				            <input
                                placeholder="Your email address"
				            	onChange={handleEmail}
				            	className="input"
				            	value={email}
				            	type="email"
				            />
                        </div>

                        <div className="col-md-6 pb-3">
				            <input
                                placeholder="Where do you work? *"
				            	onChange={handleWork}
				            	className="input"
				            	value={work}
				            	type="tel"
				            />
                        </div>

                        <div className="col-md-6 pb-3">
				            <input
                                placeholder="What is your role?"
				            	onChange={handlePhoneNumber}
				            	className="input"
				            	value={phoneNumber}
				            	type="tel"
				            />
                        </div>

						<div className="col-md-6 pb-3">
    					  <CustomSelect
						  	options={countries}
							word='Where are you based?'
						  />
    					</div>

                        <div className="col-md-6 pb-3">
				            <input
                                placeholder="LinkedIn profile link"
				            	onChange={handlePhoneNumber}
				            	className="input"
				            	value={phoneNumber}
				            	type="tel"
				            />
                        </div>

                        <div className="col-md-6 pb-3">
				            <input
                                placeholder="What is your area of expertise?"
				            	onChange={handlePhoneNumber}
				            	className="input"
				            	value={phoneNumber}
				            	type="tel"
				            />
                        </div>

                        <div className="col-md-6 pb-3">
				            <input
                                placeholder="How did you hear about this event?
                                "
				            	onChange={handlePhoneNumber}
				            	className="input"
				            	value={phoneNumber}
				            	type="tel"
				            />
                        </div>

						<div className="col-md-12 pb-3">
    					  <CustomSelect
						  	options={reach}
							word='How would you like us to reach you? *'
						  />
    					</div>
                    </div>
                </div>

				<div>
                <div className='mb-lg-3'>
                    <h3>Talk Information</h3>
                </div>
				{/* inputs for form data */}
                <div className="container" id="container">
                    <div className="row">
                        <div className="pb-3">
				            <input
                                placeholder="Potential talk title *"
				            	onChange={handleName}
				            	className="input"
				            	value={name}
				            	type="text"
				            />
                        </div>
                        <div className="pb-3">
				            <input
                                placeholder="Co-presenter (If applicable) &#xf05a;"
				            	onChange={handleEmail}
				            	className="input"
				            	value={email}
				            	type="email"
				            />
                        </div>

						<div className="col-md-6 mb-4">
				            <TextareaAutosize
								minRows={3}
                                placeholder="Description of your talk *"
				            	onChange={handleEmail}
				            	className="input"
								id="lastInput"
				            	value={email}
				            	type="email"
				            />
                        </div>
                    </div>
                </div>
                	<button onClick={handleSubmit} className="" id="regBtn" type="submit">
                	    <ArrowUpright />
                	        Partner
                	</button>
				</div>
			</form>
			</div>
    </div>
  )
}

export default SpeakerApp;