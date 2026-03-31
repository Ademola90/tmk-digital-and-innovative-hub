import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const CTABanner = () => {
  return (
    <section className="py-16 px-5 lg:px-20 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-secondary to-primary p-8 md:p-16 text-center">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-outfit font-bold text-black mb-4 text-balance">
              Transform Your Career Today
            </h2>
            <p className="text-lg md:text-xl font-roboto text-black/90 font-normal mb-8 max-w-2xl mx-auto">
              Join our thriving community of learners and unlock your potential
              with industry-leading courses
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/courses">
                <button className="bg-[#2563EB] hover:bg-[#1d4ed8] cursor-pointer text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg flex items-center gap-2 group">
                  Explore Courses
                  <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link to="/contact">
                <button className=" border-2 border-[#2563EB] font-roboto text-[#2563EB] cursor-pointer hover:bg-white hover:text-[#2563EB] font-bold px-8 py-4 rounded-xl  hover:text-primary transition-all duration-300">
                  Get in Touch
                </button>
              </Link>
            </div>

            {/* Trust Badge */}
            <div className="mt-12 flex flex-wrap justify-center items-center gap-6 md:gap-8 text-white/80">
              <div className="text-center">
                <p className="font-bold text-2xl">50K+</p>
                <p className="text-sm">Happy Learners</p>
              </div>
              <div className="w-px h-8 bg-white/20"></div>
              <div className="text-center">
                <p className="font-bold text-2xl">4.9/5</p>
                <p className="text-sm">Average Rating</p>
              </div>
              <div className="w-px h-8 bg-white/20"></div>
              <div className="text-center">
                <p className="font-bold text-2xl">95%</p>
                <p className="text-sm">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
