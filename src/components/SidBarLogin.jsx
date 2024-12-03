/** @format */

import ChangesAccount from "./ChangesAccount";

export default function SidBarLogin({ setShowSidBarLogin }) {
  const handleClose = () => {
    setShowSidBarLogin((prev) => (prev === false ? true : false));
  };
  return (
    <>
      <div className='SidBarLogin'>
        <div className='overLay'></div>
        <div className='all'>
          <div className='userAccount'>
            <div className='image'>
              <img src='/images/joblogo.webp' alt='' />
            </div>
            <div className='info'>
              <h5>Name User</h5>
              <p>Email</p>
            </div>
          </div>

          <ChangesAccount
            handleClose={handleClose}
            iconOne={<i className='fa-solid fa-user-pen'></i>}
            type='Edit Account'
            url='/individual-edit'
          />
          <ChangesAccount
            handleClose={handleClose}
            iconOne={<i className='fa-solid fa-people-group'></i>}
            type='My Resumes'
            url='my-resumes'
          />
       
          <ChangesAccount
            handleClose={handleClose}
            iconOne={<i className='fa-solid fa-people-group'></i>}
            type='Payment of release'
            url='payment-of-release'
          />
          <ChangesAccount
            handleClose={handleClose}
            iconOne={<i className='fa-regular fa-heart'></i>}
            type='Favorites'
            url='favorites'
          />
          <ChangesAccount
            handleClose={handleClose}
            iconOne={<i className='fa-solid fa-satellite-dish'></i>}
            type='My Advertisements'
            url='my-advertisements'
          />
          <ChangesAccount
            handleClose={handleClose}
            iconOne={<i className='fa-solid fa-arrow-right-from-bracket'></i>}
            type='Log out'
            url='login'
          />
          <ChangesAccount
            handleClose={handleClose}
            iconOne={<i className='fa-solid fa-user-xmark'></i>}
            type='Delete Account'
          />
        </div>
      </div>
    </>
  );
}
