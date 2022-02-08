import React, { Component } from 'react'
import './NavBar.css'
import logo from '../../assets/img/logo.png';
import amazon_shopping_app from '../../assets/img/amazon_shopping_app.png';
import { CartContext } from '../PlaceOrder/CartContext';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    static contextType = CartContext;

    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        const {item,size,increment} = this.context
        console.log(size,"size")
        return ( 
        <div>
            <div className="navbar-container">
                <div className="navbar-logo">
                <img src={logo} alt="logo" />
                </div>
                <div className="navbar-locator">
                <div className="navbar-locator-image"></div>
                <div className="navbar-location">Bangalore</div>
                </div>
                <div className="search-container">
                    <div >
                        <select className="navbar-dropdown">
                            <option value="All">All</option>
                            <option value="Alexa">Alexa</option>
                            <option value="Books">Books</option>
                            <option value="Baby">Baby</option>
                            <option value="Beauty">Beauty</option>
                            <option value="Clothes">Clothes</option>
                        </select>
                    </div>
                    <div>
                        <input type="text" className="navbar-searchbox"/>
                    </div>
                    <div className="navbar-searchboxdiv">
                        <div className="seach-icon"></div>
                    </div>
                </div>
                <div className="navbar-signin navbar-text">
                <div style={{fontSize: "12px"}}>Hello, sign In</div>
                <div style={{fontWeight: "500"}}>Account & Lists</div>
                </div>
                <div className="navbar-orders navbar-text">
                <div style={{fontSize: "12px"}}>Returns</div> 
                <div style={{fontWeight: "500"}}>& Order</div>
                </div>
                <div className="navbar-cart navbar-text">
                    <div className="cart-image"></div>
                    <div className="cart-item">{size}</div>
                   <div className="navbar-text-cart">Cart</div> 
                </div>

            </div>
            <div className="navbar-footer-section">
                <div className="menu-bar">
                   <div className="menu-bar-image"></div>
                   <div style={{fontWeight:"500",fontSize:"14px",padding:"3px"}}>All</div>
                </div>
                <div className="navbar-footer-text">Fresh</div>
                <div className="navbar-footer-text">
                    <Link to='/display'>Mobiles</Link>
                </div>
                <div className="navbar-footer-text">Amazon Pay</div>
                <div className="navbar-footer-text">Gift Cards</div>
                <div className="navbar-footer-text">Buy Again</div>
                <div className="navbar-footer-text">Health, Household & Personal Care</div>
                <div className="navbar-footer-text">Home Improvement</div>
                <div className="app-icon-section">
                    <img src={amazon_shopping_app} alt="app icon" 
                        className="app-icon-image"
                    />
                    <p>Shopping made easy | Download the app</p>
                </div>
            </div>
        </div>

         );
    }
}
 
export default NavBar;