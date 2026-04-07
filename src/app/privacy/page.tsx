import React from "react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-primary mb-12">
          Privacy Policy
        </h1>

        <div className="prose dark:prose-invert max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Data Collection</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We collect information you provide directly to us, such as when
              you create an account, enroll in a course, subscribe to our
              newsletter, or contact us for support. This information may
              include your name, email address, payment information, and any
              other information you choose to provide.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. How We Use Your Data</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We use the information we collect to provide, maintain, and
              improve our services, such as to:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                Process transactions and send you related information, including
                confirmations and invoices.
              </li>
              <li>
                Send you technical notices, updates, security alerts, and
                support and administrative messages.
              </li>
              <li>
                Respond to your comments, questions, and requests and provide
                customer service.
              </li>
              <li>
                Communicate with you about products, services, offers,
                promotions, rewards, and events offered by us and others, and
                provide news and information we think will be of interest to
                you.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Cookies</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We use cookies and similar tracking technologies to track the
              activity on our service and hold certain information. You can
              instruct your browser to refuse all cookies or to indicate when a
              cookie is being sent. However, if you do not accept cookies, you
              may not be able to use some portions of our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Your Rights</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              You have the right to access, update, or delete your personal
              information at any time. If you wish to exercise these rights,
              please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Contact Us</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              If you have any questions about this Privacy Policy, please
              contact us at support@vydhra.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
