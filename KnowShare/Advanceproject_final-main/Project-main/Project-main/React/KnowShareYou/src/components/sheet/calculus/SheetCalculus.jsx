import React from 'react'
import NavigationBars from '../../barMenu/NavigationBars'
import '../../../../bootstrap5/css/bootstrap.min.css'
import '../PageSheet.css'
import { useNavigate } from 'react-router'
import CardSubject from '../card/CardSubject'
import Footer from '../../Footer/Footer'
function SheetCalculus() {
    const navigate = useNavigate();
    const back = () => {
        navigate(-1);
    }
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
                            <div className="fs-4 title1 py-2 px-3">
                                CALCULAS
                            </div>
                            <div className=" title2 ">
                                แคลคูลัส
                            </div>
                            <img src="../../public/calculus/Calculus_element.svg" alt="" className=' img-fluid ' />
                        </div>

                        <div className="title_header_subject d-flex justify-content-between align-items-center">

                            <img src="../../../public/subject-calculus.svg" alt="" className=' img-fluid m-3' />

                            <div className="d-flex  justify-content-center align-items-center">
                                <div className="text_description">
                                    <div className="fs-3">
                                        แคลคูลัส
                                    </div>
                                    <div className="fs-5 description">
                                        เป็นสาขาหลักของคณิตศาสตร์ซึ่งพัฒนามาจากพีชคณิต เรขาคณิต และปัญหาทางฟิสิกส์ แคลคูลัสมีต้นกำเนิด จากสองแนวคิดหลัก คือ <br /> แคลคูลัสเชิงอนุพันธ์ (Differential Calculus) แคลคูลัสเชิงปริพันธ์ (Integral Calculus)
                                    </div>
                                    <div className="wiki_img mt-4">
                                        <a href="https://simple.wikipedia.org/wiki/Calculus" className='d-flex align-items-center'>

                                            <img src="../../../public/icon-wikipedia.png" alt="wikipedia" className=' img-fluid ' />
                                            <div className="fs-4">
                                                Wikipedia
                                                <div className="fs-6 text-black-50">
                                                    Calculus
                                                </div>
                                            </div>
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="body_card_subject ">
                        <div className="row">
                        <CardSubject subject="แคลคูลัส I" img="../../../public/calculus/Calculus_I_element.svg" link="/sheet/calculus/calculus1"/>
                        <CardSubject subject="แคลคูลัส II" img="../../../public/calculus/Calculus_II_element.svg" link="/sheet/calculus/calculus2" />
                        <CardSubject subject="แคลคูลัส III" img="../../../public/calculus/Calculus_III_element.svg" link="/sheet/calculus/calculus3"/>
                    </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default SheetCalculus
