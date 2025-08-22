import { Box, Flex, FlexProps } from "@chakra-ui/react";
import CustomText from "../Text/CustomText";

interface IProps extends FlexProps {
  data: string[];
  activeStep: number;
}

const CustomStepper = ({ data, activeStep, ...props }: IProps) => {
  const activeIndex = activeStep - 1;
  const getStepState = (index: number) => {
    if (index < activeIndex) return "completed";
    if (index === activeIndex) return "active";
    return "inactive";
  };

  const getCircleStyles = (state: string) => {
    switch (state) {
      case "completed":
        return {
          borderColor: "#176FC1",
          backgroundColor: "#176FC1",
          dotColor: "#FFFFFF",
        };
      case "active":
        return {
          borderColor: "#176FC1",
          backgroundColor: "#FFFFFF",
          dotColor: "#176FC1",
        };
      case "inactive":
        return {
          borderColor: "#BBBCBE",
          backgroundColor: "#FFFFFF",
          dotColor: "#BBBCBE",
        };
      default:
        return {
          borderColor: "#BBBCBE",
          backgroundColor: "#FFFFFF",
          dotColor: "#BBBCBE",
        };
    }
  };

  const getConnectorColor = (index: number) => {
    return index < activeIndex ? "#176FC1" : "#BBBCBE";
  };

  return (
    <Box w="100%" maxW="800px" minW="300px" mx="auto" {...props}>
      {/* Circles and connectors */}
      <Flex alignItems="center" mb="12px" w="100%">
        {data.map((_, index) => {
          const state = getStepState(index);
          const styles = getCircleStyles(state);
          const isLastStep = index === data.length - 1;

          return (
            <Flex
              key={index}
              alignItems="center"
              flex={isLastStep ? "0 0 auto" : "1"}
            >
              {/* Circle matching SVG structure */}
              <Box
                width="32px"
                height="32px"
                borderRadius="16px"
                backgroundColor="white"
                position="relative"
                flexShrink={0}
              >
                {/* Inner circle with border - matches SVG path */}
                <Box
                  width="22px"
                  height="22px"
                  borderRadius="11px"
                  border="2px solid"
                  borderColor={styles.borderColor}
                  backgroundColor={styles.backgroundColor}
                  position="absolute"
                  top="5px"
                  left="5px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  {/* Center dot - 4px radius as per SVG */}
                  <Box
                    width="8px"
                    height="8px"
                    borderRadius="50%"
                    backgroundColor={styles.dotColor}
                  />
                </Box>
              </Box>

              {/* Connector line - flexible width */}
              {!isLastStep && (
                <Box
                  height="2px"
                  flex="1"
                  minW="50px"
                  maxW="400px"
                  backgroundColor={getConnectorColor(index)}
                  mx="16px"
                />
              )}
            </Flex>
          );
        })}
      </Flex>

      {/* Text labels below circles */}
      <Flex justifyContent="space-between" alignItems="flex-start" w="100%">
        {data.map((step, index) => {
          return (
            <Box
              key={index}
              minW="100px"
              maxW="200px"
              flex="1"
              textAlign={
                index === 0
                  ? "left"
                  : index === data.length - 1
                    ? "right"
                    : "center"
              }
              px="8px"
            >
              <CustomText
                stylearr={[14, 20, 600]}
                color="#003D6A"
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
                mr={index === data.length - 1 ? "-50px" : "0"}
                ml={index === 0 ? "-50px" : "0"}
              >
                {`Step ${index + 1}:`} {step}
              </CustomText>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

export default CustomStepper;
