"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const pathUrl = usePathname();

  return (
    <aside className={`aside ${open ? "open" : ""}`}>
      <div onClick={handleOpen} className="nav-toggler">
        <span />
      </div>
      <div className="aside-inner">
        <div className="logo">
          <Link href="/" onClick={handleClose}>
            <span className="logo-text">Umar</span>
            <span className="logo-dot">.</span>
          </Link>
        </div>
        <ul className="nav">
          <li onClick={handleClose}>
            <Link href="/" className={`${pathUrl == "/" ? "active" : ""}`}>
              <i className="fa fa-home" />
              <span>Home</span>
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link
              href="/about"
              className={`${pathUrl == "/about" ? "active" : ""}`}
            >
              <i className="fa fa-user" />
              <span>About</span>
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link
              href="/services"
              className={`${pathUrl == "/services" ? "active" : ""}`}
            >
              <i className="fa fa-cogs" />
              <span>Services</span>
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link
              href="/portfolio"
              className={`${pathUrl == "/portfolio" ? "active" : ""}`}
            >
              <i className="fa fa-briefcase" />
              <span>Portfolio</span>
            </Link>
          </li>
          <li onClick={handleClose}> 
            <Link
              href="/contact"
              className={`${pathUrl == "/contact" ? "active" : ""}`}
            >
              <i className="fa fa-envelope" />
              <span>Contact</span>
            </Link>
          </li>
        </ul>
        <div className="sidebar-footer">
          <p>&copy; 2024 Muhammad Umar Farooq</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
