import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { FaLinkedin, FaGithub, FaFilePdf } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import styles from './Contact.module.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: '',
  });

  const [htmlVisible, setHtmlVisible] = useState(false);

  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });

  const openHTML = () => {
    setHtmlVisible(true);
  };

  const closeHTML = () => {
    setHtmlVisible(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      to_name: 'duvandres9820@gmail.com',
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send('service_aj4yc0b', 'template_hjgiyac', templateParams, 'J9Pi6v2AdeSO3OvYu')
      .then(
        (result) => {
          alert('Form submitted successfully');
        },
        (error) => {
          alert('Error submitting form');
        }
      );

    setFormData({
      name: '',
      subject: '',
      message: '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div id="contact" className={styles.contactContainer}>
      <h2>Contact</h2>
      <div className={styles.socialIcons}>
        <div className={styles.iconWrapper} onClick={openHTML}>
          <animated.div style={fadeIn} className={styles.icon}>
            <FaFilePdf style={{ cursor: 'pointer' }} />
          </animated.div>
          <p>CV</p>
        </div>
        <div className={styles.iconWrapper}>
          <a href="https://www.linkedin.com/in/duvan-andres-cruz-mora-85344a222/" >
          <animated.div style={fadeIn} className={styles.icon}>
            <FaLinkedin />
          </animated.div>
          </a>
          <p>LinkedIn</p>
        </div>
        <div className={styles.iconWrapper}>
          <a href="https://github.com/DUVANCRUZ" >
          <animated.div style={fadeIn} className={styles.icon}>
            <FaGithub />
          </animated.div>  
          </a>
          <p>GitHub</p>
        </div>
      </div>
      {htmlVisible && (
        <div className={styles.htmlViewer}>
          <button onClick={closeHTML}>Close C.V</button>
          <iframe src={require('../../assets/docs/CV.pdf')} title="HTML Viewer" width="800PX" height="500px" />
        </div>
      )}
      <form onSubmit={sendEmail}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            className={styles.messageInput}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
