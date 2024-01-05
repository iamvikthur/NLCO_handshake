import React, { useMemo, useState } from 'react'
import { TextareaAutosize } from '@mui/material';
import countryList from 'react-select-country-list';
import { Link } from 'react-router-dom';
import styles from './Speaker.module.css'
import BackArrow from '../../SVGIcons/BackArrow/BackArrow';
import CustomSelect from '../../CustomComponents/Select/Custom-Select';
import ArrowUpright from '../../SVGIcons/ArrowUpright/ArrowUpright';

const SpeakerApp = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		title: '',
		email: '',
		role: '',
		linkedin: '',
		expertise: '',
		work: '',
		phoneNumber: '',
		country: '',
		howToReach: '',
		talkTitle: '',
		coPresenter: '',
		talkDescription: '',
		howDidYouHear: '',
		bio: '',
		file: ''
	  });

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

	const countries = useMemo(() => countryList().getData(), []);

		// States for checking the errors
		const [submitted, setSubmitted] = useState(false);
		const [error, setError] = useState(false);
	
		// Handling the name change
		const handleFormChange = (event) => {
			const {name, value} = event.target;
			setFormData((prevData) => ({...prevData, [name]: value}));
			setSubmitted(false);
		}
	
		// Handling the form submission
		const handleSubmit = (e) => {
			e.preventDefault();
		
			// Check if any required field is empty
			const requiredFields = [
			  'firstName',
			  'lastName',
			  'email',
			  'work',
			  'title',
			  'linkedin',
			  'role',
			  'expertise',
			  'phoneNumber',
			  'country',
			  'howToReach',
			  'talkTitle',
			  'talkDescription',
			  'howDidYouHear',
			  'bio',
			  'file'
			];
		
			const hasEmptyField = requiredFields.some((field) => !formData[field]);
		
			if (hasEmptyField) {
			  setError(true);
			} else {
			  setSubmitted(true);
			  setError(false);
			  // Perform further actions like API call or other logic
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
					<h1>Hello, {formData.firstName} your registration has been confirmed.</h1>
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
	<section>
		<div className='container p-3 m-auto'>
			<Link to={'/home'} style={{textDecoration: 'none'}}>
        	  <div className={`pt-4 ${styles.backSeakBtn}`}>
        	      <button>
        	        <BackArrow />
        	        Back
        	      </button>
        	  </div>
        	</Link>
			<div className={`container p-4 ${styles.speakCon}`}>
				<div className={styles.speakTitle}>
					<h1>Complete Your Speaker Application<span>.</span></h1>
					<p>Lorem ipsum dolor sit amet consectetur. Sed vel.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ipsum dolor Tur adipiscing elit, sed do eiusmod sed do</p>
				</div>
				<form>
					<div>
						<h3>Personal Information</h3>
					</div>
					<label className={styles.speakLabel}>
						<div className='d-flex'>
							<p>Your email address will not be published. Required fields are marked</p>
							<span className='d-inline-block px-2'>*</span>
						</div>
					</label>
					<div className='container'>
						<div className='row mt-2 mb-3'>
							<div className='col-md-6 pb-3'>
								<input
									placeholder="Title"
									className={styles.speakIn}
									type="text"
									onChange={handleFormChange}
									value={formData.title}
									name='title'
								/>
							</div>
							<div className='col-md-6 pb-3'>
								<input
									placeholder="Your firstname"
									className={styles.speakIn}
									type="text"
									onChange={handleFormChange}
									value={formData.firstName}
									name='firstName'
								/>
							</div>
							<div className='col-md-6 pb-3'>
								<input
									placeholder="Your lastname"
									className={styles.speakIn}
									type="text"
									onChange={handleFormChange}
									value={formData.lastName}
									name='lastName'
								/>
							</div>
							<div className='col-md-6 pb-3'>
								<input
									placeholder="Your email address"
									className={styles.speakIn}
									type="email"
									onChange={handleFormChange}
									value={formData.email}
									name='email'
								/>
							</div>
							<div className='col-md-6 pb-3'>
								<input
									placeholder="Where do you work? *"
									className={styles.speakIn}
									type="text"
									onChange={handleFormChange}
									value={formData.work}
									name='work'
								/>
							</div>
							<div className='col-md-6 pb-3'>
								<input
									placeholder="What is your role?"
									className={styles.speakIn}
									type="text"
									onChange={handleFormChange}
									value={formData.role}
									name='role'
								/>
							</div>
							<div className='col-md-6 pb-3'>
								<CustomSelect
						  			options={countries}
									word='Where are you based?'
						  		/>
							</div>
							<div className='col-md-6 pb-3'>
								<input
									placeholder="LinkedIn profile link"
									className={styles.speakIn}
									type="url"
									onChange={handleFormChange}
									value={formData.linkedin}
									name='linkedin'
								/>
							</div>
							<div className='col-md-6 pb-3'>
								<input
									placeholder="What is your area of expertise?"
									className={styles.speakIn}
									type="text"
									onChange={handleFormChange}
									value={formData.expertise}
									name='expertise'
								/>
							</div>
							<div className='col-md-6 pb-3'>
								<input
									placeholder="How did you hear about this event?
									"
									className={styles.speakIn}
									type="text"
									onChange={handleFormChange}
									value={formData.howDidYouHear}
									name='howDidYouHear'
								/>
							</div>
							<div className='col-md-12 pb-3'>
								<CustomSelect
						  			options={reach}
									word='How would you like us to reach you? *'
						  		/>
							</div>
						</div>
					</div>
					<div>
						<h3>Talk Information</h3>
					</div>
					<div className='conatiner m-auto'>
					<div className='row mt-2 mb-3'>
							<div className='col-md-12 pb-3'>
								<input
                        			placeholder="Potential talk title *"
				        			className={styles.speakIn}
				        			type="text"
									onChange={handleFormChange}
									value={formData.talkTitle}
									name='talkTitle'
				        		/>
							</div>
							<div className='col-md-12 pb-3'>
								<input
                        			placeholder="Co-presenter (If applicable) &#xf05a;"
				        			className={styles.speakIn}
				        			type="text"
									onChange={handleFormChange}
									value={formData.coPresenter}
									name='coPresenter'
				        		/>
							</div>
							<div className='col-md-12 pb-3'>
								<TextareaAutosize
									minRows={3}
									placeholder="Description of your talk *"
									className={styles.speakIn}
									type="text"
									onChange={handleFormChange}
									value={formData.talkDescription}
									name='talkDescription'
								/>
							</div>
						</div>
					</div>
					<div>
						<h3>Speaker Bio & Headshot</h3>
					</div>
					<div className='container m-auto'>
						<div className='row mt-2 mb-3'>
							<div className='col-md-12 pb-3'>
								<TextareaAutosize
									minRows={3}
									placeholder="Speaker bio *"
									className={styles.speakIn}
									type="text"
									onChange={handleFormChange}
									value={formData.bio}
									name='talkDescription'
								/>
							</div>
							<div className={`col-md-12 pb-3 ${styles.headshot}`}>
								<h3>Headshot</h3>
								<p>Please upload a high-res, square image that's at least 1024x1024px.</p>
							</div>
							<div className='col-md-6 pb-3'>
								<input 
									type='file'
									name='file'
									className={styles.chsFile}
									onChange={handleFormChange}
									value={formData.file}
								/>
							</div>
							<div className={`col-md-12 pb-3 ${styles.headshotTag}`}>
								<p>Max. file size: 2MB.</p>
							</div>
						</div>
					</div>
					<button onClick={handleSubmit} className={styles.speakBtn}>
						<ArrowUpright />
						Submit
					</button>
				</form>
				{successMessage}
				{errorMessage}
			</div>
		</div>
	</section>
  )
}

export default SpeakerApp