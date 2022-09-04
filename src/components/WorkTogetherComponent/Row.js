import React from 'react'
import "./Row.css"
// import {BsFillPersonFill} from "react-icons/bs"

const Row = ({ titleUp, titleDown, textUp, textDown, textMiddle }) => {
  return (
    <div className="process__col process__col--1">
      <div className="process__col--header">
        <h3>
          {titleUp}
          <br />
          {titleDown}
        </h3>
      </div>
      <div className="process__col--body">
        <p>{textUp}</p>
        <p>{textMiddle}</p>
        <p>{textDown}</p>
      </div>
    </div>
  );
};

export default Row