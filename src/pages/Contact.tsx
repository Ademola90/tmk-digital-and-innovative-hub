import React, { useEffect, useState } from "react";
import { HiMail, HiPhone, HiLocationMarker, HiGlobe } from "react-icons/hi";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useToastStore } from "../store/toastStore";
import ContactHero from "../components/heros/contactHero";
import ContactInfoCard from "../components/cards/ContactInfoCard";
import { faqData } from "../data/faqData";
import FAQItem from "../components/faq/FAQItem";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  company?: string;
  message: string;
}

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const addToast = useToastStore((state) => state.addToast);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    company: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      addToast("Please fill in all required fields", "error");
      return;
    }

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      addToast(
        "Message sent successfully! We'll get back to you soon.",
        "success",
      );
      setFormData({
        name: "",
        email: "",
        subject: "",
        company: "",
        message: "",
      });
    } catch (error: unknown) {
      console.error(error);
      addToast("Failed to send message. Please try again.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <HiMail />,
      title: "Email",
      content: "support@tmk.tech",
      linkHref: "mailto:support@tmk.tech",
    },
    {
      icon: <HiPhone />,
      title: "Phone",
      content: "+1 (555) 123-4567",
      linkHref: "tel:+15551234567",
    },
    {
      icon: <HiLocationMarker />,
      title: "Address",
      content: ["123 Tech Street", "San Francisco, CA 94105"],
    },
    {
      icon: <HiGlobe />,
      title: "Website",
      content: "www.tmk.tech",
      linkHref: "https://www.tmk.tech",
    },
  ];

  return (
    <div>
      <Navbar />
      <ContactHero />

      {/* Contact Form & Info Section */}
      <section className="py-16 md:py-24 px-5 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
                <h2 className="text-3xl font-bold text-[#1E3A8A] mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1E3A8A] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#2563EB] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1E3A8A] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#2563EB] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1E3A8A] mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="How can we help?"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#2563EB] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1E3A8A] mb-2">
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your Company"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#2563EB] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1E3A8A] mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#2563EB] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full py-3 px-6 rounded-lg font-bold text-white transition-all duration-300 ${
                      isLoading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-[#2563EB] hover:bg-[#1E40AF] cursor-pointer"
                    }`}
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="md:col-span-1 space-y-4">
              {contactInfo.map((info, idx) => (
                <ContactInfoCard
                  key={idx}
                  icon={info.icon}
                  title={info.title}
                  content={info.content}
                  linkHref={info.linkHref}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-5 md:px-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg">
              Find answers to common questions about our courses and services
            </p>
          </div>

          <div className="space-y-4">
            {faqData.slice(0, 8).map((faq, idx) => (
              <FAQItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                defaultOpen={idx === 0}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">
              Didn&apos;t find what you&apos;re looking for?
            </p>
            <button className="px-8 py-3 bg-[#2563EB] text-white font-bold rounded-lg hover:bg-[#1E40AF] transition-all duration-300">
              Browse All FAQs
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
