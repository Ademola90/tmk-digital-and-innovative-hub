import { Link } from "react-router-dom";
import type { Course } from "../type";
import { HiClock, HiCalendar } from "react-icons/hi";

interface CourseCardProps {
  course: Course;
  bgColor?: string;
}

const CourseCard = ({ course, bgColor }: CourseCardProps) => {
  const appliedBg = bgColor || "bg-blue-100";
  return (
    <Link to={`/course/${course.id}`} className="block h-full">
      <div
        className={`${appliedBg} rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col`}
      >
        {/* Image Container with Mode Badge */}
        <div className="relative overflow-hidden h-48 bg-gray-200">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
          {/* Mode Badge */}
          {course.mode && (
            <span className="absolute top-4 left-4 bg-teal-500 text-white px-4 py-2 rounded font-bold text-xs uppercase tracking-wider">
              {course.mode}
            </span>
          )}
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col p-6">
          {/* Title */}
          <h3 className="font-bold text-xl text-dark mb-3 hover:text-primary transition-colors line-clamp-2">
            {course.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 font-roboto text-sm mb-6 flex-1 leading-relaxed line-clamp-3">
            {course.description}
          </p>

          {/* Metadata Footer */}
          <div className="flex items-center gap-6 pt-4 border-t border-gray-200">
            {course.duration && (
              <div className="flex items-center font-roboto gap-2 text-dark font-medium text-sm">
                <HiClock size={18} className="text-gray-600" />
                <span>{course.duration}</span>
              </div>
            )}
            {course.frequency && (
              <div className="flex items-center font-roboto gap-2 text-dark font-medium text-sm">
                <HiCalendar size={18} className="text-gray-600" />
                <span>{course.frequency}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;

// import { Link } from "react-router-dom";
// import type { Course } from "../type";
// import { FaArrowRight } from "react-icons/fa";

// interface CourseCardProps {
//   course: Course;
//   bgColor?: string;
// }

// const CourseCard = ({ course, bgColor = "bg-blue-100" }: CourseCardProps) => {
//   return (
//     <Link to={`/course/${course.id}`} className="block h-full">
//       <div
//         className={`${bgColor} rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 p-5 h-full flex flex-col`}
//       >
//         {/* Image Container */}
//         <div className="relative overflow-hidden rounded-xl mb-4 h-40">
//           <img
//             src={course.image}
//             alt={course.title}
//             className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//           />
//           <span className="absolute top-2 left-2 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
//             {course.category}
//           </span>
//         </div>

//         {/* Content */}
//         <div className="flex-1 flex flex-col">
//           <h3 className="font-bold text-lg text-dark mb-2 hover:text-primary transition-colors line-clamp-2">
//             {course.title}
//           </h3>

//           <p className="text-gray-700 text-sm mb-4 flex-1 line-clamp-2">
//             {course.description}
//           </p>

//           <div className=" flex items-center gap-2">
//             <Link
//               to={`/course/${course.id}`}
//               className="text-primary font-semibold text-sm hover:text-secondary transition-colors flex items-center gap-1 group"
//             >
//               Learn More
//             </Link>
//             <FaArrowRight size={16} />
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default CourseCard;

// import { Link } from "react-router-dom";

// import type { Course } from "../type";

// interface CourseCardProps {
//   course: Course;
// }

// const CourseCard = ({ course }: CourseCardProps) => {
//   return (
//     <Link to={`/course/${course.id}`}>
//       <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
//         {/* Image Container */}
//         <div className="relative overflow-hidden h-48">
//           <img
//             src={course.image}
//             alt={course.title}
//             className="w-full h-full object-cover hover:scale-105 transition-transform"
//           />
//           <span className="absolute top-3 left-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
//             {course.category}
//           </span>
//         </div>

//         {/* Content */}
//         <div className="p-4">
//           <h3 className="font-bold text-dark mb-3 line-clamp-2 hover:text-primary transition-colors">
//             {course.title}
//           </h3>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default CourseCard;
