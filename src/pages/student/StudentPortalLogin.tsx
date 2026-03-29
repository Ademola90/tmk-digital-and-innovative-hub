// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { HiOutlineUser, HiArrowRight } from "react-icons/hi";
// import { useStudentStore } from "../../store/studentStore";
// import { useToastStore } from "../../store/toastStore";

// const StudentPortalLogin = () => {
//   const [email, setEmail] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();
//   const getStudent = useStudentStore((state) => state.getStudent);
//   const addToast = useToastStore((state) => state.addToast);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!email.trim()) {
//       addToast("Please enter your email address", "error");
//       return;
//     }

//     setIsLoading(true);

//     try {
//       // Simulate checking email
//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       const student = getStudent(email);

//       if (!student) {
//         addToast(
//           "No enrollments found with this email. Please register for a course.",
//           "error",
//         );
//         navigate("/courses");
//         return;
//       }

//       // Store current student email in sessionStorage for portal access
//       sessionStorage.setItem("studentEmail", email);
//       addToast("Welcome back! Loading your enrollment details...", "success");
//       navigate("/student/dashboard");
//     } catch (error) {
//       addToast("Something went wrong. Please try again.", "error");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
//       <div className="max-w-md mx-auto">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
//             <HiOutlineUser size={32} className="text-blue-600" />
//           </div>
//           <h1 className="text-3xl font-bold text-dark mb-2">Student Portal</h1>
//           <p className="text-gray-600">
//             Check your enrollment status and payment details
//           </p>
//         </div>

//         {/* Form */}
//         <div className="bg-white rounded-lg shadow-md p-8">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label className="block text-sm font-semibold text-dark mb-2">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter the email you registered with"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 disabled={isLoading}
//               />
//               <p className="text-xs text-gray-500 mt-1">
//                 Use the same email you provided during course registration
//               </p>
//             </div>

//             <button
//               type="submit"
//               disabled={isLoading}
//               className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//             >
//               {isLoading ? "Checking..." : "Access My Enrollments"}
//               {!isLoading && <HiArrowRight size={20} />}
//             </button>
//           </form>

//           {/* Divider */}
//           <div className="relative my-6">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-300"></div>
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-2 bg-white text-gray-500">New to TMK?</span>
//             </div>
//           </div>

//           {/* Register Button */}
//           <button
//             onClick={() => navigate("/courses")}
//             className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
//           >
//             Explore Courses
//           </button>
//         </div>

//         {/* Help Text */}
//         <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
//           <p className="text-sm text-gray-700">
//             <strong>Having trouble?</strong> If you don't remember your email,
//             contact our support team via WhatsApp.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentPortalLogin;
