/** @format */

import { useState } from "react";
import OtpInput from "./OtpInput";

const PhoneOtpForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePhoneSubmit = (event) => {
    event.preventDefault();
    //phone validations
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Invalid phone number");
      return;
    }

    //call be api

    //show OTP Field
    setShowOtpInput(true);
  };
  return (
    <>
      <div>
        {!showOtpInput ? (
          <form onSubmit={handlePhoneSubmit}>
            <div className='inputs'>
              <input
                type='text'
                onChange={handlePhoneNumber}
                value={phoneNumber}
              />
              <span>Phone Number</span>
            </div>
            <button type='submit'>Send OTP</button>
          </form>
        ) : (
          <div>
            <p>Enter OIP send to {phoneNumber}</p>
            <OtpInput />
          </div>
        )}
      </div>
    </>
  );
};

export default PhoneOtpForm;
