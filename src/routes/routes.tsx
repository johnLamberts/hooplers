import GeneralError from "@/modules/error-pages/general-error";
import NotFoundError from "@/modules/error-pages/not-found";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    index: true,
    lazy: async () => ({
      Component: (await import("@/modules/home-page/home-page")).default,
    }),
  },

  { path: "/500", Component: GeneralError },
  { path: "*", Component: NotFoundError },
]);

export default router;
