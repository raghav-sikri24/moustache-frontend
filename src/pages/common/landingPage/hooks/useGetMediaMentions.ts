import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import mention1 from "../../../../assets/Images/mention1.png";
import mention2 from "../../../../assets/Images/mention2.png";
import mention3 from "../../../../assets/Images/mention3.png";
import mention4 from "../../../../assets/Images/mention4.png";
import { API_BASE_URL } from "../../../../utils/endpoints";

export interface IMediaMentions {
  id: number;
  img: string;
}

export const GET_MEDIA_MENTIONS = "media-mentions";
export default function useGetMediaMentions() {
  const get = async () => {
    const endpoint = `${API_BASE_URL}${GET_MEDIA_MENTIONS}`;
    return [
      { id: 1, img: mention1 },
      { id: 2, img: mention2 },
      { id: 3, img: mention3 },
      { id: 4, img: mention4 },
    ];

    return axios.get(endpoint).then(({ data }) => data?.data);
  };
  const { data, isPending } = useQuery<IMediaMentions[]>({
    queryKey: [GET_MEDIA_MENTIONS],
    queryFn: get,
    retry: 1,
  });
  return { data, isLoading: isPending };
}
