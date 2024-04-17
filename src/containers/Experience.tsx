import { motion } from 'framer-motion';
import { Tablist } from '../components';
import { getSectionAnimation } from '../animations';
import { experienceSection } from '../utils/portfolio';

const Experience = () => {
  return (
    <motion.section id="experience" className="py-6" {...getSectionAnimation}>
      <h2 className="heading-secondary mt-20">{experienceSection.title}</h2>
      <Tablist />
    </motion.section>
  );
};

export default Experience;
