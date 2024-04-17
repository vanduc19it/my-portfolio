import { useState } from 'react';
import useWindowWidth from '../hooks/use-window-width';
import { getBreakpointsWidth } from '../utils/helper';

/* eslint-disable react/prop-types */
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../constants';

console.log(experiences);
const ExperienceCard = (experience: any) => {
  console.log(experience);
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#fff',
        color: '#292929',
        boxShadow:
          'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      }}
      contentArrowStyle={{
        borderRight: '7px solid  #232631',
      }}
      date={experience.experience.date.toString()}
      iconStyle={{ background: ' experience.iconBg' }}
      icon={
        <span className="vertical-timeline-element-icon bounce-in bg-slate-900">
          <div className="flex justify-center items-center w-full h-full ">
            <img
              src={experience.experience.icon.src}
              alt={experience.experience.company_name}
              className="w-[60%] h-[60%] object-contain"
            />
          </div>
        </span>
      }
    >
      <div>
        <h3 className="text-jetLight text-[21px] font-bold font-beckman tracking-[2px] mb-2 uppercase">
          {experience.experience.title}
        </h3>
        <p
          className="text-taupe text-[24px] font-overcameBold tracking-[1px]"
          style={{ margin: 0, color: '#9999A1' }}
        >
          {experience.experience.company_name}
        </p>

        {experience.experience.projects &&
          experience.experience.projects.length > 0 && (
            <div className="mt-7">
              <ul className="list-disc pl-6">
                {experience.experience.projects.map(
                  (project: any, index: any) => (
                    <li
                      key={index}
                      className="text-taupe text-[18px] mb-10 text-black"
                    >
                      <div className="font-bold mb-2 text-[#9999A1]">
                        {project.name}
                      </div>
                      <div className="font-sm text-[#9999A1] text-[16px]">
                        {project.description}
                      </div>
                      <div className="flex mt-2">
                        <img
                          className="object-cover mb-2 mt-1"
                          src={project?.img.src}
                          alt={project.name}
                          style={{ height: '150px', width: '300px' }}
                        />
                      </div>
                      <div className="mt-2 mb-1 text-[#9999A1] text-[16px]">
                        <strong>Tech:</strong> {project.tech}
                      </div>
                      <div className="mt-2 mb-2 text-[#9999A1] text-[16px]">
                        <strong>Role:</strong> {project.role}
                      </div>

                      <div className="text-[#9999A1] text-[16px]">
                        <strong>Team size:</strong> {project.teamSize}
                      </div>
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
      </div>
    </VerticalTimelineElement>
  );
};

const Tablist = () => {
  const [activeExperience, setActiveExperience] = useState(0);
  const windowWidth = useWindowWidth();

  const sm = getBreakpointsWidth('sm');

  const sliderStyle =
    windowWidth <= sm
      ? {
          left: `calc(${activeExperience}*120px)`,
        }
      : {
          top: `calc(${activeExperience}*2.5rem)`,
        };

  return (
    <div className="flex flex-col sm:flex-row text-sm md:text-base gap-6 md:gap-10 min-h-[250px]">
      {/* Sidebar */}
      <div id="experiences">
        <div className="mt-4 flex flex-col">
          <VerticalTimeline className="vertical-timeline-custom-line">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Tablist;
