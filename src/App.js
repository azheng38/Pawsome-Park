import './App.css';
import {React, Fragment} from 'react';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './components/pages/Home';
import Visit from './components/pages/Visit';
import News from './components/pages/News';
import Contact from './components/pages/ContactUs';
import Tour from './components/pages/Tour'
import Volunteer from './components/pages/Volunteer';
import AboutUs from './components/pages/AboutUs';
import Garden from './components/pages/Garden';
import Exhibits from './components/pages/Exhibits';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Fragment>
          <ScrollToTop/>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/visit" element={<Visit/>} />
              <Route path="/news" element={<News/>} />
              <Route path="/contactus" element={<Contact/>}/>
              <Route path="/tour" element={<Tour/>}/>
              <Route path="/volunteer" element={<Volunteer/>}/>
              <Route path="/aboutus" element={<AboutUs/>}/>
              <Route path="/garden" element={<Garden/>}/>
              <Route path="/exhibits" element={<Exhibits/>}/>
            </Routes>
        </Fragment>
      </Router>
    </div>
    
  );
}

export default App;
