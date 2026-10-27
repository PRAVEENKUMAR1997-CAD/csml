import type { Metadata } from "next";
import { CsmlTheme, MineralCarousel } from "@/components/csml/CsmlSections";
import MineralsCatalog from "@/components/MineralsCatalog";

export const metadata: Metadata = {
  title: "Critical Minerals",
  description: "Critical and strategic minerals portfolio — applications across energy, technology, magnets, and rail."
};

export default function MineralsPage() {
  return (
    <>
      <section className="page-hero page-hero-minerals">
        <div className="container page-hero-inner">
          <span className="eyebrow">MATERIAL INTELLIGENCE / 02</span>
          <h1>Understand the<br /><em>elements of change.</em></h1>
          <p>Browse the portfolio carousel and detailed material profiles. Educational context only — not a representation of confirmed inventory or supply commitments.</p>
          <div className="page-hero-foot"><span>CRITICAL MINERALS</span><span>LIST & GRID VIEWS</span></div>
        </div>
      </section>
      <CsmlTheme>
        <MineralCarousel showNavLink={false} />
      </CsmlTheme>
      <section className="section-pad minerals-catalog-wrap">
        <div className="container">
          <MineralsCatalog />
          <p className="content-note" style={{ marginTop: "1.5rem" }}>
            Specimen photographs:{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Dysprosium.jpg">dysprosium by Tomihahndorf</a>,{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Gallium_crystals.jpg">gallium by foobar</a> and{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Germanium.jpg">germanium by Gibe</a>, via Wikimedia Commons,{" "}
            <a href="https://creativecommons.org/licenses/by-sa/3.0/deed.en">CC BY-SA 3.0</a>.
          </p>
        </div>
      </section>
    </>
  );
}
