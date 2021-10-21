import './App.css';
import Banner from './components/banner/banner';
import Header from './/components/header/header'
import Award from './components/Award-section/award';
import Fvideo from './assets/video/Fvideo.mp4';
import Cert from './components/certificate/certificate';
import Cards from './components/cards/card';
import TableData from './components/tableData/table';
import Family from './components/helicopter/family';
import Footer from './components/Footer/footer';
import NewYork from './/Book A Flight/new-york/newyork'
import Dashboard from './dashbaord/dashboard';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs/about';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route exact path='/' component={Dashboard}></Route>
      <Route exact path='/Main' component={Dashboard}></Route>
      <Route exact path='/new-york' component={NewYork}></Route>
      <Route exact path='/AboutUs' component={AboutUs}></Route>
     </Switch>
    </div>
    </BrowserRouter>
    
  )
}
export default App;
