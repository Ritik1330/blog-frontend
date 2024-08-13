import {
  useQuery,
  useMutation,
  useQueryClient,
  useIsFetching,
} from "@tanstack/react-query";

import { toast } from "sonner";
import { getAllstaticPage, newstaticPage } from "../services";

export const useNewStaticPage = () => {
  return useMutation({
    mutationFn: newstaticPage,
    onSuccess: () => {
      toast.success("The static Page has been successfully created.");
    },
    onError(error: any, variables, context) {
      toast.error("static Page creation failed", {
        description:
          error?.response?.data?.message || error?.response?.statusText,
      });
    },
  });
};

export function useAllstaticPage() {
  return useQuery({
    queryFn: getAllstaticPage,
    queryKey: ["getAllstaticPage"],
  });
}
