"use client";

import { useState, useRef, useEffect } from "react";

const menus = ["Home", "About", "Experience", "Projects", "Contact"] as const;
type MenuType = (typeof menus)[number];

const Header = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [ready, setReady] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false); // mobile menu

  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const t = setTimeout(() => {
      setReady(true);
      setActiveIndex(0);
    }, 0);

    return () => clearTimeout(t);
  }, []);

  const scrollToSection = (menu: MenuType, index: number) => {
    setActiveIndex(index);
    setOpen(false); // close mobile menu

    if (menu === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const section = document.getElementById(menu.toLowerCase());
    if (!section) return;

    const y =
      section.getBoundingClientRect().top +
      window.scrollY -
      120;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-6 left-4 right-4 bg-black/70 backdrop-blur border border-white/40 rounded-full z-50">
        <div className="mx-auto max-w-6xl">
          <nav className="relative flex items-center justify-center px-4 md:px-6 py-3 md:py-4">

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden px-5 py-2 rounded-full border border-white/40 text-white text-sm font-semibold"
              onClick={() => setOpen(true)}
            >
              Menu
            </button>

            {/* DESKTOP MENU */}
            <div className="relative hidden md:flex items-center gap-6">
              {ready && (
                <span
                  className="absolute h-10 border border-white rounded-full transition-all duration-300 ease-in-out"
                  style={{
                    width: itemRefs.current[activeIndex]?.offsetWidth,
                    left: itemRefs.current[activeIndex]?.offsetLeft,
                  }}
                />
              )}

              {menus.map((menu, index) => (
                <button
                  key={menu}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  onClick={() => scrollToSection(menu, index)}
                  className="relative z-10 px-4 text-sm font-semibold uppercase text-white"
                >
                  {menu}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* MOBILE OVERLAY MENU */}
      {open && (
        <div className="fixed inset-0 z-[999] bg-black/80 backdrop-blur flex items-start justify-center pt-24 md:hidden">
          <div className="w-[90%] max-w-sm border border-white/20 rounded-2xl bg-black p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-white font-semibold">Navigation</h3>
              <button
                className="text-white text-xl"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col divide-y divide-white/10">
              {menus.map((menu, index) => (
                <button
                  key={menu}
                  onClick={() => scrollToSection(menu, index)}
                  className="py-3 text-left text-gray-300 hover:text-white transition"
                >
                  {menu}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
