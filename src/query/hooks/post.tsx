import {
  useQuery,
  useMutation,
  useQueryClient,
  useIsFetching,
} from "@tanstack/react-query";

import { toast } from "sonner";
import { getAllPost, newPost } from "../services";

export const useNewPost = () => {
  return useMutation({
    mutationFn: newPost,
    onSuccess: () => {
      toast.success("The category has been successfully created.");
    },
    onError(error: any, variables, context) {
      toast.error("Category creation failed", {
        description:
          error?.response?.data?.message || error?.response?.statusText,
      });
    },
  });
};

export function useGetAllpost() {
  return useQuery({
    queryFn: getAllPost,
    queryKey: ["getCategories"],
  });
}
