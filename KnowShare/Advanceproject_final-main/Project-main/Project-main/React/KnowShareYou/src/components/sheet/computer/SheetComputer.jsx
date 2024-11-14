import React from 'react'
import NavigationBars from '../../barMenu/NavigationBars'
import '../../../../bootstrap5/css/bootstrap.min.css'
import '../PageSheet.css'
import { useNavigate } from 'react-router'
import CardSubject from '../card/CardSubject'
import Footer from '../../Footer/Footer'
function SheetComputer() {
    const navigate = useNavigate();
    const back = () => {
        navigate(-1);
    }
    const nameSubjectEN = "COM PRO";
    const nameSubjectTH = "Computer Programming";
    const titleSubject  = "เป็นขั้นตอนการเขียน ทดสอบ และดูแลซอร์สโค้ดของโปรแกรมคอมพิวเตอร์ ซึ่งซอร์สโค้ดนั้นจะเขียนด้วยภาษาโปรแกรม ขั้นตอนการเขียนโปรแกรมต้องการความรู้ในหลายด้านด้วยกัน เกี่ยวกับโปรแกรมที่ต้องการจะเขียน และขั้นตอนวิธีที่จะใช้";
    const linkWIKI = "https://th.wikipedia.org/wiki/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B8%A1%E0%B8%84%E0%B8%AD%E0%B8%A1%E0%B8%9E%E0%B8%B4%E0%B8%A7%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C";
    const namelink = "Computer Programming";
    const imgElemnt = "../../../../../Computer/Compro_element.svg";
    const imgSubject = "../../../../../public/Computer/Subject-computer.svg";

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
                            <div className="fs-4 title-computer py-2 px-3">
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
                    
                    <div className="body_card_subject p-5 compro">
                        <div className="row">
                        <CardSubject subject="Java Programming" img="../../../../public/Computer/Java_element.svg" link="/sheet/computer/java" />
                        <CardSubject subject="Pyhotn Programming" img="../../../../public/Computer/Python_element.svg" link="/sheet/physic/python" />
                    </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default SheetComputer
