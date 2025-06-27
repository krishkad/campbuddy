
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-forest-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 gradient-text">🏔️ CampBuddy</h3>
            <p className="text-gray-300 mb-4">
              Experience the perfect blend of luxury and nature at our stunning resort locations in Pawana and Panshet.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-gold-400 transition-colors">Home</Link></li>
              <li><Link href="/pawana" className="text-gray-300 hover:text-gold-400 transition-colors">Pawana Resort</Link></li>
              <li><Link href="/panshet" className="text-gray-300 hover:text-gold-400 transition-colors">Panshet Resort</Link></li>
              <li><a href="#contact" className="text-gray-300 hover:text-gold-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Pawana Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Pawana Resort</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="text-gold-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">Pawana Lake, Lonavala, Maharashtra</p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-gold-400" />
                <p className="text-gray-300 text-sm">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-gold-400" />
                <p className="text-gray-300 text-sm">pawana@natureresorst.com</p>
              </div>
            </div>
          </div>

          {/* Panshet Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Panshet Resort</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="text-gold-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">Panshet Dam, Pune, Maharashtra</p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-gold-400" />
                <p className="text-gray-300 text-sm">+91 98765 43211</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-gold-400" />
                <p className="text-gray-300 text-sm">panshet@natureresorst.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2025 Nature Resorts. All rights reserved. | Designed by Krrish for nature lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;