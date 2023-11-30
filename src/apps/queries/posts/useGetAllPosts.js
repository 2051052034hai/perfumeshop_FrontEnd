// Libraries
import { useQuery} from "react-query";

// Constants
import { QUERIES_KEYS } from "../../constants";

// Services
import { getAllPost } from "../../services/apis/posts.api";

export const useGetAllPosts = () => {

  const { data, isLoading } = useQuery(
    [QUERIES_KEYS.GET_POSTS],
    () => getAllPost(),
    {
      keepPreviousData: true,
      staleTime: 5 * 1000,
    }
  );

  return { data: data, isLoading };
};
