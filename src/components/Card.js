import React from 'react'


import './css/Card.css'

function Card(props) {
    return (
      <div className="card">
        <div className="profPic">
          
        </div>
        <h1 className="name">{props.name}</h1>
        <p className="lead">{props.title}</p>
        <div style={{width:"fit-content"}}>
            <p className="desText">
         {props.description}
        </p>
        </div>
        
      </div>
    );
}

export default Card
