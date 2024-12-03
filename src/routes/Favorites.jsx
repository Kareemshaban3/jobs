/** @format */

// Favorites.js
import { useSelector } from "react-redux";
import TopPage from "../components/TopPage";

export default function Favorites() {
  const favorites = useSelector((state) => state.favorites);

  return (
    <>
      <TopPage
        title="Explore Resumes"
        description="Unlock hidden talent and find skilled professionals"
      />

      <div className="container">
      <div className='Favorites'>
        {favorites.length > 0 ? (
          favorites.map((favorite) => (
            <div className='userJobsContainer' key={favorite.id}>
              <div className='imge'>
                <img src={favorite.image} alt='' />
              </div>

              <div className='userInfo'>
                <div className='userDisplay'>
                  <h4>{favorite.name}</h4>
                  <i
                    className='fa-regular fa-heart'
                    onClick={favorite.handleAddToFavorites}
                  ></i>
                </div>
                <div className='title-age'>
                  <p className='working'>{favorite.job}</p>
                  <p className='age'>{favorite.years} years old</p>
                </div>
                <div className='userDisplay'>
                  <h4>{favorite.country}</h4>
                  <img src={favorite.gender === "male" ? "/images/image_male.svg" : "/images/image_female.svg"} alt='' />

                </div>
              </div>
            </div>
          ))
        ) : (
          <div></div>
        )}
      </div>
      </div>
    </>
  );
}
