import React from 'react'
import { useEffect, useState } from 'react';
import './LoginForLoginPage.css';
import { auth, provider } from '../../Service/firebase'
import { signInWithPopup, signOut } from 'firebase/auth'

function LoginForLoginPage(props) {

  const [profile, setProfile] = useState(null);
  const [profileName, setProfileName] = useState(null);
  const [profileEmail, setProfileEmail] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(null);

  const login = () => {
    signInWithPopup(auth, provider).then((data) => {
      console.log(data.user);
      setProfileEmail(data.user.email);
      setProfileName(data.user.displayName);
      setProfilePhoto(data.user.photoURL);
      localStorage.setItem('email', data.user.email);
      localStorage.setItem('name', data.user.displayName);
      localStorage.setItem('photo', data.user.photoURL);
      window.open('/profile', '_self');
    })
   
  }


  return (
    <div className="form_login">
      <div className='form'>
        <h1 className="form_title">
          KnowShare&nbsp;<b style={{ color: "#356DFF" }}>Note</b>
          <h2>ยินดีต้อนรับ</h2>
        </h1>
        <form>
          <div className="form_email">
            <div className="form_under">
              <img src="../../public/email-svgrepo-com.svg" alt="" />
              <input type="text" placeholder='Email' autofocus />
            </div>
          </div>
          <div className="form_pass">
            <div className="form_under">
              <img src="../../public/lock.svg" alt="" />
              <input type="password" placeholder='Password' autofocus />
            </div>

          </div>
          <div className="forGotPass">
            <div className="text1">
              <a className='text2' href="">ลืมรหัสผ่าน ?</a>
            </div>
          </div>
        </form>
        <div className="form_button">
          <button className='button1' type='submit'>เข้าสู้ระบบ</button>
        </div>
        <div className="form_textRo">
          <span class="text_or">—————— or ——————</span>
        </div>
        <div className="form_google">
          {
            profile ?
              <button className='google_login'>
                  ออกจากระบบ
              </button>
              :
              <button className='google_login' onClick={login} >
                เข้าสู่ระบบด้วย KKU Account
              </button>
          }

        </div>
        <div className="form_linkLegister">
          <div className="text1">
            <p className='text4'>ยังไม่มีบัญชีหรือ  </p>
            <a className='text2' href="">สร้างเลย !</a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default LoginForLoginPage