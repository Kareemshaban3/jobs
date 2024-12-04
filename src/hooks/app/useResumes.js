/** @format */

//  الشريط الثالث

import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";
import { useSearchParams } from "react-router-dom";

export default function useResumes() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const subCategory = searchParams.get("subCategory");
  const nationality = searchParams.get("nationality");
  const country = searchParams.get("country");
  const gender = searchParams.get("Gender");
  const religion = searchParams.get("religion");
  const type = searchParams.get("type");
  

  const { isLoading, data, error } = useQuery({
    queryKey: ["resumes", category, subCategory, nationality, country , gender,religion ,type],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get("/resumes", {
          params: {
            category_id: category,
            job_id: subCategory,
            nationality_id: nationality,
            country_name: country,
            gender :gender,  
            religion :religion,  
            offer_type:type
          },
        });
        if (res.status === 200) {
          return res.data.data;
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
