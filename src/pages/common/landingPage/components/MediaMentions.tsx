import useGetMediaMentions from "../hooks/useGetMediaMentions";
import leafLeft from "../../../../assets/Images/leaft-left.png";
import leafRight from "../../../../assets/Images/leaf-right.png";
import CustomImage from "../../../../components/Image/view";
import CustomText from "../../../../components/Text/CustomText";

export default function MediaMentions() {
  const { data } = useGetMediaMentions();
  return (
    <div
      className="flex flex-col py-9 gap-[50px] items-center justify-center"
      style={{
        background:
          "radial-gradient(48.15% 55.97% at 49.98% 0%, #D5BE76 0%, #FFFFFF 100%)",
      }}
    >
      <div className="flex flex-row gap-4 items-center">
        <CustomImage src={leafLeft} w={"40px"} h={"72px"} />
        <CustomText stylearr={[40, 40, 900]}>Media Mentions</CustomText>
        <CustomImage src={leafRight} w={"40px"} h={"72px"} />
      </div>
      <div className="flex flex-row gap-4 items-center">
        {data?.map((item) => (
          <CustomImage
            src={item.img}
            rounded={"24px"}
            w={"240px"}
            h={"240px"}
          />
        ))}
      </div>
    </div>
  );
}
