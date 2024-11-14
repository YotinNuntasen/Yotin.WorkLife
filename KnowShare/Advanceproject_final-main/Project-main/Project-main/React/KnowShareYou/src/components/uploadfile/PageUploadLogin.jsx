import React, { useState } from 'react'
import NavigationBars from '../barMenu/NavigationBars'
import '../../../bootstrap5/css/bootstrap.min.css'
import './PageUpload.css';
import Dropdown from 'react-bootstrap/Dropdown';
import FileBlock from './FileBlock';
import uuid from 'react-uuid';
import Footer from '../Footer/Footer';
import axios from 'axios';
// import { Dropdown } from 'semantic-ui-react'
function PageUploadLogin(props) {


  const [dataFIle, setDataFiles] = useState([{}]);
  const [choiceSubject, setChoiceSubject] = useState("เลือกหัววิชา");
  const [choice_chapter, setChoice_chapter] = useState("เลือกหัวข้อวิชา");
  const [choice_Time, setChoiceTime] = useState("เลือกปีการศึกษา");
  const [name_note, setNamenote] = useState("ชื่อชีทสรุป...");
  const [about_note,setAboutnote] = useState("ข้อมูลเพิ่มเติ่มเกี่ยวกับชีทสรุป...");
  const [Time, setTime] = useState(Date);

  // const [file, setFIle] = useState("")
  // const [userName, setuserName] = useState("")
  // const [time, setTime] = useState("")
  // const [image, setImage] = useState("")
  // const [semtime, setsemtime] = useState("")
  // const [year, setyear] = useState("")
  

  function handleChange(event) {
    let name = event.target.files[0].name;
    let type = event.target.files[0].type;
    let size = event.target.files[0].size;
    let path = "";
    console.log(`Selected file - ${event.target.files[0].name}`);
    console.log(`Selected file - ${event.target.files[0].size}`);
    console.log(`Selected file - ${type}`);

    if (type == 'image/png' || type == 'image/jpeg') {
      path = "../../../public/icon-png.svg"
      setHavePNG(false)
    } else {
      path = "../../../public/icon-pdf.svg"
      setHavePNG(true)
    }


    const data = {
      id: uuid(),
      name: name,
      path: path,
      size: humanFileSize(size)
    }
    const timer = {
      id: uuid(),
      Date:Date
    }

    setTime((item) => { 
      return[...item, timer]
    })
    console.log(`${Time}`)

    setDataFiles((item) => {
      return [...item, data]
    })
    console.log(`${dataFIle.size}`)
  }

  function humanFileSize(bytes, si = true, dp = 1) {
    const thresh = si ? 1000 : 1024;

    if (Math.abs(bytes) < thresh) {
      return bytes + ' Bytes';
    }

    const units = si
      ? ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
      : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
    let u = -1;
    const r = 10 ** dp;

    do {
      bytes /= thresh;
      ++u;
    } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);
    return bytes.toFixed(dp) + ' ' + units[u];
  }
  const drop_subject = [
    { id: 1, name: 'Calculus', value: '#calculus' },
    { id: 2, name: 'English', value: '#english' },
    { id: 3, name: 'Physics', value: '#physics' },
    { id: 4, name: 'computer', value: '#computer' }
  ]
  const drop_toppic_subject = [
    { id: 1, name: 'Calculus I', value: '#calculus i' },
    { id: 2, name: 'Calculus II', value: '#calculus ii' },
    { id: 3, name: 'Calculus III', value: '#calculus iii' },
    { id: 4, name: 'English I', value: '#english i' },
    { id: 5, name: 'English II', value: '#english ii' },
    { id: 6, name: 'English III', value: '#english iii' },
    { id: 7, name: 'Physics I', value: '#physics i' },
    { id: 8, name: 'Physics II', value: '#physics ii' },
    { id: 9, name: 'LabPhysics I', value: '#labphysics i' },
    { id: 10, name: 'LabPhysics I', value: '#labphysics ii' },
    { id: 11, name: 'ComputerProgramming', value: '#computerprogramming' },
    { id: 12, name: 'AdvanceComputerProgramming', value: '#advancecomputerprogrammingr' }
  ]
  const drop_time = [
    { id: 1, name: 'ปีการศึกษา 2565', value: '#2565' },
    { id: 2, name: 'ปีการศึกษา 2564', value: '#2564' },
    { id: 3, name: 'ปีการศึกษา 2563', value: '#2563' }

  ]
  const inputName = (event)=> {
    setNamenote(event.target.value)
  }

  const inputaboutNote = (event)=> {
    setAboutnote(event.target.value)
  }
  const selectedsubject = (event)=> {
    setChoiceSubject(event.target.value)
  }
  const selectedToppicsubject = (event)=> {
    setChoice_chapter(event.target.value)
  }
  const selectedtime = (event)=> {
    setChoiceTime(event.target.value)
  }

  const getData = async () => {
    await axios.get("http://localhost:3005/allnew").then((response) => {
      setDataShow(response.data);
    });
  };
  

  const [isChecked, setIsChecked] = useState(false);
  
  const handleCheckboxChange = (event) => {
    setIsChecked(!isChecked);
    //เชื่อมอัพโหลด
  }
  
  
  const [havaPNG, setHavePNG] = useState(true);
  const handleUploadClick = () => {
    if (isChecked && (dataFIle.length > 1)) {

      if (dataFIle.length > 3) {
        alert('อัพโหลดได้สูงสุด 3 ไฟล์');
      } else if(havaPNG) {
        alert('โปรดอัพโหลดไฟล์ รูปภาพด้วย');
      }else {
        axios.post("http://localhost:3005/create",)
        const allData =  {
        name_note:name_note,
        choiceSubject:choiceSubject,
        choice_chapter:choice_chapter,
        about_note:about_note,
        Time:Time,
        dataFIle:dataFIle,
        choice_Time:choice_Time
        }
        console.log(allData)
      }
      } else {
      if (dataFIle.length <= 1) {
        alert('กรุณาเลือกไฟล์');
      } 
      else
        alert('ยอมรับเงื่อนไข เพื่ออัพโหลดไฟล์');
    }
  }

  return (
    <div>
      <NavigationBars pg={"upload"}  />
      <div className="container">
        <div className="content pb-5">
          <div className="titleU d-flex fw-bold">
            <p>อัพโหลด</p>
            <p className='text-primary'>&nbsp; ชีทสรุป</p>
          </div>
          <div className="form_upload row">
            <div className="form_up col-lg-6 col-10">
              <div className="form_img">
                <form action="">
                  <div className="img_input text-center d-flex justify-content-center align-items-center  flex-column m-4">
                    <img src="../../../public/Upload/image-upload-animate_pink.svg" alt="" className=' img-fluid  ' />
                    <div className="title_inU mt-3">
                      <p className='fs-3'>Drop your image here</p>
                      <div className="d-flex justify-content-center">
                        <p className='fs-5'>or</p>
                        <h3 className='fs-3'>Browse</h3>
                      </div>
                    </div>
                  </div>
                  <input type="file" name="file-img" accept=".png, .jpeg, .pdf" className="input_img" onChange={handleChange} />
                </form>
              </div>
              <div className="form_files">
                <form action="form">
                  <div className="img_file text-center d-flex justify-content-center align-items-center  flex-column m-3">
                    <img src="../../../public/Upload/upload-animate_blue.svg" alt="" className=' img-fluid ' />
                    <div className="title_inU">
                      <p className='fs-3'>Drop your image here</p>
                      <div className="d-flex justify-content-center">
                        <p className='fs-5'>or</p>
                        <h3 className='fs-3'>Browse</h3>
                      </div>
                    </div>
                  </div>
                  <input type="file" name="file-files" accept="application/pdf" className='input_file' onChange={handleChange} />
                </form>
              </div>
            </div>
            <div className="form_filetype col-lg-6 col-1 ">
              <div className="form_dropbox d-flex flex-column justify-content-center">
                <select class="form_subject"  onChange={selectedsubject}>
                  <option  value="" disabled selected hidden>เลือกวิชา</option>
                  {drop_subject.map((e) => {
                    return <option className='tt'  value={e.value}>{e.name}</option>
                  })}
                </select>
                <select class="form_subject"  onChange={selectedToppicsubject}>
                  <option  value="" disabled selected hidden>เลือกหัวข้อวิชา</option>
                  {drop_toppic_subject.map((e) => {
                    return <option className='tt' value={e.value}>{e.name}</option>
                  })}
                </select>
                <select class="form_subject"  onChange={selectedtime}>
                  <option  value="" disabled selected hidden>เลือกปีการศึกษา</option>
                  {drop_time.map((e) => {
                    return <option className='tt' value={e.value}>{e.name}</option>
                  })}
                </select>

              </div>
              <div className="form_inputs">
                <form action="" className='d-flex flex-column justify-content-center align-content-center'>
                  {/* <input type="text" placeholder="รหัสวิชา . . ." className='form_id' /> */}
                  <input type="text" placeholder="ชื่อชีทสรุป . . ." className='form_fileName' onChange={inputName} />
                  {/* <input type="text" placeholder="ข้อมูลเพิ่มเติม เกี่ยวกับชีทสรุป . . ." className='form_detailFile' /> */}
                  <textarea name="describe" id="" cols="30" placeholder="ข้อมูลเพิ่มเติม เกี่ยวกับชีทสรุป . . ." rows="10" className='form_detailFile' onChange={inputaboutNote}></textarea>
                </form>
              </div>
              <div className="file-block">
                {dataFIle.length > 1 ?
                  dataFIle.map((e) => {
                    return <FileBlock name={e.name} fileType={e.path} size={e.size} id={e.id} />
                  })
                  : dataFIle.clear
                }
              </div>
              <div className=' d-flex flex-column justify-content-center align-items-center' >
                <div className="checkbox d-flex">
                  <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} name="checkUpload" id="1" />
                  <div className="ms-2 fs-6">
                    ยอมรับข้อตกลง และ
                    <a href="/AboutKnowShearNote">เงื่อนไขการให้บริการ</a> 
                    ของ KnowShare Note
                  </div>
                </div>
                <button className='form_buttonU mt-2' onClick={handleUploadClick} disabled={!isChecked} >อัพโหลด</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default PageUploadLogin
