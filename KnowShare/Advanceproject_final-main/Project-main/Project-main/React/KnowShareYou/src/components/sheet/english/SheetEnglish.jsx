import React from 'react'
import NavigationBars from '../../barMenu/NavigationBars'
import '../../../../bootstrap5/css/bootstrap.min.css'
import '../PageSheet.css'
import { useNavigate } from 'react-router'
import CardSubject from '../card/CardSubject'
import Footer from '../../Footer/Footer'
function SheetEnglish() {
    const navigate = useNavigate();
    const back = () => {
        navigate(-1);
    }
    const nameSubjectEN = "ENGLISH";
    const nameSubjectTH = "ภาษาอังกฤษ";
    const titleSubject  = "เป็นภาษาในกลุ่มภาษาเจอร์แมนิกตะวันตกที่ใช้ครั้งแรกในอังกฤษสมัยต้นยุคกลาง และปัจจุบันเป็นภาษาที่ใช้กันแพร่หลายที่สุดในโลก ประชากรส่วนใหญ่ในหลายประเทศ รวมทั้ง สหราชอาณาจักร สหรัฐอเมริกา แคนาดา ออสเตรเลีย ไอร์แลนด์ นิวซีแลนด์ และประเทศในแคริบเบียน พูดภาษาอังกฤษเป็นภาษาที่หนึ่ง ภาษาอังกฤษเป็นภาษาแม่ที่มีผู้พูดมากที่สุดเป็นอันดับสามของโลก";
    const linkWIKI = "https://th.wikipedia.org/wiki/%E0%B8%A0%E0%B8%B2%E0%B8%A9%E0%B8%B2%E0%B8%AD%E0%B8%B1%E0%B8%87%E0%B8%81%E0%B8%A4%E0%B8%A9https://th.wikipedia.org/wiki/%E0%B8%A0%E0%B8%B2%E0%B8%A9%E0%B8%B2%E0%B8%AD%E0%B8%B1%E0%B8%87%E0%B8%81%E0%B8%A4%E0%B8%A9";
    const namelink = "English";
    const imgElemnt = "../../../../../public/English/English_element.svg";
    const imgSubject = "../../../../../public/English/Subject-english.svg";

    return (
        <div>
            <NavigationBars pg={"sheet"} />
            <div className="container">
                <div className="d-flex justify-content-center align-content-center flex-column">

                    <div className="head_subject">
                        <button className="icon-back" onClick={back} >
                            <span class="material-symbols-outlined">
                                arrow_back
                            </span>
                        </button>

                        <div className="sheet_title d-flex justify-content-center flex-column align-items-center pt-4">
                            <div className="fs-4 title-english py-2 px-3">
                                {nameSubjectEN}
                            </div>
                            <div className=" title2 ">
                                {nameSubjectTH}
                            </div>
                            <img src={imgElemnt} alt="" className=' img-fluid ' />
                        </div>

                        <div className="title_header_subject d-flex justify-content-between align-items-center">

                            <img src={imgSubject} alt="" className=' img-fluid m-3' />

                            <div className="d-flex  justify-content-center align-items-center">
                                <div className="text_description">
                                    <div className="fs-3">
                                        {nameSubjectTH}
                                    </div>
                                    <div className="fs-5 description">
                                        {titleSubject}
                                    </div>
                                    <div className="wiki_img mt-4">
                                        <a href="https://simple.wikipedia.org/wiki/Calculus" className='d-flex align-items-center'>

                                            <img src="../../../public/icon-wikipedia.png" alt="wikipedia" className=' img-fluid ' />
                                            <div className="fs-4">
                                                Wikipedia
                                                <div className="fs-6 text-black-50">
                                                    {namelink}
                                                </div>
                                            </div>
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="body_card_subject p-5">
                        <div className="row">
                        <CardSubject subject="ภาษาอังกฤษ I" img="../../../../public/English/English_I_element.svg" link="/sheet/english/english1"/>
                        <CardSubject subject="ภาษาอังกฤษ II" img="../../../../public/English/English_II_element.svg" link="/sheet/english/english2" />
                        <CardSubject subject="ภาษาอังกฤษ III" img="../../../../public/English/English_III_element.svg" link="/sheet/english/english3"/>
                        <CardSubject subject="ภาษาอังกฤษ IV" img="../../../../public/English/English_IV_element.svg" link="/sheet/english/english4"/>
                    </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default SheetEnglish
