import './Skills.css';
import React from 'react';
import { motion } from 'framer-motion';

import Card from '../Card/Card';
import BlurDiv from '../BlurDiv/BlurDiv';

import Heartemoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import { themeContext } from '../../Context';

const Skills = () => {
  const transition = { duration: 2, type: 'spring' };
  const { state, dispatch } = React.useContext(themeContext);

  return (
    <div className="s-wrapper">
      <div className="s-left">
        <span style={state.darkMode ? { color: 'white' } : {}}>My major</span>
        <span>skills</span>
        <span>
          My skills in HTML, CSS have been improved and I confidently apply for
          a job
        </span>
        <button className="button s-button">Download CV</button>
      </div>
      <div className="s-right">
        <div className="cards">
          <motion.div
            initial={{ left: '-100px' }}
            whileInView={{ left: '0' }}
            transition={transition}
          >
            <Card
              emoji={Heartemoji}
              heading="Web develop"
              detail="Basic knowledgement about HTML/CSS/JavaScript ES6"
            />
          </motion.div>
          <motion.div
            initial={{ left: '24rem', top: '4rem' }}
            whileInView={{ left: '16rem' }}
            transition={transition}
          >
            <Card
              emoji={Glasses}
              heading="ReactJS"
              detail="Bable, Webpack, JSX, Components, Hooks"
            />
          </motion.div>
          <motion.div
            initial={{ left: '16rem', top: '21rem' }}
            whileInView={{ left: '8rem' }}
            transition={transition}
          >
            <Card
              emoji={Humble}
              heading="Deploy"
              detail="Deploy reactjs project in Ubuntu server with Nginx"
            />
          </motion.div>
        </div>
        <BlurDiv style={{ background: 'rgb(238,210,255)', left: '200px' }} />
        <BlurDiv style={{ background: '#C1F5FF', top: '300px' }} />
      </div>
    </div>
  );
};

export default Skills;
