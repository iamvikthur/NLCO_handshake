import { useMemo, useState } from "react";
import CustomSelect from "../Select/Custom-Select";
import countryList from "react-select-country-list";
import { TextareaAutosize } from "@mui/material";
import ArrowUpright from "../ArrowUpright/ArrowUpright";
import './Partner.css'

export default function Partner() {
	// States for registration
	const [name, setName] = useState("");
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
	const handleName = (e) => {
		setName(e.target.value);
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
		if (name === "" || email === "" || phoneNumber === "" || work === "") {
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
				<h1>User {name} successfully Partnered!!</h1>
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
			<div>
				<h1 id="part">We Can’t Wait To Partner<span>.</span></h1>
                <p className="text-start">Lorem ipsum dolor sit amet consectetur. Sed vel.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ipsum dolor Tur adipiscing elit, sed do eiusmod sed do</p>
			</div>

			<form className="Partner">
                <label for='Partneration' className="mt-2">
                    <p className="text-start">Your email address will not be published. Required fields are marked *</p>
                </label>
				{/* inputs for form data */}
                <div className="container" id="container">
                    <div className="row">
                        <div className="col-md-6 pb-3">
				            <input
                                placeholder="Your full name"
				            	onChange={handleName}
				            	className="input"
				            	value={name}
				            	type="text"
				            />
                        </div>
                        <div className="col-md-6 pb-3">
				            <input
                                placeholder="Your email"
				            	onChange={handleEmail}
				            	className="input"
				            	value={email}
				            	type="email"
				            />
                        </div>
                        <div className="col-md-6 pb-3">
				            <input
                                placeholder="Your phone number"
				            	onChange={handleWork}
				            	className="input"
				            	value={work}
				            	type="tel"
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
							word='Where are you located?'
						  />
    					</div>

						<div className="col-md-6 pb-3">
				            <input
                                placeholder="How did you hear about this event?"
				            	onChange={handlePhoneNumber}
				            	className="input"
				            	value={phoneNumber}
				            	type="tel"
				            />
                        </div>

						<div className="col-md-6 pb-3">
    					  <CustomSelect
						  	options={reach}
							word='How would you like us to reach you? *'
						  />
    					</div>

						<div className="col-md-6 mb-4">
				            <TextareaAutosize
								minRows={1}
								variant="outlined"
                                placeholder="Can you share a summary of how you would like to partner?"
				            	onChange={handleEmail}
				            	className="input"
								id="lastInput"
				            	value={email}
				            	type="email"
				            />
                        </div>
                    </div>
                </div>
				<div>
                	<button onClick={handleSubmit} className="" id="regBtn" type="submit">
                	    <ArrowUpright />
                	        Partner
                	</button>
				</div>
			</form>
			</div>
		</div>
	);
}