import CustomImage from "../../../../components/Image/view";
import CustomText from "../../../../components/Text/CustomText";
import useGetLandingPageOffers, {
  ILandingPageOfferItem,
} from "../hooks/useGetLandingPageOffers";

const FirstOffer = ({ data }: { data: ILandingPageOfferItem }) => {
  return (
    <div className="flex rounded-[20px] relative w-full h-[720px] relative overflow-hidden">
      <CustomImage
        className="absolute"
        w={"100%"}
        h={"100%"}
        src={data.img}
        objectFit={"cover"}
      />
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(180.03deg, #4ACFFF 0.03%, rgba(74, 207, 255, 0) 99.97%)",
          mixBlendMode: "multiply",
        }}
      />
      <div className="absolute top-[36px] left-[32px] flex flex-col gap-6 z-50">
        <div className="flex flex-row gap-4 items-end">
          {" "}
          <CustomText
            stylearr={[64, 64, 400]}
            className="font-product-sans mb-[8px]"
            color={"white.absolute"}
          >
            Flat
          </CustomText>
          <CustomText
            stylearr={[96, 96, 700]}
            className="font-product-sans"
            color={"white.absolute"}
          >
            {" " + data.offer + " "}
          </CustomText>
          <CustomText
            stylearr={[86, 86, 700]}
            className="font-product-sans"
            color={"white.absolute"}
          >
            off
          </CustomText>
        </div>
        <CustomText
          stylearr={[24, 24, 400]}
          className="font-product-sans"
          color={"white.absolute"}
        >
          {data?.title}
        </CustomText>
      </div>
    </div>
  );
};

