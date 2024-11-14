import React from 'react'

import '../../../../../bootstrap5/css/bootstrap.min.css'
import '../../PageSheet.css'
import CardSheet from '../../card/CardSheet'
import Footer from '../../../Footer/Footer'
import {useNavigate } from 'react-router'
import NavigationBarLogout from '../../../barMenu/NavigationBarLogout'
function Computer1() {
    
    const imgelement = "../../public/Computer/Subject-computer.svg";
    const nameSubjectEN = "COM PRO";
    const nameSubjectTH = "การเขียนโปรแกรมคอมพิวเตอร์";
    const nameSubject = "ค้นหา ชีทสรุปของ" + nameSubjectTH;
    const dataCalculus = [
        { id: 1, name: 'นาย ธนพล พรหมสุข', pathImg: 'https://www.engdict.com/data/dict/media/images_public/subje-00069988637337225708768578_normal.png', title: 'แบบฝึกหัด 1', describe: 'แบบฝึกหัด 1 ข้อ 1 ข้อ 2 ข้อ 3 ข้อ 4 ข้อ 5 ข้อ 6 ข้อ 7 ข้อ 8 ข้อ 9 ข้อ 10' },
        { id: 2, name: 'นาย ธนพล พรหมสุข', pathImg: 'https://cdn1.byjus.com/wp-content/uploads/2019/03/differential-calculus-700x430.png', title: 'แบบฝึกหัด 2', describe: 'แบบฝึกหัด 2 ข้อ 1 ข้อ 2 ข้อ 3 ข้อ 4 ข้อ 5 ข้อ 6 ข้อ 7 ข้อ 8 ข้อ 9 ข้อ 10' },
        { id: 3, name: 'นาย ธนพล พรหมสุข', pathImg: 'https://s3-ap-southeast-1.amazonaws.com/tv-prod/photo/150129-large.png', title: 'แบบฝึกหัด 3', describe: 'แบบฝึกหัด 3 ข้อ 1 ข้อ 2 ข้อ 3 ข้อ 4 ข้อ 5 ข้อ 6 ข้อ 7 ข้อ 8 ข้อ 9 ข้อ 10' },
    ]
    const navigate = useNavigate();
    const back = () => {
        navigate(-1);
    }
    return (
        <div>
            <div className='container'>
                <NavigationBarLogout pg={"sheet"} />
                <div className="sheet_subject w-100">
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
                        <img src={imgelement} alt="" className=' img-fluid ' />
                    </div>
                    <div className="search_subject d-flex align-items-center justify-content-between">
                        <input type="text" className='w-10' placeholder={nameSubject} maxLength={20} />
                        <span class="material-symbols-outlined" style={{ cursor: 'pointer' }} onClick={() => { window.location.reload() }}>
                            search
                        </span>
                    </div>
                    <div className="download_file">
                        <div className="row">
                            {dataCalculus.map((e) => {
                                return <CardSheet name={e.name} pathImg={e.pathImg} title={e.title} describe={e.describe} />
                            })
                            }
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Computer1
