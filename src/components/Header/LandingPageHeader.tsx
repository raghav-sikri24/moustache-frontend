import CalendarIcon from "../../assets/Icons/CalendarIcon";
import SendPlaneFill from "../../assets/Icons/SendPlaneFill";
import logo from "../../assets/Images/MoustacheLogo.png";
import CustomButton from "../Button/view";
import CustomImage from "../Image/view";
import CustomText from "../Text/CustomText";
import { ProductTypeEnum } from "./utils/config";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  Variants,
} from "framer-motion";
import { useState } from "react";

const headerVariants: Variants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.1, 0.6, 0.3, 1],
    },
  },
  hidden: {
    y: -100,
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 1, 1],
    },
  },
};

export default function LandingPageHeader() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const isScrollingUp = latest < lastScrollY;
    const scrollDelta = Math.abs(latest - lastScrollY);

    if (latest <= 50) {
      setIsVisible(true);
    } else if (latest <= 150) {
      setIsVisible(false);
    } else if (isScrollingUp && scrollDelta > 10) {
      setIsVisible(true);
    } else if (!isScrollingUp && scrollDelta > 10) {
      setIsVisible(false);
    }

    setLastScrollY(latest);
  });

  return (
    <motion.div
      className="flex flex-col justify-between py-4 gap-4 w-full fixed top-0 left-0 right-0 bg-white-absolute z-50 transform-gpu"
      initial="visible"
      animate={isVisible ? "visible" : "hidden"}
      variants={headerVariants}
      style={{
        boxShadow: isVisible ? "0 2px 8px rgba(0, 0, 0, 0.1)" : "none",
      }}
    >
      <div className="flex flex-row justify-between w-full  px-[2%] lg:px-[5%]">
        <CustomImage
          src={logo}
          alt="moustache logo"
          w={"95px"}
          h={"52px"}
          objectFit="contain"
        />

        <div className="flex flex-row border rounded-[16px] items-center py-1 w-1/2">
          <div className="flex flex-col gap-1 border-r grow pl-[3%] cursor-pointer">
            <CustomText stylearr={[14, 16, 700]} color={"black.850"}>
              Where
            </CustomText>
            <CustomText stylearr={[14, 16, 400]} color={"black.450"}>
              Search Destinations
            </CustomText>
          </div>
          <div className="flex flex-col gap-1 border-r grow pl-[3%] cursor-pointer">
            <div className="flex flex-row gap-1 items-center">
              <CalendarIcon />
              <CustomText stylearr={[14, 16, 700]} color={"black.850"}>
                Check-in
              </CustomText>
            </div>

            <CustomText stylearr={[14, 16, 400]} color={"black.450"}>
              Select Date
            </CustomText>
          </div>
          <div className="flex flex-col gap-1 grow pl-[3%] cursor-pointer">
            <div className="flex flex-row gap-1 items-center">
              <CalendarIcon />
              <CustomText stylearr={[14, 16, 700]} color={"black.850"}>
                Check-out
              </CustomText>
            </div>

            <CustomText stylearr={[14, 16, 400]} color={"black.450"}>
              Select Date
            </CustomText>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <CustomButton
            variant="secondary"
            style={{ borderRadius: "100px", height: "49px" }}
          >
            Log in
          </CustomButton>
          <CustomButton
            style={{ borderRadius: "100px", height: "49px" }}
            rightIcon={<SendPlaneFill />}
          >
            Contact
          </CustomButton>
        </div>
      </div>
      <div className="flex flex-row justify-between w-full px-[2%] lg:px-[5%] gap-[5%] md:gap-[10%] xl:gap-[30%]">
        <div className="flex flex-row w-1/3 lg:w-1/2 gap-6 justify-between items-center">
          {Object.values(ProductTypeEnum).map((productType) => (
            <CustomText
              key={productType}
              stylearr={[16, 24, 400]}
              color={"gray.550"}
            >
              {productType}
            </CustomText>
          ))}
        </div>
        <div className="flex flex-row w-2/3 lg:w-1/2 justify-between items-center">
          <CustomText stylearr={[16, 20, 500]} color={"black.900"}>
            Destinations
          </CustomText>
          <div className="flex flex-row gap-[2px] items-center">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.2"
                d="M20.5708 5.2858L17.7817 21.1296C17.7646 21.2266 17.7286 21.3193 17.6757 21.4024C17.6227 21.4855 17.554 21.5573 17.4733 21.6138C17.3926 21.6703 17.3015 21.7104 17.2053 21.7317C17.1091 21.753 17.0097 21.7551 16.9127 21.738L4.70174 19.5817C4.50599 19.5472 4.33195 19.4364 4.21786 19.2736C4.10377 19.1108 4.05897 18.9094 4.0933 18.7136L6.88237 2.86987C6.89946 2.77284 6.9355 2.68014 6.98843 2.59705C7.04136 2.51396 7.11015 2.44211 7.19085 2.38561C7.27155 2.32911 7.3626 2.28906 7.45879 2.26775C7.55497 2.24644 7.65441 2.2443 7.75143 2.26143L19.9624 4.41768C20.1581 4.45221 20.3322 4.56304 20.4462 4.72582C20.5603 4.8886 20.6051 5.09001 20.5708 5.2858Z"
                fill="black"
              />
              <path
                d="M20.0919 3.67896L7.88092 1.52271C7.4892 1.45377 7.08613 1.54324 6.76036 1.77144C6.43459 1.99964 6.21279 2.34788 6.14374 2.73958L3.35467 18.5833C3.32056 18.7774 3.32503 18.9763 3.36783 19.1687C3.41062 19.3611 3.4909 19.5431 3.60409 19.7045C3.71727 19.8658 3.86113 20.0032 4.02746 20.1089C4.19378 20.2146 4.3793 20.2865 4.57342 20.3205L16.7844 22.4768C16.9785 22.511 17.1775 22.5067 17.37 22.4639C17.5625 22.4212 17.7447 22.3409 17.9061 22.2277C18.0675 22.1145 18.2051 21.9706 18.3108 21.8042C18.4166 21.6378 18.4885 21.4522 18.5225 21.258L21.3116 5.41427C21.3799 5.02242 21.2898 4.61947 21.061 4.29405C20.8323 3.96863 20.4837 3.74738 20.0919 3.67896ZM17.0431 20.9993L4.83124 18.843L7.6203 2.99927L19.8312 5.15552L17.0431 20.9993ZM8.70686 5.47614C8.7416 5.28037 8.85266 5.1064 9.01563 4.99248C9.17859 4.87856 9.38013 4.83402 9.57592 4.86864L17.3572 6.24208C17.5421 6.27448 17.7082 6.37505 17.8225 6.52394C17.9369 6.67283 17.9913 6.8592 17.9749 7.04623C17.9585 7.23326 17.8726 7.40735 17.7341 7.5341C17.5956 7.66086 17.4146 7.73106 17.2269 7.73083C17.1829 7.73077 17.139 7.72701 17.0956 7.71958L9.31436 6.34521C9.11859 6.31047 8.94462 6.1994 8.8307 6.03644C8.71678 5.87347 8.67224 5.67194 8.70686 5.47614ZM8.18749 8.43114C8.20458 8.33412 8.24062 8.24142 8.29355 8.15832C8.34648 8.07523 8.41527 8.00339 8.49597 7.94688C8.57667 7.89038 8.66772 7.85033 8.76391 7.82903C8.86009 7.80772 8.95953 7.80557 9.05655 7.82271L16.8378 9.19708C17.024 9.22823 17.1917 9.32847 17.3072 9.4778C17.4228 9.62712 17.4778 9.81454 17.4612 10.0026C17.4446 10.1907 17.3577 10.3656 17.2178 10.4925C17.0779 10.6193 16.8954 10.6887 16.7065 10.6868C16.6622 10.6869 16.6179 10.6828 16.5744 10.6746L8.79311 9.30114C8.59749 9.26598 8.42382 9.1546 8.31027 8.99147C8.19671 8.82834 8.15255 8.62681 8.18749 8.43114ZM7.66717 11.3852C7.70257 11.1899 7.8139 11.0167 7.97679 10.9033C8.13968 10.79 8.34085 10.7458 8.53624 10.7805L12.425 11.464C12.6098 11.4963 12.7758 11.5968 12.8902 11.7456C13.0046 11.8944 13.059 12.0807 13.0428 12.2676C13.0265 12.4546 12.9408 12.6287 12.8024 12.7555C12.6641 12.8823 12.4833 12.9527 12.2956 12.9527C12.2516 12.9527 12.2077 12.9489 12.1644 12.9415L8.27374 12.2543C8.07813 12.2193 7.9044 12.1082 7.79067 11.9452C7.67695 11.7823 7.63253 11.5809 7.66717 11.3852Z"
                fill="black"
              />
            </svg>

            <CustomText stylearr={[16, 18, 500]} color={"black.900"}>
              Work with moustache
            </CustomText>
          </div>
          <div className="flex flex-row gap-[2px] items-center">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.2"
                d="M21.332 11.0916V18.75C21.332 18.9489 21.253 19.1397 21.1124 19.2803C20.9717 19.421 20.7809 19.5 20.582 19.5H4.08203C3.88312 19.5 3.69235 19.421 3.5517 19.2803C3.41105 19.1397 3.33203 18.9489 3.33203 18.75V11.0916C6.06721 12.6739 9.17215 13.5048 12.332 13.5C15.4919 13.505 18.597 12.6741 21.332 11.0916Z"
                fill="black"
              />
              <path
                d="M10.082 10.5C10.082 10.3011 10.161 10.1103 10.3017 9.96967C10.4424 9.82902 10.6331 9.75 10.832 9.75H13.832C14.0309 9.75 14.2217 9.82902 14.3624 9.96967C14.503 10.1103 14.582 10.3011 14.582 10.5C14.582 10.6989 14.503 10.8897 14.3624 11.0303C14.2217 11.171 14.0309 11.25 13.832 11.25H10.832C10.6331 11.25 10.4424 11.171 10.3017 11.0303C10.161 10.8897 10.082 10.6989 10.082 10.5ZM22.082 6.75V18.75C22.082 19.1478 21.924 19.5294 21.6427 19.8107C21.3614 20.092 20.9799 20.25 20.582 20.25H4.08203C3.68421 20.25 3.30268 20.092 3.02137 19.8107C2.74007 19.5294 2.58203 19.1478 2.58203 18.75V6.75C2.58203 6.35218 2.74007 5.97064 3.02137 5.68934C3.30268 5.40804 3.68421 5.25 4.08203 5.25H7.83203V4.5C7.83203 3.90326 8.06908 3.33097 8.49104 2.90901C8.913 2.48705 9.48529 2.25 10.082 2.25H14.582C15.1788 2.25 15.7511 2.48705 16.173 2.90901C16.595 3.33097 16.832 3.90326 16.832 4.5V5.25H20.582C20.9799 5.25 21.3614 5.40804 21.6427 5.68934C21.924 5.97064 22.082 6.35218 22.082 6.75ZM9.33203 5.25H15.332V4.5C15.332 4.30109 15.253 4.11032 15.1124 3.96967C14.9717 3.82902 14.7809 3.75 14.582 3.75H10.082C9.88312 3.75 9.69235 3.82902 9.5517 3.96967C9.41105 4.11032 9.33203 4.30109 9.33203 4.5V5.25ZM4.08203 6.75V10.6519C6.61368 12.0292 9.44997 12.7505 12.332 12.75C15.2142 12.7505 18.0506 12.0289 20.582 10.6509V6.75H4.08203ZM20.582 18.75V12.3403C18.0134 13.5969 15.1916 14.2501 12.332 14.25C9.47253 14.2506 6.65071 13.5977 4.08203 12.3412V18.75H20.582Z"
                fill="black"
              />
            </svg>

            <CustomText stylearr={[16, 20, 500]} color={"black.900"}>
              Open franchise
            </CustomText>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
