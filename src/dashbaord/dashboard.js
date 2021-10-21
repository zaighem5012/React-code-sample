import React from 'react'
import Award from "../components/Award-section/award";
import Banner from "../components/banner/banner";
import Cards from "../components/cards/card";
import Cert from "../components/certificate/certificate";
import Footer from "../components/Footer/footer";
import Header from "../components/header/header";
import Family from "../components/helicopter/family";
import TableData from "../components/tableData/table";
import Fvideo from '../assets/video/Fvideo.mp4'
import './dashboard.css'
const Dashboard = () => {
    return (
        <div className='dashboard'>
            <video autoPlay muted loop id='myVideo'>
                <source src={Fvideo} type="video/mp4"/>
            </video>
            <Banner />
            <Header />
            <Award />
            <Cert />
            <Cards />
            <TableData />
            <Family />
            <Footer />
        </div>
    )
}
export default Dashboard
