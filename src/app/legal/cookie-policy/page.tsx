import React from "react";

export default function () {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="mb-6 text-4xl font-bold max-md:text-3xl">Cookie Policy</h1>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">1. Introduction</h2>
        <p className="mb-4">
          This Cookie Policy explains how Dragons Bootcamp LLC (“we,” “us,” or
          “our”) uses cookies and similar technologies on our website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">2. What Are Cookies?</h2>
        <p className="mb-4">
          Cookies are small files stored on your device that help us improve
          your browsing experience.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">
          3. Types of Cookies We Use
        </h2>
        <ul className="mb-4 list-inside list-disc">
          <li>
            <strong>Essential Cookies:</strong> Required for website
            functionality.
          </li>
          <li>
            <strong>Performance Cookies:</strong> Help us understand website
            usage and improve performance.
          </li>
          <li>
            <strong>Functional Cookies:</strong> Remember your preferences.
          </li>
          <li>
            <strong>Advertising Cookies:</strong> Deliver relevant ads and track
            their performance.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">4. How We Use Cookies</h2>
        <p className="mb-4">We use cookies to:</p>
        <ul className="mb-4 list-inside list-disc">
          <li>Enhance user experience.</li>
          <li>Analyze website performance.</li>
          <li>Deliver targeted content and advertisements.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">5. Managing Cookies</h2>
        <p className="mb-4">
          You can manage or disable cookies through your browser settings.
          However, this may affect your ability to use certain features of our
          website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">6. Third-Party Cookies</h2>
        <p className="mb-4">
          We may allow third-party service providers, such as analytics or
          advertising platforms, to set cookies on our website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">
          7. Updates to This Policy
        </h2>
        <p className="mb-4">
          We may update this Cookie Policy periodically. Significant changes
          will be communicated via our website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">8. Contact Us</h2>
        <p className="mb-4">
          If you have questions about this Cookie Policy, contact us at:
          <br />
          <strong>Email:</strong>{" "}
          <a
            href="mailto:dragons@divzoon.com"
            className="text-blue-500 hover:underline"
          >
            dragons@divzoon.com
          </a>
        </p>
      </section>
    </div>
  );
}
