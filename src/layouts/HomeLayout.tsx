import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

import Header from "@/components/header";

const HomeLayout = () => {
  return (
    <div className="relative">
      {/* Header */}
      <Suspense fallback={<div className="h-[64px]" />}>
        <Header />
      </Suspense>

      <div className="min-h-[calc(100vh - 36px)] pb-36">
        <Outlet />
      </div>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Hooplers. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" to="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" to="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
};
export default HomeLayout;
