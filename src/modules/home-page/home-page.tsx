import { SVGProps } from "react";
import { Link } from "react-router-dom";
import { JSX } from "react/jsx-runtime";
function BookOpenIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}
const Homepage = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="border-b">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between h-14">
            <Link className="flex items-center gap-2" to="#">
              <BookOpenIcon className="h-6 w-6" />
              <span className="font-semibold">Hooplers</span>
            </Link>
            <nav className="hidden md:flex gap-4 lg:gap-6">
              <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                to="#"
              >
                Stories
              </Link>
              <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                to="#"
              >
                Categories
              </Link>
              <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                to="#"
              >
                About
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container flex flex-col items-center justify-center px-4 md:px-6 text-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                my journey in web development
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                The Art of Storytelling
              </h1>
              <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Explore the world through the stories of others. Hooplers is a
                platform for sharing and discovering tales that inspire,
                entertain, and enlighten.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-4 px-4 md:px-6 lg:gap-10">
            <div className="space-y-2 flex items-center justify-center flex-col">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Featured Stories
              </h2>
              <p className="mx-auto text-center max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Check out my latest blog posts and dive into the world of web
                development.
              </p>
            </div>
            <div className="mx-auto w-full max-w-5xl grid gap-6 lg:grid-cols-[1fr_300px]">
              <div className="grid gap-2">
                <Link className="font-semibold" to="#">
                  Mastering React Hooks
                </Link>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Learn how to leverage the power of React Hooks for state
                  management and component logic.
                </p>
              </div>
              <div className="grid gap-2">
                <Link className="font-semibold" to="#">
                  Responsive Web Design Tips
                </Link>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Explore key strategies for creating responsive and visually
                  appealing web designs.
                </p>
              </div>
              <div className="grid gap-2">
                <Link className="font-semibold" to="#">
                  The Art of CSS Animation
                </Link>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Dive into the world of CSS animations and bring your web
                  projects to life.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
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
export default Homepage;
