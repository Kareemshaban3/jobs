/** @format */

import Nationalities from "./Nationalities";
import TopPage from "./TopPage";

export default function Discover() {
  return (
    <>
    
      <TopPage
        title={"اكتشف الشركات"}
        description={"اكتشف جوهر منظمتنا ورحلتها"}
      />
      <div className='content'>
      <Nationalities />

      </div>
    </>
  );
}
