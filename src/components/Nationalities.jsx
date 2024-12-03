/** @format */

// الشريط الرابع

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import useNationalities from "../hooks/app/useNationalities";
import Loading from "./Loading";
export default function Nationalities() {
  const { data: company, isLoading } = useNationalities();

  return (
    <>
      <div className='Nationalities'>
        <div className='top-swiper'>
          <h6>Recruitment Companies</h6>
          <Link to='/discover'>View All</Link>
        </div>
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          modules={[Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            500: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
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
            company.map((nav) => (
              <SwiperSlide key={nav.id}>
                <div className='NationalitiesCompany'>
                  <div className='img'>
                    <Link to='/Explore'>
                      <img src={nav.logo} alt={nav.title} />
                    </Link>
                  </div>
                  <h6>{nav.name}</h6>
                </div>
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>
    </>
  );
}
