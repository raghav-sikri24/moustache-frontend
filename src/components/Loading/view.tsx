import { Flex, Image, FlexProps } from "@chakra-ui/react";
import LoadingGif from "../../assets/Animations/Loading.gif";
const gif = LoadingGif;
export default function Loading(props?: FlexProps) {
  return (
    <Flex {...props}>
      <Image src={gif} alt="Loading" w={"50px"} h={"50px"} />
    </Flex>
  );
}
