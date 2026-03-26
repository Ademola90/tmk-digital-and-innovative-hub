import { instructors } from "../data/courseData";
import Button from "./ui/buttons";

const Instructors = () => {
  return (
    <section className="py-20 px-5 lg:px-20 md:px-10 bg-light">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-secondary font-semibold text-sm mb-3">
              OUR INSTRUCTORS
            </p>
            <h2 className="text-4xl font-bold text-dark mb-6">
              Meet Our Expert Instructor
            </h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="flex gap-4">
              <Button text="Contact us" variant="primary" />
              <Button text="Find Courses" variant="outline" />
            </div>
          </div>

          {/* Right Content - Instructor Cards */}
          <div className="grid grid-cols-2 gap-4">
            {instructors.map((instructor, index) => (
              <div key={index} className="relative group">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex flex-col justify-end p-4">
                  <p className="text-white font-bold text-lg">
                    {instructor.name}
                  </p>
                  <p className="text-white text-sm mb-2">{instructor.role}</p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructors;
