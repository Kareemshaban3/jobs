/** @format */
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function FavoritesResumes() {
  const favorites = useSelector((state) => state.favorites);

  return (
    <div className='Favorites-Resumes'>
      <div className='Links'>
        <h5>Favorites Resumes</h5>

        {favorites.length === 0 ? <></> : <Link to="/favorites"><button>View More</button></Link>}
      </div>

      <div className='FavoritesResumes'>
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
                  <img
                    src={
                      favorite.gender === "male"
                        ? "/images/image_male.svg"
                        : "/images/image_female.svg"
                    }
                    alt=''
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
