import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import type { AccordionItem } from "../data/courseDetailsData";

interface CourseAccordionProps {
  items: AccordionItem[];
}

const CourseAccordion = ({ items }: CourseAccordionProps) => {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 px-5 lg:px-20 md:px-10 bg-blue-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="border-b-2 border-primary">
              <button
                onClick={() => toggleAccordion(item.id)}
                className={`w-full py-6 px-6 flex items-center justify-between transition-all duration-300 ${
                  openId === item.id
                    ? "bg-teal-200"
                    : "bg-blue-100 hover:bg-blue-200"
                }`}
              >
                <h3
                  className={`text-2xl font-bold text-left transition-colors ${
                    openId === item.id ? "text-teal-700" : "text-dark"
                  }`}
                >
                  {item.title}
                </h3>
                <HiChevronDown
                  size={28}
                  className={`flex-shrink-0 transition-transform duration-300 ${
                    openId === item.id
                      ? "text-teal-700 -rotate-180"
                      : "text-dark"
                  }`}
                />
              </button>

              {/* Content */}
              {openId === item.id && (
                <div className="px-6 pb-6 bg-blue-50">
                  {item.hasImage && item.imageUrl && (
                    <div className="mb-6 max-w-md">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full rounded-lg object-cover"
                      />
                    </div>
                  )}

                  {typeof item.content === "string" ? (
                    <div className="text-lg text-dark leading-relaxed">
                      {item.content.split("\n\n").map((paragraph, idx) => (
                        <p key={idx} className="mb-4">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <ul className="space-y-3">
                      {item.content.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-teal-600 font-bold text-xl mt-1">
                            •
                          </span>
                          <span className="text-lg text-dark">{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseAccordion;
