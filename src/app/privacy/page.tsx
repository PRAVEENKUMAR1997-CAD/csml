import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <section className="legal-page section-pad">
      <div className="container legal-content">
        <span className="eyebrow">LEGAL / 01</span>
        <h1>Privacy <em>policy.</em></h1>
        <p className="legal-lead">This page is a starter draft and must be reviewed and approved by CSML&apos;s legal/privacy team before publication.</p>
        <h2>Information submitted through this website</h2>
        <p>If you contact CSML through the enquiry form, the information you provide may be processed to respond to your request and manage related business communication.</p>
        <h2>Purpose and handling</h2>
        <p>Only collect information needed to handle an enquiry. Access, retention, security, deletion and any third-party processing arrangements must be documented according to the company&apos;s actual practices and applicable law.</p>
        <h2>Contact and updates</h2>
        <p>Replace this draft with an approved policy that identifies the data controller, contact details, retention periods, applicable rights and complaint process before launch.</p>
      </div>
    </section>
  );
}