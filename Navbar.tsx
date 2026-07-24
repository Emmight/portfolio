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
  const sections = document.querySelectorAll("section[id]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    {
      threshold: 0.6,
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, []);
  
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