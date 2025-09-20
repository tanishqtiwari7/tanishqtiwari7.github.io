// import React from 'react'
import Navbar from './components/Navbar'
import About from './sections/About';
import HeroSection from './sections/HeroSection'
import gsap from 'gsap'
import { ScrollTrigger,ScrollSmoother } from 'gsap/all'
import ProjectsSection from './sections/ProjectsSection';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger,ScrollSmoother);



const App = () => {

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });


  return (
    <main>
      <Navbar />
          <div id="smooth-wrapper">
        <div id="smooth-content">
      <HeroSection/>
      <About/>
      <ProjectsSection/>
      <div className='h-dvh'></div>
      </div>
      </div>
    </main>
  )
}
export default App