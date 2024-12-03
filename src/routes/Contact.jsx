/** @format */

import TopPage from "../components/TopPage";

export default function Contact() {
  return (
    <>
      <div className='Connect'>
        <TopPage
        title="Connect With Us"
        description="Let s bridge the gap and forge meaningful connections"
        />
         
          <br />
          <br />

        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='form'>
                <h2>GET IN TOUCH</h2>
                <p>
                  Feel free to reach out to us for any inquiries or assistance .
                </p>
                <form>
                  <div className='input'>
                    <input type='text'  required />
                    <span>Name</span>
                  </div>
                  <div className='inputs'>
                    <div className='input'>
                      <input type='email'  required />
                      <span>Email</span>
                    </div>
                    <div className='input'>
                      <input type='text'  required />
                      <span>Subject</span>
                    </div>
                  </div>
                  <div className="input">
                  <textarea ></textarea>
                  <span>Message</span>
                  </div>
                  <button type='submit'>Send</button>
                </form>
              </div>
            </div>
            <div className='col-md-6'></div>
          </div>
        </div>
      </div>
    </>
  );
}
