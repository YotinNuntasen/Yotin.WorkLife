import React  from 'react'
import '../../../../bootstrap5/css/bootstrap.min.css'
import '../PageSheet.css'
function CardSubject(props) {

  return (
    <div className='col-lg-4 col-sm-6 col-12  px-3 mb-5 d-flex justify-content-center'>
      <div className="card-subject py-1 w-62" style={{ width: `23rem` }}>
        <div className="card_subject_img p-3" >
          <img src={props.img} className="card-img-top mt-1 img-fluid " alt="..." />
        </div>
        <div className="car_subject d-flex flex-column align-content-between p-2 ps-3">
          <h className="card-title fs-2">{props.subject}</h>
          <div className="card_next d-flex align-content-center justify-content-between">
            <div className="fs-7" >
              <h>ไฟล์สรุปของแคลคูลัส I</h>
            </div>
            <a href={props.link}  >
              <span class="material-symbols-outlined">
                arrow_right_alt
              </span>
            </a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CardSubject
