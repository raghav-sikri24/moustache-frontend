import { Button, Flex } from "@chakra-ui/react";
import * as React from "react";

interface PaginationProps {
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
}

interface ArrowButtonProps {
  direction: "left" | "right";
  onClick: () => void;
  disabled: boolean;
}

// Custom Arrow Icons
const ArrowLeftIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className={className}
  >
    <rect width="16" height="16" fill="white" />
    <path
      d="M8.86015 12.3952L5.14015 8.66856C5.01598 8.54366 4.94629 8.37469 4.94629 8.19857C4.94629 8.02244 5.01598 7.85347 5.14015 7.72856L8.86015 4.0019C8.9534 3.90788 9.07253 3.84376 9.20236 3.81771C9.3322 3.79167 9.46684 3.80487 9.58914 3.85565C9.71143 3.90643 9.81584 3.99248 9.88904 4.10282C9.96224 4.21317 10.0009 4.34281 10.0002 4.47523V11.9219C10.0009 12.0543 9.96224 12.184 9.88904 12.2943C9.81584 12.4047 9.71143 12.4907 9.58914 12.5415C9.46684 12.5923 9.3322 12.6055 9.20236 12.5794C9.07253 12.5534 8.9534 12.4893 8.86015 12.3952Z"
      fill="#176FC1"
    />
  </svg>
);

const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className={className}
  >
    <rect
      width="16"
      height="16"
      transform="matrix(-1 0 0 -1 16 16)"
      fill="white"
    />
    <path
      d="M7.13985 3.60477L10.8598 7.33144C10.984 7.45634 11.0537 7.62531 11.0537 7.80143C11.0537 7.97756 10.984 8.14653 10.8598 8.27144L7.13985 11.9981C7.0466 12.0921 6.92747 12.1562 6.79764 12.1823C6.6678 12.2083 6.53316 12.1951 6.41086 12.1443C6.28857 12.0936 6.18416 12.0075 6.11096 11.8972C6.03776 11.7868 5.99908 11.6572 5.99985 11.5248L5.99985 4.0781C5.99908 3.94569 6.03776 3.81604 6.11096 3.70569C6.18416 3.59535 6.28857 3.5093 6.41086 3.45852C6.53316 3.40774 6.6678 3.39454 6.79764 3.42058C6.92747 3.44663 7.0466 3.51075 7.13985 3.60477Z"
      fill="currentColor"
    />
  </svg>
);

const ArrowButton: React.FC<ArrowButtonProps> = ({
  direction,
  onClick,
  disabled,
}) => {
  return (
    <Button
      minH="32px"
      maxH="32px"
      maxW="32px"
      minW="32px"
      justifyContent="center"
      alignItems="center"
      bgColor="grey.10"
      borderColor="grey.100"
      borderWidth="1px"
      color="primary.500"
      onClick={onClick}
      disabled={disabled}
      isDisabled={disabled}
      p={0}
      m={0}
      fontSize="14px"
      fontWeight="500"
      borderRadius="8px"
      cursor={disabled ? "not-allowed" : "pointer"}
      transition="all 0.2s ease-in-out"
      _hover={
        !disabled
          ? {
              bgColor: "grey.50",
              borderColor: "grey.200",
              color: "grey.700",
              transform: "translateY(-0.5px)",
              boxShadow: "0 1px 4px rgba(0, 0, 0, 0.05)",
            }
          : {}
      }
      _active={
        !disabled
          ? {
              bgColor: "grey.100",
              borderColor: "grey.300",
              transform: "translateY(0)",
              boxShadow: "0 1px 4px rgba(0, 0, 0, 0.15)",
            }
          : {}
      }
      _focus={{
        outline: "none",
        boxShadow: "0 0 0 2px rgba(208, 213, 221, 0.3)",
      }}
      _disabled={{
        color: "grey.400",
        cursor: "not-allowed",
        opacity: 0.6,
        transform: "none",
        boxShadow: "none",
      }}
    >
      {direction === "left" ? <ArrowLeftIcon /> : <ArrowRightIcon />}
    </Button>
  );
};

