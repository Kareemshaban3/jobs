/** @format */

import { Link } from "react-router-dom";
import CategoriesPagination from "./CategoriesPagination";
import Nationalities from "./Nationalities";
import Category from "./Category";
import SelectJobs from "./SelectJobs";
import Jobs from "./Jobs";
import FavoritesResumes from "./FavoritesResumes";
import SelectOptions from "./SelectOptions";

export default function Content() {
  return (
    <>
      <section className='all-jobs'>
        <div className='left-content'>
          <Link to='/login'>
            <button className='button-apply'>+ Apply Your Resume Now</button>
          </Link>
          <br />
          <Category />
          <Jobs />
          <SelectOptions/>
          <SelectJobs />
        </div>
        <div className='right-content'>
          <FavoritesResumes />
        </div>
      </section>
      <Nationalities />
      <CategoriesPagination />
    </>
  );
}
