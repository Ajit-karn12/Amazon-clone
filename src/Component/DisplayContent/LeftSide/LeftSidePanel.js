import React from 'react';
import './LeftSidePanel.css';

function LeftSidePanel() {
  return (
    <div className='left-side-menu-container'>
    <divt className='leftside-header'>
      Brand
    </divt>
    <div className='leftside-brandname'>
      <label className='brandname'>
        <input type='checkbox' value="apple"/>Apple
      </label>
      <label className='brandname'>
        <input type='checkbox' value="apple"/>Samsung
      </label>
      <label className='brandname'>
        <input type='checkbox' value="apple"/>Mi
      </label>
    </div>
    </div>
  );
}

export default LeftSidePanel;
