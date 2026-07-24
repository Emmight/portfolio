import React, { useEffect, useState } from 'react';
import { Menu, X } from "lucide-react";
import { links } from "../../data/links";
import Button from "../Button/Button";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Navbar.css";

interface NavbarProps {
  logo: string;
}

const Navbar = ({ logo }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
const [activeSection, setActiveSection] = useState("home");

useEffect(() => {
  const handleScroll = () => {
    const sections = document.querySelectorAll("section[id]");

    let current = "home";

    sections.forEach((section) => {
      const top = section.offsetTop - 120;
      const height = section.clientHeight;

      if (
        window.scrollY >= top &&
        window.scrollY < top + height
      ) {
        if (section.id === "cta" || section.id === "faq") {
  current = "contact";
} else {
  current = section.id;
        }
      }
    });

    setActiveSection(current);
  };

  window.addEventListener("scroll", handleScroll);

  handleScroll();

  return () =>
    window.removeEventListener("scroll", handleScroll);
}, []);

  useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [isOpen]);
  
  return (
    <>
      <nav className="navbar">

        <h2 className="logo">
          {logo}
        </h2>

        {/* Desktop Navigation */}
        <div className="nav-links">
          {links.map((link) => (
            <a
  href={link.href}
  key={link.label}
  className={
    activeSection === link.href.slice(1)
      ? "active"
      : ""
  }
>
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <ThemeToggle />
          <Button text="Hire Me" variant="primary" />

          <button
            className="menu"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>

      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          className="nav-overlay"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="nav-container"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>

            <div className="mobile-links">
              {links.map((link) => (
                <a
                  href={link.href}
                  key={link.label}              className={
    activeSection === link.href.slice(1)
      ? "active"
      : ""
  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mobile-button">
              <Button
                text="Hire Me"
                variant="primary"
              />
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;