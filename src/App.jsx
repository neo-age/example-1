import './app.css'
import Devicepage from './components/Devicepage/Devicepage';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Moreinfo from './pages/Moreinfo/Moreinfo';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import 'animate.css';
import { isDesktop, isTablet, isMobile } from 'react-device-detect';


function App() {
    console.log(isDesktop)
    console.log(isTablet)
    console.log(isMobile)
    if(isDesktop === true){
        return (
            <Router>
                <div className="parent_container">
                    <Navbar />
                <div className="main_content_container">
                    <Routes>
                        <Route exact path='/' element={<Home />}/>
                        <Route exact path='/Moreinfo' element={<Moreinfo />}/>
                    </Routes>
                </div>
                    <Footer />
                </div>
            </Router>
        )
    }else{
        return (
            <Router>
                <Devicepage/>
            </Router>
        )
    }
    
}

export default App;