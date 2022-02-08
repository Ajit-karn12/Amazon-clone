import React, { useEffect, useState ,id} from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
import './RightSidePanel.css';

function RightSidePanel(props) {

const[ListofProduct,setListOfProducts] = useState([]);


useEffect(()=>{

  let List =[
    {id:1, name:"iphone 10", rating:"56786",price:"50999" ,image:"https://ik.imagekit.io/ilmq4vzs0q1/amazon-image/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__Y5f9TMJGMu.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1643556896176"},
    {id:2, name:"iphone 11", rating:"78786",price:"60999" ,image:"https://ik.imagekit.io/ilmq4vzs0q1/amazon-image/amazon-image/mobiles/71LRBr1aLNS._AC_UL640_FMwebp_QL65__9aixrr7geYh.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1643556899005"},
    {id:3, name:"Samsung", rating:"35786",price:"70999" ,image:"https://ik.imagekit.io/ilmq4vzs0q1/amazon-image/amazon-image/mobiles/91dLTREdG1L._AC_UL640_FMwebp_QL65__5-YbStnucoM.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1643556897670"},
    {id:4, name:"iphone 13", rating:"89086",price:"90999" ,image:"https://ik.imagekit.io/ilmq4vzs0q1/amazon-image/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65__Ba-XemsEK.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1643556896618"},
    {id:5, name:"MI", rating:"89086",price:"90999" ,image:"https://ik.imagekit.io/ilmq4vzs0q1/amazon-image/amazon-image/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65__GnSEw_bPS6.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1643556895233"},
    {id:6, name:"MI", rating:"89086",price:"90999" ,image:"https://ik.imagekit.io/ilmq4vzs0q1/amazon-image/amazon-image/mobiles/71KVeQql77S._AC_UL640_FMwebp_QL65__tys2in9fK.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1643556895389"},
    {id:7, name:"One Plus", rating:"89086",price:"90999" ,image:"https://ik.imagekit.io/ilmq4vzs0q1/amazon-image/amazon-image/mobiles/51PuFBgBK4L._AC_UL640_FMwebp_QL65___1__EFqybwbdr.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1643556894429"},
    {id:8, name:"One Plus", rating:"89086",price:"90999" ,image:"https://ik.imagekit.io/ilmq4vzs0q1/amazon-image/amazon-image/mobiles/61PDbUd1VaL._AC_UL640_FMwebp_QL65__Ij5kQNx4BPJ.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1643556894865"},
  ]
  setListOfProducts(List);
})

  return (
<div className='right-side-menu-container'>
   {/* <Product name='iPhone 11' price='50,999' rating='35,878' image='https://ik.imagekit.io/ilmq4vzs0q1/amazon-image/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__Y5f9TMJGMu.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1643556896176'/>
    <Product/>
    <Product/>
    <Product/>
    <Product/>
    <Product/> */}

     {
       ListofProduct.map((item)=>(
         <Link to={`/order/`+ item.id}>
         <Product details={item}/>
         </Link>
       ))
     }
    </div>
  );
}

export default RightSidePanel;
