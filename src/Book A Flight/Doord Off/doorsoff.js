import React from 'react'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import './doors.css'
const Doorsoff = (props) => {
    return (
        <div className='door-com'>
            <a href='#'>
                <div className='NYC-EXPERIENCE' style={{ backgroundImage: `url(${props.bg})` }}>
                    <div className='top-image'>
                        <img src={props.topimg} alt='off'></img>
                    </div>
                    <div class="product-price">
                        <span class="product-price-header">{props.header}</span>
                        <span class="product-price-slashed">{props.slashed}</span>
                        <span class="product-price-actual">{props.actual}</span>
                        <span class="product-price-seat">{props.seat}</span>
                    </div>
                    <div class="product-card-info">
                        <p class="info-name">{props.name}</p>
                        <p class="info-configuration">{props.configuration}</p>
                        <div class="product-details">
                            <p class="product-details-item"><AccessAlarmIcon /><span>{props.Details1}</span></p>
                            <div>
                                <p class="product-details-item">< LocationOnIcon /><span>{props.Details2}</span></p>
                            </div>
                        </div>
                        <img src={props.logo} alt='ll' className='badge' />
                        <button><span>Book Now</span></button>
                    </div>
                </div>
            </a>
        </div>

    )
}
export default Doorsoff