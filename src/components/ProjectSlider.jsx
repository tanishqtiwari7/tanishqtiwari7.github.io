import { projectlists } from "../constants";
const ProjectSlider = () => {
  return (
    <div className="slider-wrapper">
      <div className="projectBoxes">
        {
            projectlists.map((projectBoxes) => {
                <div key={projectBoxes.name} className="relative z-30 lg:w-"></div>
            })

        }
      </div>
    </div>
  );
};


export default ProjectSlider;
