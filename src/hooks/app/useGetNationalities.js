/** @format */

// الشريط الاول

import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";

export default function useGetNationalities() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["nationalities"],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get("/nationalities");
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
