import { Flex, FlexProps } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

interface IProp extends FlexProps {
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  closeOnOverlayClick?: boolean;
}

const MotionFlex = motion(Flex);

export default function CustomModal({
  children,
  isOpen,
  onClose,
  closeOnOverlayClick = true,
  ...props
}: IProp) {
  React.useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "initial";
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <MotionFlex
            w="100vw"
            h="100vh"
            top={0}
            left={0}
            position="fixed"
            bg="black.600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeOnOverlayClick ? onClose : undefined}
            zIndex={1400}
          ></MotionFlex>

          {/* Modal Content */}
          <MotionFlex
            boxShadow="0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            direction={"column"}
            bg="white.absolute"
            borderRadius="16px"
            border="1px solid"
            borderColor="grey.100"
            justifyContent={"center"}
            alignItems="center"
            position="fixed"
            zIndex={1401}
            top="50%"
            left={"50%"}
            transform={"translate(-50%,-50%)"}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: 1,
              scale: 1,
              transform: "translate(-50%,-50%)",
            }}
            exit={{ opacity: 0, scale: 0.95 }}
            //@ts-ignore
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            {...props}
          >
            {children}
          </MotionFlex>
        </>
      )}
    </AnimatePresence>
  );
}
