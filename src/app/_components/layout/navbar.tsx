"use client";
import { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "../../../lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoMenu, IoClose } from "react-icons/io5";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    href: "/products",
    submenu: [
      {
        title: "Algochurn",
        href: "https://algochurn.com",
        src: "https://i.ibb.co/DR7GL9p/f84f933038694132624854208a70bc11.png",
        description: "Prepare for tech interviews like never before.",
      },
      {
        title: "Tailwind Master Kit",
        href: "https://tailwindmasterkit.com",
        src: "https://i.ibb.co/DR7GL9p/f84f933038694132624854208a70bc11.png",
        description:
          "Production ready Tailwind css components for your next project",
      },
      {
        title: "Moonbeam",
        href: "https://gomoonbeam.com",
        src: "https://i.ibb.co/DR7GL9p/f84f933038694132624854208a70bc11.png",
        description:
          "Never write from scratch again. Go from idea to blog in minutes.",
      },
      {
        title: "Rogue",
        href: "https://userogue.com",
        src: "https://i.ibb.co/DR7GL9p/f84f933038694132624854208a70bc11.png",
        description:
          "Respond to government RFPs, RFIs and RFQs 10x faster using AI",
      },
    ],
  },
  { label: "About", href: "/about" },
];

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const checkScreenWidth = () => {
    setIsDesktop(window.innerWidth >= 768);
  };

  useEffect(() => {
    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);
    return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 top-2 z-50 mx-auto max-w-7xl max-md:top-0",
        className,
      )}
    >
      <Menu setActive={setActive}>
        <div className="flex cursor-pointer items-center">
          <Link href="/">
            <Image
              src="/images/identity/Full_Logo.png"
              width={120}
              height={40}
              alt="logo"
            />
          </Link>
        </div>
        {isDesktop ? (
          <div className="flex items-center space-x-10">
            {NAV_LINKS.map((link) =>
              link.submenu ? (
                <MenuItem
                  key={link.label}
                  setActive={setActive}
                  active={active}
                  item={link.label}
                >
                  <div className="grid grid-cols-2 gap-10 p-4 text-sm max-md:grid-cols-1">
                    {link.submenu.map((item) => (
                      <ProductItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                        src={item.src}
                        description={item.description}
                      />
                    ))}
                  </div>
                </MenuItem>
              ) : (
                <HoveredLink
                  key={link.label}
                  href={link.href}
                  className="text-2xl font-bold"
                >
                  {link.label}
                </HoveredLink>
              ),
            )}
          </div>
        ) : null}
        {isDesktop ? (
          <div className="flex items-center justify-center space-x-4">
            <HoveredLink href="/login">Book a Demo</HoveredLink>
            <HoveredLink href="/contact">Sign Up</HoveredLink>
          </div>
        ) : (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-white focus:outline-none md:hidden"
          >
            {menuOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
          </button>
        )}
      </Menu>
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "-100%" }}
          transition={{ duration: 0.3 }}
          className="fixed left-0 top-0 z-50 h-full w-3/4 p-4 shadow-xl dark:bg-primary-850 md:hidden"
        >
          <nav className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="flex flex-col space-y-2">
                <HoveredLink
                  href={link.href}
                  className="text-lg text-black dark:text-white"
                >
                  {link.label}
                </HoveredLink>
                {link.submenu && (
                  <div className="flex flex-col space-y-1 pl-4">
                    {link.submenu.map((item) => (
                      <HoveredLink
                        key={item.title}
                        href={item.href}
                        className="text-neutral-700 dark:text-neutral-300"
                      >
                        {item.title}
                      </HoveredLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </motion.div>
      )}
    </div>
  );
}
