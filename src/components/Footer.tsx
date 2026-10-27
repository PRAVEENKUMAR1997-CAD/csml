import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { mainNavLinks } from "@/data/mainNav";
import { DEMO_FOOTER_CIN, DEMO_NOTE } from "@/data/demoPlaceholders";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-intro">
          <Link href="/" className="brand brand-light" aria-label="CSML home">
            <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>
            <span className="brand-copy"><strong>CSML</strong><small>CRITICAL MATERIALS</small></span>
          </Link>
          <p>Securing India&apos;s strategic mineral future through responsible exploration, extraction, and supply chain excellence.</p>
          <Link href="/contact" className="footer-cta">Discuss a requirement <ArrowUpRight size={16} /></Link>
        </div>
        <div className="footer-column">
          <h3>Explore</h3>
          {mainNavLinks.map((link) => (
            <Link key={link.href} href={link.href}>{link.label}</Link>
          ))}
        </div>
        <div className="footer-column">
          <h3>Focus areas</h3>
          <Link href="/industries#technology">Technology industries</Link>
          <Link href="/industries#permanent-magnets">Permanent magnets</Link>
          <Link href="/industries#railway">Railway manufacturing</Link>
          <Link href="/minerals">Material catalogue</Link>
        </div>
        <div className="footer-column">
          <h3>Connect</h3>
          <Link href="/contact">Business enquiries</Link>
          <Link href="/contact#enquiry-form">Contact form</Link>
          <Link href="/privacy">Privacy policy</Link>
          <Link href="/terms">Terms of use</Link>
        </div>
        <div className="footer-note">
          <span className="eyebrow">BUILT AROUND MATERIALS</span>
          <p>Responsible sourcing. Strategic thinking. Long-term partnerships.</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Critical & Strategy Minerals Private Limited. CIN (demo): {DEMO_FOOTER_CIN}.</span>
        <span title={DEMO_NOTE}>Demo placeholders may appear until CSML verifies official details.</span>
      </div>
    </footer>
  );
}
