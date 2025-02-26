import {
  useQuery,
  useMutation,
  useQueryClient,
  useIsFetching,
  QueryClient,
} from "@tanstack/react-query";
import { getAllCategories, newCategory } from "../services";
import { toast } from "sonner";

export const useNewCategory = (queryClient: any) => {
  return useMutation({
    mutationFn: newCategory,
    onSuccess: () => {
      toast.success("The category has been successfully created.");
      queryClient.invalidateQueries({ queryKey: ["getCategories"] });
    },
    onError(error: any, variables, context) {
      toast.error("Category creation failed", {
        description:
          error?.response?.data?.message || error?.response?.statusText,
      });
    },
  });
};

export function useGetAllCategories() {
  return useQuery({
    queryFn: getAllCategories,
    queryKey: ["getCategories"],
  });
}
