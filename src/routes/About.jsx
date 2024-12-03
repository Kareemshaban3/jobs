/** @format */

import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import TopPage from "../components/TopPage";

export default function About() {
  return (
    <>
      <div className='About'>
        <TopPage
          title='Discover Our Story'
          description='Unveil the narratives behind exceptional talent and expertise'
        />

        <div className='container'>
          <br />
          <br />
          <br />
          <br />
          <div className='row'>
            <div className='col-md-6'>
              <div className='content'>
                <h6>find you dream job</h6>
                <h1>Easily get job offers</h1>
                <p>
                  Introducing Jobs In Saudi - the game-changing app for job
                  seekers in Saudi Arabia. Find your dream job with ease, stay
                  updated with the latest listings, and kickstart your career
                  journey like never before. Join us today and unlock endless
                  possibilities.
                </p>

                <Link to='/explore'>
                  <button>Explore Resumes</button>
                </Link>
              </div>
            </div>
            <div className='col-md-5'>
              <div className='image'>
                <img
                  className='banner'
                  src='/images/banner-online-marketing.png'
                  alt=''
                />
                <div className='massage'>
                  <img
                    className='congratulation'
                    src='/images/congratulation.svg'
                    alt=''
                  />
                  <img
                    className='web'
                    src='/images/web-dev.svg'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='comment'>
            <div className='text'>
              <h2>Listen To What Our Clients Say</h2>
              <h5>
                When it comes to choosing the right web hosting provider, we
                know how easy it is to get overwhelmed with the number.
              </h5>
            </div>
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              modules={[Autoplay]}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                800: {
                  slidesPerView: 2,
                },
              }}
              loop
              className='mySwiper'
            >
              <SwiperSlide>
                <div className='comments-swiper'>
                  <div className='content'>
                    <div className='icon-star'>
                      <i className='fa-solid fa-star'></i>
                      <i className='fa-solid fa-star'></i>
                      <i className='fa-solid fa-star'></i>
                      <i className='fa-solid fa-star'></i>
                      <i className='fa-solid fa-star'></i>
                    </div>
                    <p>
                      Thanks to this wonderful website! I found an amazing
                      community of professionals and buyers here. I have
                      benefited greatly from the opportunities provided to me by
                      this website.
                    </p>
                    <div className='name'>
                      <h6>Mohamed El-Ashry</h6>
                      <p>Jul03,2024</p>
                    </div>
                  </div>
                  <div className='img'>
                    <img src='/images/joblogo.webp' alt='' />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='comments-swiper'>
                  <div className='content'>
                    <div className='icon-star'>
                      <i className='fa-solid fa-star'></i>
                      <i className='fa-solid fa-star'></i>
                      <i className='fa-solid fa-star'></i>
                      <i className='fa-solid fa-star'></i>
                      <i className='fa-solid fa-star'></i>
                    </div>
                    <p>
                      Thanks to this wonderful website! I found an amazing
                      community of professionals and buyers here. I have
                      benefited greatly from the opportunities provided to me by
                      this website.
                    </p>
                    <div className='name'>
                      <h6>Mohamed El-Ashry</h6>
                      <p>Jul03,2024</p>
                    </div>
                  </div>
                  <div className='img'>
                    <img src='/images/joblogo.webp' alt='' />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='comments-swiper'>
                  <div className='content'>
                    <div className='icon-star'>
                      <i className='fa-solid fa-star'></i>
                      <i className='fa-solid fa-star'></i>
                      <i className='fa-solid fa-star'></i>
                      <i className='fa-solid fa-star'></i>
                      <i className='fa-solid fa-star'></i>
                    </div>
                    <p>
                      Thanks to this wonderful website! I found an amazing
                      community of professionals and buyers here. I have
                      benefited greatly from the opportunities provided to me by
                      this website.
                    </p>
                    <div className='name'>
                      <h6>Mohamed El-Ashry</h6>
                      <p>Jul03,2024</p>
                    </div>
                  </div>
                  <div className='img'>
                    <img src='/images/joblogo.webp' alt='' />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className='Exceptional text-center '>
          <div className='content'>
            <h3>Exceptional Experience with the App</h3>
            <p>
              Would you like to enjoy an enhanced experience on the go? Download
              our app now to access exclusive services and offers.
            </p>
          </div>

          <div className='img-platForm'>
            <a href='#'>
              <img src='/images/app-store.svg' alt='App Store' />
            </a>
            <a href='#'>
              <img src='/images/google-play.svg' alt='Google Play' />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
