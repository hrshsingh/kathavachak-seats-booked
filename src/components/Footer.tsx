
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">क</span>
              </div>
              <h3 className="text-2xl font-bold">KathaVachak</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Connecting souls with divine wisdom through the ancient art of Katha storytelling.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#events" className="text-gray-400 hover:text-orange-500 transition-colors">Browse Events</a></li>
              <li><a href="#storytellers" className="text-gray-400 hover:text-orange-500 transition-colors">Our Storytellers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Become a Storyteller</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Gift Cards</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Corporate Events</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Booking Help</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Cancellation Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-orange-500 mr-3" />
                <span className="text-gray-400 text-sm">
                  123 Spiritual Street<br />
                  Mumbai, Maharashtra 400001
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-orange-500 mr-3" />
                <span className="text-gray-400 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-orange-500 mr-3" />
                <span className="text-gray-400 text-sm">hello@kathavachak.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 KathaVachak. All rights reserved. Made with ❤️ for spiritual seekers.
          </p>
        </div>
      </div>
    </footer>
  );
};
