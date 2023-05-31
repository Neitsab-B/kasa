import React from 'react'
import './stars.css'

const Stars = ({ props }) => {
  let ratingArray = []

  for (let index = 0; index < props; index++) {
    ratingArray.push(
      <img
        key={'star-solid' + index}
        className="star-solid"
        src='/icons/star-filled.png'
        alt="star filled"
      />
    )
  }

  for (let index = props; index < 5; index++) {
    ratingArray.push(
      <img className="star" key={'star' + index} src='/icons/star-empty.png' alt="star empty" />
    )
  }

  return <>{ratingArray}</>
}

export default Stars