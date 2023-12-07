import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Men from './pages/Men';
import Women from './pages/Women';
import Kids from './pages/Kids';
import WomenVelvetLeggins from './pages/WomenVelvetLeggins';
import WomenGazelleShoe from './pages/WomenGazelleShoe';
import WomenNikeFleece from './pages/WomenNikeFleece';
import MenNapapijri from './pages/MenNapapijri';
import MenJordan1 from './pages/MenJordan1';
import MenCargoPants from './pages/MenCargoPants';
import KidsOverhead from './pages/KidsOverhead';
import KidsZipTop from './pages/KidsZipTop';
import KidsJordanMid from './pages/KidsJordanMid';

export default function App() {
    return(
        <div className="App">
            
            <Router>
                
                <Header />
                                    
                    
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/men" element={<Men />}/>
                    <Route path="/women" element={<Women />}/>
                    <Route path='/kids'  element={<Kids />} />
                    <Route path='/womenVelvetLeggins'  element={<WomenVelvetLeggins />} />
                    <Route path='/womenGazelleShoe'  element={<WomenGazelleShoe />} />
                    <Route path='/womenNikeFleece'  element={<WomenNikeFleece />} />
                    <Route path='/menNapapijri'  element={<MenNapapijri />} />
                    <Route path='/menJordan1'  element={<MenJordan1 />} />
                    <Route path='/menCargoPants'  element={<MenCargoPants />} />
                    <Route path='/kidsOverhead'  element={<KidsOverhead />} />
                    <Route path='/kidsZipTop'  element={<KidsZipTop />} />
                    <Route path='/kidsJordanMid'  element={<KidsJordanMid />} />
                    <Route path="*" element={<h1>Page Not Found</h1>} />
                </Routes>
                <Footer />
            </Router>

        </div>

        


    );
}
















