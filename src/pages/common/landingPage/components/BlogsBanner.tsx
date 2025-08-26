import { SimpleGrid } from "@chakra-ui/react";
import CustomText from "../../../../components/Text/CustomText";
import { blogConfig } from "../utils/config";
import CustomImage from "../../../../components/Image/view";
import CustomButton from "../../../../components/Button/view";

const BlogItem = ({ blog, main = false }: { blog: any; main?: boolean }) => {
  const height = main ? "360px" : "98px";
  const titleText = main ? [32, 44, 600] : [20, 20, 600];
  const dscText = main ? [22, 30, 400] : [14, 14, 400];
  const authorText = main ? [16, 20, 500] : [16, 16, 400];
  return (
    <div className="flex flex-col p-4 gap-6 border rounded-[24px]">
      <CustomImage
        src={blog.img}
        minH={height}
        w={"full"}
        objectFit={"cover"}
        rounded={"12px"}
        flexGrow={1}
      />
      <div className="flex flex-col gap-3">
        <CustomText
          stylearr={titleText as [number, number, number]}
          textAlign={"start"}
        >
          {blog.title}
        </CustomText>
        <div className="flex flex-col gap-2">
          <CustomText
            stylearr={dscText as [number, number, number]}
            textAlign={"start"}
            color={"black.alpha50"}
          >
            {blog.dsc}
          </CustomText>
          <div className="flex flex-row gap-2 items-center">
            <CustomText
              stylearr={authorText as [number, number, number]}
              textAlign={"start"}
            >
              {blog.author}
            </CustomText>
            <div className="w-[1px] h-[16px] bg-black-alpha50"></div>
            <CustomText
              stylearr={authorText as [number, number, number]}
              textAlign={"start"}
            >
              {blog.time} min read
            </CustomText>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function BlogsBanner() {
  return (
    <div className="flex flex-col py-[66px] px-[44px] gap-8">
      <CustomText stylearr={[32, 32, 900]} textAlign={"center"}>
        Travel Tales with Moustache
      </CustomText>
      <SimpleGrid columns={2} spacing={"16px"}>
        <BlogItem blog={blogConfig[0]} main />
        <SimpleGrid columns={1} spacing={"16px"}>
          <BlogItem blog={blogConfig[1]} />
          <BlogItem blog={blogConfig[2]} />
        </SimpleGrid>
      </SimpleGrid>
      <CustomButton
        variant="tertiary"
        mx="auto"
        w={"136px"}
        h={"44px"}
        rounded={"25px"}
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
  );
}
