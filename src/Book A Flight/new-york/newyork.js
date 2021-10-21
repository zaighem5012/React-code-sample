import React from 'react'
import './newyork.css'
import Data from '../dtat.json'
import door from '../../assets/images/doorsoff.jpg'
import on from '../..//assets/images/on.png'
import Intro from '../..//assets/images/1.jpg'
import off from '../..//assets/images/off.png'
import Doorsoff from '../Doord Off/doorsoff';
import classic from '../../assets/images/classic.jpg'
import vip from '../../assets/images/vip.jpg'
import pf from '../../assets/images/private.jpg'
import grand from '../../assets/images/grand.jpg'
import badge from '../../assets/images/award3.png'
import aviator from '../../assets/images/aviator.jpg'
import july from '../../assets/images/2.jpg'
import light from '../../assets/images/4.jpg'
import high from '../../assets/images/3.jpg'
import year from '../../assets/images/4.jpg'
import river from '../../assets/images/5.jpg'
import Header from '../../components/header/header'
import DesignProjects from '../slider/slide'
const NewYork = () => {
    return (
        <main>
            <Header />
            <section className='bottom-border'>
                <h1 className='main-heading'>SELECT YOUR NEW YORK HELICOPTER FLIGHT</h1>
                <div className='selection'>
                    <div className='Left-Door'>
                        <h1 className='title'>DOORS-OFF</h1>
                        <div className='nyc-experience'>
                            <Doorsoff bg={door}
                                topimg={on}
                                header={Data['doors-off'].experience['product-price-header']}
                                slashed={Data['doors-off'].experience['product-price-slashed']}
                                actual={Data['doors-off'].experience['product-price-actual']}
                                seat={Data['doors-off'].experience['product-price-seat']}
                                name={Data['doors-off'].experience['info-name']}
                                configuration={Data['doors-off'].experience['info-configuration']}
                                Details1={Data['doors-off'].experience['Details1']}
                                Details2={Data['doors-off'].experience['Details2']} />
                        </div>
                        <div className='nyc-classic'>
                            <Doorsoff bg={classic}
                                topimg={off}
                                header={Data['doors-off'].experience['product-price-header']}
                                slashed={Data['doors-off'].experience['product-price-slashed']}
                                actual={Data['doors-off'].experience['product-price-actual']}
                                seat={Data['doors-off'].experience['product-price-seat']}
                                name={Data['doors-off'].experience['info-name']}
                                configuration={Data['doors-off'].experience['info-configuration']}
                                Details1={Data['doors-off'].experience['Details1']}
                                Details2={Data['doors-off'].experience['Details2']} />
                        </div>
                    </div>
                    <div className='Right-Door'>
                        <h1 className='title'>DOORS-ON</h1>
                        <div className='nyc-intro round-border'>
                            <Doorsoff bg={Intro}
                                topimg={off}
                                logo={badge}
                                header={Data['doors-off'].nyc['product-price-header']}
                                slashed={Data['doors-off'].nyc['product-price-slashed']}
                                actual={Data['doors-off'].nyc['product-price-actual']}
                                seat={Data['doors-off'].nyc['product-price-seat']}
                                name={Data['doors-off'].nyc['info-name']}
                                configuration={Data['doors-off'].nyc['info-configuration']}
                                Details1={Data['doors-off'].nyc['Details1']}
                                Details2={Data['doors-off'].nyc['Details2']} />
                        </div>
                        <div className='nyc-vip round-border mg-top'>
                            <Doorsoff bg={vip}
                                logo={badge}
                                topimg={off}
                                header={Data['doors-off'].nyc['product-price-header']}
                                slashed={Data['doors-off'].nyc['product-price-slashed']}
                                actual={Data['doors-off'].nyc['product-price-actual']}
                                seat={Data['doors-off'].nyc['product-price-seat']}
                                name={Data['doors-off'].nyc['info-name']}
                                configuration={Data['doors-off'].nyc['info-configuration']}
                                Details1={Data['doors-off'].nyc['Details1']}
                                Details2={Data['doors-off'].nyc['Details2']} />
                        </div>
                        <div className='private-flight round-border mg-top'>
                            <Doorsoff bg={pf}
                                logo={badge}
                                topimg={off}
                                header={Data['doors-off'].nyc['product-price-header']}
                                slashed={Data['doors-off'].nyc['product-price-slashed']}
                                actual={Data['doors-off'].nyc['product-price-actual']}
                                seat={Data['doors-off'].nyc['product-price-seat']}
                                name={Data['doors-off'].nyc['info-name']}
                                configuration={Data['doors-off'].nyc['info-configuration']}
                                Details1={Data['doors-off'].nyc['Details1']}
                                Details2={Data['doors-off'].nyc['Details2']} />
                        </div>
                        <div className='vip-grand round-border mg-top'>
                            <Doorsoff bg={grand}
                                logo={badge}
                                topimg={off}
                                header={Data['doors-off'].nyc['product-price-header']}
                                slashed={Data['doors-off'].nyc['product-price-slashed']}
                                actual={Data['doors-off'].nyc['product-price-actual']}
                                seat={Data['doors-off'].nyc['product-price-seat']}
                                name={Data['doors-off'].nyc['info-name']}
                                configuration={Data['doors-off'].nyc['info-configuration']}
                                Details1={Data['doors-off'].nyc['Details1']}
                                Details2={Data['doors-off'].nyc['Details2']} />
                        </div>
                    </div>
                </div>
            </section>
            <section className='pakedges'>
                <h1 className='pkg-con'>PACKAGES</h1>
                <p className='con2'>Take advantage of our package deals and save hundreds</p>
                <div className='aviator'>
                    <Doorsoff bg={aviator}
                        topimg={off}
                        header={Data['doors-off'].experience['product-price-header']}
                        slashed={Data['doors-off'].experience['product-price-slashed']}
                        actual={Data['doors-off'].experience['product-price-actual']}
                        seat={Data['doors-off'].experience['product-price-seat']}
                        name={Data['doors-off'].experience['info-name']}
                        configuration={Data['doors-off'].experience['info-configuration']}
                        Details1={Data['doors-off'].experience['Details1']}
                        Details2={Data['doors-off'].experience['Details2']} />
                </div>
            </section>
            <section className='focus-flights'>
                <h1 className='pkg-con'>FOCUS FLIGHTS</h1>
                <p className='con2'>Focus-in on an extraordinary aerial photo op. Perfect for those looking<br />for something beyond our signature flight options.
                </p>
                <div className='focus-card'>
                    <div className='firework'>
                        <Doorsoff bg={july}

                            header={Data['doors-off'].experience['product-price-header']}
                            slashed={Data['doors-off'].experience['product-price-slashed']}
                            actual={Data['doors-off'].experience['product-price-actual']}
                            seat={Data['doors-off'].experience['product-price-seat']}
                            name={Data['doors-off'].experience['info-name']}
                            configuration={Data['doors-off'].experience['info-configuration']}
                            Details1={Data['doors-off'].experience['Details1']}
                            Details2={Data['doors-off'].experience['Details2']} />
                    </div>
                    <div className='firework'>
                        <Doorsoff bg={high}

                            header={Data['doors-off'].experience['product-price-header']}
                            slashed={Data['doors-off'].experience['product-price-slashed']}
                            actual={Data['doors-off'].experience['product-price-actual']}
                            seat={Data['doors-off'].experience['product-price-seat']}
                            name={Data['doors-off'].experience['info-name']}
                            configuration={Data['doors-off'].experience['info-configuration']}
                            Details1={Data['doors-off'].experience['Details1']}
                            Details2={Data['doors-off'].experience['Details2']} />
                    </div>
                    <div className='firework'>
                        <Doorsoff bg={light}

                            header={Data['doors-off'].experience['product-price-header']}
                            slashed={Data['doors-off'].experience['product-price-slashed']}
                            actual={Data['doors-off'].experience['product-price-actual']}
                            seat={Data['doors-off'].experience['product-price-seat']}
                            name={Data['doors-off'].experience['info-name']}
                            configuration={Data['doors-off'].experience['info-configuration']}
                            Details1={Data['doors-off'].experience['Details1']}
                            Details2={Data['doors-off'].experience['Details2']} />
                    </div>
                </div>
                <div className='focus-card dei'>
                    <div className='firework'>
                        <Doorsoff bg={year}

                            header={Data['doors-off'].experience['product-price-header']}
                            slashed={Data['doors-off'].experience['product-price-slashed']}
                            actual={Data['doors-off'].experience['product-price-actual']}
                            seat={Data['doors-off'].experience['product-price-seat']}
                            name={Data['doors-off'].experience['info-name']}
                            configuration={Data['doors-off'].experience['info-configuration']}
                            Details1={Data['doors-off'].experience['Details1']}
                            Details2={Data['doors-off'].experience['Details2']} />
                    </div>
                    <div className='firework'>
                        <Doorsoff bg={river}

                            header={Data['doors-off'].experience['product-price-header']}
                            slashed={Data['doors-off'].experience['product-price-slashed']}
                            actual={Data['doors-off'].experience['product-price-actual']}
                            seat={Data['doors-off'].experience['product-price-seat']}
                            name={Data['doors-off'].experience['info-name']}
                            configuration={Data['doors-off'].experience['info-configuration']}
                            Details1={Data['doors-off'].experience['Details1']}
                            Details2={Data['doors-off'].experience['Details2']} />
                    </div>
                </div>
            </section>
            <article className='raedy-ride'>
                <h1 className='pkg-con'>READY TO RIDE A HELICOPTER IN NEW YORK?</h1>
                <p className='con2'>Learn more about the New York aerial experience below</p>
                <div className='ride-content'>
                    <p>FlyNYON provides with the best helicopter rides over New York City. What better vantage point to conquer New York City than from thousands of feet in the air on a NYON helicopter ride? With panoramic views of New York’s best landmarks, FlyNYON ensures you make the most out of your helicopter photo flight as you fly over Manhattan’s skyscrapers. From the moment you arrive to our NYON terminal, our flight concierges share their tips for taking the best aerial photography content.</p>
                    <p className='rental'>If you are traveling and you were not able to bring your camera, our dedicated <a href='#'>camera rental desk</a> will ensure to provide tips as to what camera to use while flying. Our helicopter flights are designed for aerial photography, and it allows for its routes to be fully customized for passengers to capture the best photography.</p>
                    <p>Whether looking to fly over the Statue of Liberty, Empire State, Brooklyn Bridge, or World Trade Center, our doors-on & doors-off helicopter flights provide you with the most personable and safest helicopter experience possible. With no hidden fees like other helicopter tour companies in New York, from the moment you walk into FlyNYON's terminal to your time in the air, we seek to provide an impeccable and welcoming experience for memories to last a lifetime.</p>
                </div>
            </article>
         <DesignProjects/>
        </main>
    )
}
export default NewYork