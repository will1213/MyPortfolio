import {
	FiGithub,
	FiLinkedin,
    FiPhone,
    FiMail
} from 'react-icons/fi';
import { IconContext } from "react-icons";
import React from 'react';
import './css/Contact.css';

const Contact = () => {

    // Need to use back-end to handle the send email, however, there is emailjs that can
    // be used to send email without back-end, but there is risk of getting the credential
    // leaked. For now, just display contact information

    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [subject, setSubject] = useState('');
    // const [message, setMessage] = useState('');
  
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   console.log(`Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`);
    //   // Send email here
    //   setName('');
    //   setEmail('');
    //   setSubject('');
    //   setMessage('');
    // };

  return (
    <div className="contact-container" id="contact">
      {/* <div className="contact-form-container">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows="15"
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div> */}
      <div className="contact-info-container">
        <h2>Contact Information</h2>
            <div><FiPhone /><span style={{ marginLeft: "0.5rem" }}>(587)-664-8138</span></div>
            <div><FiMail /><span style={{ marginLeft: "0.5rem" }}>jenweiwill.huang@gmail.com</span></div>
        <div className='contact-info-links'>
            <IconContext.Provider value={{ color: "black", size: "4em"}}>
                    <a href="https://github.com/will1213" target="_blank" rel="noopener noreferrer">
                        <FiGithub/>
                    </a>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "black", size: "4em"}}>
                    <a href="https://www.linkedin.com/in/will-huang-61303119a/" target="_blank" rel="noopener noreferrer">
                        <FiLinkedin/>
                    </a>
            </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default Contact;