const SecondaryOffer = ({ data }: { data: ILandingPageOfferItem }) => {
  return (
    <div className="flex rounded-[20px] w-full relative h-[350px] overflow-hidden">
      <CustomImage
        className="absolute w-full h-full"
        w={"100%"}
        h={"100%"}
        objectFit={"cover"}
        src={data.img}
      />
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(90deg, #000000 -3.15%, rgba(0, 0, 0, 0) 100%)",
          mixBlendMode: "multiply",
        }}
      />
      <div className="absolute top-[24px] left-[24px] flex flex-col gap-10 z-50">
        <div className="w-[54px] h-[54px] flex justify-center items-center border rounded-full">
          <svg
            width="29"
            height="28"
            viewBox="0 0 29 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.5645 10.8525C26.0933 10.36 25.6058 9.8525 25.422 9.40625C25.252 8.9975 25.242 8.32 25.232 7.66375C25.2133 6.44375 25.1933 5.06125 24.232 4.1C23.2708 3.13875 21.8883 3.11875 20.6683 3.1C20.012 3.09 19.3345 3.08 18.9258 2.91C18.4808 2.72625 17.972 2.23875 17.4795 1.7675C16.617 0.93875 15.637 0 14.332 0C13.027 0 12.0483 0.93875 11.1845 1.7675C10.692 2.23875 10.1845 2.72625 9.73828 2.91C9.33203 3.08 8.65203 3.09 7.99578 3.1C6.77578 3.11875 5.39328 3.13875 4.43203 4.1C3.47078 5.06125 3.45703 6.44375 3.43203 7.66375C3.42203 8.32 3.41203 8.9975 3.24203 9.40625C3.05828 9.85125 2.57078 10.36 2.09953 10.8525C1.27078 11.7162 0.332031 12.695 0.332031 14C0.332031 15.305 1.27078 16.2837 2.09953 17.1475C2.57078 17.64 3.05828 18.1475 3.24203 18.5938C3.41203 19.0025 3.42203 19.68 3.43203 20.3363C3.45078 21.5562 3.47078 22.9387 4.43203 23.9C5.39328 24.8612 6.77578 24.8813 7.99578 24.9C8.65203 24.91 9.32953 24.92 9.73828 25.09C10.1833 25.2738 10.692 25.7612 11.1845 26.2325C12.047 27.0613 13.027 28 14.332 28C15.637 28 16.6158 27.0613 17.4795 26.2325C17.972 25.7612 18.4795 25.2738 18.9258 25.09C19.3345 24.92 20.012 24.91 20.6683 24.9C21.8883 24.8813 23.2708 24.8612 24.232 23.9C25.1933 22.9387 25.2133 21.5562 25.232 20.3363C25.242 19.68 25.252 19.0025 25.422 18.5938C25.6058 18.1488 26.0933 17.64 26.5645 17.1475C27.3933 16.2837 28.332 15.305 28.332 14C28.332 12.695 27.3933 11.7162 26.5645 10.8525ZM25.1208 15.7638C24.522 16.3888 23.902 17.035 23.5733 17.8288C23.2583 18.5913 23.2445 19.4625 23.232 20.3062C23.2195 21.1812 23.2058 22.0975 22.817 22.485C22.4283 22.8725 21.5183 22.8875 20.6383 22.9C19.7945 22.9125 18.9233 22.9262 18.1608 23.2412C17.367 23.57 16.7208 24.19 16.0958 24.7887C15.4708 25.3875 14.832 26 14.332 26C13.832 26 13.1883 25.385 12.5683 24.7887C11.9483 24.1925 11.297 23.57 10.5033 23.2412C9.74078 22.9262 8.86953 22.9125 8.02578 22.9C7.15078 22.8875 6.23453 22.8738 5.84703 22.485C5.45953 22.0963 5.44453 21.1862 5.43203 20.3062C5.41953 19.4625 5.40578 18.5913 5.09078 17.8288C4.76203 17.035 4.14203 16.3888 3.54328 15.7638C2.94453 15.1388 2.33203 14.5 2.33203 14C2.33203 13.5 2.94703 12.8575 3.54328 12.2362C4.13953 11.615 4.76203 10.965 5.09078 10.1713C5.40578 9.40875 5.41953 8.5375 5.43203 7.69375C5.44453 6.81875 5.45828 5.9025 5.84703 5.515C6.23578 5.1275 7.14578 5.1125 8.02578 5.1C8.86953 5.0875 9.74078 5.07375 10.5033 4.75875C11.297 4.43 11.9433 3.81 12.5683 3.21125C13.1933 2.6125 13.832 2 14.332 2C14.832 2 15.4758 2.615 16.0958 3.21125C16.7158 3.8075 17.367 4.43 18.1608 4.75875C18.9233 5.07375 19.7945 5.0875 20.6383 5.1C21.5133 5.1125 22.4295 5.12625 22.817 5.515C23.2045 5.90375 23.2195 6.81375 23.232 7.69375C23.2445 8.5375 23.2583 9.40875 23.5733 10.1713C23.902 10.965 24.522 11.6112 25.1208 12.2362C25.7195 12.8612 26.332 13.5 26.332 14C26.332 14.5 25.717 15.1425 25.1208 15.7638ZM13.332 10C13.332 9.40666 13.1561 8.82664 12.8264 8.33329C12.4968 7.83994 12.0283 7.45542 11.4801 7.22836C10.9319 7.0013 10.3287 6.94189 9.74676 7.05764C9.16482 7.1734 8.63027 7.45912 8.21071 7.87868C7.79115 8.29824 7.50543 8.83279 7.38968 9.41473C7.27392 9.99667 7.33333 10.5999 7.56039 11.1481C7.78746 11.6962 8.17197 12.1648 8.66532 12.4944C9.15867 12.8241 9.73869 13 10.332 13C11.1277 13 11.8907 12.6839 12.4534 12.1213C13.016 11.5587 13.332 10.7956 13.332 10ZM9.33203 10C9.33203 9.80222 9.39068 9.60888 9.50056 9.44443C9.61044 9.27998 9.76662 9.15181 9.94935 9.07612C10.1321 9.00043 10.3331 8.98063 10.5271 9.01921C10.7211 9.0578 10.8993 9.15304 11.0391 9.29289C11.179 9.43275 11.2742 9.61093 11.3128 9.80491C11.3514 9.99889 11.3316 10.2 11.2559 10.3827C11.1802 10.5654 11.0521 10.7216 10.8876 10.8315C10.7232 10.9414 10.5298 11 10.332 11C10.0668 11 9.81246 10.8946 9.62492 10.7071C9.43739 10.5196 9.33203 10.2652 9.33203 10ZM18.332 15C17.7387 15 17.1587 15.1759 16.6653 15.5056C16.172 15.8352 15.7875 16.3038 15.5604 16.8519C15.3333 17.4001 15.2739 18.0033 15.3897 18.5853C15.5054 19.1672 15.7912 19.7018 16.2107 20.1213C16.6303 20.5409 17.1648 20.8266 17.7468 20.9424C18.3287 21.0581 18.9319 20.9987 19.4801 20.7716C20.0283 20.5446 20.4968 20.1601 20.8264 19.6667C21.1561 19.1734 21.332 18.5933 21.332 18C21.332 17.2044 21.016 16.4413 20.4534 15.8787C19.8907 15.3161 19.1277 15 18.332 15ZM18.332 19C18.1343 19 17.9409 18.9414 17.7765 18.8315C17.612 18.7216 17.4838 18.5654 17.4082 18.3827C17.3325 18.2 17.3127 17.9989 17.3512 17.8049C17.3898 17.6109 17.4851 17.4327 17.6249 17.2929C17.7648 17.153 17.943 17.0578 18.1369 17.0192C18.3309 16.9806 18.532 17.0004 18.7147 17.0761C18.8974 17.1518 19.0536 17.28 19.1635 17.4444C19.2734 17.6089 19.332 17.8022 19.332 18C19.332 18.2652 19.2267 18.5196 19.0391 18.7071C18.8516 18.8946 18.5972 19 18.332 19ZM20.0395 9.7075L10.0395 19.7075C9.94662 19.8004 9.83632 19.8741 9.71493 19.9244C9.59353 19.9747 9.46343 20.0006 9.33203 20.0006C9.20064 20.0006 9.07053 19.9747 8.94913 19.9244C8.82774 19.8741 8.71744 19.8004 8.62453 19.7075C8.53162 19.6146 8.45792 19.5043 8.40764 19.3829C8.35736 19.2615 8.33148 19.1314 8.33148 19C8.33148 18.8686 8.35736 18.7385 8.40764 18.6171C8.45792 18.4957 8.53162 18.3854 8.62453 18.2925L18.6245 8.2925C18.7174 8.19959 18.8277 8.12589 18.9491 8.07561C19.0705 8.02532 19.2006 7.99944 19.332 7.99944C19.4634 7.99944 19.5935 8.02532 19.7149 8.07561C19.8363 8.12589 19.9466 8.19959 20.0395 8.2925C20.1324 8.38541 20.2061 8.49571 20.2564 8.6171C20.3067 8.7385 20.3326 8.8686 20.3326 9C20.3326 9.1314 20.3067 9.2615 20.2564 9.3829C20.2061 9.50429 20.1324 9.61459 20.0395 9.7075Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="flex flex-col gap-1">
          <CustomText
            stylearr={[24, 24, 400]}
            className="font-product-sans w-2/3"
            color={"white.absolute"}
          >
            {data.title}
          </CustomText>
          <div className="flex flex-row gap-4 items-end">
            {" "}
            <CustomText
              stylearr={[86, 86, 700]}
              className="font-product-sans"
              color={"white.absolute"}
            >
              {data.offer}
            </CustomText>
            <CustomText
              stylearr={[40, 40, 700]}
              className="font-product-sans mb-2"
              color={"white.absolute"}
            >
              off
            </CustomText>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[24px] left-[24px] flex z-50">
        <CustomText
          stylearr={[16, 16, 400]}
          className="font-product-sans"
          color={"white.alpha74"}
        >
          *with terms & conditions
        </CustomText>
      </div>
      {data?.validTill ? (
        <div className="absolute top-[24px] right-[24px] flex z-50 p-[10px] rounded-[100px] bg-white-alpha47">
          <CustomText stylearr={[16, 16, 400]} color={"white.absolute"}>
            Valid Till {data?.validTill}
          </CustomText>
        </div>
      ) : null}
    </div>
  );
};

export default function LandingPageOffers() {
  const { data, isLoading } = useGetLandingPageOffers();

  if (isLoading || !data) {
    return (
      <div className="px-[60px] w-full pb-[50px] flex items-center justify-center">
        Loading...
      </div>
    );
  }

  const { firstOffer, otherOffers } = data;

  if (!firstOffer || !otherOffers || otherOffers.length < 2) {
    return null;
  }

  return (
    <div className="px-[60px] w-full pb-[50px] flex flex-col gap-[40px] items-center justify-center">
      <div className="flex flex-col gap-2">
        <CustomText stylearr={[32, 32, 900]}>
          Exclusive deals just for you!
        </CustomText>
        <CustomText stylearr={[20, 20, 400]} color={"black.alpha45"}>
          Grab the amazing offers specially this season
        </CustomText>
      </div>
      <div className="grid grid-cols-2 gap-[20px] w-full">
        <div className="flex flex-col gap-[20px]">
          <SecondaryOffer data={otherOffers?.[0]!} key={otherOffers?.[0]?.id} />
          <SecondaryOffer data={otherOffers?.[1]!} key={otherOffers?.[1]?.id} />
        </div>
        <FirstOffer data={firstOffer} />
      </div>
    </div>
  );
}
