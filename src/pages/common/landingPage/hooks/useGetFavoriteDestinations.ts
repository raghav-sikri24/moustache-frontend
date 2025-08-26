import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FC } from "react";
import CrackerIcon from "../../../../assets/Icons/CrackerIcon";
import MountainIcon from "../../../../assets/Icons/MountainIcon";
import TrophyIcon from "../../../../assets/Icons/TrophyIcon";
import WildlifeIcon from "../../../../assets/Icons/WildlifeIcon";
import favorite1 from "../../../../assets/Images/favorite1.jpg";
import favorite2 from "../../../../assets/Images/favorite2.png";
import favorite3 from "../../../../assets/Images/favorite3.png";
import favorite4 from "../../../../assets/Images/favorite4.jpg";
import favorite5 from "../../../../assets/Images/favorite5.png";
import favorite6 from "../../../../assets/Images/favorite6.jpg";
import favorite7 from "../../../../assets/Images/favorite7.png";
import { API_BASE_URL } from "../../../../utils/endpoints";

export interface IFavoriteDestination {
  id: string;
  location: string;
  image: string;
  featureIcon: FC<any>;
  feature: string;
  isFavorite: boolean;
}

export const GET_FAVORITE_DESTINATION = "favorite-destination";
export default function useGetFavoriteDestination(type: string) {
  const get = async (): Promise<IFavoriteDestination[]> => {
    const endpoint = `${API_BASE_URL}${GET_FAVORITE_DESTINATION}`;
    return [
      {
        id: "1",
        location: "Bagha Beach, Goa",
        image: favorite1,
        feature: "Top Pick of Season",
        isFavorite: true,
        featureIcon: TrophyIcon,
      },
      {
        id: "2",
        location: "Mumbai, Maharashtra",
        image: favorite2,
        feature: "Best Night Life",
        isFavorite: true,
        featureIcon: CrackerIcon,
      },
      {
        id: "3",
        location: "Mumbai, Maharashtra",
        image: favorite2,
        feature: "Best Night Life",
        isFavorite: true,
        featureIcon: CrackerIcon,
      },
      {
        id: "4",
        location: "Manali, Himachal Pradesh",
        image: favorite3,
        feature: "Adventure Sports",
        isFavorite: true,
        featureIcon: MountainIcon,
      },
      {
        id: "5",
        location: "Kumarakom, Kerala",
        image: favorite4,
        feature: "Wildlife",
        isFavorite: true,
        featureIcon: WildlifeIcon,
      },
      {
        id: "6",
        location: "Ladakh, Jammu and Kashmir",
        image: favorite5,
        feature: "Best Night Life",
        isFavorite: true,
        featureIcon: CrackerIcon,
      },
      {
        id: "7",
        location: "Delhi, India",
        image: favorite6,
        feature: "Vibrant Nightlife",
        isFavorite: true,
        featureIcon: CrackerIcon,
      },
      {
        id: "8",
        location: "Shimla, Himachal Pradesh",
        image: favorite7,
        feature: "Thrilling Outdoor Activities",
        isFavorite: true,
        featureIcon: MountainIcon,
      },
    ];

    return axios.get(endpoint).then(({ data }) => data?.data);
  };
  const { data, isPending } = useQuery<IFavoriteDestination[]>({
    queryKey: [GET_FAVORITE_DESTINATION, type],
    queryFn: get,
    retry: 1,
  });
  return { data, isLoading: isPending };
}
