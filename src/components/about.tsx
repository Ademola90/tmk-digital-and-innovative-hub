import Button from "./ui/buttons";

const About = () => {
  return (
    <section id="about" className="py-20 px-5 lg:px-20 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Images */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop"
              alt="Student"
              className="rounded-lg h-64 object-cover"
            />
            <div className="flex flex-col gap-4">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=140&fit=crop"
                alt="Students collaborating"
                className="rounded-lg h-28 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=140&fit=crop"
                alt="Instructor"
                className="rounded-lg h-28 object-cover"
              />
            </div>
          </div>
          {/* Experience Badge */}
          <div className="absolute bottom-4 right-4 bg-yellow-400 rounded-full w-24 h-24 flex flex-col items-center justify-center font-bold shadow-lg">
            <span className="text-3xl">8+</span>
            <span className="text-xs text-center">Years Of Experience</span>
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="text-secondary font-semibold text-sm mb-3">
            OUR MISSION
          </p>
          <h2 className="text-4xl font-bold text-dark mb-6">
            Benefit From Our Online Learning Expertise Earn{" "}
            <span className="text-accent">Professional</span>
          </h2>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="font-bold text-dark mb-2">OUR MISSION:</h4>
              <p className="text-gray-600 text-sm">
                Suspendisse ultrice gravida dictum fusce placerat ultricies
                integer quis auctor elit sed vulputate.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-dark mb-2">OUR VISION:</h4>
              <p className="text-gray-600 text-sm">
                Suspendisse ultrice gravida dictum fusce placerat ultricies
                integer quis auctor elit sed vulputate.
              </p>
            </div>
          </div>

          <Button text="Admission Open →" variant="secondary" />
        </div>
      </div>
    </section>
  );
};

export default About;
