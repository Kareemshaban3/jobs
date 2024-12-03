/** @format */

export default function TopPage({ title, description }) {
  return (
    <>
      <div className='topPage'>
        <div className='container'>
          <div className='text'>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
