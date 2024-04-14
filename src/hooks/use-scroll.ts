/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const useScroll = (threshold: number = 0) => {
  const [scrolled, setScrolled] = useState(
    typeof window !== "undefined" ? window.scrollY > threshold : false
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > threshold);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrolled };
};

export default useScroll;
