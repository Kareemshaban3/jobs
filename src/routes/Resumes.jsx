/** @format */

import { Link } from "react-router-dom";

export default function Resumes() {
  return (
    <>
      <div className='container'>
        <Link to="/individual-edit" >
          <div className='Resumes'>
            <div className='ResumesContent'>
              <h2> Easily add individuals resumes</h2>
              <p> Add now and expand your business scope.</p>
            </div>
            <div className='ResumesImg'>
              <img src='/images/individ.png' alt='Resume' />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
