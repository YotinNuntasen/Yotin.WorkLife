import React from 'react'
import NavigationBars from '../../barMenu/NavigationBars'
import '../../../../bootstrap5/css/bootstrap.min.css'
import '../PageSheet.css'
import { useNavigate } from 'react-router'
import CardSubject from '../card/CardSubject'
import Footer from '../../Footer/Footer'
function SheetPhysic() {
    const navigate = useNavigate();
    const back = () => {
        navigate(-1);
    }
    const nameSubjectEN = "PHYSICS";
    const nameSubjectTH = "ฟิสิกส์";
    const titleSubject  = "ฟิสิกส์เป็นความรู้พื้นฐานที่นำไปใช้ในการพัฒนาเทคโนโลยี เกี่ยวกับการผลิต และเครื่องใช้ต่าง ๆ เพื่ออำนวยความสะดวกแก่มนุษย์ ตัวอย่างเช่น การนำความรู้พื้นฐานทางด้านแม่เหล็กไฟฟ้า ไปใช้ในอุปกรณ์อิเล็กทรอนิกส์ต่าง ๆ (โทรทัศน์ วิทยุ คอมพิวเตอร์ โทรศัพท์มือถือ ฯลฯ) อย่างแพร่หลาย";
    const linkWIKI = "https://th.wikipedia.org/wiki/%E0%B8%9F%E0%B8%B4%E0%B8%AA%E0%B8%B4%E0%B8%81%E0%B8%AA%E0%B9%8C";
    const namelink = "Physics";
    const imgElemnt = "../../../../../public/physic/Physics_element.svg";
    const imgSubject = "../../../../../public/physic/Subject-physic.svg";

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
                            <div className="fs-4 title-physic py-2 px-3">
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
                        <CardSubject subject="ฟิสิกส์ I" img="../../../../public/physic/Physics_I_element.svg" link="/sheet/physic/physic1"/>
                        <CardSubject subject="ฟิสิกส์ II" img="../../../../public/physic/Physics_II_element.svg" link="/sheet/physic/physic2" />
                        <CardSubject subject="แลปฟิสิกส์ I" img="../../../../public/physic/Physics_lab_I_element.svg" link="/sheet/physic/physiclab1"/>
                        <CardSubject subject="แลปฟิสิกส์ II" img="../../../../public/physic/Physics_lab_II_element.svg" link="/sheet/physic/physiclab2"/>
                    </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default SheetPhysic