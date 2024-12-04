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
            iconOne={<img src="/public/images/editAccount.svg" />}
            type='Edit Account'
            url='/individual-edit'
          />
          <ChangesAccount
            handleClose={handleClose}
            iconOne={<img src="/public/images/resumes2.svg" />}
            type='My Resumes'
            url='my-resumes'
          />
       
          <ChangesAccount
            handleClose={handleClose}
            type='Add Resume'
            url='CvResumes'
            iconOne={<img src="/images/addCv3.svg" />}
          />
       
          <ChangesAccount
            handleClose={handleClose}
            iconOne={<img src="/public/images/resumes4.svg" />}
            type='Payment of release'
            url='payment-of-release'
          />
          <ChangesAccount
            handleClose={handleClose}
            iconOne={<img  className="favorite" src="/public/images/favorites5.svg" />}
            type='Favorites'
            url='favorites'
          />
          <ChangesAccount
            handleClose={handleClose}
            iconOne={<img src="/public/images/prmote6.svg" />}
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
