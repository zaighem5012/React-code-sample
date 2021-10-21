import React ,{useState} from 'react'
import './card.css'
import card1 from '../../assets/images/card-1.jpg'
import card2 from '../../assets/images/card-2.jpg'
import on from '../../assets/images/on.png'
import off from '../../assets/images/off.png'
import Button from '../buttons/button'
import '.././buttons/button.css'
const Cards = (props) => {
    const [DoorsOff, setDoorsOff] = useState(true);
    const [DoorsOn, setDoorsOn] = useState(false);
    const [PrivateFlights, setPrivateFlights] = useState(false);
    const [FocusFlights, setFocusFlights] = useState(false);
    const setdooroff = () => {
        setDoorsOff(true)
        setDoorsOn(false)
        setPrivateFlights(false)
        setFocusFlights(false)
    }
    const setdoorson = () => {
        setDoorsOff(false)
        setDoorsOn(true)
        setPrivateFlights(false)
        setFocusFlights(false)
    }
    const setprivateflights = () => {
        setDoorsOff(false)
        setDoorsOn(false)
        setPrivateFlights(true)
        setFocusFlights(false)
    }
    const setfocusflights = () => {
        setDoorsOff(false)
        setDoorsOn(false)
        setPrivateFlights(false)
        setFocusFlights(true)
    }
    return (

        <div className='card'>
            <div className='list'>
                <button  onClick={setdooroff} className={DoorsOff ? 'active' : ''}>DOORS-OFF</button>
                <button  onClick={setdoorson} className={DoorsOn ? 'active' : ''}>DOORS-ON</button>
                <button  onClick={setprivateflights} className={PrivateFlights ? 'active' : ''} >PRIATE FLIGHTS</button>
                <button onClick={setfocusflights} className={FocusFlights ? 'active' : ''} >FOCUS-FLIGHTS</button>
            </div>
            <div className='card-item'>
            <div className={DoorsOff ? 'show' : "hide"}>
                <div className='Experience'>
                        <img className="onScreenImage" src={on} alt='on'></img>
                        <img className="featuredImage" src={card1} alt='cccc'></img>
                        <div className='content1'>
                            <h1>NYC HELICOPTER EXPERIENCE</h1>
                            <h1><del>$298</del></h1>
                            <h1><i>$119/SEAT</i></h1>
                            <span>10 minutes door off flight</span>
                            <div class="card-btn">
                                <Button theme="default"><p>BOOK NOW</p></Button>
                                <Button theme="primary"><p>BUY NOW SCEHEDUALE LATER</p></Button>
                            </div>
                        </div>
                </div>
                <div className='Experience'>
                {/* <div className={DoorsOn ? 'show' : "hide"}> */}
                    <img className="onScreenImage" src={off} alt='on'></img>
                    <img className="featuredImage" src={card2} alt='cccc'></img>
                    <div className='content1'>
                        <h1>NYC HELICOPTER EXPERIENCE</h1>
                        <h1><del>$298</del></h1>
                        <h1><i>$119/SEAT</i></h1>
                        <span>10 minutes door off flight</span>
                        <div class="card-btn">
                            <Button theme="default"><p>BOOK NOW</p></Button>
                            <Button theme="primary"><p>BUY NOW SCEHEDUALE LATER</p></Button>
                        </div>
                        </div>
                </div>
            </div>
            </div>
            <div className='Experience'>
           <div className={DoorsOn ? 'show' : "hide"}>
                   <img className="onScreenImage" src={on} alt='on'></img>
                   <img className="featuredImage" src={card1} alt='cccc'></img>
                   <div className='content1'>
                       <h1>NYC HELICOPTER EXPERIENCE</h1>
                       <h1><del>$298</del></h1>
                       <h1><i>$119/SEAT</i></h1>
                       <span>10 minutes door off flight</span>
                       <div class="card-btn">
                           <Button theme="default"><p>BOOK NOW</p></Button>
                           <Button theme="primary"><p>BUY NOW SCEHEDUALE LATER</p></Button>
                       </div>
                   </div>
               </div>
           </div>
            <div className='Experience'>
            <div className={PrivateFlights ? 'show' : "hide"}>
            <img className="onScreenImage" src={off} alt='on'></img>
                    <img className="featuredImage" src={card2} alt='cccc'></img>
                    <div className='content1'>
                        <h1>NYC HELICOPTER EXPERIENCE</h1>
                        <h1><del>$298</del></h1>
                        <h1><i>$119/SEAT</i></h1>
                        <span>10 minutes door off flight</span>
                        <div class="card-btn">
                            <Button theme="default"><p>BOOK NOW</p></Button>
                            <Button theme="primary"><p>BUY NOW SCEHEDUALE LATER</p></Button>
                        </div>
                        </div>
               </div>
           </div>
           <div className='Experience'>
           <div className={FocusFlights ? 'show' : "hide"}>
                   <img className="onScreenImage" src={on} alt='on'></img>
                   <img className="featuredImage" src={card1} alt='cccc'></img>
                   <div className='content1'>
                       <h1>NYC HELICOPTER EXPERIENCE</h1>
                       <h1><del>$298</del></h1>
                       <h1><i>$119/SEAT</i></h1>
                       <span>10 minutes door off flight</span>
                       <div class="card-btn">
                           <Button theme="default"><p>BOOK NOW</p></Button>
                           <Button theme="primary"><p>BUY NOW SCEHEDUALE LATER</p></Button>
                       </div>
                   </div>
               </div>
           </div>
        </div>

    )
}
export default Cards