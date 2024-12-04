

import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";

export default function useGetSkillsJobs() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["SkillsJobs"],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get("/jobs");
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
