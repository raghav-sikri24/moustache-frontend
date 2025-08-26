import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import FriendsStayIcon from "../../../../assets/Icons/FriendsStayIcon";
import LuxuryStayIcon from "../../../../assets/Icons/LuxuryStayIcon";
import SingleUserIcon from "../../../../assets/Icons/SingleUserIcon";
import ThreeUsersIcon from "../../../../assets/Icons/ThreeUsersIcon";
import TwoUsersIcon from "../../../../assets/Icons/TwoUsersIcon";
import { API_BASE_URL } from "../../../../utils/endpoints";

export interface IPickByTravelStyles {
  id: number;
  img: string;
  name: string;
}

export const GET_PICK_BY_TRAVEL_STYLES = "pick-by-travel-styles";
export default function useGetPickByTravelStyles() {
  const get = async () => {
    const endpoint = `${API_BASE_URL}${GET_PICK_BY_TRAVEL_STYLES}`;
    return [
      {
        id: 1,
        img: TwoUsersIcon,
        name: "Couple Stay",
      },
      {
        id: 2,
        img: ThreeUsersIcon,
        name: "Family Stays",
      },
      {
        id: 3,
        img: SingleUserIcon,
        name: "Solo Travel",
      },
      {
        id: 4,
        img: LuxuryStayIcon,
        name: "Luxury Stays",
      },
      {
        id: 5,
        img: FriendsStayIcon,
        name: "Friends Stays",
      },
      {
        id: 6,
        img: TwoUsersIcon,
        name: "Couple Stay",
      },
      {
        id: 7,
        img: ThreeUsersIcon,
        name: "Family Stays",
      },
      {
        id: 8,
        img: SingleUserIcon,
        name: "Solo Travel",
      },
      {
        id: 9,
        img: LuxuryStayIcon,
        name: "Luxury Stays",
      },
      {
        id: 10,
        img: FriendsStayIcon,
        name: "Friends Stays",
      },
    ];

    return axios.get(endpoint).then(({ data }) => data?.data);
  };
  const { data, isPending } = useQuery<IPickByTravelStyles[]>({
    queryKey: [GET_PICK_BY_TRAVEL_STYLES],
    queryFn: get,
    retry: 1,
  });
  return { data, isLoading: isPending };
}
