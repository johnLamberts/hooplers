import AdminDashboard from "@/modules/admin-dashboard/admin-dashboard";
import Login from "@/modules/authentication/login-page/login";
import GeneralError from "@/modules/error-pages/general-error";
import NotFoundError from "@/modules/error-pages/not-found";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/login", Component: Login },
  {
    path: "/",
    lazy: async () => ({
      Component: (await import("@/layouts/home-layout")).default,
    }),
    children: [
      {
        index: true,
        lazy: async () => ({
          Component: (await import("@/modules/home-page/home-page")).default,
        }),
      },
      {
        path: "/home",
        lazy: async () => ({
          Component: (await import("@/modules/home-page/home-page")).default,
        }),
      },
    ],
  },
  {
    path: "/admin-dashboard",
    lazy: async () => ({
      Component: (await import("@/layouts/admin-layout")).default,
    }),
    children: [
      {
        index: true,
        lazy: async () => ({
          Component: (await import("@/modules/admin-dashboard/admin-dashboard"))
            .default,
        }),
      },
      {
        path: "/admin-dashboard",
        lazy: async () => ({
          Component: (await import("@/modules/admin-dashboard/admin-dashboard"))
            .default,
        }),
      },
    ],
  },

  { path: "/500", Component: GeneralError },
  { path: "*", Component: NotFoundError },
]);

export default router;
