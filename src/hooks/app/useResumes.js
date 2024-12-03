/** @format */

//  الشريط الثالث


import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";
import { useSearchParams } from "react-router-dom";

const limit = 21; 
export default function useResumes() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const { isLoading, data, error } = useQuery({
    queryKey: ["resumes", limit,category ],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get("/resumes",{
          params: {
            category_id : category,
            // job_id : job ,
            // nationality_id : national ,
            // company_id : company
          }
        });

        if (res.status === 200) {
          return res.data.data.slice(0, limit);
        }
        throw new Error("Failed to fetch resumes");
      } catch (error) {
        console.error("Error fetching resumes:", error);
      }
    },
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  return { isLoading, data, error };
}
