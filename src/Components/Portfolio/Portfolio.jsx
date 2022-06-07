import React from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Sidebar from '../../img/sidebar.png';
import Musicapp from '../../img/musicapp.png';
import Ecommerce from '../../img/ecommerce.png';
import HOC from '../../img/hoc.png';
import { themeContext } from '../../Context';
const Portfolio = () => {
  const { state, dispatch } = React.useContext(themeContext);
  let numOfSlide = 3;
  if (window.innerWidth <= 768) {
    numOfSlide = 2;
    if (window.innerWidth <= 425) {
      numOfSlide = 1;
    }
  }
  return (
    <div className="portfolio">
      <span style={state.darkMode ? { color: 'white' } : {}}>
        Recent Projects
      </span>
      <span>Portfolio</span>
      <Swiper
        // loop={true}
        spaceBetween={30}
        slidesPerView={numOfSlide}
        className="portfolio-slider"
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <a href="" target="_blank">
            <img src={Sidebar} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="" target="_blank">
            <img src={Musicapp} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="" target="_blank">
            <img src={Ecommerce} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="" target="_blank">
            <img src={HOC} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
