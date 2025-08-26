import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import verandah1 from "../../../../assets/Images/verandah1.png";
import verandah2 from "../../../../assets/Images/verandah2.png";
import verandah3 from "../../../../assets/Images/verandah3.png";
import verandah4 from "../../../../assets/Images/verandah4.png";
import bar1 from "../../../../assets/Images/bar1.png";
import bar2 from "../../../../assets/Images/bar2.png";
import bar3 from "../../../../assets/Images/bar3.png";
import bar4 from "../../../../assets/Images/bar4.png";
import bayleaf1 from "../../../../assets/Images/bayleaf1.png";
import bayleaf2 from "../../../../assets/Images/bayleaf2.png";
import bayleaf3 from "../../../../assets/Images/bayleaf3.png";
import bayleaf4 from "../../../../assets/Images/bayleaf4.png";
import { API_BASE_URL } from "../../../../utils/endpoints";

export interface IFoodBeverageBannerAssets {
  id: number;
  title: string;
  dsc: string;
  assets: string[];
  locations: { id: string; name: string }[];
}

export const GET_FOOD_BEVERAGE_BANNER_ASSETS = "food-beverage-banner-assets";
export default function useGetFoodBeverageBannerAssets() {
  const get = async () => {
    const endpoint = `${API_BASE_URL}${GET_FOOD_BEVERAGE_BANNER_ASSETS}`;
    return [
      {
        id: 1,
        title: "Verandah",
        dsc: "Our premium lakeside café & restaurant experience",
        assets: [verandah1, verandah2, verandah3, verandah4],
        locations: [
          { id: "1", name: "Udaipur" },
          { id: "2", name: "Udaipur" },
          { id: "3", name: "Udaupur" },
          { id: "4", name: "Udaipur" },
        ],
      },
      {
        id: 2,
        title: "Bar",
        dsc: "Our exclusive bar/lounge setup",
        assets: [bar1, bar2, bar3, bar4],
        locations: [
          { id: "1", name: "Udaipur" },
          { id: "2", name: "Udaipur" },
          { id: "3", name: "Udaupur" },
          { id: "4", name: "Udaipur" },
        ],
      },
      {
        id: 3,
        title: "Bayleaf",
        dsc: "Our wholesome and hearty dining concept",
        assets: [bayleaf1, bayleaf2, bayleaf3, bayleaf4],
        locations: [
          { id: "1", name: "Udaipur" },
          { id: "2", name: "Udaipur" },
          { id: "3", name: "Udaupur" },
          { id: "4", name: "Udaipur" },
        ],
      },
    ];

    return axios.get(endpoint).then(({ data }) => data?.data);
  };
  const { data, isPending } = useQuery<IFoodBeverageBannerAssets[]>({
    queryKey: [GET_FOOD_BEVERAGE_BANNER_ASSETS],
    queryFn: get,
    retry: 1,
  });
  return { data, isLoading: isPending };
}
