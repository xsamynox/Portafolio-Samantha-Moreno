import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Samantha from '../images/Samantha.png';
import ContactForm from '../components/ContactForm.jsx';
import '../style/contactview.css';


const contact = () => {

  return (
    <div>
      <Header />
      <div className='title-contact'>
        <p>CONTACTAME</p>
        <hr />
      </div>
      {/* <p className="text-center w-responsive mx-auto mb-5">¿Tienes alguna pregunta? No dudes en contactarme directamente.</p> */}

      <img className='img-sam' src={Samantha} alt='Samantha Moreno' />

      <section className='contact'>
        <ContactForm />

        {/* <div className='ctn-contact'>
          <span className="iconify" data-inline="false" data-icon="logos:google-gmail" style={{ fontSize: '28px' }} />
          <p className='text-contact'>xsamynox@gmail.com</p>
        </div>

        <div className='ctn-contact'>
          <span className="iconify" data-inline="false" data-icon="emojione-v1:mobile-phone" style={{ fontSize: '38px' }}></span>
          <p className='text-contact'>+56950317625</p>
        </div>

        <div className='ctn-contact'>
          <span className="iconify" data-inline="false" data-icon="ion:logo-linkedin" style={{ fontSize: '48px', color: '#ffffff' }}></span>
          <a href='https://www.linkedin.com/in/samantha-moreno-e/'><p className='text-contact'>linkedin.com/in/samantha-moreno-e/</p></a>
        </div> */}

      </section>
      {/* <Footer /> */}
    </div >
  )
}
export default withRouter(contact);