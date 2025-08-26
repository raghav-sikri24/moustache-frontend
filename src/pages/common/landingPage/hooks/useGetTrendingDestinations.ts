import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import trendingDestination from "../../../../assets/Images/trendingDestination.jpg";
import { API_BASE_URL } from "../../../../utils/endpoints";

export interface ITrendingDestination {
  id: number;
  img: string;
  name: string;
  knownFor: string;
  priceRange: string;
}

export const GET_TRENDING_DESTINATIONS = "trending-destinations";
export default function useGetTrendingDestinations(productType: string) {
  const get = async () => {
    const endpoint = `${API_BASE_URL}${GET_TRENDING_DESTINATIONS}`;
    return [
      {
        id: 1,
        img: trendingDestination,
        name: "Moustache Udaipur Verandah",
        knownFor: "Lakes",
        priceRange: "Rs 2000-4000",
      },
      {
        id: 2,
        img: trendingDestination,
        name: "Moustache Udaipur Verandah",
        knownFor: "Lakes",
        priceRange: "Rs 2000-4000",
      },
      {
        id: 3,
        img: trendingDestination,
        name: "Moustache Udaipur Verandah",
        knownFor: "Lakes",
        priceRange: "Rs 2000-4000",
      },
      {
        id: 4,
        img: trendingDestination,
        name: "Moustache Udaipur Verandah",
        knownFor: "Lakes",
        priceRange: "Rs 2000-4000",
      },
      {
        id: 5,
        img: trendingDestination,
        name: "Moustache Udaipur Verandah",
        knownFor: "Lakes",
        priceRange: "Rs 2000-4000",
      },
      {
        id: 6,
        img: trendingDestination,
        name: "Moustache Udaipur Verandah",
        knownFor: "Lakes",
        priceRange: "Rs 2000-4000",
      },
      {
        id: 7,
        img: trendingDestination,
        name: "Moustache Udaipur Verandah",
        knownFor: "Lakes",
        priceRange: "Rs 2000-4000",
      },
      {
        id: 8,
        img: trendingDestination,
        name: "Moustache Udaipur Verandah",
        knownFor: "Lakes",
        priceRange: "Rs 2000-4000",
      },
    ];

    return axios.get(endpoint).then(({ data }) => data?.data);
  };
  const { data, isPending } = useQuery<ITrendingDestination[]>({
    queryKey: [GET_TRENDING_DESTINATIONS, productType],
    queryFn: get,
    retry: 1,
  });
  return { data, isLoading: isPending };
}
