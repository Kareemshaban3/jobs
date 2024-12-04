/** @format */

import { Link } from "react-router-dom";
import Category from "../components/Category";
import Jobs from "../components/Jobs";
import SelectJobs from "../components/SelectJobs";
import SelectOptions from "../components/SelectOptions";

export default function Explore() {
  return (
    <>
      <div className='Explore'>
        <div className='container'>
          <div className='top-container'>
            <div className='text-left'>
              <h2>Explore Resumes</h2>
              <p>Unlock hidden talent and find skilled professionals</p>
            </div>
            <div className='text-right'>
              <Link to='/login'>
                <button className='button-explore'>+ APPLY FOR A JOB</button>
              </Link>
            </div>
          </div>
          <Category />
          <Jobs />
          <SelectOptions/>
          <SelectJobs />
        </div>
      </div>
    </>
  );
}
