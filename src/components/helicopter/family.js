import React from 'react'
import Heli from '../../assets/images/helicopter.jpg'
import './family.css'
const Family = () =>{
    return(
        <div className='family'>
             <hr></hr>
            <div className='container'>
               
                <div className='fam-content'>
                <div className='img-sec'>
        <figure>
            <img src={Heli} alt='heli'></img>
        </figure>
        </div>
        <div className='img-con'>
            <h1>THE FLYNYON FAMILY TRADITION</h1>
            <p>Our inspiration to design and share the ultimate helicopter experience is deeply rooted in three generations of aviation heritage. We proudly create enduring memories, one sweeping view at a time.</p>
            <button className='btn'> 
       <p>DOORS ON OR DOORS OFF</p>
            <h2>BOOK NOW</h2>
            </button>
        </div>
        </div>
        </div>
        </div>
    )
}
export default Family