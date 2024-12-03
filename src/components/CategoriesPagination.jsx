/** @format */

// الشريط الخامس


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import useCategoriesPagination from "../hooks/app/useCategoriesPagination";
import Loading from "./Loading";
export default function CategoriesPagination() {
  const { data: JobsByCategory, isLoading } = useCategoriesPagination();

  return (
    <>
      <div className='JobsByCategory'>
        <div className='top-swiper'>
          <h6>Jobs By Category</h6>
          <Link to='/explore'>View All</Link>
        </div>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            500: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          loop
          className='mySwiper'
        >
          {isLoading ? (
            <SwiperSlide>
             <>
              <Loading/>
             </>
            </SwiperSlide>
          ) : (
            JobsByCategory.map((job) => (
              <SwiperSlide key={job.id}>
                <div>
                  <Link className="link" to='/Explore'>
                    <div className='imge'>
                      <img src={job.image} alt={job.title} />
                    </div>
                    <div className='title'>
                      <h6>{job.name}</h6>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>
    </>
  );
}
