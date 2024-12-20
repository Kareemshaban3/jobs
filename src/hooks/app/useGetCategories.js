/** @format */

// الشريط الاول

import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";

export default function useGetCategories() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get("/categories");
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
