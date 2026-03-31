//src/components/heros/homeHero.tsx

import { useNavigate } from "react-router-dom";
import homehero from "../../assets/homehero.png";
import Button from "../ui/buttons";

const HomeHero = () => {
  const navigate = useNavigate();
  // const [search, setSearch] = useState("");

  return (
    <section className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB]  py-20 px-5 lg:px-24 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
        {/* Left Content */}
        <div className=" ">
          <p className="text-[#fff] text-7xl  mb-2 font-black font-outfit ">
            Become the talent the world needs
          </p>
          <div className=" pt-3.5">
            <p className="text-[#fff] font-roboto text-lg mb-6 font-light">
              Unlock your potential in tech through an accredited program taught
              by industry leaders with real-world experience.
            </p>
          </div>

          {/* Search Bar */}
          <div className=" pt-5">
            <Button
              text="Browse Courses"
              className="bg-[#2563EB] text-white rounded-2xl  hover:bg-white hover:text-[#1E3A8A] cursor-pointer font-roboto"
              onClick={() => {
                navigate("/courses");
              }}
            />
            {/* <Button
              className=" cursor-pointer font-roboto rounded-2xl bg-[#2563EB] text-white hover:bg-[#1E3A8A]/90"
              text=""
            /> */}
            {/* <input
              type="text"
              placeholder="What do you want to learn today?"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 px-4 py-2 outline-none"
            />
            <button className="bg-secondary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all">
              <HiSearch className="text-xl" />
            </button> */}
          </div>
        </div>

        {/* Right Content - Avatar Circles */}
        <div className="  relative  lg:mt-0 md:mt-0 mt-10 lg:flex items-center justify-center">
          <div className="relative ">
            <img className=" " src={homehero} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
