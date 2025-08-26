import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_BASE_URL } from "../../../../utils/endpoints";

export interface IFavoriteDestinationTitles {
  id: string;
  name: string;
}

export const GET_FAVORITE_DESTINATION_TITLES = "favorite-destination-titles";
export default function useGetFavoriteDestinationTitles() {
  const get = async (): Promise<IFavoriteDestinationTitles[]> => {
    const endpoint = `${API_BASE_URL}${GET_FAVORITE_DESTINATION_TITLES}`;
    return [
      {
        id: "1",
        name: "Breathtaking Valleys",
      },
      {
        id: "2",
        name: "Vast Deserts",
      },
      {
        id: "3",
        name: "Winding Rivers",
      },
      {
        id: "4",
        name: "Lush Forests",
      },
      {
        id: "5",
        name: "Majestic Canyons",
      },
      {
        id: "6",
        name: "Tropical Islands",
      },
      {
        id: "7",
        name: "Expansive Plains",
      },
      {
        id: "8",
        name: "Stunning Cliffs",
      },
      {
        id: "9",
        name: "Vast Oceans",
      },
      {
        id: "10",
        name: "Solo Trips",
      },
      {
        id: "11",
        name: "Vast Oceans",
      },
    ];

    return axios.get(endpoint).then(({ data }) => data?.data);
  };
  const { data, isPending } = useQuery<IFavoriteDestinationTitles[]>({
    queryKey: [GET_FAVORITE_DESTINATION_TITLES],
    queryFn: get,
    retry: 1,
  });
  return { data, isLoading: isPending };
}
