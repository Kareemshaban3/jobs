/** @format */

import TopPage from "../components/TopPage";

export default function Advertisements() {
  return (
    <>
      <TopPage
        title='Join Us Today'
        description='Embark on your journey with us'
      />
      <br />

      <div className='advertisements'>
        <div className='container text-center '>
          <h2>My Advertisements
          </h2>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th> Promote Image</th>
                <th> Promote Type</th>
                <th> Promote link</th>
                <th> Edit</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      <br />
    </>
  );
}
