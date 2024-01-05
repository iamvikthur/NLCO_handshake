import React, { useMemo, useState } from 'react'
import styles from './Partner.module.css'
import { TextareaAutosize } from '@mui/material'
import CustomSelect from '../Select/Custom-Select'
import countryList from 'react-select-country-list'
import BackArrow from '../SVGIcons/BackArrow/BackArrow'
import ArrowUpright from '../SVGIcons/ArrowUpright/ArrowUpright'
import { Link } from 'react-router-dom'

const Partner = () => {
  const [formData, setFormData] = useState ({
    fullName: '',
    email: '',
    phoneNumber: '',
    work: '',
    role: '',
    location: '',
    howDidYouHear: '',
    howToReach: '',
    summaryToPart: ''
  })

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling form change
  const handleFormChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevData => ({...prevData, [name]: value})))
    setSubmitted(false);
  }

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
      setSubmitted(true);
      setError(false);
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className={styles.success}
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User {formData.fullName} successfully Partnered!!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className={styles.error}
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  //list of countries
  const countries = useMemo(() => countryList().getData(), []);

  //reaching options
  const reach = [
		{
			label: 'Email',
			value: 'email'
		},
		{
			label: 'Phone',
			value: 'phone'
		}
	];

  return (
    <section>
      <div className={`container p-3`}>
        <Link to={'/home'} style={{textDecoration: 'none'}}>
          <div className={`pt-4 ${styles.backBtn}`}>
              <button>
                <BackArrow />
                Back
              </button>
          </div>
        </Link>
      <div className={`container p-4 ${styles.partCon}`}>
        <div className={styles.partTitle}>
          <h1>We Can’t Wait To Partner <span>.</span></h1>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur. Sed vel.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ipsum dolor Tur adipiscing elit, sed do eiusmod sed do</p>
        </div>
        <form>
          <label className={`${styles.partLabel}`}>
            <div className='d-flex'>
            <p>Your email address will not be published. Required fields are marked</p>
            <span className='d-inline-block px-2'>*</span>
            </div>
          </label>
          <div className='container'>
            <div className='row mt-2 mb-3'>
              <div className='col-md-6 pb-3'>
                <input 
                  placeholder='Your full name *'
                  className={styles.partInput}
                  type='text'
                  onChange={handleFormChange}
                  value={formData.fullName}
                  name='fullName'
                />
              </div>
              <div className='col-md-6 pb-3'>
                <input 
                  placeholder='Your email *'
                  className={styles.partInput}
                  type='text'
                  onChange={handleFormChange}
                  value={formData.email}
                  name='email'
                />
              </div>
              <div className='col-md-6 pb-3'>
                <input 
                  placeholder='Your phone number *'
                  className={styles.partInput}
                  type='text'
                  onChange={handleFormChange}
                  value={formData.phoneNumber}
                  name='phoneNumber'
                />
              </div>
              <div className='col-md-6 pb-3'>
                <input 
                  placeholder='Where do you work? *'
                  className={styles.partInput}
                  type='text'
                  onChange={handleFormChange}
                  value={formData.work}
                  name='work'
                />
              </div>
              <div className='col-md-6 pb-3'>
                <input 
                  placeholder='What is you role *'
                  className={styles.partInput}
                  type='text'
                  onChange={handleFormChange}
                  value={formData.role}
                  name='role'
                />
              </div>
              <div className='col-md-6 pb-3'>
                <CustomSelect
                  options={countries}
                  word='Where are you located? *'
                  onChange={handleFormChange}
                  value={formData.location}
                  name='location'
                />
              </div>
              <div className='col-md-6 pb-3'>
                <CustomSelect
                  options={reach}
                  word='How would you like us to reach you? *'
                  onChange={handleFormChange}
                  value={formData.reach}
                  name='reach'
                />
              </div>
              <div className='col-md-6 pb-3'>
                <input 
                  placeholder='How did you hear about this event? *'
                  className={styles.partInput}
                  type='text'
                  onChange={handleFormChange}
                  value={formData.howDidYouHear}
                  name='howDidYouHear'
                />
              </div>
              <div className='col-md-12 pb-3'>
                <TextareaAutosize
                  style={{color: '#161B23', fontWeight: '600', fontSize: 14}}
                  minRows={2}
                  placeholder='Can you share a summary of how you would like to partner?'
                  className={styles.partInput}
                  onChange={handleFormChange}
                  value={formData.summaryToPart}
                  name='summaryToPart'
                />
              </div>
            </div>
          </div>
          <button onClick={handleSubmit} className={styles.partBtn}>
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

export default Partner