const Pagination: React.FC<PaginationProps> = ({
  page,
  setPage,
  totalPages,
}) => {
  const [pageButtons, setPageButtons] = React.useState<(number | string)[]>([]);

  const generatePageButtons = React.useCallback(() => {
    const arr: (number | string)[] = [];
    if (totalPages > 6) {
      if (page <= 2) {
        arr.push(1, 2, 3, "...", totalPages);
      } else if (page >= totalPages - 1) {
        arr.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        if (page === 3) {
          arr.push(1, 2, 3, 4, "...", totalPages);
        } else if (page === totalPages - 2) {
          arr.push(
            1,
            "...",
            totalPages - 3,
            totalPages - 2,
            totalPages - 1,
            totalPages
          );
        } else {
          arr.push(1, "...", page - 1, page, page + 1, "...", totalPages);
        }
      }
    } else {
      Array.from({ length: totalPages }, (_, i) => i + 1).forEach((number) =>
        arr.push(number)
      );
    }
    setPageButtons(arr);
  }, [page, totalPages]);

  React.useEffect(() => {
    generatePageButtons();
  }, [page, totalPages, generatePageButtons]);

  const handlePageChange = (pageNum: number) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setPage(pageNum);
  };

  const renderButton = (pageNum: number | string) => {
    const isActive = page === pageNum;
    const isClickable = pageNum !== "...";

    return (
      <Flex
        key={pageNum}
        userSelect="none"
        p="6px"
        borderColor={isActive ? "primary.200" : "grey.100"}
        borderWidth="1px"
        m={0}
        justifyContent="center"
        cursor={isClickable ? "pointer" : "default"}
        alignItems="center"
        borderRadius="8px"
        onClick={() => isClickable && handlePageChange(Number(pageNum))}
        fontSize="14px"
        fontWeight="600"
        lineHeight="20px"
        w="32px"
        h="32px"
        bgColor={isActive ? "primary.50" : "grey.10"}
        color={
          isActive ? "primary.500" : pageNum === "..." ? "grey.400" : "grey.600"
        }
        transition="all 0.2s ease-in-out"
        _hover={
          isClickable
            ? {
                bgColor: isActive ? "primary.100" : "grey.50",
                borderColor: isActive ? "primary.300" : "grey.200",
                color: isActive ? "primary.600" : "grey.700",
                transform: "translateY(-0.5px)",
                boxShadow: "0 1px 4px rgba(0, 0, 0, 0.05)",
              }
            : {}
        }
        _active={
          isClickable
            ? {
                bgColor: isActive ? "primary.200" : "grey.100",
                borderColor: isActive ? "primary.400" : "grey.300",
                transform: "translateY(0)",
                boxShadow: "0 1px 4px rgba(0, 0, 0, 0.15)",
              }
            : {}
        }
        _focus={{
          outline: "none",
          boxShadow: isActive
            ? "0 0 0 2px rgba(23, 111, 193, 0.2)"
            : "0 0 0 2px rgba(208, 213, 221, 0.3)",
        }}
        tabIndex={isClickable ? 0 : -1}
        role={isClickable ? "button" : "text"}
        aria-label={isClickable ? `Go to page ${pageNum}` : undefined}
        aria-current={isActive ? "page" : undefined}
        onKeyDown={(e) => {
          if (isClickable && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            handlePageChange(Number(pageNum));
          }
        }}
      >
        {pageNum}
      </Flex>
    );
  };

  if (totalPages <= 0) return null;

  return (
    <Flex
      p="20px 24px"
      alignItems="center"
      justifyContent="end"
      w="full"
      role="navigation"
      aria-label="Pagination"
    >
      <Flex gap={"8px"} alignItems="center">
        <ArrowButton
          direction="left"
          onClick={() => handlePageChange(page - 1)}
          disabled={page <= 1}
        />
        <Flex gap={"8px"} alignItems="center">
          {pageButtons.map(renderButton)}
        </Flex>
        <ArrowButton
          direction="right"
          onClick={() => handlePageChange(page + 1)}
          disabled={page >= totalPages}
        />
      </Flex>
    </Flex>
  );
};

export default Pagination;
