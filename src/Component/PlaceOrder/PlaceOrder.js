import React, { useEffect, useState, useContext} from 'react';
import './PlaceOrder.css';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import { Paper } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { CartContext } from './CartContext';

function PlaceOrder(props) {
    const {item,size,increment} = useContext(CartContext);
    const { id } = useParams()
    console.log(id,":id")
    const [productDetails,setProductDetails] = useState([]);

    const addToCart = function(){
        increment(productDetails);
    }

    useEffect(()=>{

        //api call
        let List =[
            {
                "id":1,
                "name":"Apple iPhone 12 (64GB) - Green",
                "rating":"34565",
                "review":"1000",
                "emi":"2401",
                "delivery":"Feb 4 - 7",
                "price":"50,9999",
                "status":"In Stock",
                "sold by":"Aj electronics",
                "image":"https://ik.imagekit.io/ilmq4vzs0q1/amazon-image/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__Y5f9TMJGMu.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1643556896176",
                "about":[
                    "6.1-inch (15.5 cm diagonal) Super Retina XDR display","Ceramic Shield, tougher than any smartphone glass",
                    "A14 Bionic chip, the fastest chip ever in a smartphone",
                    "Advanced dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Deep Fusion, Smart HDR 3,4K Dolby Vision HDR recording",
                    "12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording",
                    "Industry-leading IP68 water resistance",
                    "Supports MagSafe accessories for easy attach and faster wireless charging",
                    "iOS with redesigned widgets on the Home screen, all-new App Library,App Clips and more",
                ]
            },
            {
                "id":2,
                "name":"Apple iPhone 12 (64GB) - Green",
                "rating":"34565",
                "review":"1000",
                "emi":"2401",
                "delivery":"Feb 4 - 7",
                "price":"50,9999",
                "status":"In Stock",
                "sold by":"Aj electronics",
                "image":"https://ik.imagekit.io/ilmq4vzs0q1/amazon-image/amazon-image/mobiles/71LRBr1aLNS._AC_UL640_FMwebp_QL65__9aixrr7geYh.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1643556899005",
                "about":[
                    "6.1-inch (15.5 cm diagonal) Super Retina XDR display","Ceramic Shield, tougher than any smartphone glass",
                    "A14 Bionic chip, the fastest chip ever in a smartphone",
                    "Advanced dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Deep Fusion, Smart HDR 3,4K Dolby Vision HDR recording",
                    "12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording",
                    "Industry-leading IP68 water resistance",
                    "Supports MagSafe accessories for easy attach and faster wireless charging",
                    "iOS with redesigned widgets on the Home screen, all-new App Library,App Clips and more",
                ]
            },
            {
                "id":3,
                "name":"Apple iPhone 12 (64GB) - Green",
                "rating":"34565",
                "review":"1000",
                "emi":"2401",
                "delivery":"Feb 4 - 7",
                "price":"50,9999",
                "status":"In Stock",
                "soldby":"Aj electronics",
                "image":"https://ik.imagekit.io/ilmq4vzs0q1/amazon-image/amazon-image/mobiles/91dLTREdG1L._AC_UL640_FMwebp_QL65__5-YbStnucoM.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1643556897670",
                "about":[
                    "6.1-inch (15.5 cm diagonal) Super Retina XDR display","Ceramic Shield, tougher than any smartphone glass",
                    "A14 Bionic chip, the fastest chip ever in a smartphone",
                    "Advanced dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Deep Fusion, Smart HDR 3,4K Dolby Vision HDR recording",
                    "12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording",
                    "Industry-leading IP68 water resistance",
                    "Supports MagSafe accessories for easy attach and faster wireless charging",
                    "iOS with redesigned widgets on the Home screen, all-new App Library,App Clips and more",
                ]
            },

            {id:4, name:"iphone 10", rating:"56786",price:"50999" ,image:"https://ik.imagekit.io/ilmq4vzs0q1/amazon-image/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__Y5f9TMJGMu.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1643556896176"},
            {id:5, name:"iphone 11", rating:"78786",price:"60999" ,image:"https://ik.imagekit.io/ilmq4vzs0q1/amazon-image/amazon-image/mobiles/71LRBr1aLNS._AC_UL640_FMwebp_QL65__9aixrr7geYh.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1643556899005"},
            {id:6, name:"Samsung", rating:"35786",price:"70999" ,image:"https://ik.imagekit.io/ilmq4vzs0q1/amazon-image/amazon-image/mobiles/91dLTREdG1L._AC_UL640_FMwebp_QL65__5-YbStnucoM.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1643556897670"},
            {id:7, name:"iphone 13", rating:"89086",price:"90999" ,image:"https://ik.imagekit.io/ilmq4vzs0q1/amazon-image/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65__Ba-XemsEK.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1643556896618"},
            {id:8, name:"MI", rating:"89086",price:"90999" ,image:"https://ik.imagekit.io/ilmq4vzs0q1/amazon-image/amazon-image/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65__GnSEw_bPS6.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1643556895233"},
            {id:9, name:"MI", rating:"89086",price:"90999" ,image:"https://ik.imagekit.io/ilmq4vzs0q1/amazon-image/amazon-image/mobiles/71KVeQql77S._AC_UL640_FMwebp_QL65__tys2in9fK.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1643556895389"},
            {id:10, name:"One Plus", rating:"89086",price:"90999" ,image:"https://ik.imagekit.io/ilmq4vzs0q1/amazon-image/amazon-image/mobiles/51PuFBgBK4L._AC_UL640_FMwebp_QL65___1__EFqybwbdr.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1643556894429"},
            {id:11, name:"One Plus", rating:"89086",price:"90999" ,image:"https://ik.imagekit.io/ilmq4vzs0q1/amazon-image/amazon-image/mobiles/61PDbUd1VaL._AC_UL640_FMwebp_QL65__Ij5kQNx4BPJ.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1643556894865"},
        ]
        //fake api
        let item = List.filter ( item => {
            if(item.id == id) return item;
        })
        console.log(item);
        setProductDetails(item[0]);
    },[]);

  return (
    <div>
        <Grid container>
            <Grid item xs={5}>
                <img src={productDetails?.image}
                    className='placeorder-image'
                />
            </Grid>
            <Grid item xs={4}>
                <div className='placeorder-description'>
                    <div style={{fontSize:"24px",lineHeight:"32px",fontWeight: 500}}> {productDetails?.name} </div>
                    <div>
                     <Rating name="read-only" value="4" readOnly style={{fontSize:"20px"}} />
                      {productDetails?.rating} ratings | {productDetails?.review}+ answered questions
                    </div>
                      <hr></hr>
                    <div>
                       <div className='text-gap'>Price:	<span className='pricetag'>₹{productDetails?.price}</span></div>
                       <div className='text-gap'>FREE delivery: <strong>
                       {productDetails?.delivery}</strong></div>
                       <div className='text-gap'>EMI starts at {productDetails?.emi}. No Cost EMI available </div>
                       <div className='text-gap' style={{color:"#007600",fontSize:"20px"}}>{productDetails?.status}</div>
                       <div className='text-gap'>Sold by <strong>{productDetails?.soldby}</strong> and Fullfiled by Amazon.
                       </div>
                       <br></br>
                       <div className='text-gap' style={{fontSize:"24px"}}>About this item</div>
                       <div>
                       <ul>
                       {
                           productDetails?.about !== undefined ?
                           productDetails.about.map((item)=>(
                            <li>{item}</li>
                           )) : <span></span>
                           
                       }
                          
                       </ul>

                          {/* <ul>
                               <li>6.1-inch (15.5 cm diagonal) Super Retina XDR display</li>
                               <li>Ceramic Shield, tougher than any smartphone glass</li>
                               <li>A14 Bionic chip, the fastest chip ever in a smartphone</li>
                               <li>Advanced dual-camera system with 12MP Ultra Wide and
                               Wide cameras; Night mode, Deep Fusion, Smart HDR 3, 
                               4K Dolby Vision HDR recording</li>
                               <li>12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording</li>
                               <li>Industry-leading IP68 water resistance</li>
                               <li>Supports MagSafe accessories for easy attach and faster wireless charging</li>
                               <li>iOS with redesigned widgets on the Home screen, all-new App Library, 
                               App Clips and more</li>
                           </ul> */}
                       </div>
                    </div>
                </div>
            </Grid>
            <Grid item xs={3}>
                <Paper variant="outlined" className='placeorder-order'>
                     <div style={{padding:"10px"}}>
                     <div><strong>Without Exchange</strong></div>
                     <div>50,999</div>
                     </div>
                   
                    <button className='placeorder-button add-cart' onClick={addToCart}>Add to Cart</button>
                   
                    <Link to="/checkout">
                    <button className='placeorder-button buy-now'>Buy Now</button>
                    </Link>
                </Paper>
            </Grid>
        </Grid>
    </div>
  );
}

export default PlaceOrder;
