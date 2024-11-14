import React,{useState, useEffect} from 'react'

import '../../../../../bootstrap5/css/bootstrap.min.css'
import '../../PageSheet.css'
import CardSheet from '../../card/CardSheet'
import Footer from '../../../Footer/Footer'
import {useNavigate } from 'react-router'
import NavigationBarLogout from '../../../barMenu/NavigationBarLogout'
function English1() {
    
    const imgelement = "../../public/English/English_element.svg";
    const nameSubjectEN = "ENGLISH";
    const nameSubjectTH = "ภาษาอังกฤษ I";
    const nameSubject = "ค้นหา ชีทสรุปของ" + nameSubjectTH;
    const dataCalculus = [
        { id: 1, name: 'นาย ', pathImg: 'https://cdn.discordapp.com/attachments/1093665791016177674/1093677505619177472/image.png', title: 'Eng_I', describe: 'แบบฝึกหัด 1 ข้อ2 ข้อ 3 ข้อ 4 ข้อ 5' },
    ]
    const navigate = useNavigate();
    const back = () => {
        navigate(-1);
    }
    const [profile, setProfile] = useState(null);
    useEffect(() => {
        setProfile(localStorage.getItem('name'));
    
    });
    useEffect(() => {
        if (profile == null) {
            window.open('/login', '_self');
        }
    }, [profile]);
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
                        <div className="fs-4 title-english py-2 px-3">
                            {nameSubjectEN}
                        </div>
                        <div className=" title2 ">
                            {nameSubjectTH}
                        </div>
                        <img src={imgelement} className=' img-fluid '  />
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

export default English1