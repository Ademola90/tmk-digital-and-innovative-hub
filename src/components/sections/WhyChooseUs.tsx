import React from "react";
import {
  HiLightningBolt,
  HiUsers,
  HiAcademicCap,
  HiChartBar,
  HiClock,
  HiShieldCheck,
} from "react-icons/hi";

const WhyChooseUs = () => {
  const features = [
    {
      icon: HiLightningBolt,
      title: "Industry-Relevant Curriculum",
      description: "Learn skills that are in high demand in today's job market",
    },
    {
      icon: HiUsers,
      title: "Expert Instructors",
      description:
        "Learn from professionals with years of real-world experience",
    },
    {
      icon: HiChartBar,
      title: "Proven Results",
      description: "95% of our graduates secure jobs within 6 months",
    },
    {
      icon: HiClock,
      title: "Learn at Your Pace",
      description: "Flexible schedules that work around your lifestyle",
    },
    {
      icon: HiShieldCheck,
      title: "Job Guarantee",
      description:
        "We are confident enough to back our courses with a job guarantee",
    },
    {
      icon: HiAcademicCap,
      title: "Lifetime Access",
      description: "Access course materials for life with regular updates",
    },
  ];

  return (
    <section className="py-20 px-5 lg:px-20 md:px-10 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className=" lg:text-4xl md:text-3xl text-3xl font-outfit font-bold text-dark mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-lg font-normal font-roboto text-gray-600 max-w-2xl mx-auto">
            We are committed to providing the best learning experience and
            career outcomes
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white border border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300 group"
              >
                <Icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 text-[#2563EB] transition-transform duration-300" />
                <h3 className="text-xl font-outfit font-medium text-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
