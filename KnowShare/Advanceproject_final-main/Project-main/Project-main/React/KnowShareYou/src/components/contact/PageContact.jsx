import React from 'react'
import './PageContact.css';
import '../../../bootstrap5/css/bootstrap.min.css'
import Footer from '../Footer/Footer';
import NavigationBars from '../barMenu/NavigationBars';
function PageContact() {
    return (
        <div>
            <NavigationBars pg={"contact"}/>
            <div className="container pb-5">
                <div className=" d-flex justify-content-center align-items-center flex-column" >
                    <div className='contentContact' >
                        <div className="fs-1 contact_h text-center pt-5">
                            ติดต่อเรา &nbsp;
                            <h className=''>KnowShare</h>
                            Note
                        </div>
                        <div className="title_contact d-flex">
                            <img src="../../../public/icon-contact.svg" alt="asdf" />
                            <div className='d-flex justify-content-center align-items-start mt-2'>
                                <div className="text_contact">
                                    <div className="fs-5 text-white-50">
                                        แจ้งเพิ่มรายวิชา แจ้งไฟล์ชีทสรุปมีปัญหา แจ้งปัญหาบัค หรือปัญหาอื่น ๆ
                                        <div className="fs-5 text-white-50 bg_bnt_contact">
                                            <a href="mailto:knowsharenote@gmail.com" className=' px-3 py-1'>Email</a>
                                            &nbsp; Knowsharenote@gmail.com
                                        </div>
                                        <div className="fs-5 text-white-50 bg_bnt_contact">
                                            <a href="https://www.facebook.com/KnowShareNote" className='px-3 p-2 '>Facebook</a>
                                            &nbsp; &nbsp; Knowsharenote
                                        </div>
                                        <div className="fs-5 text-white-50 bg_bnt_contact">
                                            <a href="https://line.me/th/" className='px-3 p-2'>Line Chatbot</a>
                                            &nbsp; &nbsp; Knowsharenote
                                        </div>
                                        <div className="fs-5 text-white-50 bg_bnt_contact text-center">
                                            <a href="/AboutKnowShearNote" className=' px-2 py-2 '>เงื่อนไขและข้อตกลงในการใช้งานเว็ปไซต์</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact_credit mt-5">
                        <div className=" credit_title text-center">
                            Credit & &nbsp;
                            <h className='title_blue'>License</h>
                        </div>
                        <div className="body_credit px-5">
                            <div className="credit_font ">
                                <div className="text-white-50 fs-4 mt-2">
                                    Font Family
                                </div>
                                <div className=' body_credit_font body_credit_font d-flex justify-content-center align-items-center ' style={{ width: 400 }}>

                                    <a href="https://fonts.google.com/share?selection.family=Kanit" style={{ marginLeft: 0 }}>Kanit</a>
                                    <a href="https://fonts.google.com/share?selection.family=Mitr">Mitr</a>
                                    <a href="https://fonts.google.com/share?selection.family=Poppins">Poppins</a>
                                </div>
                            </div>
                            <div className='det'></div>
                            <div className="text-white">
                                <div className="fs-4 d-flex justify-content-between" style={{ maxWidth: 380 }}>
                                    UI KIT
                                    <span class="material-symbols-outlined">
                                        app_badging
                                    </span>
                                </div>
                                <div className="fs-5 text-white-50">
                                    Zvonimir Juranko, Ankur_007 <br /> Amir Akbari
                                </div>
                            </div>
                            <div className="text-white my-4">
                                <div className="fs-34 d-flex justify-content-between" style={{ maxWidth: 380 }}>
                                    ICON
                                    <span class="material-symbols-outlined">
                                        description
                                    </span>
                                </div>
                                <div className="fs-5 text-white-50">
                                    Google Icon, Flaticon(Freepik)
                                </div>
                            </div>
                            <div className="text-white">
                                <div className="fs-4 d-flex justify-content-between" style={{ maxWidth: 380 }}>
                                    ART WORK
                                    <span class="material-symbols-outlined">
                                        blur_on
                                    </span>
                                </div>
                                <div className="fs-5 text-white-50">
                                    <a href="/StorySet" className='text_story text-white-50'>
                                        StorySet.com, 
                                    </a>
                                    &nbsp; Adobe color
                                </div>
                            </div>
                            <div className="det"></div>
                            <div className="fs-5 text-white text-center my-2" style={{ opacity: 0.7 }}>
                                Student Project EN811301/302 <br />
                                Advanced Computer Programming 2022
                            </div>
                            <div className="det"></div>
                            <div className="text_we">
                                <div className="fs-5">
                                    Aphidach Puratchaka
                                </div>
                                <div className="fs-5">
                                    Teerapong Kunasit
                                </div>
                                <div className="fs-5">
                                    Yotin Nuntasen
                                </div>
                                <div className="fs-4 text-white-50 mt-1">
                                    2023 | LecShare You
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center mt-4'>
                            <img src="../../../public/icon-temprade.svg" alt="" />
                        </div>


                    </div>

                </div>
                <div className="to_top_page pb-5">
                    <a href='#' className='circle'>
                        <span class="material-symbols-outlined">
                            arrow_upward
                        </span>
                    </a>

                </div>
                <Footer/>
            </div>


        </div>
    )
}

export default PageContact