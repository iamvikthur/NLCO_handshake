import React, { useMemo, useState } from "react";
import ArrowUpright from "../../SVGIcons/ArrowUpright/ArrowUpright";
import DisabledArrowUp from "../../SVGIcons/DisabledArrowUp/DisabledArrowUp";
import CustomSelect from "../../Select/Custom-Select";
import CustomCheckbox from "../../CustomComponents/Checkbox/Custom-Checkbox";
import Modal from "../../CustomComponents/Card/Card";
import countryList from "react-select-country-list";
import styles from './Register.module.css';

export default function Register() {
  // States for registration
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    joiningFrom: '',
    whatYouDo: '',
    howDidYouHear: ''
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buttonChange, setButtonChange] = useState(false);

  const handleCheckboxChange = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  //handle form change
  const handleFormChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({...prevData, [name]: value}));
    setSubmitted(false);
  }

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
      title: 'Card 3',
      contents: [
        { type: 'text', content: 'Text content for Card 3' },
        { type: 'image', content: 'url_to_image_3' },
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
  ];

  const countries = useMemo(() => countryList().getData(), []);

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
      setSubmitted(true);
      setError(false);
  };

  return (
    <div>
      <div className={`${styles.form} mt-2 mb-2`}>
        <div>
          <h1 id={styles.reg}>Register Here To Attend<span>.</span></h1>
          <p className={`text-start`} id={styles.regP}>Lorem ipsum dolor sit amet consectetur. Sed vel.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ipsum dolor Tur adipiscing elit, sed do eiusmod sed do</p>
        </div>

        <form className={styles.register}>
          <label htmlFor='Registeration'>
            <p className={`text-start d-inline-block`} id={styles.regP}>Your email address will not be published. Required fields are marked <span>*</span></p>
          </label>
          {/* inputs for form data */}
          <div className={`container`}>
            <div className={`row`}>
              <div className={`col-md-6 pb-3`}>
                <input
                  placeholder="Your full name"
                  onChange={handleFormChange}
                  id={styles.regIn}
                  value={formData.fullName}
                  name="fullName"
                  type="text"
                />
              </div>
              <div className={`col-md-6 pb-3`}>
                <input
                  placeholder="Your email"
                  onChange={handleFormChange}
                  id={styles.regIn}
                  value={formData.email}
                  name="email"
                  type="email"
                />
              </div>
              <div className={`col-md-6 pb-3`}>
                <input
                  placeholder="Your phone number"
                  onChange={handleFormChange}
                  id={styles.regIn}
                  value={formData.phoneNumber}
                  name="phoneNumber"
                  type="tel"
                />
              </div>
              <div className={`col-md-6 pb-3`}>
                <CustomSelect
                  options={countries}
                  onChange={handleFormChange}
                  value={formData.joiningFrom}
                  name='joiningFrom'
                  word='Where will you be joining from?'
                />
              </div>
              <div className={`col-md-6 pb-3`}>
                <input
                  placeholder="What do you do?"
                  onChange={handleFormChange}
                  id={styles.regIn}
                  value={formData.whatYouDo}
                  name="whatYouDo"
                  type="tel"
                />
              </div>
			  <div className={`col-md-6 pb-3`}>
                  <CustomSelect
                    options={options}
                    onChange={handleFormChange}
                    value={formData.howDidYouHear}
                    name='howDidYouHear'
                    word='How did you hear about the event?'
                  />
                </div>
              </div>
            </div>

            <br />
            <br />

            <label htmlFor='checkox' className={`pb-3`}>
              <p className={`text-start`} id={styles.regP}>Would you like to be notified about other events?</p>
            </label>

            <div className={`check-container`}>
              <div className={`row`}>
                <div className={`mb-3 form-check col-md-6 d-inline-block pb-3`} id={styles.check}>
                  <CustomCheckbox
                    controlledBy={isModalOpen}
                    onCheck={() => setIsModalOpen(true)}
                    onUncheck={() => setIsModalOpen(false)}
                    label="Yes, send me updates."
                  />
                </div>

                <div className={`mb-3 form-check col-md-6 d-inline-block pb-3`} id={styles.check}>
                  <CustomCheckbox
                    controlledBy={!isModalOpen}
                    onCheck={() => setIsModalOpen(false)}
                    onUncheck={() => setIsModalOpen(false)}
                    label="No, I'm good with just this one."
                  />
                </div>

                <Modal isOpen={isModalOpen} onClose={closeModal}>
                  <div className={`row d-flex`}>
                    {cards.map((card, cardIndex) => (
                      <div key={cardIndex} className={`col-4 mb-3`}>
                        <div className={styles.card}>
                          {card.contents.map((content, contentIndex) => (
                            <div key={contentIndex}>
                              {content.type === 'image' && (
                                <img
                                  className={`card-img-top`}
                                  src={content.content}
                                  alt={`${card.title}`}
                                />
                              )}
                            </div>
                          ))}
                          <div className={`card-body`}>
                            <h3 className={`card-title`}>{card.title}</h3>
                            {card.contents.map((content, contentIndex) => (
                              <div key={contentIndex}>
                                {content.type === 'text' && (
                                  <p className={styles.cardText}>{content.content}</p>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Modal>

                <div className={`mb-3 form-check col-md-12 d-inline-block pb-3`} id={styles.check}>
                  <CustomCheckbox
                    controlledBy={buttonChange}
                    onCheck={() => setButtonChange(true)}
                    onUncheck={() => setButtonChange(false)}
                    label="Yes, I agree to receiving communications about Handshake and related  activities."
                  />
                </div>
              </div>
            </div>
              <button onClick={handleSubmit} className={`float-end ${buttonChange ? styles.regBtn : styles.greyState}`} type="submit">
                  {buttonChange ? <ArrowUpright /> : <DisabledArrowUp />}
                    Register
              </button>
          </form>
        </div>
      </div>
  );
}

