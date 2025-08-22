import ProtectedHome from "../pages/protected/home/view";
import PublicHome from "../pages/public/home/view";
import Login from "../pages/public/login/view";
import { ROUTE_DATA } from "./utils/types";

export const PUBLIC_ROUTES: ROUTE_DATA[] = [
  { path: `/login/*`, element: <Login /> },
  { path: "/home/*", element: <PublicHome /> },
];

export const PROTECTED_ROUTES: ROUTE_DATA[] = [
  { path: "/home/*", element: <ProtectedHome /> },
];

export const HOME_ROUTE = "/home";
