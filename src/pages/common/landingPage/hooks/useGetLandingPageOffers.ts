import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import offer1 from "../../../../assets/Images/offer1.png";
import offer2 from "../../../../assets/Images/offer2.png";
import offer3 from "../../../../assets/Images/offer3.png";
import { API_BASE_URL } from "../../../../utils/endpoints";

export interface ILandingPageOfferItem {
  id: string;
  title: string;
  offer: string;
  validTill?: string;
  img: string;
}

export interface ILandingPageOfferResposne {
  firstOffer: ILandingPageOfferItem;
  otherOffers: ILandingPageOfferItem[];
}

export const GET_LANDING_PAGE_OFFERS = "landing-page-offers";
export default function useGetLandingPageOffers() {
  const get = async (): Promise<ILandingPageOfferResposne> => {
    return {
      firstOffer: {
        id: "1",
        title: "on booking your first stay with Moustache",
        offer: "30%",
        validTill: "",
        img: offer3,
      },
      otherOffers: [
        {
          id: "2",
          title: "Exclusive Bags Deal just for you! ",
          offer: "20%",
          validTill: "9th June, 2025",
          img: offer1,
        },
        {
          id: "3",
          title: "Grab shoes on Trek!",
          offer: "20%",
          validTill: "31st August, 2025",
          img: offer2,
        },
      ],
    };

    const endpoint = `${API_BASE_URL}${GET_LANDING_PAGE_OFFERS}`;
    return axios.get(endpoint).then(({ data }) => data?.data);
  };
  const { data, isPending } = useQuery<ILandingPageOfferResposne>({
    queryKey: [GET_LANDING_PAGE_OFFERS],
    queryFn: get,
    retry: 1,
  });
  return {
    data,
    isLoading: isPending,
  };
}
