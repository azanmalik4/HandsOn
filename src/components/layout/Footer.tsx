// ============================================
// ENHANCED FOOTER.TSX
// Copy this to: src/components/layout/Footer.tsx
// ============================================

import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Send, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import logo from '../../../public/handsON.jpeg';

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Achievements", path: "/achievements" },
  { name: "Information", path: "/information" },
  { name: "Contact", path: "/contact" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-blue-500" },
  { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-sky-500" },
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-600" },
  { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-pink-500" },
];

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-foreground via-foreground/98 to-foreground text-primary-foreground overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10">
        <div className="section-container py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Logo & Tagline */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <Link to="/" className="flex items-center gap-3 mb-6 group">
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <img 
                      src={logo} 
                      alt="HandsON Logo" 
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-50 blur-xl transition-opacity -z-10" />
                </div>
                <div>
                  <span className="font-bold text-lg text-primary-foreground block leading-tight">
                    HandsOn
                  </span>
                  <span className="font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block -mt-1">
                    Communicator
                  </span>
                </div>
              </Link>
              <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
                Breaking barriers in communication through innovative assistive technology. 
                Empowering connections for everyone.
              </p>
              
              {/* Social Icons */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className={`group relative w-10 h-10 rounded-xl bg-primary-foreground/10 hover:text-primary-foreground flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110`}
                  >
                    <social.icon className="w-4 h-4 relative z-10" />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="font-semibold text-base mb-6 text-primary-foreground flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-primary-foreground/70 hover:text-primary hover:translate-x-1 text-sm transition-all inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="font-semibold text-base mb-6 text-primary-foreground flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full" />
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm group">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-primary-foreground/70 group-hover:text-primary-foreground transition-colors break-all">
                    contact@handsoncommunicator.com
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm group">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-primary-foreground/70 group-hover:text-primary-foreground transition-colors">
                    +1 (555) 123-4567
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm group">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-primary-foreground/70 group-hover:text-primary-foreground transition-colors">
                    123 Innovation Drive<br />
                    Tech City, TC 12345
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="font-semibold text-base mb-6 text-primary-foreground flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full" />
                Stay Updated
              </h4>
              <p className="text-primary-foreground/70 text-sm mb-4 leading-relaxed">
                Subscribe to our newsletter for the latest updates and innovations.
              </p>
              <form className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-3 pr-12 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center hover:scale-110 transition-transform group shadow-lg"
                  >
                    <Send className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
                <p className="text-xs text-primary-foreground/50">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </form>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="mt-12 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent" />
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm"
          >
            <p className="text-primary-foreground/60 flex items-center gap-2">
              <span>© 2024 HandsOn Communicator. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center gap-1 text-primary-foreground/70">
                Made with <Heart className="w-3 h-3 text-red-500 fill-current animate-pulse" /> for accessibility
              </span>
            </p>
            <div className="flex gap-6">
              <a 
                href="#" 
                className="text-primary-foreground/60 hover:text-primary transition-colors relative group"
              >
                Privacy Policy
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all" />
              </a>
              <a 
                href="#" 
                className="text-primary-foreground/60 hover:text-primary transition-colors relative group"
              >
                Terms of Service
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all" />
              </a>
              <a 
                href="#" 
                className="text-primary-foreground/60 hover:text-primary transition-colors relative group"
              >
                Cookie Policy
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Decorative bottom accent */}
        <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary" />
      </div>
    </footer>
  );
};