import React from 'react'
import Button from '../buttons/button'

import './award.css'

const Award = () => {
    return(
        <div className='award-sec'>
        <div className='award'>
        <h1>FLYNYON CREATES ENDURING MEMORIES<br/>
        THROUGH HELICOPTER EXPERIENCES</h1>
        </div>
        <div className='btn-sec'>
            <div>
             <Button theme="default"><p>Book Now</p><p>DOOR AND DOOR OFF</p></Button>
             </div>
             <div>
             <Button theme="primary"><p>BUY NOW SCEHEDUAL LATER</p></Button>
             </div>
        </div>
        </div>
    )
}
export default Award