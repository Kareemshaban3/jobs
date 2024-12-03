/** @format */

import { Link } from "react-router-dom";

export default function ChangesAccount({ iconOne, type, url ,handleClose }) {
  
  return (
    <>
      <Link onClick={handleClose} to={url}>
        <div className='ChangesAccount'>
          <div className='spaceIcon'>
            <i className="FontIcon" >{iconOne}</i>
            <h6>{type}</h6>
          </div>
          <i id="rightIcon" className='fa-solid fa-angle-right'></i>
        </div>
      </Link>
    </>
  );
}
