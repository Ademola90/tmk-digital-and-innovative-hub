// src/pages/courses.tsx

import CourseCard from "../components/courseCard";
import { coursesData } from "../data/courseData";
import Navbar from "../components/navbar";
import { useEffect } from "react";

const Courses = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const bgColors = [
    "bg-blue-100",
    "bg-yellow-100",
    "bg-purple-100",
    "bg-amber-100",
  ];

  return (
    <div className="bg-light min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="py-16 px-5 lg:px-20 md:px-10 bg-gradient-to-r from-indigo-950 to-indigo-800">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            All Courses
          </h1>
          <p className="text-white text-xl max-w-2xl">
            Explore our complete collection of courses designed to help you
            master new skills and advance your career.
          </p>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 px-5 lg:px-20 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coursesData.map((course, index) => (
              <CourseCard
                key={course.id}
                course={course}
                bgColor={bgColors[index % bgColors.length]}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
