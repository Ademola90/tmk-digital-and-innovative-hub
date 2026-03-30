import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

interface FAQItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden hover:border-[#2563EB] transition-colors">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <h3 className="text-left font-semibold text-[#1E3A8A] text-sm md:text-base">
          {question}
        </h3>
        <HiChevronDown
          size={20}
          className={`text-[#2563EB] transition-transform duration-300 flex-shrink-0 ml-4 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;
