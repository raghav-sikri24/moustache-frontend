import { PUBLIC_ROUTES } from "../Router/Routes";

export const isNullOrUndefined = (value: any): value is null | undefined => {
  return value === null || value === undefined;
};

export const isPublicRoute = (currentPath: string): boolean => {
  return (
    PUBLIC_ROUTES?.some((route) => {
      const routeFirstSegment = route.path.split("/")[1]?.split(":")[0];
      const currentFirstSegment = currentPath.split("/")[1];

      const isMatch = routeFirstSegment === currentFirstSegment;
      const shouldInclude = route.shouldExcludeFromPublicCheck !== true;
      return isMatch && shouldInclude;
    }) ?? false
  );
};
export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const milliseconds = String(date.getMilliseconds()).padStart(3, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
};

export function serializeJson(jsonData: any): string {
  try {
    const stringified = JSON.stringify(jsonData);
    if (stringified === "{}") {
      return "";
    }

    if (!jsonData) {
      return "";
    }

    return stringified;
  } catch (err) {
    return "";
  }
}

export const deserializeJson = (riskyData: any, fallback: any) => {
  try {
    return JSON.parse(riskyData);
  } catch (err) {
    return fallback;
  }
};

export function formatToINR(amount: number | string): string {
  const number = typeof amount === "string" ? parseFloat(amount) : amount;

  if (!number) return "";

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(number);
}
