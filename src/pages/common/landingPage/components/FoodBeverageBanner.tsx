import { SimpleGrid } from "@chakra-ui/react";
import CustomImage from "../../../../components/Image/view";
import CustomText from "../../../../components/Text/CustomText";
import useGetFoodBeverageBannerAssets from "../hooks/useGetFoodBeverageBannerAssets";

const colorConfig = [
  {
    bgColor: "#0F172A",
    fontColor: "#FFFFFF",
    dividerColor: "#ffffff1f",
    buttonBg: "#00173d",
    imageBackground:
      "linear-gradient(180deg, #00173D 0%, rgba(0, 23, 61, 0) 100%)",
  },
  {
    bgColor: "#FFD662",
    fontColor: "#563c00",
    dividerColor: "#563c001f",
    buttonBg: "#563c00",
    imageBackground:
      "linear-gradient(180deg, #FFD662 0%, rgba(255, 214, 98, 0) 100%)",
  },
  {
    bgColor: "#1F0802",
    fontColor: "#d2c7c1",
    dividerColor: "#ffffff1f",
    buttonBg: "#1f0802",
    imageBackground:
      "linear-gradient(180deg, #1F0802 0%, rgba(31, 8, 2, 0) 100%)",
  },
];

export default function FoodBeverageBanner() {
  const { data } = useGetFoodBeverageBannerAssets();

  return (
    <div className="px-[60px] w-full pb-[50px] flex flex-col gap-[40px] items-center justify-center">
      <div className="flex flex-col gap-2 items-center">
        <CustomText stylearr={[32, 32, 900]}>
          Worried about food and snacks? Not anymore!
        </CustomText>
        <CustomText stylearr={[20, 20, 400]} color={"black.alpha45"}>
          Best Food and Beverage in class
        </CustomText>
      </div>
      <div className="grid grid-cols-3 gap-[20px] w-full">
        {data?.slice(0, 3)?.map((item, index) => {
          const config = colorConfig[index];
          return (
            <div
              key={item.id}
              className={`h-[700px] relative w-full grow rounded-[20px] flex flex-col justify-between p-6 brightness-[0.8]`}
              style={{ background: config?.bgColor }}
            >
              <div className="flex z-20 flex-col gap-4">
                <CustomText stylearr={[40, 36, 800]} color={config?.fontColor}>
                  {item.title}
                </CustomText>
                <CustomText
                  stylearr={[20, 20, 500]}
                  opacity={0.6}
                  maxW={"75%"}
                  color={config?.fontColor}
                >
                  {item.dsc}
                </CustomText>
                <div
                  className="w-full h-[1px] opacity-50"
                  style={{ background: config?.dividerColor }}
                />
                <SimpleGrid columns={3} gap={8} className="w-full">
                  {item?.locations?.map((location) => (
                    <div
                      key={location.id}
                      className="flex flex-row items-center justify-center py-1 px-3 gap-1 rounded-[4px]"
                      style={{
                        background: config?.dividerColor,
                        color: config?.fontColor,
                      }}
                    >
                      <CustomText
                        stylearr={[14, 16, 500]}
                        w={"full"}
                        title={location.name}
                      >
                        {location.name}
                      </CustomText>
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.8323 4.5V11C12.8323 11.1326 12.7796 11.2598 12.6859 11.3536C12.5921 11.4473 12.4649 11.5 12.3323 11.5C12.1997 11.5 12.0725 11.4473 11.9788 11.3536C11.885 11.2598 11.8323 11.1326 11.8323 11V5.70687L4.68606 12.8538C4.59224 12.9476 4.46499 13.0003 4.33231 13.0003C4.19963 13.0003 4.07238 12.9476 3.97856 12.8538C3.88474 12.7599 3.83203 12.6327 3.83203 12.5C3.83203 12.3673 3.88474 12.2401 3.97856 12.1462L11.1254 5H5.83231C5.6997 5 5.57252 4.94732 5.47876 4.85355C5.38499 4.75979 5.33231 4.63261 5.33231 4.5C5.33231 4.36739 5.38499 4.24021 5.47876 4.14645C5.57252 4.05268 5.6997 4 5.83231 4H12.3323C12.4649 4 12.5921 4.05268 12.6859 4.14645C12.7796 4.24021 12.8323 4.36739 12.8323 4.5Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  ))}
                </SimpleGrid>
              </div>
              <div
                className="flex items-center z-20 justify-center rounded-[12px] h-[50px] text-white-absolute text-[18px] cursor-pointer hover:brightness-[0.9] leading-[18px] w-full"
                style={{ background: config?.buttonBg }}
              >
                View Details
              </div>
              <div className="absolute rounded-b-[20px] z-10 bottom-0 w-full inset-x-0 flex flex-row gap-2">
                <div
                  className="absolute  top-0 left-0 right-0 z-10 h-[33%]"
                  style={{ background: config?.imageBackground }}
                />

                <div
                  className="absolute rounded-[20px] bottom-0 left-0 right-0 z-10 h-[33%]"
                  style={{
                    background: config?.imageBackground,
                    transform: "rotate(180deg)",
                  }}
                />
                <CustomImage
                  src={item?.assets?.[0]!}
                  h={"500px"}
                  w={"33%"}
                  objectFit={"cover"}
                />
                <div className="flex-col gap-2 w-1/3">
                  <CustomImage
                    src={item?.assets?.[1]!}
                    h={"250px"}
                    objectFit={"cover"}
                  />
                  <CustomImage
                    src={item?.assets?.[2]!}
                    h={"250px"}
                    objectFit={"cover"}
                  />
                </div>
                <CustomImage
                  src={item?.assets?.[3]!}
                  h={"500px"}
                  w={"33%"}
                  objectFit={"cover"}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
