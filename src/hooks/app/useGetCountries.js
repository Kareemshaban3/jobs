
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";

export default function useGetCountries() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get("/countries");
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
