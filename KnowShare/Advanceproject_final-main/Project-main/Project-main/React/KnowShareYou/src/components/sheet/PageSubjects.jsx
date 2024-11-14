import React from 'react'
import NavigationBars from '../barMenu/NavigationBars'


function PageSubjects() {
    const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <NavigationBars pg={"sheet"}/>
        <div className="container">
               
               <a href="/sheet/calculus"> calculus</a>
                <a href="/sheet/physics"> physics</a>
                <a href="/sheet/english"> english</a>
                <a href="/sheet/computer"> programming</a>
        </div>  
    </div>
  )
}

export default PageSubjects
