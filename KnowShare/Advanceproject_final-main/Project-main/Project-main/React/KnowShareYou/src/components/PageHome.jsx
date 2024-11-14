import React from 'react'
import NavigationBars from './barMenu/NavigationBars'
import '../../bootstrap5/css/bootstrap.min.css'
import './Home.css'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import Footer from './Footer/Footer'
// import Footer from './barMenu/Footer/Footer'

function PageHome() {
  return (
    <div className='page_home'>
      <NavigationBars pg={"home"} />
      <div className="container">
        <div className="contain_home">
          <div className=" d-flex justify-content-center mb-5">
            <div className="row align-items-center justify-content-between content_title bg-black" >
              <div className="title col col-md ">
                <p className='title_share'>
                  แชร์
                  <a href="/sheet">ชีทสรุป</a>
                  <br />
                  ให้กับ เพื่อนที่รู้ใจ
                </p>
                <div className="title_des">
                  <p className='fs-5'>
                    <p className='fw-bold text-wrap fs-4'>Know share note </p>
                      
                      <div style={{opacity:0.6}}>เว็บไซต์รวบรวม และแชร์ชีทสรุปมากมาย หลากหลายวิชาไม่ว่าจะเป็น แคลคูลัส ฟิสิกส์ หรือภาษาอังกฤษ สำหรับนักศึกษาคณะวิศวกรรมศาสตร์ มหาวิทยาลัยขอนแก่น
                    </div>
                  </p>

                </div>
                <div className="bnt-link row-col-12 mt-2 order-2">
                  <a href="/sheet" >
                    <div className='bnt-sheet py-2 col m-1'>
                      ชีทสรุป ในเว็ปไซต์
                    </div>
                  </a>
                  <a href="/upload" >
                    <div className='bnt-upload col m-1'>อัพโหลดชีท สรุปของคุณ</div>
                  </a>
                </div>
              </div>
              <div className="title_img  order-1 col-md">
                <Image src="../../public/icon-pagehome.svg" className='img-fluid' />
                {/* // <img src="../../public/icon-pagehome.svg" alt="" /> */}
              </div>
            </div>
          </div>
          <div className="subject_link">
            <div className="title_subject d-flex align-items-center flex-column  ">
              <p className='title_text_subjects'>วิชาสุดฮิต</p>
              <p className=' title_choice_subject s fs-1 m-1 fs-2'>
                เลือกวิชา ที่คุณ<p style={{ color: '#356DFF' }}>ชื่นชอบ</p>
              </p>
            </div>
            <div className="d-flex flex-wrap align-items-start justify-content-center " >
              <div className="choice_subject col-xxl-3 col-lg-3 col-md-6 col-4 m-4">
                <a href="/sheet/calculus">
                  <Image src='../../public/icon-calculus.svg' className='img-fluid' style={{ width: 170 }} />
                </a>
                <div className='text_subject fs-5'>แคลคูลัส</div>
                <p style={{ opacity: 0.6 }}>วิชาแห่งการคำนวน ที่สามารถนำไปประยุกต์ ใช้ได้หลายอย่าง ในการเรียนรู้</p>

              </div>
              <div className="choice_subject col-xxl-3 col-lg-3 col-md-6 col-4 m-4">
                <a href="/calculus">
                  <Image src='../../public/icon-physics.svg' className='img-fluid' style={{ width: 170 }} />
                </a>
                <div className='text_subject fs-5'>ฟิสิกส์</div>
                <p style={{ opacity: 0.6 }}>ฟิสิกส์พบได้ในชีวิตประจำวัน ทดลองและพิสูจน์กันเป็นว่าเล่น</p>
              </div>
              <div className="choice_subject col-xxl-3 col-lg-3 col-md-6 col-4 m-4">
                <a href="/english">
                  <Image src='../../public/icon-eng.svg' className='img-fluid' style={{ width: 170 }} />
                </a>
                <div className='text_subject fs-5'>ภาษาอังกฤษ</div>
                <p style={{ opacity: 0.6 }}>ภาษาอังกฤษฝึกไว้ ได้ใช้ในอนาคต ไม่เสียแรงที่เรียน</p>
              </div>
              <div className="choice_subject col-xxl-3 col-lg-3 col-md-6 col-4 m-4 ">
                <a href="/computer">
                  <Image src='../../public/icon-computer.svg' className='img-fluid' style={{ width: 172 }} />
                </a>
                <div className='text_subject fs-5' >Computer Programming</div>
                <p style={{ opacity: 0.6 }}>สกิลใหม่ที่ควรมี ในยุค 2023 ยอดฮิต และไม่ตกเทรน</p>
              </div>
            </div>
            
          </div>
        </div>
        <div className='mt-5'>
          <Footer/>
        </div>
      </div>

    </div>
  )
}

export default PageHome
