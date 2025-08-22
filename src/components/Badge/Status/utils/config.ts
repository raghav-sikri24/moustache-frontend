import { StatusTypes } from "./types";

export function StatusColorMapper(status: StatusTypes) {
  switch (status) {
    default:
      return {
        bgColor: "grey.5",
        color: "grey.500",
      };
  }
}
