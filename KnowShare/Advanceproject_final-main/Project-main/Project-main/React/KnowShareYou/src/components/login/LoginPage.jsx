import React, { useState } from 'react'
import './LoginPage.css';
import NavigationBarLogin from './NavigationBarLogin';
import LoginForLoginPage from './LoginForLoginPage';
import Footer from '../Footer/Footer';
import ProfileUser from './logout/ProfileUser';
function LoginPage(props) {

  
  return (
    <>
      <div className="container">
        <NavigationBarLogin />
        <div className='login_page col-md-auto'>
          <img src="../../public/Login/tablet-login-animate.svg" alt="sdf" className='img-fluid w-50' />
          <LoginForLoginPage  />
        </div>
        
        <Footer />
      </div>
      
    </>

  )
}

export default LoginPage
