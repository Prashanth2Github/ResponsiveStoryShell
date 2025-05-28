import { Link } from "wouter";
import { BookOpen, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 gradient-violet-amber rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-playfair text-2xl font-bold">NewStoriesAndTales</h3>
                <p className="text-gray-400 font-body">Where stories come alive</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Connecting readers and writers through the magical art of storytelling. Discover new worlds, 
              share your voice, and be part of a global literary community.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-violet transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-violet transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-violet transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-violet transition-colors duration-200"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 font-body">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-brand-amber transition-colors duration-200">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-brand-amber transition-colors duration-200">Contact</Link>
              </li>
              <li>
                <Link href="/guidelines" className="text-gray-300 hover:text-brand-amber transition-colors duration-200">Writing Guidelines</Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-brand-amber transition-colors duration-200">FAQ</Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-300 hover:text-brand-amber transition-colors duration-200">Support</Link>
              </li>
            </ul>
          </div>

          {/* Legal & Policies */}
          <div>
            <h4 className="font-body font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-2 font-body">
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-brand-amber transition-colors duration-200">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-brand-amber transition-colors duration-200">Terms of Service</Link>
              </li>
              <li>
                <Link href="/copyright" className="text-gray-300 hover:text-brand-amber transition-colors duration-200">Copyright Policy</Link>
              </li>
              <li>
                <Link href="/community" className="text-gray-300 hover:text-brand-amber transition-colors duration-200">Community Guidelines</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 font-body text-sm mb-4 md:mb-0">
            © 2024 NewStoriesAndTales.com. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 text-sm font-body">
            <span className="text-gray-400">Made with</span>
            <span className="text-red-400">❤️</span>
            <span className="text-gray-400">for storytellers worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
