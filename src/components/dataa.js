import React, { useState } from 'react';
import '../App.css'
import classiccarousel from '../images/classic-carousel.jpg'
import loomcarousel from '../images/loom-carousel.jpg'
import zencarousel from '../images/zen-carousel.jpg'
import mattressesdata from '../mattresses.json'
import ProductRating from './productrating';
function Mattress(props) {
    const [classic, setclassiccarousel] = useState(true);
    const [loom, setloom] = useState(false);
    const [zen, setzen] = useState(false);
    const setclassic = () => {
        setclassiccarousel(true)
        setloom(false)
        setzen(false)
    }
    const setlooms = () => {
        setclassiccarousel(false)
        setloom(true)
        setzen(false)
    }
    const setzens = () => {
        setclassiccarousel(false)
        setloom(false)
        setzen(true)
    }
    const countIncreamenter = () => {
        props.countIncreamenter()
    }
    return (
        <div className="mattress">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className={classic ? 'show' : "hide"}>
                            <img src={classiccarousel} alt='classic' />
                        </div>
                        <div className={loom ? 'show' : "hide"}>
                            <img src={loomcarousel} alt='classic' />
                        </div>
                        <div className={zen ? 'show' : "hide"}>
                            <img src={zencarousel} alt='classic' />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <p className="choose-mattress">Choose Your Mattress</p>
                        <div className="mattress-type">
                            <p>SELECT MATTRESS TYPE</p>
                            <button onClick={setclassic} className={classic ? 'active' : ''}> Saatva Classic</button>
                            <button onClick={setlooms} className={loom ? 'active' : ''}> Loom & leaf</button>
                            <button onClick={setzens} className={zen ? 'active' : ''}> Zenhaven</button>
                        </div>
                        <div>
                            <div className={classic ? 'show' : "hide"}>
                                <span>{mattressesdata.mattresses.classic.name}</span>
                                <p>{mattressesdata.mattresses.classic.price}</p>
                                <ProductRating ProductRating={mattressesdata.mattresses.classic.reviewRating} />
                            </div>

                            <div className={loom ? 'show' : "hide"}>
                                <span>{mattressesdata.mattresses.loom.name}</span>
                                <p>{mattressesdata.mattresses.loom.price}</p>
                                <ProductRating ProductRating={mattressesdata.mattresses.loom.reviewRating} />
                            </div>
                            <div className={zen ? 'show' : "hide"}>
                                <span>{mattressesdata.mattresses.zen.name}</span>
                                <p>{mattressesdata.mattresses.zen.price}</p>
                                <ProductRating ProductRating={mattressesdata.mattresses.zen.reviewRating} />
                            </div>
                        </div>
                        <button className="cart-btn" onClick={countIncreamenter}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Mattress