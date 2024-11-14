import React from 'react'
import '../../../../bootstrap5/css/bootstrap.min.css'
import '../PageSheet.css'
function Notfile() {
    return (
        <div className='container d-flex justify-content-center align-items-center'>
            <div className="not_fileUpload">
                <div className="fs-1 contact_h text-center pt-5">
                    ยังไม่มี&nbsp;
                    <h style={{ color: `#356DFF` }}>ไฟล์</h>
                    ชีทสรุปของวิชานี้
                </div>
                <div className="title_contact d-flex">
                    <img src="../../../public/Subject/Notfile.svg" alt="asdf" style={{ maxWidth: `50%` }} />
                    <div className='d-flex justify-content-center align-items-start mt-2 w-100'>
                        <div className="text_not_file text-center" >
                            <div className="fs-5 m-2 text-white d-flex justify-content-center align-items-center flex-column">
                                อัพโหลด ชีทสรุปเลย !!!
                                <div className="fs-6 text-white-50 bg_bnt_contact">
                                    <a href="/upload" className='px-3 p-2 d-flex justify-content-center align-items-center'>
                                        <div className="fs-6">
                                            Upload File
                                        </div>
                                    </a>
                                    &nbsp; &nbsp; Knowsharenote
                                </div>
                                <div className="fs-6 text-white-50 bg_bnt_contact">
                                    <a href="https://line.me/th/" className='px-3 p-2 d-flex justify-content-center align-items-center'>Contact Us</a>
                                    &nbsp; &nbsp; Knowsharenote
                                </div>
                                <div className="fs-6 text-white-50 bg_bnt_contact text-center">
                                    <a href="/AboutKnowShearNote" className=' px-2 py-2 d-flex justify-content-center align-items-center'>เงื่อนไขและข้อตกลงในการใช้งานเว็ปไซต์</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notfile
