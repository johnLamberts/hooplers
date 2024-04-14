import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container flex flex-col items-center justify-center px-4 md:px-6 text-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block text-foreground rounded-lg bg-[#b2a09d]/25 px-3 py-1 text-sm dark:bg-gray-800">
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
    </div>
  );
};
export default Homepage;
