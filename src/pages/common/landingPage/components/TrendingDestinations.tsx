import { SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import Hostel from "../../../../assets/Images/Hostel.png";
import Luxuria from "../../../../assets/Images/Luxuria.png";
import Select from "../../../../assets/Images/Select.png";
import CustomButton from "../../../../components/Button/view";
import { ProductTypeEnum } from "../../../../components/Header/utils/config";
import CustomImage from "../../../../components/Image/view";
import CustomText from "../../../../components/Text/CustomText";
import useGetTrendingDestinations from "../hooks/useGetTrendingDestinations";

const config = [
  {
    image: Select,
    title: ProductTypeEnum.SELECT,
  },
  {
    image: Hostel,
    title: ProductTypeEnum.HOSTEL,
  },
  {
    image: Luxuria,
    title: ProductTypeEnum.LUXURIA,
  },
];

export default function TrendingDestinations() {
  const [selected, setSelected] = useState<string>(ProductTypeEnum.SELECT);
  const { data } = useGetTrendingDestinations(selected);
  return (
    <div className="flex flex-col p-[50px] gap-[64px] w-full">
      <div className="flex flex-col items-center justify-center">
        <CustomText stylearr={[32, 32, 900]}>Trending Destinations</CustomText>
        <CustomText
          stylearr={[20, 20, 400]}
          className=" mt-4"
          color={"black.alpha45"}
        >
          Discover the most memorable stays at moustache for an unforgettable
          experience
        </CustomText>
        <div className="flex flex-row gap-2 mt-8">
          {config?.map((item) => (
            <div
              key={item.title}
              className={`py-2 flex flex-row gap-2 border rounded-[100px] justify-center items-center w-[180px] cursor-pointer ${
                item.title === selected
                  ? "text-black-900 border-black-900"
                  : "text-gray-550 border-black-alpha08"
              }`}
              onClick={() => setSelected(item.title)}
            >
              <CustomImage src={item.image} h={"36px"} w={"36px"} />
              <CustomText stylearr={[20, 20, 400]}>{item.title}</CustomText>
            </div>
          ))}
        </div>
        <CustomText
          stylearr={[64, 64, 600]}
          className="mt-8 font-product-sans"
          color={"black.alpha16"}
        >
          {selected} by Moustache
        </CustomText>
        <SimpleGrid columns={4} spacingY={"32px"} spacingX={"16px"} mt={"32px"}>
          {data?.map((item) => (
            <div
              className="h-[350px] relative border rounded-[16px] flex flex-col"
              key={item.id}
            >
              <div className="absolute right-[8px] top-[12px] z-10">
                <CustomImage
                  src={
                    selected === ProductTypeEnum.SELECT
                      ? Select
                      : selected === ProductTypeEnum.HOSTEL
                        ? Hostel
                        : Luxuria
                  }
                  h={"36px"}
                  w={"36px"}
                />
              </div>

              <CustomImage
                src={item.img}
                h={"220px"}
                objectFit={"cover"}
                className="brightness-[0.9]"
              />
              <div className="py-4 px-3 flex flex-col justify-between flex-1">
                <CustomText stylearr={[16, 20, 700]}>{item.name}</CustomText>
                <div className="flex flex-row h-full justify-between items-center">
                  <div className="flex flex-row gap-1 items-center">
                    <svg
                      width="14"
                      height="12"
                      viewBox="0 0 14 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.9847 4.67581C13.9847 4.68269 13.9847 4.68894 13.9803 4.69581L12.5628 11.1877C12.5191 11.4163 12.3971 11.6225 12.2178 11.7708C12.0385 11.9191 11.813 12.0002 11.5803 12.0002H2.41965C2.18704 12.0001 1.96173 11.9189 1.78252 11.7706C1.6033 11.6223 1.48139 11.4162 1.43778 11.1877L0.0202782 4.69581C0.0202782 4.68894 0.0171532 4.68269 0.0159032 4.67581C-0.0228922 4.46088 0.00974771 4.23915 0.108836 4.04451C0.207924 3.84987 0.368011 3.69302 0.564635 3.59793C0.76126 3.50284 0.983609 3.47474 1.19771 3.51793C1.41181 3.56111 1.60588 3.67319 1.75028 3.83706L3.85465 6.10519L6.09215 1.08706C6.09226 1.08498 6.09226 1.08289 6.09215 1.08081C6.17216 0.907279 6.30022 0.760303 6.46116 0.657283C6.6221 0.554262 6.80919 0.499512 7.00028 0.499512C7.19137 0.499512 7.37846 0.554262 7.5394 0.657283C7.70034 0.760303 7.82839 0.907279 7.9084 1.08081C7.9083 1.08289 7.9083 1.08498 7.9084 1.08706L10.1459 6.10519L12.2503 3.83706C12.395 3.67441 12.5888 3.56342 12.8023 3.52094C13.0158 3.47847 13.2374 3.50683 13.4333 3.60172C13.6292 3.69661 13.7888 3.85284 13.8879 4.0467C13.987 4.24055 14.0201 4.46144 13.9822 4.67581H13.9847Z"
                        fill="#89957D"
                      />
                    </svg>
                    <CustomText stylearr={[14, 14, 400]}>
                      Best known for
                    </CustomText>
                  </div>
                  <CustomText stylearr={[14, 14, 700]}>
                    {item.knownFor}
                  </CustomText>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <div className="flex flex-row gap-1 items-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.2069 8.5L9 2.29313C8.90748 2.19987 8.79734 2.12593 8.67599 2.0756C8.55464 2.02528 8.4245 1.99959 8.29313 2.00001H2.50001C2.3674 2.00001 2.24022 2.05268 2.14645 2.14645C2.05268 2.24022 2.00001 2.3674 2.00001 2.50001V8.29313C1.99959 8.4245 2.02528 8.55464 2.0756 8.67599C2.12593 8.79734 2.19987 8.90748 2.29313 9L8.5 15.2069C8.59287 15.2998 8.70312 15.3734 8.82446 15.4237C8.9458 15.474 9.07585 15.4999 9.20719 15.4999C9.33853 15.4999 9.46859 15.474 9.58993 15.4237C9.71127 15.3734 9.82152 15.2998 9.91438 15.2069L15.2069 9.91438C15.2998 9.82152 15.3734 9.71127 15.4237 9.58993C15.474 9.46859 15.4999 9.33853 15.4999 9.20719C15.4999 9.07585 15.474 8.9458 15.4237 8.82446C15.3734 8.70312 15.2998 8.59287 15.2069 8.5ZM5.25 6C5.10167 6 4.95666 5.95602 4.83333 5.87361C4.70999 5.7912 4.61386 5.67406 4.5571 5.53702C4.50033 5.39997 4.48548 5.24917 4.51442 5.10369C4.54335 4.9582 4.61479 4.82456 4.71967 4.71967C4.82456 4.61479 4.9582 4.54335 5.10369 4.51442C5.24917 4.48548 5.39997 4.50033 5.53702 4.5571C5.67406 4.61386 5.7912 4.70999 5.87361 4.83333C5.95602 4.95666 6 5.10167 6 5.25C6 5.44892 5.92099 5.63968 5.78033 5.78033C5.63968 5.92099 5.44892 6 5.25 6Z"
                        fill="#89957D"
                      />
                    </svg>

                    <CustomText stylearr={[14, 14, 400]}>
                      Price range
                    </CustomText>
                  </div>
                  <CustomText stylearr={[14, 14, 700]}>
                    {item.priceRange}
                  </CustomText>
                </div>
              </div>
            </div>
          ))}
        </SimpleGrid>
        <CustomButton
          variant="tertiary"
          mx="auto"
          w={"136px"}
          h={"44px"}
          rounded={"25px"}
          mt={"40px"}
          rightIcon={
            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.16539 6.99984L14.4987 6.99984M14.4987 6.99984L8.66539 1.1665M14.4987 6.99984L8.66539 12.8332"
                stroke="black"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
        >
          See all
        </CustomButton>
      </div>
    </div>
  );
}
