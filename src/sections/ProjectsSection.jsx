import React from 'react'
import ProjectTitle from '../components/ProjectTitle'
import ProjectSlider from '../components/ProjectSlider'

const ProjectsSection = () => {
  return (
    <section className='project-section'>
        <div className='h-full flex lg:flex-row flex-col items-center relative md:mt-20'>
            <div className='lg:w-[57%] flex-none h-80 lg:h-full md:mt-20 xl:mt-0'>
                <ProjectTitle/>
            </div>
            <div className='h-full'>
                <ProjectSlider/>
            </div>
        </div>
    </section>
  )
}

export default ProjectsSection