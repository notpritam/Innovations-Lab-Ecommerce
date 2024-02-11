import React from "react";

function Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        At Innvoations Lab, we are committed to protecting the privacy and
        security of your personal information. This Privacy Policy outlines the
        types of information we collect, how we use it, and the measures we take
        to safeguard your data when you use our ecommerce website. By accessing
        or using our website, you consent to the collection, use, and disclosure
        of your information in accordance with this Privacy Policy.
      </p>

      <h2 className="text-xl font-bold mb-2">1. Information We Collect:</h2>
      <p className="mb-4">
        <strong>1.1 Personal Information:</strong> When you create an account,
        make a purchase, or interact with our website, we may collect personal
        information such as your name, email address, shipping address, billing
        address, phone number, and payment information.
      </p>
      <p className="mb-4">
        <strong>1.2 Usage Data:</strong> We automatically collect certain
        information about your device and how you interact with our website,
        including your IP address, browser type, operating system, pages
        visited, and actions taken.
      </p>

      {/* More sections like this */}

      <h2 className="text-xl font-bold mb-2">8. Contact Us:</h2>
      <p className="mb-4">
        If you have any questions or concerns about this Privacy Policy or our
        data practices, please contact us at{" "}
        <a href="mailto:notpritamsharma@gmail.com" className="text-blue-500">
          notpritamsharma@gmail.com
        </a>
        .
      </p>

      <p>
        <strong>Effective Date:</strong> This Privacy Policy was last updated on
        [02.11.2024].
      </p>
    </div>
  );
}

export default Page;
