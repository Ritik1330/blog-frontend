import {
  useQuery,
  useMutation,
  useQueryClient,
  useIsFetching,
} from "@tanstack/react-query";
import { newSubCategory, getAllSubCategories } from "../services";
import { toast } from "sonner";

export const useNewSubCategory = () => {
  return useMutation({
    mutationFn: newSubCategory,
    onSuccess: () => {
      toast.success("The SubCategory has been successfully created.");
    },
    onError(error: any, variables, context) {
      toast.error("SubCategory creation failed", {
        description:
          error?.response?.data?.message || error?.response?.statusText,
      });
    },
  });
};

export function useGetAllSubCategories() {
  return useQuery({
    queryFn: getAllSubCategories,
    queryKey: ["getCategories"],
  });
}
