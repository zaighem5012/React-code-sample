import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../../assets/images/slide1.jpg'
import slide2 from '../../assets/images/slide2.jpg'
import slide3 from '../../assets/images/slide3.jpg'
import Footer from '../../components/Footer/footer';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import './slide.css'
function DesignProjects(props) {
    return (
        <div className='about-us'>
        <section>
            <div className='design-project'>
                <div className='slide-section'>
                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src={slide1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img
                                className="d-block w-100"
                                src={slide2}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={slide3}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className='slide-con'>
                    <h1 className='pkg-con'>EXPERIENCE NEW YORK<br/>FROM THE SKY YOURSELF</h1>
                    <button className='book-now'>BOOK NOW<ArrowUpwardIcon/></button>
                </div>
            </div>
        </section>
        <section>
            <div className='search-more'>
                <h1 className='pkg-con'>LOOKING FOR MORE INFORMATION?</h1>
                <p className='con2'>Checkout the following links to learn more about us and our services</p>
                <div className='links'>
                <a href='#'>About Us</a>
                <a href='#'>Testimonials</a>
                <a href='#'>Press</a>
                < a href='#'>FAQs</a>
                </div>
            </div>
        </section>
        <Footer/>
        </div>
    );
}

export default DesignProjects;
