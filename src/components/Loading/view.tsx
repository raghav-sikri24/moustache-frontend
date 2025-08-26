import { Flex, Image, FlexProps } from "@chakra-ui/react";
import LoadingGif from "../../assets/Animations/Loading.gif";
const gif = LoadingGif;

interface LoadingProps extends FlexProps {
  isFullScreen?: boolean;
}

export default function Loading({
  isFullScreen = false,
  ...props
}: LoadingProps) {
  return (
    <Flex
      position={isFullScreen ? "fixed" : "absolute"}
      top="0"
      left="0"
      right="0"
      bottom="0"
      bg="rgba(255, 255, 255, 0.8)"
      zIndex="overlay"
      justifyContent="center"
      alignItems="center"
      {...props}
    >
      <Image src={gif} alt="Loading" w={"50px"} h={"50px"} />
    </Flex>
  );
}
