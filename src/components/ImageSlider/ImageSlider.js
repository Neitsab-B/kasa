import React, { useState } from 'react'
import './imageSlider.css'

const Slider = ({ props }) => {
  let [index, setIndex] = useState(0)

  const sliderNext = () => {
    if (index === props.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  const sliderPrev = () => {
    console.log(props)
    if (index === 0) {
      setIndex(props.length - 1)
    } else {
      setIndex(index - 1)
    }
  }

  if (props.length === 1) {
    return (
      <div className="slider">
        <img className="slider__img" src={props[index]} alt={props} />
      </div>
    )
  } else {
    return (
      <div className="slider">
        <img
        src='/icons/arrowRight.png'
        className='arrow-right'
          onClick={sliderNext}
          alt="next"
        />
        <img
        src='/icons/arrowLeft.png'
        className='arrow-left'
          onClick={sliderPrev}
          alt="prev"
        />
        <img className="slider__img" src={props[index]} alt={props} />
      </div>
    )
  }
}

export default Slider