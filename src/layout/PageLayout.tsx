import { FlexProps } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";

interface IProps extends FlexProps {
  header?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export default function PageLayout({
  header,
  footer,
  children,
  ...props
}: IProps) {
  return (
    <AnimatePresence>
      {header && <div key="header">{header}</div>}
      <Box
        key="main-content"
        flexGrow={1}
        w={"full"}
        h={"full"}
        overflowY={"auto"}
        {...props}
      >
        {children}
      </Box>
      {footer && <div key="footer">{footer}</div>}
    </AnimatePresence>
  );
}
