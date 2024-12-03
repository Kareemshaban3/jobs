/** @format */

export default function Payment() {
  return (
    <>
      <div className='container'>
        <div className='Resumes'>
          <div className='ResumesContent'>
            <h2>Payment of release</h2>
          </div>
          <div className='ResumesImg'>
            <img src='/images/individ.png' alt='Resume' />
          </div>
        </div>
        <div className='payment text-center'>
          <div className='price'>
            <h6><b>Price:</b>100 </h6>
            <a href="https://secure.clickpay.com.sa/payment/page/5DB8F88082C17D455961BD74034902EBF66C37B6AAAAD6330E7BFDEF/start">
            <button>Pay Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
