import React from "react";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-primary mb-8">
          Contact Us
        </h1>
        <p className="text-xl text-gray-500 dark:text-gray-400 mb-12 max-w-2xl">
          Have questions about the course? Need help with your account? We&apos;re here to help.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-card-dark p-8 rounded-2xl border border-gray-200 dark:border-border-dark">
              <span className="material-icons text-primary text-4xl mb-4">email</span>
              <h3 className="text-xl font-bold mb-2">Email Support</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                For general inquiries and support requests.
              </p>
              <a href="mailto:support@formburg.com" className="font-bold text-primary hover:text-orange-600 transition-colors">
                support@formburg.com
              </a>
            </div>

            {/* Discord */}
            {/* <div className="bg-gray-50 dark:bg-card-dark p-8 rounded-2xl border border-gray-200 dark:border-border-dark">
              <span className="material-icons text-primary text-4xl mb-4">forum</span>
              <h3 className="text-xl font-bold mb-2">Community Discord</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Join our community to ask questions and connect with other students.
              </p>
              <a href="#" className="font-bold text-primary hover:text-orange-600 transition-colors">
                Join Discord Server
              </a>
            </div> */}

            <div className="bg-gray-50 dark:bg-card-dark p-8 rounded-2xl border border-gray-200 dark:border-border-dark">
              <span className="material-icons text-primary text-4xl mb-4">chat</span>
              <h3 className="text-xl font-bold mb-2">WhatsApp Support</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                 Chat with us directly for quick answers to your questions.
              </p>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="font-bold text-primary hover:text-orange-600 transition-colors">
                Chat on WhatsApp
              </a>
            </div>

            {/* Book a Call */}
            {/* <div className="bg-gray-50 dark:bg-card-dark p-8 rounded-2xl border border-gray-200 dark:border-border-dark">
              <span className="material-icons text-primary text-4xl mb-4">calendar_today</span>
              <h3 className="text-xl font-bold mb-2">Book a Call</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Schedule a one-on-one session with our course advisors.
              </p>
              <a href="#" className="font-bold text-primary hover:text-orange-600 transition-colors">
                Schedule Meeting
              </a>
            </div> */}
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold uppercase tracking-wider mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-gray-50 dark:bg-card-dark border border-gray-200 dark:border-border-dark rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold uppercase tracking-wider mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-gray-50 dark:bg-card-dark border border-gray-200 dark:border-border-dark rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-bold uppercase tracking-wider mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-gray-50 dark:bg-card-dark border border-gray-200 dark:border-border-dark rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <button type="button" className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-orange-600 transition-all shadow-lg shadow-primary/20">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
