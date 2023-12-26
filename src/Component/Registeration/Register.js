import { useMemo, useState } from "react";
import ArrowUpright from "../ArrowUpright/ArrowUpright";
import CustomSelect from "../Select/Custom-Select";
import CustomCheckbox from "../Checkbox/Custom-Checkbox";
import Modal from "../Card/Card";
import countryList from "react-select-country-list";
//import CheckBoxIcon from "../CheckBoxIcon/CheckBoxIcon";
import './Register.css'

export default function Register() {
	// States for registration
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
    const [work, setWork] = useState("");
	const [isModalOpen, setModalOpen] = useState(false);


  	const handleCheckboxChange = (isChecked) => {
  	  setModalOpen(isChecked);
  	};

  	const closeModal = () => {
  	  setModalOpen(false);
  	};

  	const cards = [
  	  {
  	    title: 'Card 1',
  	    contents: [
  	      { type: 'text', content: 'Text content for Card 1' },
  	      { type: 'image', content: 'url_to_image_1' },
  	      // Add more content items as needed
  	    ],
  	  },
  	  {
  	    title: 'Card 2',
  	    contents: [
  	      { type: 'text', content: 'Text content for Card 2' },
  	      { type: 'image', content: 'url_to_image_2' },
  	      // Add more content items as needed
  	    ],
  	  },
  	  {
  	    title: 'Card 2',
  	    contents: [
  	      { type: 'text', content: 'Text content for Card 2' },
  	      { type: 'image', content: 'url_to_image_2' },
  	      // Add more content items as needed
  	    ],
  	  },
  	];


	const options = [
		{
			label: 'Attend Virtually',
			value: 'opt1'
		},
		{
			label: 'Attend in person',
			value: 'opt2'
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

	//handle change select
	//const handleChangeSelect = (e) => {
	//	console.log(e)
	//}

	// Showing success message
	//const successMessage = () => {
	//	return (
	//		<div
	//			className="success"
	//			style={{
	//				display: submitted ? "" : "none",
	//			}}
	//		>
	//			<h1>User {name} successfully registered!!</h1>
	//		</div>
	//	);
	//};

	// Showing error message if error is true
	//const errorMessage = () => {
	//	return (
	//		<div
	//			className="error"
	//			style={{
	//				display: error ? "" : "none",
	//			}}
	//		>
	//			<h1>Please enter all the fields</h1>
	//		</div>
	//	);
	//};

	return (
		<div>
		<div className="form">
			<div>
				<h1 id="reg">Register Here To Attend<span>.</span></h1>
                <p className="text-start">Lorem ipsum dolor sit amet consectetur. Sed vel.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ipsum dolor Tur adipiscing elit, sed do eiusmod sed do</p>
			</div>

			<form className="register">
                <label for='Registeration'>
                    <p className="text-start">Your email address will not be published. Required fields are marked *</p>
                </label>
				{/* inputs for form data */}
                <div className="container">
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
				            	onChange={handlePhoneNumber}
				            	className="input"
				            	value={phoneNumber}
				            	type="tel"
				            />
                        </div>
						<div className="col-md-6 pb-3">
    					  <CustomSelect
						  	options={countries}
							word='Where will you be joining from?'
						  />
    					</div>
                        <div className="col-md-6 pb-3">
				            <input
                                placeholder="What do you do?"
				            	onChange={handleWork}
				            	className="input"
				            	value={work}
				            	type="tel"
				            />
                        </div>

						<div className="col-md-6 pb-3">
    					  <CustomSelect
						  	options={options}
							word='How did you hear about the event?'
						  />
    					</div>

                    </div>
                </div>

                <br />
                <br />

                <label for='checkox' className="pb-3">
                    <p className="text-start">Would you like to be notified about other events?</p>
                </label>

                <div className="check-container">
                    <div className="row">
					<div class="mb-3 form-check col-md-6 d-inline-block pb-3" id="check">
					<CustomCheckbox
						  checked={isModalOpen}
						  onChange={handleCheckboxChange}
						  label="Yes, send me updates."
						  bootstrapClasses="form-check d-flex" // Bootstrap classes
						/>
						</div>

						<div class="mb-3 form-check col-md-6 d-inline-block pb-3" id="check">
						<CustomCheckbox
						  onChange={closeModal}
						  label="No, I'm good with just this one."
						  bootstrapClasses="form-check d-flex" // Bootstrap classes
						/>
						</div>

						<Modal isOpen={isModalOpen} onClose={closeModal}>
						  <div className="row d-flex">
						    {cards.map((card, cardIndex) => (
						      <div key={cardIndex} className="col-4 mb-3">
						        <div className="card">
						          {card.contents.map((content, contentIndex) => (
						            <div key={contentIndex}>
						              {content.type === 'image' && (
						                <img
						                  className="card-img-top"
						                  src={content.content}
						                  alt={`Image for ${card.title}`}
						                />
						              )}
						            </div>
						          ))}
						          <div className="card-body">
						            <h3 className="card-title">{card.title}</h3>
						            {card.contents.map((content, contentIndex) => (
						              <div key={contentIndex}>
						                {content.type === 'text' && (
						                  <p className="card-text">{content.content}</p>
						                )}
						              </div>
						            ))}
						          </div>
						        </div>
						      </div>
						    ))}
						  </div>
						</Modal>

                        <div class="mb-3 form-check col-md-12 d-inline-block pb-3" id="check">
						<CustomCheckbox
						  label="Yes, I agree to receiving communications about Handshake and related  activities."
						  bootstrapClasses="form-check d-flex" // Bootstrap classes
						/>
						</div>
                    </div>
                </div>
				<div>
                <button onClick={handleSubmit} className="float-end regBtn" type="submit">
                    <ArrowUpright />
                        Register
                </button>
				</div>
			</form>
		</div>
		</div>
	);
}