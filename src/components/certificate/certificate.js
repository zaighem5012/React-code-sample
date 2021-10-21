import React from 'react'
import './certificate.css'
import Award1 from '../../assets/images/award1.png'
import Award2 from '../../assets/images/award2.png'
import Award3 from '../../assets/images/award3.png'
const Cert = () => {
    return(
        <div className='cer-content'>
           <a href='#'> HOW WE DO THINGS DIFFERENTLY</a>
            <div className="cer-item">
            <img alt='log' src={Award1}></img>
            <img alt='log' src={Award2}></img>
            <img alt='log' src={Award3}></img>
            </div>
        </div>
    )
}
export default Cert