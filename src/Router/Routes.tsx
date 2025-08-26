import LandingPage from "../pages/common/landingPage/view";
import Login from "../pages/public/login/view";
import { ROUTE_DATA } from "./utils/types";

export const PUBLIC_ROUTES: ROUTE_DATA[] = [
  { path: `/login/*`, element: <Login /> },
  { path: "/landing-page/*", element: <LandingPage /> },
];

export const PROTECTED_ROUTES: ROUTE_DATA[] = [
  { path: "/landing-page/*", element: <LandingPage /> },
];

export const HOME_ROUTE = "/landing-page";
