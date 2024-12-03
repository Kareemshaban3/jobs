/** @format */

// UserJobs.js
import { useDispatch } from "react-redux";


export default function UserJobs({
  id,
  name,
  image,
  country,
  years,
  gender,
  job,
}) {
  
  const dispatch = useDispatch();

  const handleAddToFavorites = () => {
    dispatch({
      type: "ADD_TO_FAVORITES",
      payload: { id, name, image, country, years, gender, job },
    });
  };

  return (
    <div key={id} className='userJobs'>
      <div className='userJobsContainer'>
        <div className='imge'>
          <img src={image} alt='' />
        </div>
        <div className='userInfo'>
          <div className='userDisplay'>
            <h4>{name}</h4>
            <i
              className='fa-regular fa-heart'
              onClick={handleAddToFavorites}
            ></i>
          </div>
          <div className='title-age'>
            <p className='working'>{job}</p>
            <p className='age'>{years} years old</p>
          </div>
          <div className='userDisplay'>
            <h4>{country}</h4>
            <img src={gender === "male" ? "/images/image_male.svg" : "/images/image_female.svg"} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}
