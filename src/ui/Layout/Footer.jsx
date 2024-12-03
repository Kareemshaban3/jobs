/** @format */

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className='footer'>
        <div className='container'>
          <div className='content'>
            <div className='logo-img'>
              <Link to='/'>
                <img src='images/logo.svg' alt='' />
              </Link>
            </div>
            <p className='text-logo'>
              Jobsin saudi is the heart of the design community and the best
              resource to discover and connect with designers and jobs worldwide
            </p>
          </div>
          <div className='content'>
            <h3>Company</h3>
            <ul>
              <li>
                <i
                  id='iconNone'
                  className='fa-solid fa-arrow-up-right-from-square'
                ></i>

                <Link to='/About'>About Us</Link>
              </li>
              <li>
                <i
                  id='iconNone'
                  className='fa-solid fa-arrow-up-right-from-square'
                ></i>

                <Link to='/faqs'>FAQs</Link>
              </li>
              <li>
                <i
                  id='iconNone'
                  className='fa-solid fa-arrow-up-right-from-square'
                ></i>

                <Link to='/Contact'>Contact</Link>
              </li>
              <li>
                <i
                  id='iconNone'
                  className='fa-solid fa-arrow-up-right-from-square'
                ></i>

                <Link to='/terms'>Terms and Conditions</Link>
              </li>
              <li>
                <i
                  id='iconNone'
                  className='fa-solid fa-arrow-up-right-from-square'
                ></i>
                <Link to='/privacy'>Privacy & Policy</Link>
              </li>
            </ul>
          </div>
          <div className='content '>
            <h3>popular categories</h3>
            <ul>
              <li>
                <i
                  id='iconNone'
                  className='fa-solid fa-arrow-up-right-from-square'
                ></i>

                <Link to='/explore'>Technical and Design</Link>
              </li>
              <li>
                <i
                  id='iconNone'
                  className='fa-solid fa-arrow-up-right-from-square'
                ></i>

                <Link to='/explore'>Administrative</Link>
              </li>
              <li>
                <i
                  id='iconNone'
                  className='fa-solid fa-arrow-up-right-from-square'
                ></i>

                <Link to='/explore'>Engineering</Link>
              </li>
              <li>
                <i
                  id='iconNone'
                  className='fa-solid fa-arrow-up-right-from-square'
                ></i>

                <Link to='/explore'>Medical and Nursing</Link>
              </li>
              <li>
                <i
                  id='iconNone'
                  className='fa-solid fa-arrow-up-right-from-square'
                ></i>

                <Link to='/explore'>Education</Link>
              </li>
            </ul>
          </div>
          <div id='download' className='content  '>
            <h3>Download App</h3>
            <ul>
              <li>
                <div className='button'>
                  <i className='fa-brands fa-apple'></i>
                  <Link to='https://www.apple.com/eg/app-store/'>
                    <button>App Store</button>
                  </Link>
                </div>
              </li>
              <li>
                <div className='button'>
                  <i className='fa-brands fa-google-play'></i>
                  <Link to='https://play.google.com/store/apps/details?id=com.app.jobsinsaudi'>
                    <button>Google Play</button>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='copyright'>
          <p>
            {" "}
            Copyright © 2024. All Rights Reserved to{" "}
            <Link to='/'>Jobs in saudi</Link>
          </p>
          <div className='icon'>
            <Link to="https://www.facebook.com/profile.php?id=61557428342772&mibextid=LQQJ4d&rdid=lCvXJGm4EW0vGUHW">
              <i className='fa-brands fa-facebook'></i>
            </Link>
            <Link to="https://www.instagram.com/jobsin.saudi?igsh=MWR2eDlyY3JxZGNmOA%3D%3D&utm_source=qr" >
              <i className='fa-brands fa-instagram'></i>
            </Link>
            <Link to="https://www.linkedin.com/in/jobsinsaudi-jobsinsaudi-8a82182b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
              <i className='fa-brands fa-linkedin-in'></i>
            </Link>
            <Link to="https://x.com/jobsin_saudi?s=21&t=L3rST5hlVbvgd8t5Rg5hhQ">
              <i className='fa-brands fa-twitter'></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
