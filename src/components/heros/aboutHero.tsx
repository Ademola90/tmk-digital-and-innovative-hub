import React from "react";
import { HiArrowRight } from "react-icons/hi";

const AboutHero: React.FC = () => {
  return (
    <div className="min-h-[500px] md:min-h-[600px] bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] text-white flex items-center justify-center px-5 md:px-20 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold backdrop-blur-sm">
            Our Story
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Empowering the Next Generation of Tech Leaders
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Since our founding, we&apos;ve been dedicated to making quality tech
          education accessible to everyone. Join thousands of students
          transforming their careers with our innovative courses and community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1E3A8A] font-bold rounded-lg hover:bg-gray-100 transition-all duration-300">
            Explore Our Courses
            <HiArrowRight size={20} />
          </button>
          <button className="flex items-center justify-center gap-2 px-8 py-4 bg-white/20 text-white font-bold rounded-lg hover:bg-white/30 transition-all duration-300 border border-white/40">
            Join Our Community
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
