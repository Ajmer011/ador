// components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", to: "/about" },
      { name: "Careers", to: "/careers" },
      { name: "Blog", to: "/blog" },
      { name: "Press", to: "/press" },
    ],
    services: [
      { name: "SEO", to: "/services#seo" },
      { name: "Social Media", to: "/services#social" },
      { name: "Branding", to: "/services#branding" },
      { name: "Content", to: "/services#content" },
    ],
    support: [
      { name: "Help Center", to: "/help" },
      { name: "Contact", to: "/contact" },
      { name: "Privacy Policy", to: "/privacy-policy" },
      { name: "Terms of Service", to: "/terms" },
    ],
  };

  const socialLinks = [
    { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { Icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { Icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  ];

  return (
    <footer className="bg-dark-800 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="text-3xl font-bold text-gradient mb-4 inline-block"
            >
              MarketPro
            </Link>

            <p className="text-gray-400 mb-6 max-w-md">
              Transform your brand with data-driven marketing strategies that
              deliver real results. We're your partner in digital success.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail size={18} className="text-neon-blue" />
                <a
                  href="mailto:hello@marketpro.com"
                  className="hover:text-neon-blue transition-colors"
                >
                  hello@marketpro.com
                </a>
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <Phone size={18} className="text-neon-blue" />
                <a
                  href="tel:+11234567890"
                  className="hover:text-neon-blue transition-colors"
                >
                  +1 (123) 456-7890
                </a>
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={18} className="text-neon-blue" />
                <span>123 Marketing Street, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-neon-blue transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-neon-blue transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-neon-blue transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} MarketPro. All rights reserved.
            </p>

            {/* Social */}
            <div className="flex gap-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 bg-dark-700 rounded-full flex items-center justify-center text-gray-400 hover:bg-neon-blue hover:text-white transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>

            {/* Legal */}
            <div className="flex gap-6 text-sm text-gray-400">
              <Link to="/privacy-policy" className="hover:text-neon-blue">
                Privacy
              </Link>
              <Link to="/terms" className="hover:text-neon-blue">
                Terms
              </Link>
              <Link to="/cookies" className="hover:text-neon-blue">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-neon hover:shadow-neon-hover transition-all z-40"
        aria-label="Scroll to top"
      >
        <span className="text-2xl text-white">↑</span>
      </button>
    </footer>
  );
};

export default Footer;
