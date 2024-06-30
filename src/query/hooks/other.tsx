import {
  useQuery,
  useMutation,
  useQueryClient,
  useIsFetching,
} from "@tanstack/react-query";
import { toast } from "sonner";
import { Translater, UplodImage } from "../services";

// export const useTestHook = () => {
//   return useQuery({
//     queryKey: ["todos"],
//     queryFn: test,
//   });
// };
export const useUplodImage = () => {
  return useMutation({
    mutationFn: UplodImage,
    onSuccess: () => {
      toast.success("Hero Image Has been upload");
    },
    onError(error, variables, context) {
      console.log(error);
      toast.error("Image Upload faild", { description: error.message });
    },
  });
};
export const useTranslater = () => {
  return useMutation({
    mutationFn: Translater,
    onSuccess: () => {
      toast.success("Slug has been translated.");
    },
    onError(error) {
      toast.error("The slug translation failed", {
        description: error.message,
      });
      console.log(error);
    },
  });
};

// export const useTranslater = (e:string) => {
//   return useQuery({
//     queryKey: ["translaterkey"],
//     queryFn: Translater,
//   });
// };
