import useScroll from "@/hooks/use-scroll";
import { useAnimate, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const Header = () => {
  const navigate = useNavigate();
  const { scrolled } = useScroll();

  const [refLogo, animate] = useAnimate();

  useEffect(() => {
    animate(
      refLogo.current,
      {
        x: scrolled ? -35 : -100,
        opacity: scrolled ? 1 : 0,
      },
      { duration: 0.3 }
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrolled]);
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="container relative flex h-16 items-center justify-between px-4 sm:px-8">
        <Link
          to="/"
          className={cn(
            "mr-8 flex items-center space-x-2 transition-all duration-300 hover:opacity-80",
            {
              "translate-x-[-50px] opacity-0": scrolled,
            }
          )}
          suppressHydrationWarning
        >
          <Link className="flex items-center" to="#">
            <img src="/hoopers.png" width={20} height={20} />
            <span className="font-semibold">ooplers.lambert</span>
          </Link>
        </Link>

        <div
          className={cn(
            "absolute left-1/2 top-1/2 hidden translate-x-[-50%] translate-y-[-50%] rounded-full bg-gray-300/0 px-3 py-[6px] backdrop-blur-md transition-all duration-300 lg:block sm:flex md:flex",
            {
              "bg-gray-300/50 shadow-md dark:bg-gray-800/70": scrolled,
            }
          )}
        >
          <div className="overflow-hidden">
            <div
              suppressHydrationWarning
              className={cn("relative transition-all duration-300 ", {
                "ml-[40px]": scrolled,
              })}
            >
              <motion.div
                ref={refLogo}
                className="absolute"
                initial={{ x: -100, y: 3, opacity: 0 }}
              >
                <Link className="flex justify-center items-center gap-2" to="#">
                  <img src="/hoopers.png" width={20} height={20} />
                </Link>
              </motion.div>
              <nav
                className={cn(
                  "hidden lg:flex items-center justify-center gap-0 sm:gap-2"
                )}
              >
                <Link
                  className="hover:text-foreground w-full rounded-full px-2 py-1 text-center text-sm font-medium transition-all"
                  to="#"
                >
                  Home
                </Link>{" "}
                <Link
                  className="hover:text-foreground w-full rounded-full px-2 py-1 text-center text-sm font-medium transition-all"
                  to="#"
                >
                  Journey
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div
          suppressHydrationWarning
          className={cn(
            "hidden space-x-2 transition-all duration-300 lg:flex ",
            {
              "translate-x-[10px] opacity-0": scrolled,
            }
          )}
        >
          <Button variant="link" size="sm">
            Contact Us
          </Button>
          <Button color="primary" size="sm" onClick={() => navigate("/login")}>
            Login
          </Button>
        </div>
        <MobileNav />
      </div>
    </header>
  );
};

const MobileNav = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            className=" rounded-full bg-gray-300/0 px-3 py-[6px] backdrop-blur-md transition-all duration-300 z-100"
            variant="link"
            color="neutral"
            size="icon"
          >
            <HamburgerMenuIcon />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className=" bg-card w-56 pt-12 ">
          <nav className={cn(" flex flex-col space-y-8")}>
            <Link
              className="hover:text-foreground w-full rounded-full px-2 py-1 text-center text-sm font-medium transition-all"
              to="#"
            >
              Home
            </Link>{" "}
            <Link
              className="hover:text-foreground w-full rounded-full px-2 py-1 text-center text-sm font-medium transition-all"
              to="#"
            >
              Journey
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Header;
