import {
  HiUsers,
  HiAcademicCap,
  HiTrendingUp,
  HiGlobeAlt,
} from "react-icons/hi";

const StatsSection = () => {
  const stats = [
    {
      icon: HiUsers,
      number: "50K+",
      label: "Active Learners",
      description: "Growing community worldwide",
    },
    {
      icon: HiAcademicCap,
      number: "200+",
      label: "Expert Courses",
      description: "Industry-leading curriculum",
    },
    {
      icon: HiTrendingUp,
      number: "95%",
      label: "Success Rate",
      description: "Career advancement achieved",
    },
    {
      icon: HiGlobeAlt,
      number: "150+",
      label: "Countries",
      description: "Global student network",
    },
  ];

  return (
    <section className="py-16 md:py-20 px-5 lg:px-20 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-6 md:p-8 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <Icon className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl md:text-3xl font-bold text-dark mb-2">
                  {stat.number}
                </h3>
                <p className="font-semibold text-dark text-sm md:text-base mb-1">
                  {stat.label}
                </p>
                <p className="text-gray-600 text-xs md:text-sm">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
