import { useEffect, useRef } from 'react';
import logo from './logo.svg';
import React from 'react'
import Topbar from './components/Topbar';
import Hero from './components/Hero';
import GetStarted from './components/GetStarted';
import Process from './components/Process';
import Services from './components/Services';
import AltServices from './components/AltServices';
import Features from './components/Features';
import Projects from './components/Projects';
import Footer from './components/Footer';
import AOS from "aos";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './App.css';
import 'aos/dist/aos.css';

AOS.init();
function App() {


  return (
    <>
      {/* Start og header */}
      <Topbar />
      {/* End of header */}

      {/* Start of hero */}
      <Hero />
      {/* End of Hero */}

      {/* Start of get started */}
      <GetStarted />
      {/* End of get started */}

      {/* Start Construction */}
      <Process />
      {/* End Construction */}

      {/* Start of Services */}
      <Services />
      {/* End of Services */}

      {/* Start alt services */}
      <AltServices />
      {/* End Alt Services */}

      {/* Start Features */}
      <Features />
      {/* End Features */}

      {/* Start Projects */}
      <Projects />
      {/* End Projects */}

      {/* Start Footer */}
      <Footer />
      {/* End Footer */}








    </>
  );
}

export default App;
