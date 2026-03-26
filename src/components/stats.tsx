import {
  HiUserGroup,
  HiCheckCircle,
  HiSparkles,
  HiUsers,
} from "react-icons/hi";

const Stats = () => {
  const stats = [
    { value: "3K+", label: "Successfully Trained", icon: HiUserGroup },
    { value: "15K+", label: "Choose Completed", icon: HiCheckCircle },
    { value: "97K+", label: "Satisfaction Rate", icon: HiSparkles },
    { value: "102K+", label: "Business Community", icon: HiUsers },
  ];

  return (
    <section className="py-16 px-5 lg:px-20 md:px-10 bg-gradient-to-r from-yellow-100 to-yellow-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="bg-white rounded-full p-4 mb-4 shadow-md">
                  <Icon className="text-3xl text-primary" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-dark mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
