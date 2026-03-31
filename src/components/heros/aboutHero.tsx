import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import aboutheroimg from "../../assets/aboutheroimg.png";

const AboutHero: React.FC = () => {
  return (
    <div
      className="min-h-[500px] md:min-h-[600px] bg-cover bg-center bg-no-repeat text-white flex items-center justify-center px-5 md:px-20 py-20 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.7), rgba(37, 99, 235, 0.7)), url('${aboutheroimg}')`,
      }}
    >
      <div className="max-w-4xl mx-auto text-center mt-10 relative z-10">
        <h1 className="text-4xl md:text-6xl font-outfit font-bold mb-6 leading-tight">
          Empowering the Next Generation of Tech Leaders
        </h1>
        <p className="text-lg md:text-xl text-white/90 font-roboto font-light mb-8 max-w-2xl mx-auto leading-relaxed">
          Since our founding, we&apos;ve been dedicated to making quality tech
          education accessible to everyone. Join thousands of students
          transforming their careers with our innovative courses and community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/courses"
            className="flex items-center justify-center font-normal font-roboto text-base gap-2 px-8 py-4 bg-white text-[#1E3A8A]  rounded-lg hover:bg-gray-100 transition-all duration-300"
          >
            Explore Our Courses
            <HiArrowRight size={20} />
          </Link>
          <Link
            to="/events"
            className="flex items-center justify-center font-normal font-roboto text-base gap-2 px-8 py-4 bg-white/20 text-white frounded-lg hover:bg-white/30 transition-all duration-300 border border-white/40"
          >
            Join Our Community
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;

// import React from "react";
// import { HiArrowRight } from "react-icons/hi";
// import { Link } from "react-router-dom";

// const AboutHero: React.FC = () => {
//   return (
//     <div className="min-h-[500px] md:min-h-[600px] bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] text-white flex items-center justify-center px-5 md:px-20 py-20">
//       <div className="max-w-4xl mx-auto text-center mt-10">
//         <h1 className="text-4xl md:text-6xl font-outfit font-bold mb-6 leading-tight">
//           Empowering the Next Generation of Tech Leaders
//         </h1>
//         <p className="text-lg md:text-xl text-white/90 font-roboto font-light mb-8 max-w-2xl mx-auto leading-relaxed">
//           Since our founding, we&apos;ve been dedicated to making quality tech
//           education accessible to everyone. Join thousands of students
//           transforming their careers with our innovative courses and community.
//         </p>
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <Link
//             to="/courses"
//             className="flex items-center justify-center font-normal font-roboto text-base gap-2 px-8 py-4 bg-white text-[#1E3A8A]  rounded-lg hover:bg-gray-100 transition-all duration-300"
//           >
//             Explore Our Courses
//             <HiArrowRight size={20} />
//           </Link>
//           <Link
//             to="/events"
//             className="flex items-center justify-center font-normal font-roboto text-base gap-2 px-8 py-4 bg-white/20 text-white frounded-lg hover:bg-white/30 transition-all duration-300 border border-white/40"
//           >
//             Join Our Community
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutHero;
