import React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-300 text-gray-800">
      {/* Blue top line */}
      <div className="h-1 bg-blue-700 w-full h-3"></div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 sm:px-6 md:px-8 py-10">
          {/* Company Section */}
          <div>
            <h4 className="text-2xl font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Innovations</a></li>
              <li><a href="#" className="hover:underline">Business Services</a></li>
              <li><a href="#" className="hover:underline">Financial services</a></li>
              <li><a href="#" className="hover:underline">Lejhro Recruiter</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Blogs</a></li>
            </ul>
          </div>

          {/* Programs Section */}
          <div>
            <h4 className="text-2xl font-bold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Lejhro Bootcamp</a></li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h4 className="text-2xl font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Contact</a></li>
              <li><a href="#" className="hover:underline">Terms of Use</a></li>
              <li><a href="#" className="hover:underline">Privacy Statement</a></li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="text-2xl font-bold mb-4">Connect with us</h4>
            <div className="flex space-x-4 text-gray-700 text-xl">
              <a href="https://x.com/?lang=en" aria-label="Twitter"><FaTwitter className="hover:text-blue-500" /></a>
              <a href="https://www.facebook.com/" aria-label="Facebook"><FaFacebookF className="hover:text-blue-600" /></a>
              <a href="https://www.linkedin.com/" aria-label="LinkedIn"><FaLinkedinIn className="hover:text-blue-700" /></a>
              <a href="https://www.youtube.com/" aria-label="YouTube"><FaYoutube className="hover:text-red-600" /></a>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className=" mt-8 text-center text-base text-gray-700 font-medium p-0 mb-0">
          © 2025 LEJHRO. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
