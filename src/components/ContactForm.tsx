"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, AlertCircle, LoaderCircle } from "lucide-react";

type FormState = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "We could not send your enquiry. Please try again.");
      }

      setState("success");
      setMessage(result.message || "Your enquiry has been received.");
      form.reset();
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <form id="enquiry-form" className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          <span>Full name <b>*</b></span>
          <input name="name" autoComplete="name" required maxLength={100} placeholder="Your name" />
        </label>
        <label>
          <span>Work email <b>*</b></span>
          <input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@company.com" />
        </label>
        <label>
          <span>Company</span>
          <input name="company" autoComplete="organization" maxLength={150} placeholder="Company name" />
        </label>
        <label>
          <span>Area of interest <b>*</b></span>
          <select name="interest" required defaultValue="">
            <option value="" disabled>Select a topic</option>
            <option>Mineral Sourcing & Supply</option>
            <option>Investment Partnership</option>
            <option>Exploration Joint Venture</option>
            <option>Government / Policy Collaboration</option>
            <option>Strategic Advisory</option>
            <option>Media & Press</option>
            <option>Career Opportunities</option>
            <option>Other</option>
          </select>
        </label>
      </div>
      <label>
        <span>How can we help? <b>*</b></span>
        <textarea name="message" required minLength={10} maxLength={4000} rows={5} placeholder="Tell us a little about your requirement..." />
      </label>
      <div className="form-bottom">
        <p>Your information will be used to respond to your enquiry.</p>
        <button className="button button-primary" type="submit" disabled={state === "sending"}>
          {state === "sending" ? <>Sending <LoaderCircle size={17} className="spin" /></> : <>Send enquiry <ArrowRight size={17} /></>}
        </button>
      </div>
      {message ? (
        <p className={`form-message ${state}`} role="status">
          {state === "success" ? <CheckCircle2 size={18} /> : state === "error" ? <AlertCircle size={18} /> : null}
          {message}
        </p>
      ) : null}
    </form>
  );
}