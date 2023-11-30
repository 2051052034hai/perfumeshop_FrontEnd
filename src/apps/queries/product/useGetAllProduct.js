// Libraries
import { useQuery, useQueryClient } from "react-query";

// Constants
import { QUERIES_KEYS } from "../../constants";

// Services
import { getProductsPage } from "../../services/apis/product.api";

export const useGetDataProductPage = (filterDataApi) => {
  const { page, pageSize } = filterDataApi;
  const queryClient = useQueryClient();

  if (page !== undefined && pageSize !== undefined) {
    const { page, ...orther } = filterDataApi;
    let nextPage = page + 1;
    queryClient.prefetchQuery(
      [QUERIES_KEYS.GET_PRODUCTS, { nextPage, ...orther }],
      () => getProductsPage({ nextPage, ...orther })
    );
  }

  const { data, isLoading } = useQuery(
    [QUERIES_KEYS.GET_PRODUCTS, filterDataApi],
    () => getProductsPage(filterDataApi),
    {
      keepPreviousData: true,
      staleTime: 5 * 1000,
    }
  );

  return { data: data, isLoading };
};
