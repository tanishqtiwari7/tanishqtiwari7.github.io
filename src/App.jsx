// import React from 'react'
import Navbar from './components/Navbar'
import About from './sections/About';
import HeroSection from './sections/HeroSection'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import ProjectsSection from './sections/ProjectsSection';

gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return (
    <main>
      <Navbar />
      <HeroSection/>
      <About/>
      <ProjectsSection/>
      <div className='h-dvh'></div>
    </main>
  )
}
export default App