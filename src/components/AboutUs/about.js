import React from 'react'
import team1 from '../../assets/images/team1.png'
import team2 from '../../assets/images/team2.png'
import team3 from '../../assets/images/team3.png'
import team4 from '../../assets/images/team4.png'
import team5 from '../../assets/images/team5.png'
import team6 from '../../assets/images/team6.png'
import team7 from '../../assets/images/team7.png'
import team8 from '../../assets/images/team8.png'
import team9 from '../../assets/images/team9.png'
import staff from '../../assets/images/staff.jpg'
import banvideo from '../../assets/video/aboutVideo.mp4'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import './about.css'
import Banner from '../banner/banner'
import Header from '../header/header'
import Cards from '../cards/card'
import Footer from '../Footer/footer'

const AboutUs = () => {
    return (
        <div className='about-us'>
            <Banner />
            <Header />
            <header className='ban-head'>
                <div className='video-banner'>
                    <video autoPlay muted loop className="ban-video">
                        <source src={banvideo} />
                    </video>
                </div>
                <div className='ban-con'>
                    <h1 className='photo'>THE FLYNYON PHOTO EXPERIENCE</h1>
                    <p className='professional'>Professional aerial photography services accessible to everyone.</p>
                    <a href='https://youtu.be/sJz-x0Nvm-o' className='play-icon'><PlayCircleOutlineIcon /></a>
                </div>
            </header>
            <section className='content'>
                <div className='intro'>
                    <h1 className='intro-h'>FlyNYON was founded by aviation experts with a combined 101 years of flight experience in the helicopter industry.</h1>
                    <p className='intro-p'>We make professional aerial photography services accessible to everyone by providing a crowdsourced aerial experience. Whether you want to snap Instagram photos on your iPhone, or you want to capture incredible aerial content for your portfolio: we've got a variety of options for you.</p>
                    <h1 className='intro-h'>Top Four Reasons Contributing to FlyNYON's Success As An Industry Leader</h1>
                    <p className='intro-p'>Since inception in 2012, FlyNYON has flown over 500,000 passengers. FlyNYON’s CEO & Founder Patrick K. Day, a third generation military veteran and aviator, has combined his industry expertise with an innovative way of thinking. By embracing the power of social media, technology, customer care, and direct-to-consumer marketing, FlyNYON has helped expand aerial experiences to an entirely new audience... </p>
                    <h1 className='intro-h'>No two flights are the same.</h1>
                    <p className='intro-p'>Variables in time of day, seasons, weather, and a custom flight plan have photographers flying with us time and time again. Each photo flight is tailored to what you would like to see. Want to go high or low? Want to focus on a specific building or landmark? Take your photography to new heights with FlyNYON.</p>
                    <h1 className='intro-h'>Your only worry should be what shot to capture next.</h1>
                    <p className='intro-p'>We take the thrill of shooting images from an open door helicopter, and makes it accessible by offering crowdsourced seats, without compromising on safety. Our New York City flights are conducted in rigorously maintained jet-engine helicopters featuring redundancies in seat belts, floatation devices, and/or dual engines. All flights are piloted by experienced crew with thousands of hours logged. We combined this knowledge of aviation with our passion for photography.</p>
                    <h1 className='intro-h'>Sky’s not the limit; it’s our office.</h1>
                    <p className='intro-p'>We’ve flown over 450,000 passengers since we opened our doors in 2012, offering photo flights in New York City. Looking to fly in another city? Call our Customer Service line for more info. 1-855-696-6247</p>
                </div>
            </section>
            <div className='about-img'>
                <img src={staff} alt='staff' />
            </div>
            <div className='city-selection'>
                <h1 className='ready'>READY TO EXPERIENCE FLYNYON?</h1>
                <p className='choose'>Choose where you'd like to fly</p>
                <h3>FLY IN A HELICOPTER ABOVE NYC</h3>
                <h3>DOORS-OFF OR DOORS-ON</h3>
                <Cards />
            </div>
            <Footer />
        </div>
    )
}
export default AboutUs