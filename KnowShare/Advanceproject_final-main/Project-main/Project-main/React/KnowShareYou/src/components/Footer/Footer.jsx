import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './Footer.css'
function Footer() {

  return (
    <MDBFooter bgColor='white' className='text-center text-lg-start text-muted'>
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                ติดต่อเรา
              </h6>
              <a href="/" style={{ textDecoration: 'none' }}>
                <div className="text-dark fw-bold text-warning px-2 mb-0 text_footer clo fs-2" >
                  <p style={{ margin: 0 }}>KnowShare</p>

                  <b className=" text-primary">Note</b>
                </div>
              </a>
              <a href="mailto:knowsharenote@gmail.com" className='text_email '>KnowShareNote@mail.com</a>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>QUICK LINKS</h6>
              <p>
                <a href='#!' className='text-reset'>
                  หน้าแรก
                </a>
              </p>
              <p>
                <a href='/sheet' className='text-reset'>
                  ชีทสรุป
                </a>
              </p>
              <p>
                <a href='/upload' className='text-reset'>
                  อัพโหลด
                </a>
              </p>
              <p>
                <a href='/contact' className='text-reset'>
                  ติดต่อเรา
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>วิชาสุดฮิต</h6>
              <p>
                <a href='/sheet/calculus' className='text-reset'>
                  แคลคูลัส
                </a>
              </p>
              <p>
                <a href='/sheet/physics' className='text-reset'>
                  ฟิสิกส์
                </a>
              </p>
              <p>
                <a href='/sheet/english' className='text-reset'>
                  ภาษาอังกฤษ
                </a>
              </p>
              <p>
                <a href='/sheet/computer' className='text-reset'>
                  Computer
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 d-flex align-items-center justify-content-between link-footer'>Contact
                <a href='#'>
                <span class="material-symbols-outlined text-center">
                  expand_less
                </span>
                </a>
              </h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Khon Kaen University
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-2" />
                KnowShareNote
              </p>
              <p>
                <MDBIcon icon="phone" className="me-2" />
                <a href="https://www.facebook.com/KnowShareNote" className='text_email'>
                  facebook/KnowShare Note
                </a>
              </p>
              <p>
                <MDBIcon icon="print" className="me-2" />
                <a href="mailto:knowsharenote@gmail.com" className='text_email '>KnowShareNote@gmail.com</a>
              </p>
            
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center container p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  )
}

export default Footer