import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const curriculum = () => {

  return (
    <div>
      <Header />
      <Footer />
    </div>
  )
}
export default withRouter(curriculum);