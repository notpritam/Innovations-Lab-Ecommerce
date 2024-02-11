import React from "react";

const Page = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="mb-4">
        These Terms of Service govern your use of the Innvoations Lab ecommerce
        website. By accessing or using our website, you agree to comply with
        these terms. Please read them carefully before using our website.
      </p>

      <h2 className="text-xl font-bold mb-2">1. Acceptance of Terms</h2>
      <p className="mb-4">
        By accessing or using our website, you agree to be bound by these Terms
        of Service and our Privacy Policy. If you do not agree to these terms,
        you may not use our website.
      </p>

      <h2 className="text-xl font-bold mb-2">2. Use of Website</h2>
      <p className="mb-4">
        You may use our website for lawful purposes only. You agree not to use
        our website in any way that violates any applicable laws or regulations.
      </p>

      {/* More sections like this */}

      <h2 className="text-xl font-bold mb-2">8. Contact Us</h2>
      <p className="mb-4">
        If you have any questions or concerns about these Terms of Service,
        please contact us at{" "}
        <a href="mailto:notpritamsharma@gmail.com" className="text-blue-500">
          notpritamsharma@gmail.com
        </a>
        .
      </p>

      <p>
        <strong>Effective Date:</strong> These Terms of Service were last
        updated on [02.11.2024].
      </p>
    </div>
  );
};

export default Page;
