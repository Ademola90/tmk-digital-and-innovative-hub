import React, { useEffect } from "react";
import { HiLightBulb, HiSparkles, HiHeart } from "react-icons/hi";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import AboutHero from "../components/heros/aboutHero";
import StatCard from "../components/cards/StatCard";
import TeamMemberCard from "../components/cards/TeamMemberCard";
import ValueCard from "../components/cards/ValueCard";
import { teamData } from "../data/teamData";

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { number: "10K+", label: "Students", description: "Learning with us" },
    { number: "50+", label: "Courses", description: "Comprehensive programs" },
    { number: "15+", label: "Years", description: "In tech education" },
    { number: "95%", label: "Satisfaction", description: "Student rating" },
  ];

  const values = [
    {
      icon: <HiLightBulb />,
      title: "Innovation First",
      description:
        "We stay ahead of industry trends and continuously update our curriculum to reflect the latest technologies and best practices.",
      color: "blue" as const,
    },
    {
      icon: <HiHeart />,
      title: "Goal Oriented",
      description:
        "Every course is designed with clear learning objectives to help students achieve their career goals and aspirations.",
      color: "purple" as const,
    },
    {
      icon: <HiSparkles />,
      title: "Quality Education",
      description:
        "We maintain the highest standards in course content, instruction, and student support to ensure an exceptional learning experience.",
      color: "green" as const,
    },
    {
      icon: <HiHeart />,
      title: "Community Driven",
      description:
        "We believe in the power of community and create spaces where students can collaborate, support, and learn from each other.",
      color: "orange" as const,
    },
  ];

  return (
    <div>
      <Navbar />
      <AboutHero />

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 px-5 md:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-3xl font-bold text-[#1E3A8A] mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                To democratize technology education by providing world-class,
                affordable, and accessible learning experiences that empower
                individuals to build careers they love and make meaningful
                contributions to the tech industry.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-3xl font-bold text-[#1E3A8A] mb-4">
                Our Vision
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                To create a world where anyone, regardless of background or
                location, can learn in-demand tech skills and transform their
                future through quality education and community support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 px-5 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-4">
              Our Impact by Numbers
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Join thousands of students who have transformed their careers
              through our platform
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <StatCard
                key={idx}
                number={stat.number}
                label={stat.label}
                description={stat.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 px-5 md:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-4">
              Core Values
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              What drives us and defines how we operate
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <ValueCard
                key={idx}
                icon={value.icon}
                title={value.title}
                description={value.description}
                color={value.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 px-5 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Talented professionals dedicated to your success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.map((member) => (
              <TeamMemberCard
                key={member.id}
                name={member.name}
                role={member.role}
                image={member.image}
                bio={member.bio}
                social={member.social}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-5 md:px-20 bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Join our community and transform your career with world-class tech
            education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-[#1E3A8A] font-bold rounded-lg hover:bg-gray-100 transition-all duration-300">
              Explore Courses
            </button>
            <button className="px-8 py-4 bg-white/20 text-white font-bold rounded-lg hover:bg-white/30 transition-all duration-300 border border-white/40">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
