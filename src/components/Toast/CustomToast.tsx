import { Box } from "@chakra-ui/react";
import React, { useMemo } from "react";

type IconDetailsType = {
  icon: React.ReactNode;
  outerCircleColor: string;
  innerCircleColor: string;
  iconColor: string;
};
export type ToastStatus = "success" | "error";

export type CustomToastProps = {
  title: string;
  description?: string;
  iconDetails?: IconDetailsType;
  status?: ToastStatus;
  className?: string;
};
type CustomToastComponentProps = CustomToastProps & { onClose: () => void };

const CustomToast: React.FC<CustomToastComponentProps> = ({
  title,
  description,
  onClose,
  iconDetails = null,
  status = null,
  className,
}) => {
  const finalIconDetails: IconDetailsType = useMemo(() => {
    if (iconDetails) return iconDetails;
    switch (status) {
      case "success":
        return {
          outerCircleColor: "bg-success-100",
          innerCircleColor: "bg-success-700",
          iconColor: "text-white",
          icon: <div>icon</div>,
        };
      case "error":
        return {
          outerCircleColor: "bg-red-100",
          innerCircleColor: "bg-red-700",
          iconColor: "text-white",
          icon: <div>icon</div>,
        };
      default:
        return {
          outerCircleColor: "bg-success-100",
          innerCircleColor: "bg-success-700",
          iconColor: "text-white",
          icon: <div>icon</div>,
        };
    }
  }, [status, iconDetails]);

  return (
    <Box
      className="relative flex items-start gap-3 bg-white rounded-[12px] p-4 shadow-lg border border-grey-100 min-w-[320px] max-w-[400px]"
      role="alert"
    >
      {/* Icon */}
      {finalIconDetails && (
        <div className="flex-shrink-0 mt-0.5">
          <div
            className={`w-8 h-8 ${finalIconDetails?.outerCircleColor} rounded-full flex items-center justify-center`}
          >
            <div
              className={`w-6 h-6 rounded-full ${finalIconDetails?.innerCircleColor} flex items-center justify-center ${finalIconDetails?.iconColor}`}
            >
              {finalIconDetails?.icon}
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 items-center my-auto min-w-0">
        <h4
          className={`text-[14px] font-[600] leading-[20px] text-black-600 ${
            className || ""
          }`}
        >
          {title}
        </h4>
        {description && (
          <p
            className={`mt-1 text-[12px] font-[400] leading-[18px] text-black-300 ${
              className || ""
            }`}
          >
            {description}
          </p>
        )}
      </div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="flex-shrink-0 p-1 rounded-md hover:bg-grey-50 transition-colors duration-200 group"
        aria-label="Close notification"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-grey-400 group-hover:text-grey-600 transition-colors duration-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </Box>
  );
};

export default CustomToast;
