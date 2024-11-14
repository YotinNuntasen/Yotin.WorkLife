import { useState,useEffect } from 'react'
import { Route, BrowserRouter, Routes} from 'react-router-dom';

import './App.css';
import LoginPage from './components/login/LoginPage';
import PageHome from './components/PageHome';
import PageUploadLogin from './components/uploadfile/PageUploadLogin';
import PageSheet from './components/sheet/PageSheet';
import NotPage from './components/notpage/NotPage';
import NotLogin from './components/login/NotLogin';
import PageSubjects from './components/sheet/PageSubjects';

import ProfileUser from './components/login/logout/ProfileUser';
import PageContact from './components/contact/PageContact';
import TermForUse from './components/TermForUse/TermForUse';
import SheetCalculus from './components/sheet/calculus/SheetCalculus';
import Calculus1 from './components/sheet/calculus/pagecalculus/Calculus1';
import Calculus2 from './components/sheet/calculus/pagecalculus/Calculus2';
import Calculus3 from './components/sheet/calculus/pagecalculus/Calculus3';
import SheetPhysic from './components/sheet/physic/SheetPhysic';
import Physic1 from './components/sheet/physic/pagephysic/Physic1';
import Physic2 from './components/sheet/physic/pagephysic/Physic2';
import PhysicLab1 from './components/sheet/physic/pagephysic/PhysicLab1';
import PhysicLab2 from './components/sheet/physic/pagephysic/PhysicLab2';
import SheetEnglish from './components/sheet/english/SheetEnglish';
import English1 from './components/sheet/english/pageEnglish/English1';
import English2 from './components/sheet/english/pageEnglish/English2';
import English3 from './components/sheet/english/pageEnglish/English3';
import English4 from './components/sheet/english/pageEnglish/English4';
import SheetComputer from './components/sheet/computer/SheetComputer';
import Computer1 from './components/sheet/computer/pagecomputer/Computer1';
import Computer2 from './components/sheet/computer/pagecomputer/Computer2';
import StorySet from './components/TermForUse/StorySet';

function App() {
 


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PageHome/>}/>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/upload' element={<PageUploadLogin/>}/>
          <Route path='/upload/notlogin' element={<NotLogin/>}/>
          <Route path='/sheet' element={<PageSubjects/>}/>
          
          {/* <Route path='/nonelogin' element={<NotLogin/>}/> */}
         <Route path='/profile' element={<ProfileUser/>}/>
          <Route path='/contact' element={<PageContact/>}/>
          <Route path='/AboutKnowShearNote' element={<TermForUse/>}/>
          <Route path='/StorySet' element={<StorySet/>}/>
          <Route path='/sheet/calculus' element={<SheetCalculus/>}/>
          <Route path='/sheet/calculus/calculus1' element={<Calculus1/>}/>
          <Route path='/sheet/calculus/calculus2' element={<Calculus2/>}/>
          <Route path='/sheet/calculus/calculus3' element={<Calculus3/>}/>

          <Route path='/sheet/physics' element={<SheetPhysic/>}/>
          <Route path='/sheet/physic/physic1' element={<Physic1/>}/>
          <Route path='/sheet/physic/physic2' element={<Physic2/>}/>
          <Route path='/sheet/physic/physiclab1' element={<PhysicLab1/>}/>
          <Route path='/sheet/physic/physiclab2' element={<PhysicLab2/>}/>

          <Route path='/sheet/english' element={<SheetEnglish/>}/>
          <Route path='/sheet/english/english1' element={<English1/>}/>
          <Route path='/sheet/english/english2' element={<English2/>}/>
          <Route path='/sheet/english/english3' element={<English3/>}/>
          <Route path='/sheet/english/english4' element={<English4/>}/>

          <Route path='/sheet/computer' element={<SheetComputer/>}/>
          <Route path='/sheet/computer/java' element={<Computer1/>}/>
          <Route path='/sheet/computer/python' element={<Computer2/>}/>
          <Route path='*' element={<NotPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App