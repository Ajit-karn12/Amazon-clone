import React, { useContext } from 'react';
import './CheckOut.css';
import Grid from '@mui/material/Grid';
import CheckOutItem from './CheckOutItem';
import { CartContext } from '../PlaceOrder/CartContext';

function CheckOut(props) {
    const {item,size,increment} = useContext(CartContext);

    const cartValue = function(){
        let price = 0
        for (let i = 0; i < item.length; i++){
            price += parseInt(item[i].price) ;
        }
        return price;
    }
  return (
    <div className='checkout-body'>
       <Grid container>
       <Grid item={10}>
           <div className='checkout-container'>
               <div style={{fontSize:"24px", fontWeight:"bold", padding:"20px 0px 0px 20px"}}>Shopping Cart</div>
               <div>
               {
                   item.map((value) =>(
                    <CheckOutItem definition={value}/>
                   ))
               }
                  
                  {/* <CheckOutItem/>
                   <CheckOutItem/> */}
               </div>
           </div>
       </Grid>
        <Grid item={2}>
            <div style={{width:"300px",backgroundColor:"#ffffff",marginTop:"25px",height:"200px",padding:"20px"}}>
                <div style={{fontSize:"26px"}}>Subtotal ({size} items): <strong>{cartValue()}</strong></div>
                <div style={{padding:"25px"}}>
                    <button className='placeorder-button'>Proceed to Buy</button>
                </div>
            </div>
        </Grid>
       </Grid>
    </div>
  );
}

export default CheckOut;
