import type { Metadata } from "next";
import { ArrowUpRight, Mail, MapPin, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { DEMO_CONTACT, DEMO_NOTE } from "@/data/demoPlaceholders";
import { DemoBadge } from "@/components/csml/DemoBadge";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Critical & Strategy Minerals Private Limited for business and material enquiries."
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero page-hero-contact">
        <div className="container page-hero-inner">
          <span className="eyebrow">START A CONVERSATION / 05</span>
          <h1>Every partnership<br />starts with <em>a question.</em></h1>
          <p>Share your material requirement, application or partnership idea. The CSML team can follow up with you.</p>
          <div className="page-hero-foot"><span>BUSINESS ENQUIRIES</span><span>WE LOOK FORWARD TO HEARING FROM YOU</span></div>
        </div>
      </section>
      <section className="section-pad contact-page-section">
        <div className="container contact-page-grid">
          <aside className="contact-aside">
            <span className="eyebrow">GET IN TOUCH</span>
            <h2>Tell us what you&apos;re working on.</h2>
            <p>Use the form to share a little context so your enquiry can be routed appropriately.</p>
            <div className="contact-info-item"><span><Mail size={19} /></span><div><small>EMAIL <DemoBadge compact /></small><p>{DEMO_CONTACT.email}</p></div></div>
            <div className="contact-info-item"><span><MessageCircle size={19} /></span><div><small>PHONE <DemoBadge compact /></small><p>{DEMO_CONTACT.phone}</p></div></div>
            <div className="contact-info-item"><span><MapPin size={19} /></span><div><small>REGISTERED OFFICE <DemoBadge compact /></small><p>{DEMO_CONTACT.office}</p></div></div>
            <div className="contact-info-item"><span><MessageCircle size={19} /></span><div><small>BUSINESS HOURS <DemoBadge compact /></small><p>{DEMO_CONTACT.hours}</p></div></div>
            <p className="content-note" style={{ marginTop: "1rem" }}>{DEMO_NOTE}</p>
            <div className="contact-aside-note"><ArrowUpRight size={19} /><span>Please avoid sending confidential or commercially sensitive information through this initial form.</span></div>
          </aside>
          <div className="contact-form-wrap">
            <div className="form-heading"><span className="eyebrow">ENQUIRY FORM</span><span>Fields marked * are required</span></div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}