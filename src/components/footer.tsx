// src/components/footer.tsx

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaMap,
} from "react-icons/fa";
import { HiMail, HiPhone } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer className="bg-gradient-to-b from-[#0F1B3F] to-[#0A0E24] text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-5 lg:px-20 md:px-10 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-3">Stay Updated</h3>
              <p className="text-gray-400">
                Subscribe to our newsletter for the latest courses, events, and
                industry insights.
              </p>
            </div>
            <form onSubmit={handleSubscribe}>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-5 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-[#2563EB] focus:outline-none transition-colors text-white placeholder-gray-500"
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 whitespace-nowrap"
                >
                  {subscribed ? "✓ Subscribed" : "Subscribe"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-5 lg:px-20 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-3">TMK</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Empowering the next generation of tech leaders through innovative
              education and community.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#2563EB] transition-all duration-300 transform hover:scale-110"
              >
                <FaFacebook size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#2563EB] transition-all duration-300 transform hover:scale-110"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#2563EB] transition-all duration-300 transform hover:scale-110"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#2563EB] transition-all duration-300 transform hover:scale-110"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#2563EB] transition-all duration-300 transform hover:scale-110"
              >
                <FaGithub size={18} />
              </a>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-bold text-lg mb-5 text-white">Courses</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <Link
                  to="/courses"
                  className="hover:text-[#2563EB] transition-colors duration-300"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="hover:text-[#2563EB] transition-colors duration-300"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="hover:text-[#2563EB] transition-colors duration-300"
                >
                  Data Science
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="hover:text-[#2563EB] transition-colors duration-300"
                >
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="hover:text-[#2563EB] transition-colors duration-300"
                >
                  Cloud Computing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-5 text-white">Company</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#2563EB] transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="hover:text-[#2563EB] transition-colors duration-300"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#2563EB] transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#2563EB] transition-colors duration-300"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#2563EB] transition-colors duration-300"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-lg mb-5 text-white">Resources</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-[#2563EB] transition-colors duration-300"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#2563EB] transition-colors duration-300"
                >
                  Learning Path
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#2563EB] transition-colors duration-300"
                >
                  Community Forum
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#2563EB] transition-colors duration-300"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#2563EB] transition-colors duration-300"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-5 text-white">Contact Info</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <FaMap
                  size={20}
                  className="text-[#2563EB] flex-shrink-0 mt-0.5"
                />
                <span>123 Tech Street, San Francisco, CA 94105</span>
              </li>
              <li className="flex items-center gap-3">
                <HiPhone size={20} className="text-[#2563EB] flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="hover:text-[#2563EB] transition-colors duration-300"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <HiMail size={20} className="text-[#2563EB] flex-shrink-0" />
                <a
                  href="mailto:hello@tmk.com"
                  className="hover:text-[#2563EB] transition-colors duration-300"
                >
                  hello@tmk.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left text-gray-400 text-sm">
            <p>© 2024 TMK. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="hover:text-[#2563EB] transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <span>•</span>
              <a
                href="#"
                className="hover:text-[#2563EB] transition-colors duration-300"
              >
                Terms of Service
              </a>
              <span>•</span>
              <a
                href="#"
                className="hover:text-[#2563EB] transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </div>
            <p>Made with ❤️ by the TMK team</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
