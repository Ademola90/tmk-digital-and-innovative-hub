import {
  HiCheckCircle,
  HiSparkles,
  HiLightBulb,
  HiCreditCard,
} from "react-icons/hi";

const Community = () => {
  const features = [
    { icon: HiCheckCircle, label: "World Classrooms Trainers" },
    { icon: HiSparkles, label: "Easy Learning" },
    { icon: HiLightBulb, label: "Flexible" },
    { icon: HiCreditCard, label: "Affordable Price" },
  ];

  return (
    <section className="py-20 px-5 lg:px-20 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop"
              alt="Community"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-secondary font-semibold text-sm mb-3">
              TESTIMONIAL
            </p>
            <h2 className="text-4xl font-bold text-dark mb-6">
              Creating A Community Of Life Long Learners.
            </h2>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-purple-200 rounded-full p-3">
                      <Icon className="text-primary text-xl" />
                    </div>
                    <p className="text-dark font-semibold">{feature.label}</p>
                  </div>
                );
              })}
            </div>

            <div className="bg-light rounded-lg p-6">
              <p className="italic text-gray-600 mb-4">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
              <p className="font-bold text-dark">John Smith</p>
              <p className="text-gray-600 text-sm">Business Manager</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
