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
          return (
            <>
              <div 
                key={job.id}
                className={
                  +searchParams.get("subCategory") === job?.id
                    ? "img-job active"
                    : "img-job"
                }
                onClick={() => {
                  searchParams.set("subCategory", job?.id);
                  setSearchParams(searchParams);
                }}
              >
                <div key={job.id} className='info-job'>
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
