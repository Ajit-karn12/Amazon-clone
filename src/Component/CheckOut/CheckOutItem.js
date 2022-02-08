import React from 'react';
import './CheckOut.css'

function CheckOutItem(props) {
  return (
    <div>
        <div style={{display:"flex", border:"1px solid #E7E7E7",width:"95%",height:"250px",margin:"25px"}}>
        <div style={{margin:"25px"}}>
            <img src={props.definition.image} alt=""
                height="200px"
            />
        </div>
        <div style={{margin:"20px"}}> 
            <div style={{fontSize:"20px"}} className='textgap'>{props.definition.name}</div>
            <div style={{fontWeight:"bold"}} className='textgap'>{props.definition.price}</div>
            <div className='textgap'>{props.definition.status}</div>
        </div>
        </div>
       
    </div>
  );
}

export default CheckOutItem;
