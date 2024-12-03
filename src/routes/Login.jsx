/** @format */

import { useState } from "react";
import { Link } from "react-router-dom";
import TopPage from "../components/TopPage";
import PhoneOtpForm from "../components/PhoneOtpForm";

export default function Login() {

  const [changeLogin, setChangeLogin] = useState("phone")




  return (
    <>
      <div className='Login'>

        <TopPage
          title="Sign In"
          description="Unlock exclusive access to your account"
        />
          
          <br />
          <br />
        <div className='container'>
          <div className='row'>
            <div className='col-md-12  col-lg-7 '>
              <div className='form '>
                <h3>Welcome Back</h3>
                <p className='Please'>
                  Please enter your mobile number or email to complete the login
                  process.
                </p>

                <form>
                  <div className='changeLogin  '>
                    <p className={changeLogin==="phone"? "active" : ""} onClick={()=>setChangeLogin("phone")} >Phone Number</p>
                    <p className={changeLogin==="email"? "active" : ""} onClick={()=>setChangeLogin("email")} >Email Address</p>
                  </div>
                    {
                      changeLogin === "email"? (
                        <div className="inputs">
                             <input
                          type='email'
                        />
                        <span>Email Address</span>
                        </div>
                      ) : (
                       <PhoneOtpForm/>
                      ) 
                    }
                  <h6>
                    NOTE: The employment agreement must be through the approved
                    official offices and agencies
                  </h6>

                  <p className='continuing'>
                    By continuing, you agree to the <span>terms of use</span>{" "}
                    and <span>privacy policy</span> of the application
                  </p>

                  <button>Login</button>
                </form>
                <div className='orSignWith'>
                  <span>or sign with</span>
                </div>

                <div className='platForm'>
                  <Link>
                    <img
                      src='/images/jobsinsaudi.me_en_login.png'
                      alt=''
                    />
                    <p>Continue whit Google</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-md-5'>
              <div className='image-container'>
                <img src='/images/login (1).svg' alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
