import React, { useState, useEffect } from 'react'
import '../../../../bootstrap5/css/bootstrap.min.css'
import ModalImgCard from './ModalImgCard'

function CardSheet(props) {
    const name = props.name
    const pathImg = props.pathImg
    const title = props.title
    const describe = props.describe
    const [modalShow, setModalShow] = React.useState(false);
    const [profile, setProfile] = useState(null);
    useEffect(() => {
        setProfile(localStorage.getItem('name'));
    });

    return (
        <div className='col-lg-4 col-sm-6 col-12  px-3 mb-5 d-flex justify-content-center'>
            <div className="card py-2 w-62" style={{ width: `20rem` }}>
                <div className="img_card " onClick={() => setModalShow(true)}>
                    <img src={pathImg} className="card-img-top mt-1 img-fluid " alt="..." />
                </div>
                <div className="card-body card_bd">
                    <h5 className="card-title fs-4">{title}</h5>
                    <p className="card-text fs-6">{describe}</p>
                    <div className="card_download d-flex align-content-center justify-content-between">
                        <div className="fs-7" style={{ opacity: 0.7 }}>
                            <p className='s-1'>อัพโหลดโดย</p>
                            <p className='s-2'>{name}</p>
                            <p className='s-3'>สถานะ นักศึกษา</p>
                        </div>

                        <a href="#" download={pathImg} >
                            <span class="material-symbols-outlined">
                                download
                            </span>
                        </a>

                    </div>
                </div>
            </div>
            <ModalImgCard
                show={modalShow}
                onHide={() => setModalShow(false)}
                img={pathImg}
                title={title}
            />
        </div>

    )
}

export default CardSheet