/** @format */

import { useState, useEffect } from "react";
import DropBar from "./Layout/DropBar";
import Header from "./Layout/Header";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
        <Header />

    </>
  );
};

export default Navbar;
