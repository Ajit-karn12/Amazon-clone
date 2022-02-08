import React from 'react';
import './RightSidePanel.css'
import Rating from '@mui/material/Rating';
import getSymbolFromCurrency from 'currency-symbol-map';

function Product(props) {
  return (
    <div className='product-container'>
        <div className='product-image'>
            <img src={props.details.image} 
             height='300px'/>
        </div>
        <div className='product-name'>
            {props.details.name}
        </div>
        <div className='product-rating'>
        <Rating name="read-only" value="4" style={{fontSize:"20px"}} readOnly />
            {props.details.rating}
        </div>
        <div className='product-price'>
        {getSymbolFromCurrency('INR')}
           {props.details.price}
        </div>
    </div>
  );
}

export default Product;
