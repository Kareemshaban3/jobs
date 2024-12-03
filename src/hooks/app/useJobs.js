// الشريط الثاني
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";
import { useSearchParams } from "react-router-dom";
export default function useJobs() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const { isLoading, data, error } = useQuery({
    
    queryKey: ["jobs", category],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get("/jobs",{
          params: {
            category_id: category,
          }
        });
        if (res.status === 200) {
          return res.data.data;
        }
      } catch (error) {
        throw new Error(error);
      }
    },
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  return { isLoading, data, error };
}


