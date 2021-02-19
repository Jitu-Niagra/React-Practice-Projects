import React from 'react'
import Card from './Card'
import './css/Practice.css'

function Practice() {
    return (
      <div>
        <h1 className="pracTitle" >Ivanny Projects</h1>
        <h3 className="projTitle">Profile cards</h3>
        <Card
          name={"Winnie Mandela"}
          title={"Software Deeveloper"}
          description={"Web Development,Graphic Design and Data Science"}
        />
        <Card
          name={"Mike Will"}
          title={"Network Engineer"}
          description={"Cisco, CCNA , Huawei Cloud"}
        />
        <Card
          name={"Ivanny Mogeni"}
          title={"Software Engineer"}
          description={"Electron,Java,Flutter"}
        />
      </div>
    );
}

export default Practice
