import React, { useState, useRef, useEffect } from 'react';

const Dropdown = ({setSelectedCategory}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Select an option');
  const dropdownRef = useRef(null);

  const options = [
    'beauty',
    'fragrances',
    'furniture',
    'groceries',   
  ];

  const handleSelect = (option) => {    
    setSelectedOption(option);
    setIsOpen(false);
    setSelectedCategory(option);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-5">
    
       
          
          
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-[300px] flex items-center justify-between px-6 py-4 bg-white border-2 border-gray-200 rounded-xl shadow-sm hover:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
            >
              <span className={`truncate ${selectedOption === 'Select an option' ? 'text-gray-400' : 'text-gray-700'}`}>
                {selectedOption}
              </span>
              <svg 
                className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isOpen && (
              <div className="absolute z-10 mt-2 w-full bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-200">
                <ul className="py-2">
                  {options.map((option, index) => (
                    <li key={index}>
                      <button
                        onClick={() => handleSelect(option)}
                        className="w-full text-left px-6 py-3 hover:bg-indigo-50 hover:text-indigo-700 transition-colors duration-150 first:border-b first:border-gray-100"
                      >
                        <span className="flex items-center">
                          <span className="ml-2">{option}</span>
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

         
        </div>
      
    
  );
};

export default Dropdown;