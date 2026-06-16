import { useQuery } from "@tanstack/react-query";
import { getAuthUser } from "../lib/api";

//auth hook
const useAuthUser = () => {
    const authUser= useQuery({
        queryKey: ['authUser'],
        queryFn: getAuthUser,
        retry: false,//auth check
    });

    return {isLoading: authUser.isLoading, authUser: authUser.data?.user};
}

export default useAuthUser
