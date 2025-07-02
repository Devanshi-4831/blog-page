import React, { useState } from 'react';
import { Menu, X, Shield } from 'lucide-react';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Yellow Strip */}
      <div className="bg-[#e09915] h-4 w-full" />

      {/* Header */}
      <header className="bg-[#e09915] text-white top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center">
  <img
    src="/images/lejhro_logo_white.png"
    alt="Lejhro Logo"
    className="h-8 w-auto"
  />
</div>
</div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-white hover:text-blue-100 transition font-medium">Innovations</a>
              <a href="#" className="text-white hover:text-blue-100 transition font-medium">Business Services</a>
              <a href="#" className="text-white hover:text-blue-100 transition font-medium">Financial Services</a>
              <a href="#" className="text-white hover:text-blue-100 transition font-medium">Bootcamp</a>
              <a href="#" className="text-white border-b-2 border-white font-medium">Blogs</a>
            </nav>

            {/* Mobile Menu Button (replacing search icon) */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className=" p-2 rounded-md     rounded-full bg-white text-black shadow-md"
            >
              <Menu className="h-6 w-6" />
            </button>


          </div>
        </div>
      </header>

      {/* Mobile Slide-in Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 w-72 h-screen bg-white z-[100] shadow-xl transition-all duration-300 ease-in-out">
          <div className="p-6 flex flex-col h-full">
            {/* Header inside drawer */}
            <div className="flex justify-between items-center mb-6">
              <img
  src="public/images/lejhro_logo_blue.png"
  alt="Lejhro Logo"
  className="h-7 w-auto"
/>

              <button onClick={() => setIsMenuOpen(false)}>
                <X className="h-6 w-6 text-black" />
              </button>

              
            </div>

            {/* Menu Links */}
            <nav className="flex flex-col gap-4 text-gray-800 font-medium text-[21px]">
              <a href="#" className="hover:text-yellow-600">Innovations</a>
              <a href="#" className="hover:text-yellow-600">Bootcamp</a>
              <a href="#" className="hover:text-yellow-600">Business Services</a>
              <a href="#" className="hover:text-yellow-600">Financial Services</a>
              <a href="#" className="hover:text-yellow-600 ">About</a>
              <a href="#" className="hover:text-yellow-600">Contacy Us</a>
              <a href="#" className="hover:text-yellow-600">Blogs</a>
            
            <div className="mt-auto pt-6 flex space-x-4 text-[24px] text-gray-700">
  <a href="https://x.com/?lang=en" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
    <FaTwitter className="hover:text-blue-500" />
  </a>
  <a href="https://www.facebook.com/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
    <FaFacebookF className="hover:text-blue-600" />
  </a>
  <a href="https://www.linkedin.com/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
    <FaLinkedinIn className="hover:text-blue-700" />
  </a>
  <a href="https://www.youtube.com/" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
    <FaYoutube className="hover:text-red-600" />
  </a>
</div>
            </nav>

            {/* Social Icons (mock) */}
            {/* Social Icons */}


          </div>
        </div>
      )}

      {/* Blogs Title Section */}
      <div className="bg-[#e09915] text-white w-full mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-left">
          <h1 className="text-[52px] font-medium leading-tight">Blogs</h1>
        </div>
      </div>
    </>
  );
};

export default Header;
