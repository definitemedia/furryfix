"use client";

import { useId, useRef, useState, type FormEvent, type ReactNode } from "react";
import { CONTACT_EMAIL, buttonBase } from "./ui";

export const SUBJECT_OPTIONS = [
  "Product Enquiry",
  "Product Feedback",
  "General Enquiry",
  "Collaboration",
  "Other",
] as const;

export type ContactFormValues = {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type FieldName = keyof ContactFormValues;
type FieldErrors = Partial<Record<FieldName, string>>;

const FIELD_ORDER: FieldName[] = ["fullName", "email", "phone", "subject", "message"];

const EMPTY: ContactFormValues = { fullName: "", email: "", phone: "", subject: "", message: "" };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const MESSAGE_MAX = 1500;

export function validateContact(values: ContactFormValues): FieldErrors {
  const errors: FieldErrors = {};
  if (!values.fullName.trim()) errors.fullName = "Please enter your full name.";

  const email = values.email.trim();
  if (!email) errors.email = "Please enter your email address.";
  else if (!EMAIL_PATTERN.test(email)) errors.email = "Please enter a valid email address, like name@example.com.";

  const phone = values.phone.trim();
  if (phone) {
    const digits = phone.replace(/\D/g, "");
    if (!/^[+\d\s()-]+$/.test(phone) || digits.length < 7 || digits.length > 15) {
      errors.phone = "Please enter a valid phone number, or leave this field empty.";
    }
  }

  if (!values.subject) errors.subject = "Please choose a subject.";
  if (!values.message.trim()) errors.message = "Please enter your message.";
  return errors;
}

function buildMailto(values: ContactFormValues): string {
  const subject = `${values.subject} from ${values.fullName.trim()} (FurryFix website)`;
  const body = [
    `Name: ${values.fullName.trim()}`,
    `Email: ${values.email.trim()}`,
    `Phone: ${values.phone.trim() || "Not provided"}`,
    `Subject: ${values.subject}`,
    "",
    "Message:",
    values.message.trim(),
  ].join("\r\n");
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const inputBase =
  "block w-full min-h-12 rounded-2xl border bg-white px-4 text-base text-navy placeholder:text-secondary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-turquoise focus-visible:ring-offset-2 motion-reduce:transition-none";

function inputClass(invalid: boolean) {
  return `${inputBase} ${invalid ? "border-brand-red border-2" : "border-navy/20 hover:border-navy/40"}`;
}

type FieldProps = {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: ReactNode;
};

function Field({ id, label, required, error, hint, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="flex flex-wrap items-baseline gap-x-2 text-[15px] font-semibold text-navy">
        {label}
        {required ? (
          <span className="text-navy">
            <span aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </span>
        ) : (
          <span className="text-sm font-medium text-secondary">(optional)</span>
        )}
      </label>
      {hint ? (
        <p id={`${id}-hint`} className="mt-1 text-sm text-secondary">
          {hint}
        </p>
      ) : null}
      <div className="mt-2">{children}</div>
      {error ? (
        <p id={`${id}-error`} className="mt-2 flex items-start gap-2 text-sm font-semibold text-navy">
          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" fill="currentColor">
            <path d="M10 1.8a8.2 8.2 0 1 0 0 16.4 8.2 8.2 0 0 0 0-16.4Zm0 4a1 1 0 0 1 1 1v3.8a1 1 0 1 1-2 0V6.8a1 1 0 0 1 1-1Zm0 8.9a1.15 1.15 0 1 1 0-2.3 1.15 1.15 0 0 1 0 2.3Z" />
          </svg>
          <span>
            <span className="sr-only">Error: </span>
            {error}
          </span>
        </p>
      ) : null}
    </div>
  );
}

export default function ContactForm() {
  const uid = useId();
  const ids = Object.fromEntries(FIELD_ORDER.map((name) => [name, `${uid}-${name}`])) as Record<FieldName, string>;

  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<ContactFormValues>(EMPTY);
  const [attempted, setAttempted] = useState(false);
  const [mailtoHref, setMailtoHref] = useState<string | null>(null);

  const errors: FieldErrors = attempted ? validateContact(values) : {};
  const errorCount = Object.keys(errors).length;

  function update(name: FieldName, value: string) {
    setValues((prev) => ({ ...prev, [name]: value }));
    setMailtoHref(null);
  }

  function describedBy(name: FieldName, hasHint = false) {
    const parts = [];
    if (hasHint) parts.push(`${ids[name]}-hint`);
    if (errors[name]) parts.push(`${ids[name]}-error`);
    return parts.length ? parts.join(" ") : undefined;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAttempted(true);
    const found = validateContact(values);

    const firstInvalid = FIELD_ORDER.find((name) => found[name]);
    if (firstInvalid) {
      setMailtoHref(null);
      formRef.current?.querySelector<HTMLElement>(`#${CSS.escape(ids[firstInvalid])}`)?.focus();
      return;
    }

    const href = buildMailto(values);
    setMailtoHref(href);
    window.location.href = href;
  }

  return (
    <div className="rounded-[22px] bg-white p-5 shadow-[0_18px_40px_-18px_color-mix(in_srgb,var(--color-navy)_30%,transparent)] sm:rounded-[28px] sm:p-8">
      <h3 id="send-message-heading" className="text-2xl font-extrabold tracking-[-0.03em] text-navy uppercase sm:text-[1.75rem]">
        Send Us a <span className="text-turquoise-hover">Message</span>
      </h3>
      <p className="mt-2 text-[15px] leading-7 text-body">
        Tell us what&apos;s on your mind. We&apos;d love to hear from you.
      </p>
      <p className="mt-4 rounded-2xl border-l-4 border-turquoise bg-aqua p-4 text-[15px] leading-7 text-body">
        This site does not store messages yet. Sending opens an email to{" "}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="font-semibold [overflow-wrap:anywhere] text-navy underline decoration-turquoise decoration-2 underline-offset-2 hover:text-turquoise-hover"
        >
          {CONTACT_EMAIL}
        </a>{" "}
        in your email app, ready for you to send.
      </p>

      <form ref={formRef} noValidate onSubmit={handleSubmit} aria-labelledby="send-message-heading" className="mt-6">
        <p className="text-sm text-secondary">
          Fields marked <span aria-hidden="true">*</span>
          <span className="sr-only">with an asterisk</span> are required.
        </p>

        <div role="alert" aria-live="assertive" className="[&:not(:empty)]:mt-4">
          {attempted && errorCount > 0 ? (
            <p className="rounded-2xl border-2 border-brand-red bg-white px-4 py-3 text-[15px] font-semibold text-navy">
              Please fix {errorCount === 1 ? "1 field" : `${errorCount} fields`} below before sending.
            </p>
          ) : null}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <Field id={ids.fullName} label="Full Name" required error={errors.fullName}>
            <input
              id={ids.fullName}
              name="fullName"
              type="text"
              autoComplete="name"
              required
              aria-required="true"
              aria-invalid={errors.fullName ? true : undefined}
              aria-describedby={describedBy("fullName")}
              value={values.fullName}
              onChange={(e) => update("fullName", e.target.value)}
              className={inputClass(Boolean(errors.fullName))}
            />
          </Field>

          <Field id={ids.email} label="Email Address" required error={errors.email}>
            <input
              id={ids.email}
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              required
              aria-required="true"
              aria-invalid={errors.email ? true : undefined}
              aria-describedby={describedBy("email")}
              value={values.email}
              onChange={(e) => update("email", e.target.value)}
              className={inputClass(Boolean(errors.email))}
            />
          </Field>

          <Field id={ids.phone} label="Phone Number" error={errors.phone}>
            <input
              id={ids.phone}
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              aria-invalid={errors.phone ? true : undefined}
              aria-describedby={describedBy("phone")}
              value={values.phone}
              onChange={(e) => update("phone", e.target.value)}
              className={inputClass(Boolean(errors.phone))}
            />
          </Field>

          <Field id={ids.subject} label="Subject" required error={errors.subject}>
            <div className="relative">
              <select
                id={ids.subject}
                name="subject"
                required
                aria-required="true"
                aria-invalid={errors.subject ? true : undefined}
                aria-describedby={describedBy("subject")}
                value={values.subject}
                onChange={(e) => update("subject", e.target.value)}
                className={`${inputClass(Boolean(errors.subject))} appearance-none pr-11 ${values.subject ? "" : "text-secondary"}`}
              >
                <option value="" disabled>
                  Choose a subject
                </option>
                {SUBJECT_OPTIONS.map((option) => (
                  <option key={option} value={option} className="text-navy">
                    {option}
                  </option>
                ))}
              </select>
              <svg
                viewBox="0 0 16 16"
                aria-hidden="true"
                focusable="false"
                className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-navy"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="m4 6 4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Field>

          <div className="sm:col-span-2">
            <Field
              id={ids.message}
              label="Message"
              required
              error={errors.message}
              hint={`Up to ${MESSAGE_MAX} characters.`}
            >
              <textarea
                id={ids.message}
                name="message"
                rows={6}
                maxLength={MESSAGE_MAX}
                required
                aria-required="true"
                aria-invalid={errors.message ? true : undefined}
                aria-describedby={describedBy("message", true)}
                value={values.message}
                onChange={(e) => update("message", e.target.value)}
                className={`${inputClass(Boolean(errors.message))} py-3 leading-7`}
              />
            </Field>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <button
            type="submit"
            className={`${buttonBase} w-full bg-navy text-white hover:bg-navy/90 focus-visible:outline-turquoise sm:w-auto`}
          >
            Send Message
          </button>
          <p className="text-sm leading-6 text-secondary">Opens your email app. Nothing is stored on this site.</p>
        </div>

        <div aria-live="polite" className="[&:not(:empty)]:mt-6">
          {mailtoHref ? (
            <div className="rounded-2xl bg-aqua p-5 text-[15px] leading-7 text-body ring-1 ring-turquoise/30">
              <p className="font-bold text-navy">We tried to open your email app with your message.</p>
              <p className="mt-2">
                FurryFix has not received anything yet. Please check your email app and press send there.
              </p>
              <p className="mt-2">
                If no email app opened, your message was not sent and delivery is not confirmed. Please email
                us directly at{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-semibold [overflow-wrap:anywhere] text-navy underline decoration-turquoise decoration-2 underline-offset-2 hover:text-turquoise-hover"
                >
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
              <a
                href={mailtoHref}
                className="mt-3 inline-flex min-h-11 items-center font-semibold text-navy underline decoration-turquoise decoration-2 underline-offset-4 hover:text-turquoise-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
              >
                Open the email again
              </a>
            </div>
          ) : null}
        </div>
      </form>
    </div>
  );
}
