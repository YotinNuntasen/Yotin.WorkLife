import React, { useState } from "react";
import Card from '../card/Card';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PageSheet.css";
import CardSubject from "../card/Card";
function OtherSubject() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    const settings_calculus = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };
    return (
        <div className="other_subject ">
            <div className="card_header_subject">
                <div className="card_subject">
                    <div className="title_header mb-3 text-center d-flex flex-column justify-content-center align-items-center">
                        <div className="fs-3 mt-4 ">
                            <div className="title-english px-3">
                                ENGLISH
                            </div>
                        </div>
                        <div className="fs-1 d-flex">
                            รวม&nbsp;
                            <div style={{ color: `#356DFF` }}>
                                ภาษาอังกฤษ
                            </div>
                        </div>
                    </div>
                    <div className="card_subject_body d-flex flex-column align-items-center justify-content-center">
                        <Slider  {...settings}>
                        <CardSubject subject="ภาษาอังกฤษ I" img="../../../public/English/English_I_element.svg" link="/sheet/english/english1"/>
                        <CardSubject subject="ภาษาอังกฤษ II" img="../../../public/English/English_II_element.svg" link="/sheet/english/english2" />
                        <CardSubject subject="ภาษาอังกฤษ III" img="../../../public/English/English_III_element.svg" link="/sheet/english/english3"/>
                        <CardSubject subject="ภาษาอังกฤษ IV" img="../../../public/English/English_IV_element.svg" link="/sheet/english/english4"/>
                        </Slider>
                    </div>
                </div>
            </div>
            <div className="card_header_subject">
                <div className="card_subject">
                    <div className="title_header mb-3 text-center d-flex flex-column justify-content-center align-items-center">
                        <div className="fs-3 mt-4 ">
                            <div className="title-computer px-3">
                                COMPUTER
                            </div>
                        </div>
                        <div className="fs-1 d-flex">
                            รวม คอมพิวเตอร์
                           
                        </div>
                    </div>
                    <div className="card_subject_body d-flex flex-column align-items-center justify-content-center">
                        <Slider  {...settings_calculus}>
                        <CardSubject subject="Java Programming" img="../../../../public/Computer/Java_element.svg" link="/sheet/computer/java" />
                        <CardSubject subject="Pyhotn Programming" img="../../../../public/Computer/Python_element.svg" link="/sheet/computer/python" />
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OtherSubject