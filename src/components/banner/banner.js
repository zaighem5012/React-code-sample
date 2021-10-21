import React from 'react'
import './banner.css'
import Bannerimg from '../../assets/images/banner-img.jpg';
const Banner = () =>{
    return(
        <div className='banner'>
            <img src={Bannerimg} alt="Logo" />
        </div>
    )
}
export default Banner
