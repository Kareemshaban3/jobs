/** @format */

// الشريط الثاني

import { useSearchParams } from "react-router-dom";
import useJobs from "../hooks/app/useJobs";

export default function Jobs() {
  const { data: Jobs } = useJobs();
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
    
      <div className='jobs'>
        
        {Jobs?.map((job) => {
          const isActive = searchParams.get("category") === job.id.toString();
          return (
            <>
            
            <div
            key={job.id}
              className={`job-item ${isActive ? "active" : ""}`}
              onClick={() => {
                // const updated = searchParams?.append({subCategory: job?.id})
                searchParams.set("subCategory", job?.id);
                setSearchParams(searchParams);
              }}
              >
              <div  key={job.id} className='img-job'>
                <img src={job.image} alt={job.title} />
                <h6>{job.name}</h6>
              </div>
            </div>
              </>
          );
        })}
      </div>
    </>
  );
}
