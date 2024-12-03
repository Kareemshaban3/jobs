
// الشريط الاول 


import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";
import { useSearchParams } from "react-router-dom";
export default function useGetCategories() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const { isLoading, data, error } = useQuery({
    queryKey: ["categories", category],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get("/categories",{
          params: {
            category_id: category,
          },
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


