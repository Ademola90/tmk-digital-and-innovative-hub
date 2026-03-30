// src/pages/courseDetails.tsx

import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  HiDownload,
  HiClock,
  HiAcademicCap,
  HiCurrencyDollar,
  HiUsers,
  HiCheckCircle,
} from "react-icons/hi";

import { getCourseDetails } from "../data/courseDetailsData";

import CourseAccordion from "../components/CourseAccordion";
import SuccessStories from "../components/SuccessStories";
import { coursesData, relatedCourses } from "../data/courseData";
import { FaWrench } from "react-icons/fa";
import Button from "../components/ui/buttons";
import CourseCard from "../components/courseCard";
import Navbar from "../components/navbar";

const CourseDetailsNew = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const formatPrice = (amount: number) => {
    return amount.toLocaleString("en-NG");
  };
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const courseId = parseInt(id || "1");
  const course = coursesData.find((c) => c.id === courseId);
  const related = relatedCourses(courseId);

  const [showSyllabusModal, setShowSyllabusModal] = useState(false);
  const courseDetailsData = getCourseDetails(courseId);

  if (!course) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-dark">Course not found</h2>
        <Link to="/courses" className="text-primary hover:underline">
          Back to Courses
        </Link>
      </div>
    );
  }

  const handleApplyNow = () => {
    navigate(`/enroll/${courseId}`);
  };

  const courseHighlights = [
    {
      icon: HiClock,
      label: "Duration",
      value: course?.duration || "3 Months",
      subtext: course?.frequency ? `(${course.frequency})` : "(Twice a week)",
    },

    { icon: FaWrench, label: "Prerequisites", value: "A Laptop" },

    {
      icon: HiCurrencyDollar,
      label: "Cost",
      value: `₦${formatPrice(course?.price || 350000)}`,
    },
  ];

  const courseFeatures = [
    {
      icon: HiUsers,
      title: "Experienced Teachers",
      desc: "You'll be taught and mentored by some of the best teachers in the industry.",
    },
    {
      icon: FaWrench,
      title: "Hands-on",
      desc: "You will be taught & mentored by Industry expert.",
    },
    {
      icon: HiCheckCircle,
      title: "Certificate",
      desc: "Get your very own physical certificate to prove your participation",
    },
    {
      icon: HiUsers,
      title: "Support System",
      desc: "Become part of an ever-growing, supportive community of like minds",
    },
    {
      icon: HiAcademicCap,
      title: "Conducive environment",
      desc: "Our classes and the environment is serene and conducive for learning.",
    },
    {
      icon: HiDownload,
      title: "Souvenirs",
      desc: "You will get a free t-shirt. This is to make you feel right at home, cause why not?!",
    },
  ];

  return (
    <div className="bg-white">
      <Navbar />
      {/* Hero Section with Teal Background */}
      <section className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white py-16 px-5 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {course.mode && (
                <p className="text-teal-100 font-semibold mb-4 text-sm uppercase tracking-wide">
                  {course.mode}
                </p>
              )}
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                {course.title}
              </h1>
              <p className="text-lg font-roboto text-teal-100 mb-8">
                {course.description}
              </p>
              <div className="flex gap-4">
                <Button
                  text="Apply Now"
                  className="  cursor-pointer font-roboto  bg-[#2563EB] hover:bg-[#1d4ed8] "
                  onClick={handleApplyNow}
                />
                <Button
                  text="Download Syllabus"
                  className="border-2 border-white font-roboto text-white hover:bg-white hover:text-[#2563EB]"
                  onClick={() => setShowSyllabusModal(true)}
                />
              </div>
              <p className="text-teal-100 font-roboto mt-6 text-sm">
                Applications are currently Open!
              </p>
            </div>

            <div className="hidden lg:block">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Highlights Dashboard */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 px-5 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {courseHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="text-center">
                  <Icon className="w-12 h-12 mx-auto mb-3 text-teal-400" />
                  <p className="text-sm text-blue-200 mb-1 font-roboto">
                    {item.label}
                  </p>
                  <p className="text-2xl font-bold">{item.value}</p>
                  {item.subtext && (
                    <p className="text-sm text-teal-400 font-roboto">
                      {item.subtext}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Course Accordion */}
      {courseDetailsData && (
        <CourseAccordion items={courseDetailsData.accordions} />
      )}

      {/* Course Features */}
      <section className="bg-white py-20 px-5 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-dark mb-16 text-center">
            Come with expectations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="text-center">
                  <Icon className="w-16 h-16 mx-auto mb-4 text-blue-900" />
                  <h3 className="text-xl font-bold text-dark mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories Carousel */}
      {courseDetailsData && (
        <SuccessStories stories={courseDetailsData.successStories} />
      )}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 px-5 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">{course.title}</h2>
          <p className="text-xl text-blue-100 mb-8">
            Register now to learn the techniques of building websites'
            structures, APIs and databases.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              text="Apply Now"
              className="bg-teal-500 text-white hover:bg-teal-600"
              onClick={handleApplyNow}
            />
            <Button
              text="Download Syllabus"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900"
              onClick={() => setShowSyllabusModal(true)}
            />
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="py-20 px-5 lg:px-20 bg-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-dark mb-12">
            Related Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((relatedCourse, index) => {
              const bgColors = [
                "bg-blue-100",
                "bg-yellow-100",
                "bg-purple-100",
                "bg-amber-100",
              ];
              return (
                <CourseCard
                  key={relatedCourse.id}
                  course={relatedCourse}
                  bgColor={bgColors[index % bgColors.length]}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Syllabus Modal */}
      {showSyllabusModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-5">
          <div className="bg-white rounded-lg max-w-2xl w-full p-8 max-h-96 overflow-y-auto">
            <h2 className="text-3xl font-bold text-dark mb-4">
              Download the Syllabus
            </h2>
            <p className="text-gray-600 mb-6">
              We are delighted to give you a peep into our packages. Kindly
              provide your details below after which you'll be able to download
              our syllabus.
            </p>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <label className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <span className="text-gray-700 text-sm">
                  I agree that my data will be used in accordance with TMK's
                  Terms of Use and Privacy Policy, including relevant opt-out
                  provisions therein.
                </span>
              </label>
            </div>

            <div className="flex gap-4 mt-8">
              <button
                onClick={() => setShowSyllabusModal(false)}
                className="flex-1 px-6 py-3 border border-gray-300 rounded-lg text-dark font-semibold hover:bg-gray-50"
              >
                Cancel
              </button>
              <button className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
                GET THE SYLLABUS
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetailsNew;

// import { useState } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import {
//   HiChevronDown,
//   HiDownload,
//   HiClock,
//   HiCalendar,
//   HiAcademicCap,
//   HiCurrencyDollar,
//   HiUsers,
//   HiCheckCircle,
// } from "react-icons/hi";
// import { coursesData, relatedCourses } from "../data/courseData";
// import { FaWrench } from "react-icons/fa";
// import Button from "../components/ui/buttons";
// import CourseCard from "../components/courseCard";
// import Navbar from "../components/navbar";

// const CourseDetailsNew = () => {
//   const { id } = useParams<{ id: string }>();
//   const navigate = useNavigate();
//   const courseId = parseInt(id || "1");
//   const course = coursesData.find((c) => c.id === courseId);
//   const related = relatedCourses(courseId);

//   const [expandedSections, setExpandedSections] = useState<string[]>(["about"]);
//   const [showSyllabusModal, setShowSyllabusModal] = useState(false);

//   if (!course) {
//     return (
//       <div className="text-center py-20">
//         <h2 className="text-2xl font-bold text-dark">Course not found</h2>
//         <Link to="/courses" className="text-primary hover:underline">
//           Back to Courses
//         </Link>
//       </div>
//     );
//   }

//   const handleApplyNow = () => {
//     navigate(`/enroll/${courseId}`);
//   };

//   const toggleSection = (section: string) => {
//     setExpandedSections((prev) =>
//       prev.includes(section)
//         ? prev.filter((s) => s !== section)
//         : [...prev, section],
//     );
//   };

//   const courseHighlights = [
//     {
//       icon: HiClock,
//       label: "Duration",
//       value: "3 Months",
//       subtext: "(Twice a week)",
//     },
//     { icon: HiCalendar, label: "Start Date", value: "9th March, 2025" },
//     { icon: HiAcademicCap, label: "Level", value: "Beginner" },
//     { icon: FaWrench, label: "Prerequisites", value: "A Laptop" },
//     { icon: HiUsers, label: "Projects", value: "1 Project" },
//     { icon: HiCurrencyDollar, label: "Cost", value: "₦350,000" },
//   ];

//   const courseFeatures = [
//     {
//       icon: HiUsers,
//       title: "Experienced Teachers",
//       desc: "You'll be taught and mentored by some of the best teachers in the industry.",
//     },
//     {
//       icon: FaWrench,
//       title: "Hands-on",
//       desc: "You will be taught & mentored by Industry expert.",
//     },
//     {
//       icon: HiCheckCircle,
//       title: "Certificate",
//       desc: "Get your very own physical certificate to prove your participation",
//     },
//     {
//       icon: HiUsers,
//       title: "Support System",
//       desc: "Become part of an ever-growing, supportive community of like minds",
//     },
//     {
//       icon: HiAcademicCap,
//       title: "Conducive environment",
//       desc: "Our classes and the environment is serene and conducive for learning.",
//     },
//     {
//       icon: HiDownload,
//       title: "Souvenirs",
//       desc: "You will get a free t-shirt. This is to make you feel right at home, cause why not?!",
//     },
//   ];

//   const successStories = [
//     {
//       name: "Jehonadab",
//       role: "Software Developer",
//       story:
//         "Seizing the opportunity to take a class at TMK was the head start I needed in my career. Almost 3 years down the line, and I think this is my best career investment yet.",
//     },
//     {
//       name: "Uchechukwu",
//       role: "Data Analyst",
//       story:
//         "As an alumnus of TMK, learning PRODUCT DESIGN and PYTHON FOR DATA SCIENCE was one of the best decisions I have made in building a career.",
//     },
//     {
//       name: "Grace",
//       role: "UX designer at Cowrywise",
//       story:
//         "Training with TMK is one of the best things that happened to my career. I got useful skills and knowledge to help me understand the field of product design.",
//     },
//   ];

//   const accordionItems = [
//     {
//       id: "about",
//       label: "About this Course",
//       content:
//         "This comprehensive course covers all the fundamentals you need to master this skill. Learn from industry experts and apply real-world knowledge.",
//     },
//     {
//       id: "learn",
//       label: "What you will Learn",
//       content:
//         "• Master core concepts\n• Build real projects\n• Learn industry best practices\n• Get hands-on experience",
//     },
//     {
//       id: "target",
//       label: "Who Should Take This Course?",
//       content:
//         "This course is perfect for beginners looking to start their journey, professionals wanting to upskill, and anyone passionate about learning.",
//     },
//     {
//       id: "real-world",
//       label: "Real-World Applications",
//       content:
//         "Apply what you learn to real projects. Work on industry-standard tools and practices used by professionals worldwide.",
//     },
//     {
//       id: "prerequisites",
//       label: "Prerequisites",
//       content:
//         "A laptop with basic software installed. Some fundamental knowledge is helpful but not required.",
//     },
//     {
//       id: "career",
//       label: "Career Prospects",
//       content:
//         "Upon completion, you'll have the skills needed for various roles in the industry. Our graduates work at top companies globally.",
//     },
//     {
//       id: "outline",
//       label: "Course Outline",
//       content:
//         "Module 1: Fundamentals\nModule 2: Intermediate Concepts\nModule 3: Advanced Topics\nModule 4: Capstone Project",
//     },
//     {
//       id: "schedule",
//       label: "Class Schedule",
//       content:
//         "Classes run twice a week on Weekdays (Tuesday & Thursday) from 5:00 PM - 7:00 PM or Weekends (Saturday) from 10:00 AM - 1:00 PM",
//     },
//   ];

//   return (
//     <div className="bg-white">
//       <Navbar />
//       {/* Hero Section with Teal Background */}
//       <section className="bg-gradient-to-r from-teal-500 to-teal-600 text-white py-16 px-5 lg:px-20">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <p className="text-teal-100 font-semibold mb-4 text-sm uppercase tracking-wide">
//                 FULL TIME
//               </p>
//               <h1 className="text-5xl lg:text-6xl font-bold mb-6">
//                 {course.title}
//               </h1>
//               <p className="text-lg text-teal-100 mb-8">{course.description}</p>
//               <div className="flex gap-4">
//                 <Button
//                   text="Apply Now"
//                   className="bg-dark text-white hover:bg-opacity-90"
//                   onClick={handleApplyNow}
//                 />
//                 <Button
//                   text="Download Syllabus"
//                   className="border-2 border-white text-white hover:bg-white hover:text-teal-600"
//                   onClick={() => setShowSyllabusModal(true)}
//                 />
//               </div>
//               <p className="text-teal-100 mt-6 text-sm">
//                 Applications are currently Open!
//               </p>
//             </div>

//             <div className="hidden lg:block">
//               <img
//                 src={course.image}
//                 alt={course.title}
//                 className="w-full h-96 object-cover rounded-lg shadow-2xl"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Course Highlights Dashboard */}
//       <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 px-5 lg:px-20">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
//             {courseHighlights.map((item, idx) => {
//               const Icon = item.icon;
//               return (
//                 <div key={idx} className="text-center">
//                   <Icon className="w-12 h-12 mx-auto mb-3 text-teal-400" />
//                   <p className="text-sm text-blue-200 mb-1">{item.label}</p>
//                   <p className="text-2xl font-bold">{item.value}</p>
//                   {item.subtext && (
//                     <p className="text-sm text-teal-400">{item.subtext}</p>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Accordion Sections */}
//       <section className="bg-blue-50 py-20 px-5 lg:px-20">
//         <div className="max-w-4xl mx-auto">
//           <div className="space-y-4">
//             {accordionItems.map((item) => (
//               <div key={item.id} className="border border-gray-300 rounded-lg">
//                 <button
//                   onClick={() => toggleSection(item.id)}
//                   className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-100 transition-colors"
//                 >
//                   <span className="font-semibold text-dark text-lg flex items-center gap-2">
//                     {item.label.includes("•") ? (
//                       <HiCheckCircle className="text-blue-600" />
//                     ) : (
//                       "•"
//                     )}{" "}
//                     {item.label}
//                   </span>
//                   <HiChevronDown
//                     className={`w-5 h-5 transition-transform ${expandedSections.includes(item.id) ? "rotate-180" : ""}`}
//                   />
//                 </button>
//                 {expandedSections.includes(item.id) && (
//                   <div className="px-6 py-4 bg-white text-gray-700 whitespace-pre-line border-t border-gray-300">
//                     {item.content}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Course Features */}
//       <section className="bg-white py-20 px-5 lg:px-20">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-4xl font-bold text-dark mb-16 text-center">
//             Come with expectations
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {courseFeatures.map((feature, idx) => {
//               const Icon = feature.icon;
//               return (
//                 <div key={idx} className="text-center">
//                   <Icon className="w-16 h-16 mx-auto mb-4 text-blue-900" />
//                   <h3 className="text-xl font-bold text-dark mb-2">
//                     {feature.title}
//                   </h3>
//                   <p className="text-gray-600">{feature.desc}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Success Stories */}
//       <section className="bg-gray-50 py-20 px-5 lg:px-20">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-4xl font-bold text-dark mb-16 text-center">
//             Success Stories
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {successStories.map((story, idx) => (
//               <div
//                 key={idx}
//                 className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
//               >
//                 <h3 className="text-2xl font-bold text-dark mb-1">
//                   {story.name}
//                 </h3>
//                 <p className="text-gray-600 text-sm mb-4 italic">
//                   {story.role}
//                 </p>
//                 <p className="text-gray-700 leading-relaxed">{story.story}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 px-5 lg:px-20">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl font-bold mb-4">{course.title}</h2>
//           <p className="text-xl text-blue-100 mb-8">
//             Register now to learn the techniques of building websites'
//             structures, APIs and databases.
//           </p>
//           <div className="flex justify-center gap-4">
//             <Button
//               text="Apply Now"
//               className="bg-teal-500 text-white hover:bg-teal-600"
//               onClick={handleApplyNow}
//             />
//             <Button
//               text="Download Syllabus"
//               className="border-2 border-white text-white hover:bg-white hover:text-blue-900"
//               onClick={() => setShowSyllabusModal(true)}
//             />
//           </div>
//         </div>
//       </section>

//       {/* Related Courses */}
//       <section className="py-20 px-5 lg:px-20 bg-light">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-4xl font-bold text-dark mb-12">
//             Related Courses
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {related.map((relatedCourse, index) => {
//               const bgColors = [
//                 "bg-blue-100",
//                 "bg-yellow-100",
//                 "bg-purple-100",
//                 "bg-amber-100",
//               ];
//               return (
//                 <CourseCard
//                   key={relatedCourse.id}
//                   course={relatedCourse}
//                   bgColor={bgColors[index % bgColors.length]}
//                 />
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Syllabus Modal */}
//       {showSyllabusModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-5">
//           <div className="bg-white rounded-lg max-w-2xl w-full p-8 max-h-96 overflow-y-auto">
//             <h2 className="text-3xl font-bold text-dark mb-4">
//               Download the Syllabus
//             </h2>
//             <p className="text-gray-600 mb-6">
//               We are delighted to give you a peep into our packages. Kindly
//               provide your details below after which you'll be able to download
//               our syllabus.
//             </p>

//             <div className="space-y-4">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input
//                   type="text"
//                   placeholder="First Name"
//                   className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Last Name"
//                   className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 />
//               </div>
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//               />
//               <input
//                 type="tel"
//                 placeholder="Mobile Number"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//               />

//               <label className="flex items-start gap-3">
//                 <input type="checkbox" className="mt-1" />
//                 <span className="text-gray-700 text-sm">
//                   I agree that my data will be used in accordance with TMK's
//                   Terms of Use and Privacy Policy, including relevant opt-out
//                   provisions therein.
//                 </span>
//               </label>
//             </div>

//             <div className="flex gap-4 mt-8">
//               <button
//                 onClick={() => setShowSyllabusModal(false)}
//                 className="flex-1 px-6 py-3 border border-gray-300 rounded-lg text-dark font-semibold hover:bg-gray-50"
//               >
//                 Cancel
//               </button>
//               <button className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
//                 GET THE SYLLABUS
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CourseDetailsNew;
