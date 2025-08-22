import { createStandaloneToast } from "@chakra-ui/react";
import CustomToast from "../Toast/CustomToast";

type Error = { message: string };
const { toast } = createStandaloneToast();

export function queryErrorHandler(err: Error | unknown) {
  const toastId = new Date().getTime().toString();

  let title: string = "";

  if (err instanceof Error) {
    title =
      //@ts-ignore
      err?.response?.data?.error?.message ||
      //@ts-ignore
      err?.response?.data?.detail ||
      //@ts-ignore
      err?.response?.data?.message ||
      err.message;
  } else if (typeof err === "string") {
    title = err;
  } else {
    title = "Error connecting to server";
  }

  toast({
    id: toastId,
    duration: 2000,
    position: "top-right",
    render: ({ onClose }) => (
      <CustomToast onClose={onClose} status="error" title={title} />
    ),
  });
}
