// src/components/footer.tsx

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-16 px-5 lg:px-20 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold text-secondary mb-3">Edunity</h3>
          <p className="text-gray-400 text-sm mb-4">
            Interdum et laoreet dolore et ante accumsan et iaculis orci luctus
            et ultrices volutpat auctor erat.
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              className="text-white hover:text-secondary transition-colors"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              className="text-white hover:text-secondary transition-colors"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="text-white hover:text-secondary transition-colors"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="text-white hover:text-secondary transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold text-lg mb-4">Our Services:</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:text-secondary transition-colors">
                Web Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-secondary transition-colors">
                UI/UX Design
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-secondary transition-colors">
                Management
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-secondary transition-colors">
                Digital Marketing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-secondary transition-colors">
                Blog News
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-lg mb-4">Quick Links:</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:text-secondary transition-colors">
                Templates
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-secondary transition-colors">
                Blog And Article
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-secondary transition-colors">
                Integrations
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-secondary transition-colors">
                Webinars
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-secondary transition-colors">
                Privacy & Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Gallery */}
        <div>
          <h4 className="font-bold text-lg mb-4">Gallery</h4>
          <div className="grid grid-cols-3 gap-2">
            {[...Array(6)].map((_, i) => (
              <img
                key={i}
                src={`https://images.unsplash.com/photo-${1494790108377 + i}?w=80&h=80&fit=crop`}
                alt="Gallery"
                className="rounded-lg w-full h-20 object-cover"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 pt-8">
        <p className="text-center text-gray-400 text-sm">
          Copyright © 2024 edunity | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
