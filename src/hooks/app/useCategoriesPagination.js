
// الشريط الخامس

import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";

export default function useGetCategories() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["categories?pagination=on&limit_per_page"],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get("/categories?pagination=on&limit_per_page");
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


