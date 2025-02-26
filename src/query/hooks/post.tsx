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
      toast.success("The Post has been successfully created.");
    },
    onError(error: any, variables, context) {
      toast.error("post creation failed", {
        description:
          error?.response?.data?.message || error?.response?.statusText,
      });
    },
  });
};

export function useAllpost() {
  return useQuery({
    queryFn: getAllPost,
    queryKey: ["getpost"],
  });
}
