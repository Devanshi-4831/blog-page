import React from 'react';
import { Share2, Bookmark, Twitter, Linkedin, Facebook, Mail } from 'lucide-react';
import TableOfContents from './TableOfContents';

const Sidebar: React.FC = () => {
  const relatedArticles = [
    {
      title: "GDPR Compliance in Modern Data Architecture",
      date: "March 10, 2024",
      readTime: "8 min read"
    },
    {
      title: "Machine Learning with Privacy Constraints",
      date: "March 5, 2024",
      readTime: "15 min read"
    },
    {
      title: "Zero-Trust Data Governance Frameworks",
      date: "February 28, 2024",
      readTime: "10 min read"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Table of Contents */}
      <TableOfContents />

      {/* Author Info */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
            SC
          </div>
          <div className="ml-3">
            <h3 className="font-semibold text-gray-900">Dr. Sarah Chen</h3>
            <p className="text-sm text-gray-600">Data Privacy Researcher</p>
          </div>
        </div>
        <p className="text-sm text-gray-700 leading-relaxed">
          Leading expert in statistical privacy methods with over 10 years of experience in data protection and privacy-preserving analytics.
        </p>
      </div>

      {/* Share Article */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Share2 className="h-4 w-4" />
          Share Article
        </h3>
        <div className="flex flex-wrap gap-2">
          <button className="flex items-center gap-2 px-3 py-2 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition-colors duration-200 text-sm">
            <Twitter className="h-4 w-4" />
            Twitter
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition-colors duration-200 text-sm">
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition-colors duration-200 text-sm">
            <Facebook className="h-4 w-4" />
            Facebook
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-gray-50 text-gray-600 rounded-md hover:bg-gray-100 transition-colors duration-200 text-sm">
            <Mail className="h-4 w-4" />
            Email
          </button>
        </div>
        <button className="mt-3 flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
          <Bookmark className="h-4 w-4" />
          Save for later
        </button>
      </div>

      {/* Related Articles */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Related Articles</h3>
        <div className="space-y-4">
          {relatedArticles.map((article, index) => (
            <div key={index} className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0">
              <h4 className="font-medium text-gray-900 mb-1 hover:text-blue-600 cursor-pointer transition-colors duration-200">
                {article.title}
              </h4>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white">
        <h3 className="font-semibold mb-2">Stay Updated</h3>
        <p className="text-sm text-blue-100 mb-4">
          Get the latest insights on data privacy and security delivered to your inbox.
        </p>
        <div className="space-y-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 rounded-md text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button className="w-full bg-white text-blue-600 font-medium py-2 rounded-md hover:bg-gray-100 transition-colors duration-200 text-sm">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;