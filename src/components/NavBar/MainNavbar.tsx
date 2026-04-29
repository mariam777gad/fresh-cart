"use client";

import { useEffect, useState } from "react";
import ContactNav from "./ContactNav";
import NavBar from "./NavBar";

export default function MainNavbar() {
  const [showTopBar, setShowTopBar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setShowTopBar(false);
      } else {
        setShowTopBar(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {showTopBar && <ContactNav />}

      <div
        className={`transition-all duration-300 ${
          showTopBar ? "top-15" : "top-0"
        }`}
      >
        <NavBar />
      </div>
    </div>
  );
}
