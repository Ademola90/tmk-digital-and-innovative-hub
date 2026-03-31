import React from "react";
import { HiSearch } from "react-icons/hi";
import eventsheroimg from "../../assets/eventsheroimg.png";

interface EventsHeroProps {
  onSearchChange?: (value: string) => void;
}

const EventsHero: React.FC<EventsHeroProps> = ({ onSearchChange }) => {
  return (
    <div
      className="min-h-[450px] md:min-h-[550px] bg-cover bg-center bg-no-repeat text-white flex items-center justify-center px-5 md:px-20 py-20 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.7), rgba(47, 199, 235, 0.7)), url(${eventsheroimg})`,
      }}
    >
      <div className="max-w-4xl mx-auto w-full text-center relative z-10 mt-10">
        <h1 className="text-4xl md:text-6xl font-bold font-outfit mb-4 leading-tight">
          Upcoming Events & <br /> Webinars
        </h1>
        <p className="text-lg md:text-xl text-white font-roboto font-normal mb-10 max-w-2xl mx-auto">
          Join our community at exclusive events, workshops, and webinars. Learn
          from industry experts and network with professionals.
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <HiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black text-xl" />
            <input
              type="text"
              placeholder="Search events by title, date, or topic..."
              onChange={(e) => onSearchChange?.(e.target.value)}
              className="w-full pl-12 pr-6 py-4 rounded-lg text-black font-roboto font-normal placeholder:text-black focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
            />
          </div>
        </div>

        {/* Event Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          <div>
            <p className="text-3xl md:text-4xl font-bold font-outfit">12</p>
            <p className="text-white/80 text-sm md:text-base font-normal font-roboto mt-2">
              Events Annually
            </p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold font-outfit">1000+</p>
            <p className="text-white/80 text-sm md:text-base font-normal font-roboto mt-2">
              Active Members
            </p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold font-outfit">95%</p>
            <p className="text-white/80 text-sm md:text-base font-normal font-roboto mt-2">
              Satisfaction Rate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsHero;

// import React from "react";
// import { HiSearch } from "react-icons/hi";

// interface EventsHeroProps {
//   onSearchChange?: (value: string) => void;
// }

// const EventsHero: React.FC<EventsHeroProps> = ({ onSearchChange }) => {
//   return (
//     <div className="min-h-[450px] md:min-h-[550px] bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] text-white flex items-center justify-center px-5 md:px-20 py-20">
//       <div className="max-w-4xl mx-auto w-full text-center">
//         <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
//           Upcoming Events & Webinars
//         </h1>
//         <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
//           Join our community at exclusive events, workshops, and webinars. Learn
//           from industry experts and network with professionals.
//         </p>

//         {/* Search Bar */}
//         <div className="max-w-2xl mx-auto">
//           <div className="relative">
//             <HiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
//             <input
//               type="text"
//               placeholder="Search events by title, date, or topic..."
//               onChange={(e) => onSearchChange?.(e.target.value)}
//               className="w-full pl-12 pr-6 py-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
//             />
//           </div>
//         </div>

//         {/* Event Stats */}
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
//           <div>
//             <p className="text-3xl md:text-4xl font-bold">50+</p>
//             <p className="text-white/80 text-sm md:text-base mt-2">
//               Events Annually
//             </p>
//           </div>
//           <div>
//             <p className="text-3xl md:text-4xl font-bold">10K+</p>
//             <p className="text-white/80 text-sm md:text-base mt-2">
//               Active Members
//             </p>
//           </div>
//           <div>
//             <p className="text-3xl md:text-4xl font-bold">95%</p>
//             <p className="text-white/80 text-sm md:text-base mt-2">
//               Satisfaction Rate
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventsHero;
