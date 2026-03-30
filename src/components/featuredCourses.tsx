// src/components/featuredCourses.tsx
import { Link, useNavigate } from "react-router-dom";
import Button from "./ui/buttons";
import { coursesData } from "../data/courseData";
import CourseCard from "./courseCard";
import { FaArrowRight } from "react-icons/fa";

const FeaturedCourses = () => {
  const navigate = useNavigate();

  // Color palette for alternating cards
  const bgColors = [
    "bg-blue-100",
    "bg-yellow-100",
    "bg-purple-100",
    "bg-amber-100",
  ];

  const handleViewAllCourses = () => {
    navigate("/courses");
  };

  return (
    <section id="courses" className="py-20 px-5 lg:px-20 md:px-10 bg-light">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-16">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-dark">
              OUR TOP COURSES
            </h2>
          </div>
          <Link
            to={`/courses`}
            className="text-primary flex items-center gap-2"
          >
            <div className=" font-semibold text-sm hover:text-secondary transition-colors flex items-center gap-1 group">
              More Courses
            </div>

            <FaArrowRight size={16} />
          </Link>
        </div>

        {/* Courses Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {coursesData.slice(0, 6).map((course, index) => (
            <CourseCard
              key={course.id}
              course={course}
              bgColor={bgColors[index % bgColors.length]}
            />
          ))}
        </div>

        {/* Mobile Load More Button */}
        <div className="flex justify-center lg:hidden cursor-pointer">
          <Button
            className=" animate-pulse cursor-pointer"
            text="More Courses"
            variant="primary"
            onClick={handleViewAllCourses}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;

// // import CourseCard from "./CourseCard";
// // import Button from "./ui/Button";
// // import { coursesData } from "../data/coursesData";

// import { coursesData } from "../data/courseData";
// import CourseCard from "./courseCard";
// import Button from "./ui/buttons";

// const FeaturedCourses = () => {
//   return (
//     <section id="courses" className="py-20 px-5 lg:px-20 md:px-10 bg-light">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-12">
//           <div>
//             <p className="text-secondary font-semibold text-sm mb-2">
//               TOP POPULAR COURSE
//             </p>
//             <h2 className="text-4xl lg:text-5xl font-bold text-dark">
//               Edunity Course Student Can Join With Us.
//             </h2>
//           </div>
//           <Button
//             text="Load More Courses →"
//             variant="primary"
//             className="hidden lg:block"
//           />
//         </div>

//         {/* Courses Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//           {coursesData.map((course) => (
//             <CourseCard key={course.id} course={course} />
//           ))}
//         </div>

//         {/* Mobile Load More Button */}
//         <div className="flex justify-center lg:hidden">
//           <Button text="Load More Courses →" variant="primary" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedCourses;
