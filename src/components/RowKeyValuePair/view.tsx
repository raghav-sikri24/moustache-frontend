import { SimpleGrid, SimpleGridProps } from "@chakra-ui/react";
import CustomText from "../Text/CustomText";

export interface IProps extends SimpleGridProps {
  columns?: number;
  config: {
    label: string;
    value?: string;
    component?: React.ReactNode;
    colSpan?: number;
  }[];
}

export default function RowKeyValuePair({
  columns = 4,
  config,
  ...props
}: IProps) {
  return (
    <SimpleGrid columns={columns} spacingY={"16px"} w={"full"} {...props}>
      {config?.map((item) => (
        <div
          className="flex flex-col gap-[2px]"
          key={item.label}
          style={{
            gridColumn: item.colSpan ? `span ${item.colSpan}` : "span 1",
          }}
        >
          <CustomText stylearr={[12, 18, 600]} color={"black.300"}>
            {item.label}
          </CustomText>
          {item?.component ? (
            item.component
          ) : (
            <CustomText
              stylearr={[14, 22, 400]}
              color={"black.600"}
              isTruncated
              title={item?.value}
            >
              {item?.value || "-"}
            </CustomText>
          )}
        </div>
      ))}
    </SimpleGrid>
  );
}
