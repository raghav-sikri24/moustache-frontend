import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "../components/Error/ErrorPage";
import ProtectedLayout from "../layout/ProtectedLayout";
import PublicLayout from "../layout/PublicLayout";
import { authStore } from "../store/authStore";
import { HOME_ROUTE, PROTECTED_ROUTES, PUBLIC_ROUTES } from "./Routes";

const getRoutes = (accessToken: string) => {
  const routes = accessToken ? PROTECTED_ROUTES : PUBLIC_ROUTES;

  if (accessToken) {
    routes.push({
      path: "*",
      element: <Navigate to={`${HOME_ROUTE}`} />,
    });
  } else {
    routes.push({
      path: "*",
      element: <Navigate to="/landing-page" />,
    });
  }

  return createBrowserRouter(
    createRoutesFromElements(
      <Route
        element={accessToken ? <ProtectedLayout /> : <PublicLayout />}
        errorElement={<ErrorPage />}
      >
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Route>,
    ),
  );
};

const Router = () => {
  const { accessToken } = authStore();

  return <RouterProvider router={getRoutes(accessToken)} />;
};

export default Router;
