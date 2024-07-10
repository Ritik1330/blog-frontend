import {
    useQuery,
    useMutation,
    useQueryClient,
    useIsFetching,
} from "@tanstack/react-query";

import { toast } from "sonner";
import { getAllTags, newTag } from "../services";

export const useNewTag = () => {
    return useMutation({
        mutationFn: newTag,
        onSuccess: () => {
            toast.success("The Article has been successfully created.");
        },
        onError(error: any, variables, context) {
            toast.error("Article creation failed", {
                description:
                    error?.response?.data?.message || error?.response?.statusText,
            });
        },
    });
};

export function useGetAllTags() {
    return useQuery({
        queryFn: getAllTags,
        queryKey: ["getTags"],
    });
}
