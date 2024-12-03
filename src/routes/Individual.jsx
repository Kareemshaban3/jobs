/** @format */

import { useRef, useState } from "react";
import TopPage from "../components/TopPage";

export default function Individual() {
  const [image, setImage] = useState("/images/joblogo.webp");
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click(); 
};

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <TopPage
        title='Join Us Today'
        description='BEmbark on your journey with us'
      />
      <br />
      <br />
      <br />

      <div className='individual text-center '>
        <h1>individual Account</h1>
        <br />
        <div className='form'>
          <form>
            <div className='displayImg'>
            <img 
                src={image} 
                alt="" 
                onClick={handleImageClick}
            />
              <h2
                onClick={handleImageClick}
              >+</h2>
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageChange} 
                style={{ display: 'none' }} 
                ref={fileInputRef} 
            />
            </div>
            <br />
            <div className='input'>
              <input type='text' required placeholder='User Name' />
              <span>User Name</span>
            </div>
            <div className='input'>
              <select name='' id=''>
                <option value=''>Select</option>
                <option value=''>Male</option>
                <option value=''>Female</option>
              </select>
              <span>Gender</span>
            </div>
            <div className='input'>
              <input type='date' required />
              <span>Birthdate</span>
            </div>
            <button>Confirm</button>
          </form>
        </div>
      </div>

      <br />
      <br />
    </>
  );
}
