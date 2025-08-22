import { useNavigate } from "react-router-dom";
import CustomText from "../Text/CustomText";

export interface BREAD_CRUMB_PROPS {
  label: string;
  navigateTo: string;
}

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  data: BREAD_CRUMB_PROPS[];
}

export default function BreadCrumbs({ data, className, ...props }: IProps) {
  const navigate = useNavigate();

  return (
    <div
      className={`flex gap-1.5 items-center select-none ${className || ""}`}
      {...props}
    >
      {data?.map((row, index) => {
        if (index == data?.length - 1)
          return (
            <CustomText
              stylearr={[14, 28, 600]}
              className="capitalize text-black-500"
              key={index}
            >
              {row?.label}
            </CustomText>
          );
        return (
          <div key={index} className="flex gap-1.5 items-center text-grey-600">
            <CustomText
              stylearr={[14, 28, 600]}
              className="capitalize text-black-500 cursor-pointer"
              key={index}
              onClick={() => {
                navigate(row.navigateTo);
              }}
            >
              {row?.label?.toLowerCase()}
            </CustomText>
            <CustomText stylearr={[14, 28, 600]} className="text-black-500">
              /
            </CustomText>
          </div>
        );
      })}
    </div>
  );
}
