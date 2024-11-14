import React, { useState, useEffect } from 'react'
import '../../../../../bootstrap5/css/bootstrap.min.css'
import '../../PageSheet.css'
import CardSheet from '../../card/CardSheet'
import Footer from '../../../Footer/Footer'
import { useNavigate } from 'react-router'
import NavigationBarLogout from '../../../barMenu/NavigationBarLogout'
function Calculus1() {
    const nameSubject = "ค้นหา ชีทสรุปของ" + "แคลคูลัส I";
    const imgelement = "../../public/calculus/Calculus_element.svg";
    const dataCalculus = [
        { id: 1, name: 'นาย เดชาธร ศรีวิชัย', pathImg: '../../public/FilePDF/Cal_q1-1.pdf', title: 'เวกเตอร์', describe: 'แบบฝึกหัด 1 ข้อ 1 ข้อ 2 ข้อ 3 ข้อ 4 ข้อ 5 ข้อ 6 ข้อ 7 ข้อ 8 ข้อ 9 ข้อ 10' },
        { id: 2, name: 'นาย Sippakorn Worawattananukul', pathImg: '../../public/FilePDF/Cal_q1-2.pdf', title: 'เรขาคณิตในสามมิติ', describe: 'แบบฝึกหัด 2 ข้อ 1 ข้อ 2 ข้อ 3 ข้อ 4 ข้อ 5 ข้อ 6 ข้อ 7 ข้อ 8 ข้อ 9 ข้อ 10' },
        { id: 3, name: 'นาย Nontawat Laokote', pathImg: '../../public/FilePDF/Cal_q3.pdf', title: 'ระบบสมการเชิงเส้น', describe: 'แบบฝึกหัด 3 ข้อ 1 ข้อ 2 ข้อ 3 ข้อ 4 ข้อ 5 ข้อ 6 ข้อ 7 ข้อ 8 ข้อ 9 ข้อ 10' }

    ]
    const navigate = useNavigate();
    const back = () => {
        navigate(-1); s
    }
    const [profile, setProfile] = useState(null);
    // window.onload = setProfile(localStorage.getItem('name'));
    useEffect(() => {
        setProfile(localStorage.getItem('name'));
        console.log(profile);
    });

    return (
        <div>
            {
                profile == null ? alert('กรุณาเข้าสู่ระบบ') :
                    <div div className='container' >
                        <NavigationBarLogout pg={"sheet"} />
                        <div className="sheet_subject w-100">
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
                                    แคลคูลัส I
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
            }

        </div >
    )
}

export default Calculus1