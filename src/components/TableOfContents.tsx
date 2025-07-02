import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

interface TocItem {
  id: string;
  title: string;
  level: number;
}

const TableOfContents: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  const tocItems: TocItem[] = [
    { id: 'introduction', title: 'Introduction', level: 1 },
    { id: 'differential-privacy', title: 'Differential Privacy', level: 1 },
    { id: 'k-anonymity', title: 'K-Anonymity Techniques', level: 1 },
    { id: 'statistical-disclosure', title: 'Statistical Disclosure Control', level: 1 },
    { id: 'synthetic-data', title: 'Synthetic Data Generation', level: 1 },
    { id: 'privacy-preserving', title: 'Privacy-Preserving Analytics', level: 1 },
    { id: 'implementation', title: 'Implementation Strategies', level: 1 },
    { id: 'conclusion', title: 'Conclusion', level: 1 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = tocItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(tocItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 sticky top-24">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3>
      <nav className="space-y-2">
        {tocItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`flex items-center w-full text-left p-2 rounded-md transition-all duration-200 ${
              activeSection === item.id
                ? 'bg-blue-50 text-blue-700 font-medium'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <ChevronRight className={`h-4 w-4 mr-2 transition-transform duration-200 ${
              activeSection === item.id ? 'rotate-90' : ''
            }`} />
            <span className="text-sm">{item.title}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default TableOfContents;