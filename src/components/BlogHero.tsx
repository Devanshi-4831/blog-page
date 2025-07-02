import React from 'react';
import { Calendar, Clock, User } from 'lucide-react';

const BlogHero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-white-50 to-indigo-50 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
            Data Privacy & Innovation
          </span>
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Statistical Approaches for Balancing Ethical Privacy & Data-Driven Innovation
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Tech skills making young professionals to rush them towards success
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>Lejhro Team</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>March 15, 2024</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>15 min read</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;