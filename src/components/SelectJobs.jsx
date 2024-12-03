/** @format */
//  الشريط الثالث
import { Link } from "react-router-dom";
import useResumes from "../hooks/app/useResumes";
import Loading from "./Loading";
import UserJobs from "./UserJobs";

export default function SelectJobs() {
  const { data: resumes = [], isLoading } = useResumes();

  return (
    <>
      <div className='SelectJobs'>
        <div className='SelectJobsContainer'>
          {isLoading && (
            <>
              <Loading />
            </>
          )}
          {!isLoading && resumes.length > 0
            ? resumes.map((resume) => (
                <UserJobs
                  gender={resume.gender}
                  years={resume.years}
                  country={resume.country}
                  key={resume?.id}
                  name={resume?.name}
                  image={resume?.image}
                  job={resume?.job?.name}
                />
              ))
            : !isLoading && <div>No resumes available</div>}
        </div>

        <Link to='/explore'>
          <button>View More</button>
        </Link>
      </div>
    </>
  );
}
