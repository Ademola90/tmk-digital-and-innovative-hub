import React, { useState } from "react";
import { HiStar, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import type { SuccessStory } from "../data/successStoriesData";
import { Link } from "react-router-dom";

interface SuccessStoriesGridProps {
  stories: SuccessStory[];
}

const SuccessStoriesGrid = ({ stories }: SuccessStoriesGridProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cardsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  };

  const [viewType, setViewType] = React.useState<
    "mobile" | "tablet" | "desktop"
  >("desktop");

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setViewType("mobile");
      } else if (window.innerWidth < 1024) {
        setViewType("tablet");
      } else {
        setViewType("desktop");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const itemsToShow = cardsPerView[viewType];
  const totalSlides = Math.ceil(stories.length / itemsToShow);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getVisibleStories = () => {
    const startIdx = currentSlide * itemsToShow;
    return stories.slice(startIdx, startIdx + itemsToShow);
  };

  return (
    <section className="py-20 px-5 lg:px-20 md:px-10 bg-gradient-to-br from-white via-[#728ec7] to-[#2563EB]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-outfit text-black font-bold text-dark mb-4">
            Success Stories
          </h2>
          <p className="text-lg font-roboto font-normal text-gray-600 max-w-2xl mx-auto">
            Real students, real results. See how our learners transformed their
            careers
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Stories Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out gap-6 lg:gap-8"
              style={{
                transform: `translateX(0)`,
              }}
            >
              {getVisibleStories().map((story) => (
                <div
                  key={story.id}
                  className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3"
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary h-full">
                    {/* Card Content */}
                    <div className="p-6 md:p-8 h-full flex flex-col">
                      {/* Star Rating */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(story.rating)].map((_, i) => (
                          <HiStar
                            key={i}
                            size={18}
                            className="text-yellow-400 fill-yellow-400"
                          />
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="text-gray-700 mb-6 italic font-light font-roboto leading-relaxed text-base md:text-sm flex-grow">
                        "{story.quote}"
                      </p>

                      {/* Achievement Badge */}
                      <div className="bg-blue-50 border border-primary/20 rounded-xl p-4 mb-6">
                        <p className="text-sm font-medium text-primary font-roboto">
                          {story.achievement}
                        </p>
                      </div>

                      {/* User Info */}
                      <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                        <img
                          src={story.image}
                          alt={story.name}
                          className="w-14 h-14 rounded-full object-cover border-2 border-primary"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-dark text-base font-roboto">
                            {story.name}
                          </h3>
                          <p className="text-gray-600 font-roboto font-light text-sm">
                            {story.role}
                          </p>
                          {/* {story.company && (
                            <p className="text-primary text-xs font-semibold">
                              {story.company}
                            </p>
                          )} */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {totalSlides > 1 && (
            <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-0 md:-px-16 pointer-events-none">
              <button
                onClick={prevSlide}
                className="pointer-events-auto -left-6 md:-left-16 absolute bg-primary hover:bg-secondary text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
                aria-label="Previous slide"
              >
                <HiChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="pointer-events-auto -right-6 md:-right-16 absolute bg-primary hover:bg-secondary text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
                aria-label="Next slide"
              >
                <HiChevronRight size={24} />
              </button>
            </div>
          )}

          {/* Slide Indicators */}
          {totalSlides > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {[...Array(totalSlides)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-primary w-8"
                      : "bg-gray-300 w-2 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-white font-outfit mb-4">
            Ready to write your success story?
          </h3>
          <p className="text-white/90 font-roboto font-normal mb-8 max-w-2xl mx-auto text-lg">
            Join thousands of students who have transformed their careers with
            our comprehensive courses
          </p>
          <Link
            to="/courses"
            className="bg-white font-roboto font-normal cursor-pointer text-primary  px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg"
          >
            Start Learning Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesGrid;
