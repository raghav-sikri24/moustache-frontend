import { Icon, SimpleGrid } from "@chakra-ui/react";
import CustomText from "../../../../components/Text/CustomText";
import useGetPickByTravelStyles from "../hooks/useGetPickByTravelStyles";

export default function PickByTravelStyles() {
  const { data } = useGetPickByTravelStyles();
  return (
    <div className="pt-[60px] pb-[30px] px-[55px] flex flex-col gap-6 items-center justufy-center">
      <CustomText stylearr={[32, 36, 900]}>Pick by Travel Styles</CustomText>
      <SimpleGrid columns={5} spacing={"16px"}>
        {data?.map((item) => (
          <div
            className="flex flex-col gap-[10px] rounded-[24px] p-6 bg-neutral-50 text-white-absolute"
            key={`travel-style${item.id}`}
          >
            <div className="flex w-[48px] h-[48px] bg-black-900 text-white-absolute items-center justify-center rounded-[12px]">
              <Icon fill={"white.absolute"} as={item.img as any} />
            </div>
            <CustomText
              stylearr={[24, 24, 700]}
              color={"black.900"}
              className="font-product-sans"
            >
              {item.name}
            </CustomText>
          </div>
        ))}
      </SimpleGrid>
    </div>
  );
}
