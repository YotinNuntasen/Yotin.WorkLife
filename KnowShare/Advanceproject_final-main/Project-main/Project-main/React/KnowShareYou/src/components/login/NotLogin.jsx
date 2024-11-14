import React from 'react'
import NavigationBars from '../barMenu/NavigationBars'
import './NotLogin.css'
import Footer from '../Footer/Footer'
function NotLogin() {
    return (
        <div>
            <NavigationBars pg={"upload"} />
            <div className="container">
                <div className="content_notLogin">
                    <div className="row">
                        <div className="img_notlog col-6">
                            <img src="../../Upload/Notlogin.svg " alt="asdf" className=' img-fluid' />
                        </div>
                        <div className="title_notlog col-6 text-start">
                            <div className="fs-1">
                                เข้าสู่ระบบ เพื่อ
                                <a href="/login">
                                    อัพโหลดไฟล์ !
                                </a>
                            </div>
                            <div className="fs-4 w-75 ms-2" style={{ opacity: 0.8 }}>
                                LecShrerYou <br />
                                เว็ปไซต์ที่สามารถแชร์ชีทสรุป ให้กับเพื่อนของคุณ ได้ทุกที่ ทุกเวลา ทุกอุปกรณ์
                            </div>
                            <a href="/login" className='bnt-login'>
                                เข้าสู่ระบบ
                            </a>
                        </div>
                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default NotLogin
