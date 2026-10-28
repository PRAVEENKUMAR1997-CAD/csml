import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Use" };

export default function TermsPage() {
  return (
    <section className="legal-page section-pad">
      <div className="container legal-content">
        <span className="eyebrow">LEGAL / 02</span>
        <h1>Terms of <em>use.</em></h1>
        <p className="legal-lead">This is a placeholder draft, not legal advice. CSM should have its legal team review and approve the terms before publication.</p>
        <h2>Website information</h2>
        <p>Website content is provided for general information. Any mineral application examples are illustrative and do not constitute an offer, guarantee of availability, technical specification or supply commitment.</p>
        <h2>Accuracy and availability</h2>
        <p>Company information, services, specifications and contact details must be kept accurate. Do not rely on this website as a substitute for a written agreement or verified technical documentation.</p>
        <h2>Final legal review</h2>
        <p>Replace this draft with terms approved for CSM&apos;s business, jurisdiction, actual services and website operations.</p>
      </div>
    </section>
  );
}