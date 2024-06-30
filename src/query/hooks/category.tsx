import {
  useQuery,
  useMutation,
  useQueryClient,
  useIsFetching,
} from "@tanstack/react-query";
import { getAllCategories, newCategory } from "../services/category";
import { toast } from "sonner";
import { useEffect } from "react";

export const useNewCategory = () => {
  return useMutation({
    mutationFn: newCategory,
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

export function useGetCategories() {
  return useQuery({
    queryFn: getAllCategories,
    queryKey: ["getCategories"],
  });
}
