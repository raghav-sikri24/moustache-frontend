import { SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import CustomButton from "../../../../components/Button/view";
import CustomTextInput from "../../../../components/Form/components/CustomTextInput";
import CustomText from "../../../../components/Text/CustomText";
import { regexEmail } from "../../../../utils/regex";
import {
  footerLearMoreConfig,
  policiesConfig,
  socialMediaConfig,
  usefulLinksConfig,
} from "../utils/config";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row gap-6 w-full px-6 relative">
        <div className="absolute h-1/4 w-full bottom-0 inset-x-0 bg-black-900 z-[1]"></div>
        <div className="z-[2] flex flex-row gap-6 w-full">
          {footerLearMoreConfig?.map((item) => (
            <div
              className="flex flex-col grow w-1/4 rounded-[16px] p-4 gap-3 bg-trueGray-100"
              key={item.title}
            >
              <div className="rounded-[12px] p-3 flex items-center w-[56px] h-[56px] justify-center bg-white-absolute">
                {item.icon}
              </div>
              <CustomText stylearr={[24, 24, 600]}>{item.title}</CustomText>
              <CustomText
                stylearr={[20, 20, 400]}
                letterSpacing={0}
                color={"black.alpha80"}
              >
                {item.dsc}
              </CustomText>
              <div className="py-3 px-6 rounded-[16px] w-fit flex items-center justify-center bg-black-alpha08 mt-5">
                <CustomText stylearr={[16, 16, 600]} letterSpacing={0}>
                  Learn more
                </CustomText>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-[50px] pt-[50px] bg-black-900 px-6">
        <div className="flex flex-row">
          <div className="flex w-1/4 flex-col gap-6 p-4 rounded-[16px] h-fit bg-[#3D3D3D]">
            <CustomText stylearr={[16, 16, 700]} color={"white.absolute"}>
              Our Newsletter
            </CustomText>
            <div className="flex flex-col gap-6 text-center"></div>
            <CustomTextInput
              key="email"
              inputKey="email"
              type="text"
              required
              value={email}
              placeholder="Enter Email ID"
              label=""
              errorMsg={error}
              className="w-full bg-[#176FC10]"
              onInput={({ value }) => {
                setEmail(value);
              }}
              onBlur={({ value }) => {
                if (!value) {
                  setError("");
                } else {
                  setError(regexEmail.test(value) ? "" : "Invalid Email");
                }
              }}
              formStyle={{
                borderColor: "white.absolute",
                color: "white.absolute",
              }}
            />
            <CustomButton variant="secondary">Subscribe</CustomButton>
          </div>
          <div className="flex flex-col w-1/4 gap-6 text-center">
            <CustomText stylearr={[16, 24, 700]} color={"white.absolute"}>
              {usefulLinksConfig.title}
            </CustomText>
            <div className="flex flex-col gap-4">
              {usefulLinksConfig?.items?.map((item) => (
                <CustomText
                  stylearr={[16, 24, 400]}
                  color={"white.absolute"}
                  className="cursor-pointer hover:underline"
                >
                  {item.title}
                </CustomText>
              ))}
            </div>
          </div>
          <div className="flex flex-col w-1/4 gap-6 text-center">
            <CustomText stylearr={[16, 24, 700]} color={"white.absolute"}>
              {policiesConfig.title}
            </CustomText>
            <div className="flex flex-col gap-4">
              {policiesConfig?.items?.map((item) => (
                <CustomText
                  stylearr={[16, 24, 400]}
                  color={"white.absolute"}
                  className="cursor-pointer hover:underline"
                >
                  {item.title}
                </CustomText>
              ))}
            </div>
          </div>
          <div className="flex flex-col w-1/4 gap-7 items-end">
            <CustomText
              stylearr={[16, 16, 700]}
              color={"white.absolute"}
              textAlign={"start"}
            >
              Social Media
            </CustomText>
            <SimpleGrid columns={3} spacing={"12px"}>
              {socialMediaConfig?.items?.map((item, index) => (
                <div
                  key={index}
                  className="w-[56px] h-[56px] rounded-[8px] bg-[#3D3D3D] flex items-center justify-center"
                >
                  {item.icon}
                </div>
              ))}
            </SimpleGrid>
          </div>
        </div>
        <CustomText stylearr={[130, 130, 900]} color={"white.alpha40"}>
          Book with Moustache!
        </CustomText>
      </div>
    </div>
  );
}
