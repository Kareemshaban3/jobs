// الشريط الرابع


import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";

export default function useGetCategories() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["company"],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get("/companies");
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
