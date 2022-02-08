import React, { Component } from 'react'
import AdvertisementFour from './AdvertisementFour/AdvertisementFour';
import AdvertisementOne from './AdvertisementOne/AdvertisementOne';
import './MainPage.css';

class MainPage extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (  
            <div className='main-page-container'>
            <div className='main-page-item-container'>
                <AdvertisementOne/>
                <AdvertisementFour/>
                <AdvertisementOne/>
                <AdvertisementOne/>
                <AdvertisementFour/>
                <AdvertisementOne/>
                <AdvertisementOne/>
                <AdvertisementFour/>
                <AdvertisementOne/>
            </div>
            </div>
        );
    }
}
 
export default MainPage;