import React, { useState } from 'react';
import Cat from '../../../Assets/contactImage1.jpg';
import { TextareaAutosize } from '@mui/material';
import ArrowUpright from '../../SVGIcons/ArrowUpright/ArrowUpright';
import styles from './Contacts.module.css';

const Contacts = () => {
  const [formData, setFormData] = useState({
    yourName: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  /** Handle form submission */
  const handleFormSubmission = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setSubmitted(false);
  };

  return (
    <section>
      <div className={styles.contacts}>
        <div className={styles.hero}>
          <div className={styles.heroImage} style={{ backgroundImage: `url(${Cat})` }}>
            <div className={styles.heroText}><h1>Contacts</h1></div>
          </div>
        </div>
        <div className={`container`}>
          <div className={styles.column}>
            <div className={styles.title}>
              <h1>GET IN TOUCH WITH US <span>.</span></h1>
              <p>Integer suscipit mollis mi dictum dapibus. Donec a mattis nisi. Suspendisse vitae tortor libero. Sed consequat nunc a bibendum tempor. Duis iaculis nibh auctor maximus pharetra</p>
            </div>
          </div>
          <div className={`container`} id={styles.cont}>
            <div className={`row mb-3`}>
              <div className='col-md-6 mb-5'>
                <form>
                  <label>
                    <p className={`text-start d-inline-block`}>Your email address will not be published. Required fields are marked <span>*</span></p>
                  </label>
                  <div className='container'>
                    <div className={`row mb-3 g-2`}>
                      <div className={`col-md-6 pb-3 g-2`}>
                        <input
                          placeholder="Your name"
                          className={styles.conInput}
                          onChange={handleFormSubmission}
                          value={formData.yourName}
                          type="text"
                          name='yourName'
                        />
                      </div>
                      <div className={`col-md-6 pb-3 g-2`}>
                        <input
                          placeholder="Your email"
                          className={styles.conInput}
                          onChange={handleFormSubmission}
                          value={formData.email}
                          type="email"
                          name='email'
                        />
                      </div>
                      <div className={`col-md-12 pb-3 g-2`}>
                        <TextareaAutosize
                          style={{ color: '#fff' }}
                          minRows={2}
                          placeholder="Your message"
                          className={styles.conInput}
                          onChange={handleFormSubmission}
                          value={formData.message}
                          type="text"
                          name='message'
                        />
                      </div>
                    </div>
                  </div>
                  <button id={styles.regBtn}>
                    <ArrowUpright />
                    Get In Touch
                  </button>
                </form>
              </div>
              <div className={`col-md-6 ${styles.conInfo}`}>
                <div className={`${styles.info} p-6`}>
                  <h1 className='mb-2'>Location</h1>
                  <p className={`text-start p-0 mb-2`}>3517 W. Gray St. Utica, Pennsylvania 57867</p>
                  <h1 className='mb-2'>Contacts</h1>
                  <p className={`text-start p-0`}>ask@naomilucas.xyz</p>
                  <p className={`text-start p-0`}>www.handshake.naomilucas.xyz</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;