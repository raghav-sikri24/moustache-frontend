import { useEffect, useState } from "react";
import { ProductTypeEnum } from "../../../../components/Header/utils/config";
import CustomText from "../../../../components/Text/CustomText";
import { GridItem, SimpleGrid } from "@chakra-ui/react";
import banner from "../../../../assets/Images/StayWithMoustache.png";
import CustomImage from "../../../../components/Image/view";

export default function StayWithMoustacheBanner() {
  const [highlghted, setHighlighted] = useState<string>(ProductTypeEnum.HOSTEL);
  const stats = [
    { number: "100+", title: "Hostel homes" },
    { number: "8+", title: "Locations" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (highlghted === ProductTypeEnum.HOSTEL) {
        setHighlighted(ProductTypeEnum.LUXURIA);
      } else if (highlghted === ProductTypeEnum.LUXURIA) {
        setHighlighted(ProductTypeEnum.SELECT);
      } else {
        setHighlighted(ProductTypeEnum.HOSTEL);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [highlghted]);

  return (
    <div className="flex flex-col py-[50px] gap-[32px] items-center justify-center">
      <CustomText stylearr={[32, 40, 900]}>
        Ways to stay with Moustache
      </CustomText>
      <div className="flex flex-row h-[750px]">
        <div className="p-[50px] flex flex-col justify-between h-full bg-black-900">
          <div
            className={`flex flex-col text-white-absolute items-center ${highlghted === ProductTypeEnum.HOSTEL ? "opacity-100" : "opacity-20"}`}
          >
            <CustomText stylearr={[32, 32, 600]} letterSpacing={10}>
              MOUSTACHE
            </CustomText>
            <CustomText stylearr={[126, 126, 400]} className="font-nate">
              Hostel
            </CustomText>
          </div>
          <div
            className={`flex flex-col gap-2 text-white-absolute items-center ${highlghted === ProductTypeEnum.LUXURIA ? "opacity-100" : "opacity-20"}`}
          >
            <CustomText
              stylearr={[122, 122, 400]}
              className="font-miera"
              letterSpacing={10}
            >
              Luxuria
            </CustomText>
            <div className="w-full h-[1px] bg-white-absolute"></div>
            <CustomText stylearr={[26, 30, 200]} className="font-kumbh">
              BY MOSTACHE
            </CustomText>
          </div>
          <div
            className={`flex flex-col text-white-absolute items-center ${highlghted === ProductTypeEnum.SELECT ? "opacity-100" : "opacity-20"}`}
          >
            <CustomText
              stylearr={[120, 120, 400]}
              className="font-starkwalker"
              letterSpacing={10}
            >
              SELECT
            </CustomText>
          </div>
        </div>
        <div className="flex flex-col gap-6 p-[50px] bg-red-600 w-full h-full">
          <div className="flex flex-col gap-4 mb-6">
            <CustomText
              stylearr={[86, 88, 700]}
              color={"white.absolute"}
              wordBreak={"break-all"}
            >
              Want a budget-friendly stay?
            </CustomText>
            <CustomText stylearr={[28, 28, 300]} color={"white.absolute"}>
              Hop on to{" "}
              <span className="text-yellow-500">
                {highlghted} by Moustache{" "}
              </span>{" "}
              to never miss any vacation{" "}
            </CustomText>
          </div>
          <SimpleGrid columns={3} gap={12} flex="1">
            <GridItem colSpan={2}>
              {" "}
              <CustomImage
                src={banner}
                w={"100%"}
                h={"100%"}
                rounded={"20px"}
                objectFit="cover"
              />
            </GridItem>
            <GridItem colSpan={1}>
              <div className="flex flex-col justify-between gap-8 w-full h-full">
                <div className="flex flex-col gap-2 flex-1">
                  {stats?.slice(0, 2)?.map((stat) => (
                    <div className="flex flex-col gap-2 items-center justify-center rounded-[16px] border-black-900 border-[1px] bg-white-absolute flex-1">
                      <CustomText stylearr={[54, 54, 700]}>
                        {stat.number}
                      </CustomText>
                      <CustomText stylearr={[24, 24, 600]}>
                        {stat.title}
                      </CustomText>
                    </div>
                  ))}
                </div>
                <div className="flex flex-row cursor-pointer hover:bg-black-800 hover:scale-105 transition-all duration-300 justify-between items-center bg-black-900 rounded-[100px] p-3 text-white-absolute">
                  <CustomText
                    stylearr={[20, 24, 500]}
                    className="flex-1 justify-center text-center"
                    color={"white.absolute"}
                  >
                    Book now
                  </CustomText>
                  <div className="bg-white-absolute w-[36px]  h-[36px] flex items-center justify-center rounded-[100px]">
                    <svg
                      width="16"
                      height="14"
                      viewBox="0 0 16 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.5015 12.3903L14.1637 2.6093M14.1637 2.6093L4.3448 1.34877M14.1637 2.6093L12.9032 12.4282"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </GridItem>
          </SimpleGrid>
        </div>
      </div>
    </div>
  );
}
