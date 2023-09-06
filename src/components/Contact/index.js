import React from 'react';
import './styles.css'

const Contact = () => {
  return (
    <>
      <div className="project-list">
        <h1 style={{ textAlign: 'center' }}>Contact Me</h1>
        <p style={{ marginTop: '1rem', textAlign: 'center' }}>Thank you for visiting my portfolio! If you have any questions, inquiries, or collaboration proposals, I'm excited to hear from you. I am eager to work with you and utilize my web development skills and knowledge to enhance your productivity. Let's create something amazing together!</p>
      </div>
      <div className='contact-container'>
        <p>Name - Shubham Jindal</p>
        <p>Email - shubhamjindal61999@gmail.com</p>
        <p>Mobile No. - +91 7023440514 <span style={{fontSize:'0.7rem'}}>(same on whatsapp)</span></p>
        <p>Work Experience - Fresher</p>
        Permanent Address :<address>
          Pradeep Kumar Jindal Ward No 11 Gothra Khetri Nagar, Jhunjhunu Rajasthan (333504)
        </address>
      </div>
      <p className='thankyou-note'>I'm committed to providing top-notch service and ensuring that your web development needs are met with the utmost professionalism and dedication. I look forward to hearing from you and the possibility of collaborating on exciting projects together!</p>
    </>
  );
};

export default Contact;
