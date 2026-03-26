import { HiPlay } from "react-icons/hi";

const CTA = () => {
  return (
    <section className="py-20 px-5 lg:px-20 md:px-10 bg-gradient-to-r from-dark to-gray-900">
      <div className="max-w-7xl mx-auto text-center text-white">
        <p className="text-secondary font-semibold text-sm mb-3">
          JOIN OUR NEW SESSION
        </p>
        <h2 className="text-4xl lg:text-5xl font-bold mb-8">
          Call To Enroll Your Child.
          <br />
          <span className="text-accent">(+91)9584234352</span>
        </h2>

        <div className="flex justify-center">
          <button className="bg-white text-dark rounded-full p-4 hover:bg-opacity-90 transition-all transform hover:scale-110">
            <HiPlay size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
