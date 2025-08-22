import { useToast } from "@chakra-ui/react";
import CustomToast, { CustomToastProps, ToastStatus } from "../CustomToast";

interface UseCustomToastReturn {
  showToast: (props: CustomToastProps & { id?: string }) => void;
  showSuccess: (title: string, description?: string) => void;
  showError: (title: string, description?: string) => void;
}

const useCustomToast = (): UseCustomToastReturn => {
  const toast = useToast();

  const showToast = ({
    id = "",
    ...props
  }: CustomToastProps & { id?: string }) => {
    const isDuplicate = !!id && toast.isActive(id);
    if (!isDuplicate) {
      toast({
        ...(id ? { id } : {}),
        duration: 5000,
        isClosable: true,
        position: "top-right",
        render: ({ onClose }) => <CustomToast onClose={onClose} {...props} />,
      });
    }
  };

  const showSuccess = (title: string, description?: string) => {
    showToast({
      title,
      description,
      status: "success" as ToastStatus,
    });
  };

  const showError = (title: string, description?: string) => {
    showToast({
      title,
      description,
      status: "error" as ToastStatus,
    });
  };

  return {
    showToast,
    showSuccess,
    showError,
  };
};

export default useCustomToast;
