"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { mainNavLinks } from "@/data/mainNav";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="topline">
        <div className="container topline-inner">
          <span>CRITICAL & STRATEGY MINERALS PRIVATE LIMITED</span>
          <span className="topline-note"><span className="status-dot" /> Materials for a changing world</span>
        </div>
      </div>
      <div className="container nav-row">
        <Link href="/" className="brand" aria-label="CSM home" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>
          <span className="brand-copy"><strong>CSM</strong><small>CRITICAL MATERIALS</small></span>
        </Link>

        <nav className={`site-nav ${open ? "is-open" : ""}`} aria-label="Main navigation">
          {mainNavLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={active ? "is-active" : undefined}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="/contact" className="mobile-contact" onClick={() => setOpen(false)}>
            Start a conversation <ArrowUpRight size={16} />
          </Link>
        </nav>

        <Link href="/contact" className="site-nav-cta">Contact us <ArrowUpRight size={16} /></Link>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
