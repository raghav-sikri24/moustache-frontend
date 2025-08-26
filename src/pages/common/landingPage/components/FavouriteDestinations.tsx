import { useState } from "react";
import CustomText from "../../../../components/Text/CustomText";
import useGetFavoriteDestinationTitles from "../hooks/useGetFavoriteDestinationTitles";
import useGetFavoriteDestinations from "../hooks/useGetFavoriteDestinations";
import { SimpleGrid } from "@chakra-ui/react";
import CustomImage from "../../../../components/Image/view";
import React from "react";

export default function FavouriteDestinations() {
  const { data } = useGetFavoriteDestinationTitles();
  const [active, setActive] = useState<string>("All");
  const { data: favoriteDestinations } = useGetFavoriteDestinations(active);

  const handleChange = (title: string) => {
    if (title === active) {
      setActive("All");
    } else {
      setActive(title);
    }
  };

  const getFeatureCss = (feature: string) => {
    if (feature === "Top Pick of Season") {
      return {
        background:
          "linear-gradient(91.69deg, #FFDD03 -1.49%, #FFEF84 36.06%, #FFF198 62.77%, #FFDD03 100%)",
        color: "#736400",
      };
    } else return { background: "#FFFFFF", color: "#1A1A1A" };
  };

  const TitleItem = ({ title }: { title: string }) => {
    return (
      <div
        className="flex h-[36px] px-6 items-center cursor-pointer border rounded-[24px] justify-center"
        onClick={() => handleChange(title)}
        style={{
          background: active === title ? "#000000" : "#FFFFFF",
          color: active === title ? "#FFFFFF" : "#000000",
        }}
      >
        <CustomText stylearr={[14, 16, 700]} className="font-product-sans">
          {title}
        </CustomText>
      </div>
    );
  };

  return (
    <div className="flex flex-col pt-[40px] gap-8 items-center justify-center px-[80px]">
      <CustomText stylearr={[32, 36, 900]}>Favorite Destinations</CustomText>
      <div className="flex flex-row gap-3 flex-wrap">
        {" "}
        <TitleItem title={"All"} />
        {data?.map((item) => (
          <TitleItem title={item.name} />
        ))}
      </div>
      {favoriteDestinations?.length ? (
        <SimpleGrid columns={4} spacing={"16px"} w={"full"}>
          {favoriteDestinations?.map((item) => (
            <div
              className="h-[367px] relative flex border rounded-[24px] overflow-hidden"
              key={`favrorite-${item.id}`}
            >
              <CustomImage
                className="w-full h-full"
                objectFit={"cover"}
                src={item.image}
                alt={item.location}
              />
              <div
                className="absolute inset-0 z-10"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.32) 100%)",
                  mixBlendMode: "multiply",
                }}
              />
              <div
                className="absolute top-3 left-3 flex flex-row gap-2 items-center justify-center px-3 h-[34px] rounded-[100px]"
                style={{
                  ...getFeatureCss(item.feature),
                  boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.16)",
                }}
              >
                {React.createElement(item.featureIcon)}
                <CustomText stylearr={[13, 20, 700]} className="text-black-850">
                  {item.feature}
                </CustomText>
              </div>
              <div className="absolute bottom-2 z-20 right-2 left-2 rounded-[16px] p-4 bg-black-alpha20 flex items-center justify-center">
                <CustomText stylearr={[16, 20, 400]} color={"white.absolute"}>
                  {item.location}
                </CustomText>
              </div>
            </div>
          ))}
        </SimpleGrid>
      ) : null}
    </div>
  );
  `   `;
}
