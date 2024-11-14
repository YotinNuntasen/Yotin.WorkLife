import React, { useState, useEffect } from 'react'
import NavigationBarLogout from '../../barMenu/NavigationBarLogout'
import './ProfileUser.css'
import { gapi } from 'gapi-script'
import GoogleLogin, { GoogleLogout } from 'react-google-login';
function ProfileUser(props) {
    const dataProfile = { name: "", email: "", image: "", time: "" }
    // const [profile, setProfile] = useState(null);
    const [nameProfile, setNameProfile] = useState('??');
    const [emailProfile, setEmailProfile] = useState('??');
    const [imgProfile, setImgProfile] = useState('??');
    
    
    useEffect(() => {
        setNameProfile(localStorage.getItem('name'));
        setEmailProfile(localStorage.getItem('email'));
        setImgProfile(localStorage.getItem('photo'));
       
    })
    const logout = () => {
        localStorage.clear();
        window.open('/', '_self');
    }

    return (
        <div>
            <NavigationBarLogout />
            <div className="container">
                <div className="d-flex justify-content-center m-2  ">
                    <div className="contentProfile">
                        <div className='img_profile mt-5'>
                            <img
                                src={imgProfile}
                                alt="NOT Photo" className=' img-fluid text-center' />
                        </div>
                        <div className="title_profile m-4 text-start ">
                            <div className="fs-4">
                                ชื่อผู้ใช้ : {nameProfile}
                            </div>
                            <div className="fs-4">
                                อีเมล : {emailProfile}
                            </div>
                            <div className="fs-4 d-flex align-items-start ">
                                ประวัติผู้ใช้งาน : &nbsp;
                                <div className="fs-5 text-white-60 time_profile">
                                    สถานะ : นักศึกษา
                                </div>
                            </div>

                            <button className="button_logout fs-6 my-2 d-flex align-items-center text-center justify-content-center" role="button" onClick={logout}>
                                ออกจากระบบ &nbsp;
                                <span class="material-symbols-outlined fs-4">
                                    logout
                                </span>
                            </button>                     
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileUser
