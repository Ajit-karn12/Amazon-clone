import React from 'react';
import LeftSidePanel from './LeftSide/LeftSidePanel';
import RightSidePanel from './RightSide/RightSidePanel';
import './DisplayContent.css';

function DisplayContent() {
  return(
    <div className='display-container-container'>
        <div>
        <LeftSidePanel/>
        </div>
        <div>
            <RightSidePanel/>
        </div>
    </div>
  );
}

export default DisplayContent;
