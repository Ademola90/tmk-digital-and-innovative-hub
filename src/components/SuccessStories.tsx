// src/components/SuccessStories.tsx

import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

interface Story {
  name: string;
  role: string;
  quote?: string;
  story?: string;
  image: string;
}

interface SuccessStoriesProps {
  stories: Story[];
}

const SuccessStories = ({ stories }: SuccessStoriesProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + stories.length) % stories.length,
    );
  };

  const currentStory = stories[currentIndex];

  return (
    <section className="py-20 px-5 lg:px-20 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-dark text-center mb-16">
          Success Stories
        </h2>

        {/* Carousel */}
        <div className="flex items-center justify-between gap-8">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="flex-shrink-0 p-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
            aria-label="Previous story"
          >
            <HiChevronLeft size={24} />
          </button>

          {/* Story Card */}
          <div className="flex-1 bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 lg:p-12 min-h-80 flex flex-col justify-center items-center text-center">
            <img
              src={currentStory.image}
              alt={currentStory.name}
              className="w-24 h-24 rounded-full object-cover mb-6 border-4 border-primary"
            />
            <p className="text-xl text-gray-700 italic mb-6 leading-relaxed">
              "{currentStory.quote || currentStory.story || ""}"
            </p>
            <h3 className="text-2xl font-bold text-dark mb-2">
              {currentStory.name}
            </h3>
            <p className="text-lg text-primary font-semibold">
              {currentStory.role}
            </p>
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="flex-shrink-0 p-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
            aria-label="Next story"
          >
            <HiChevronRight size={24} />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {stories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-primary w-8" : "bg-gray-300"
              }`}
              aria-label={`Go to story ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
