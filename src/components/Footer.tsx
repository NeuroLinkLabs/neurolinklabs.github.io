import { Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-neuro-bg-secondary/50 border-t border-neuro-bg-tertiary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo and Company Info */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-xl font-bold text-gradient">
              NeuroLink Labs
            </Link>
            <span className="text-neuro-text-secondary text-sm">
              © 2025 NeuroLink Labs. All rights reserved.
            </span>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            <a
              href="https://linkedin.com/company/neurolink-labs"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-neuro-bg-tertiary/50 hover:bg-primary/20 transition-all duration-300 group"
            >
              <Linkedin className="h-5 w-5 text-neuro-text-secondary group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://x.com/neurolink_labs"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-neuro-bg-tertiary/50 hover:bg-primary/20 transition-all duration-300 group"
            >
              <Twitter className="h-5 w-5 text-neuro-text-secondary group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;