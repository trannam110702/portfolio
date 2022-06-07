import React from 'react';
import './Intro.css';
import { motion } from 'framer-motion';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import BlurDiv from '../BlurDiv/BlurDiv';

import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Boy from '../../img/boy.png';
import Crown from '../../img/crown.png';
import Thumbup from '../../img/thumbup.png';
import Glassesimoji from '../../img/glassesimoji.png';
import { themeContext } from '../../Context';

const Intro = () => {
  const transition = { duration: 2, type: 'spring' };
  const { state, dispatch } = React.useContext(themeContext);

  return (
    <div className="i-wrapper">
      <div className="i-left">
        <div className="i-name">
          <span className={state.darkMode ? 'i-darkMode' : ''}>Hi, I am</span>
          <span>Nam Tran</span>
          <span>
            Front-end Developer have some projects in <br /> web designing and
            development, UX/UI
          </span>
        </div>
        <a
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100010648657847"
        >
          <button className="button i-button">Hire me</button>
        </a>
        <div className="i-icon">
          <a target="_blank" href="https://github.com/trannam110702">
            <img src={Github} alt="" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/nam-tr%E1%BA%A7n-872608194/"
          >
            <img src={LinkedIn} alt="" />
          </a>
          <a target="_blank" href="https://www.instagram.com/qreenlad1107/">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Boy} alt="" />
        <motion.img
          initial={{ left: '-100px' }}
          whileInView={{ left: '-64px' }}
          transition={transition}
          src={Glassesimoji}
          alt=""
        />
        <motion.div
          initial={{ left: '-100px' }}
          whileInView={{ left: '0px' }}
          transition={transition}
          style={{ top: '200px' }}
        >
          <FloatingDiv image={Crown} text1="Web" text2="Front-end" />
        </motion.div>
        <motion.div
          initial={{ left: '0px' }}
          whileInView={{ left: '102px' }}
          transition={transition}
          style={{ top: '368px' }}
        >
          <FloatingDiv image={Thumbup} text1="ReacJS" text2="Developer" />
        </motion.div>
        <BlurDiv style={{ background: 'rgb(238,210,255)', left: '316px' }} />
        <BlurDiv style={{ background: '#C1F5FF', top: '142px' }} />
      </div>
    </div>
  );
};

export default Intro;
