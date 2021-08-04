import React from 'react';
import { useState } from 'react';
import { SlideData } from './SlideData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImgSlide = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0: current + 1)
  }

  const lastSlide = () => {
    setCurrent(current === 0 ? length - 1: current - 1)
  }

  console.log(current);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={lastSlide}/>
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
      {SlideData.map((slide, index) => {

        return (
          <div className={index === current ? 'slide active' : 'slide'} key={index}>
            {index === current && (
              <img src={slide.image} alt="travel images" className="image" />
            )}
          
          </div>
        )
      })}
    </div>
  )
};

export default ImgSlide;
