"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/pawana", label: "Pawana" },
    { href: "/panshet", label: "Panshet" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div
              className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? "text-forest-700" : "text-white"
              }`}
            >
              🏔️ CampBuddy
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href.startsWith("#") ? "/" : link.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-gold-500 ${
                  isScrolled ? "text-gray-700" : "text-white"
                } ${pathname === link.href ? "text-gold-500" : ""}`}
                onClick={() => {
                  if (link.href.startsWith("#")) {
                    const element = document.querySelector(link.href);
                    element?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {link.label}
              </Link>
            ))}
            <Button
              className="bg-gold-500 hover:bg-gold-600 text-white font-medium px-6"
              onClick={() =>
                window.open("https://wa.me/919876543210", "_blank")
              }
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors duration-300 ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center">
              <span
                className={`block h-0.5 w-6 bg-current transform transition duration-200 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current mt-1 transition duration-200 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current mt-1 transform transition duration-200 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 p-4 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href.startsWith("#") ? "/" : link.href}
                className="block py-3 text-gray-700 hover:text-gold-500 transition-colors duration-200"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (link.href.startsWith("#")) {
                    setTimeout(() => {
                      const element = document.querySelector(link.href);
                      element?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }
                }}
              >
                {link.label}
              </Link>
            ))}
            <Button
              className="w-full mt-4 bg-gold-500 hover:bg-gold-600 text-white"
              onClick={() =>
                window.open("https://wa.me/919876543210", "_blank")
              }
            >
              Book Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
