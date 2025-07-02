import React from 'react';
import StickyNavbar from "./components/StickyNavbar";
import Header from './components/Header';

import BlogContent from './components/BlogContent';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton.tsx';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
         <StickyNavbar />
      <Header />
     
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 my-8 rounded-[3rem] bg-white shadow-md">
        <div className="bg-white    lg:p-0">
          <BlogContent />
           
        </div>
      </div>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default App;