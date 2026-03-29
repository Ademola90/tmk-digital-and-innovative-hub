// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   HiArrowLeft,
//   HiLogout,
//   HiCreditCard,
//   HiCheckCircle,
//   HiClock,
//   HiExclamation,
// } from "react-icons/hi";
// import { useStudentStore } from "../../store/studentStore";
// import { useToastStore } from "../../store/toastStore";
// import type {
//   StudentEnrollment,
//   CourseEnrollment,
// } from "../../store/studentStore";

// const StudentDashboard = () => {
//   const navigate = useNavigate();
//   const getStudent = useStudentStore((state) => state.getStudent);
//   const addToast = useToastStore((state) => state.addToast);
//   const [student, setStudent] = useState<StudentEnrollment | null>(null);
//   const [selectedEnrollment, setSelectedEnrollment] =
//     useState<CourseEnrollment | null>(null);

//   useEffect(() => {
//     const studentEmail = sessionStorage.getItem("studentEmail");
//     if (!studentEmail) {
//       navigate("/student/portal-login");
//       return;
//     }

//     const foundStudent = getStudent(studentEmail);
//     if (!foundStudent) {
//       addToast("Student record not found", "error");
//       navigate("/student/portal-login");
//       return;
//     }

//     setStudent(foundStudent);
//   }, []);

//   const handleLogout = () => {
//     sessionStorage.removeItem("studentEmail");
//     addToast("Logged out successfully", "success");
//     navigate("/student/portal-login");
//   };

//   const handleContinuePayment = (enrollment: CourseEnrollment) => {
//     sessionStorage.setItem(
//       "continuePaymentEnrollmentId",
//       enrollment.enrollmentId,
//     );
//     navigate("/student/continue-payment");
//   };

//   const getPaymentStatusColor = (status: CourseEnrollment["paymentStatus"]) => {
//     switch (status) {
//       case "completed":
//         return "bg-green-50 border-green-300";
//       case "partial":
//         return "bg-amber-50 border-amber-300";
//       case "pending":
//         return "bg-red-50 border-red-300";
//       default:
//         return "bg-gray-50 border-gray-300";
//     }
//   };

//   const getPaymentStatusIcon = (status: CourseEnrollment["paymentStatus"]) => {
//     switch (status) {
//       case "completed":
//         return <HiCheckCircle className="text-green-600" size={24} />;
//       case "partial":
//         return <HiClock className="text-amber-600" size={24} />;
//       case "pending":
//         return <HiExclamation className="text-red-600" size={24} />;
//       default:
//         return <HiCreditCard className="text-gray-600" size={24} />;
//     }
//   };

//   if (!student) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <p className="text-gray-600">Loading your enrollments...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="bg-white shadow-sm">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//           <div className="flex items-center justify-between">
//             <div>
//               <button
//                 onClick={() => navigate(-1)}
//                 className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-2"
//               >
//                 <HiArrowLeft size={20} />
//                 Back
//               </button>
//               <h1 className="text-3xl font-bold text-dark">
//                 Welcome, {student.firstName}!
//               </h1>
//               <p className="text-gray-600">{student.email}</p>
//             </div>
//             <button
//               onClick={handleLogout}
//               className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
//             >
//               <HiLogout size={20} />
//               Logout
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Summary Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
//           <div className="bg-white rounded-lg shadow p-6">
//             <p className="text-gray-600 text-sm">Active Enrollments</p>
//             <p className="text-3xl font-bold text-dark">
//               {student.enrollments.length}
//             </p>
//           </div>
//           <div className="bg-white rounded-lg shadow p-6">
//             <p className="text-gray-600 text-sm">Completed</p>
//             <p className="text-3xl font-bold text-green-600">
//               {
//                 student.enrollments.filter(
//                   (e) => e.paymentStatus === "completed",
//                 ).length
//               }
//             </p>
//           </div>
//           <div className="bg-white rounded-lg shadow p-6">
//             <p className="text-gray-600 text-sm">Pending Payment</p>
//             <p className="text-3xl font-bold text-amber-600">
//               {
//                 student.enrollments.filter((e) => e.paymentStatus === "pending")
//                   .length
//               }
//             </p>
//           </div>
//           <div className="bg-white rounded-lg shadow p-6">
//             <p className="text-gray-600 text-sm">Partial Payment</p>
//             <p className="text-3xl font-bold text-blue-600">
//               {
//                 student.enrollments.filter((e) => e.paymentStatus === "partial")
//                   .length
//               }
//             </p>
//           </div>
//         </div>

//         {/* Enrollments */}
//         <div className="bg-white rounded-lg shadow overflow-hidden">
//           <div className="px-6 py-4 border-b border-gray-200">
//             <h2 className="text-xl font-bold text-dark">Your Enrollments</h2>
//           </div>
//           <div className="divide-y">
//             {student.enrollments.length === 0 ? (
//               <div className="p-6 text-center">
//                 <p className="text-gray-600 mb-4">No enrollments yet</p>
//                 <button
//                   onClick={() => navigate("/courses")}
//                   className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
//                 >
//                   Explore Courses
//                 </button>
//               </div>
//             ) : (
//               student.enrollments.map((enrollment) => (
//                 <div
//                   key={enrollment.enrollmentId}
//                   className={`p-6 border-l-4 ${getPaymentStatusColor(enrollment.paymentStatus)}`}
//                 >
//                   <div className="flex items-start justify-between">
//                     <div className="flex-1">
//                       <div className="flex items-center gap-3 mb-2">
//                         {getPaymentStatusIcon(enrollment.paymentStatus)}
//                         <div>
//                           <h3 className="text-lg font-bold text-dark">
//                             {enrollment.courseName}
//                           </h3>
//                           <p className="text-sm text-gray-600">
//                             {enrollment.courseMode} |{" "}
//                             {enrollment.courseFrequency}
//                           </p>
//                         </div>
//                       </div>

//                       {/* Payment Details */}
//                       <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
//                         <div>
//                           <p className="text-xs text-gray-600">Total Amount</p>
//                           <p className="text-lg font-semibold text-dark">
//                             ₦{enrollment.totalAmount.toLocaleString()}
//                           </p>
//                         </div>
//                         <div>
//                           <p className="text-xs text-gray-600">Amount Paid</p>
//                           <p className="text-lg font-semibold text-green-600">
//                             ₦{enrollment.amountPaid.toLocaleString()}
//                           </p>
//                         </div>
//                         <div>
//                           <p className="text-xs text-gray-600">Outstanding</p>
//                           <p className="text-lg font-semibold text-red-600">
//                             ₦
//                             {(
//                               enrollment.totalAmount - enrollment.amountPaid
//                             ).toLocaleString()}
//                           </p>
//                         </div>
//                         <div>
//                           <p className="text-xs text-gray-600">
//                             Payment Method
//                           </p>
//                           <p className="text-sm font-semibold text-dark">
//                             {enrollment.paymentMethod}
//                           </p>
//                         </div>
//                       </div>

//                       {/* Installment Info */}
//                       {enrollment.paymentMethod === "Pay by Installment" && (
//                         <div className="mt-4 p-3 bg-blue-50 rounded">
//                           <p className="text-sm text-gray-700">
//                             <strong>Installments:</strong>{" "}
//                             {enrollment.installmentsPaid || 0} of{" "}
//                             {enrollment.totalInstallments || 0} paid
//                           </p>
//                           {enrollment.nextInstallmentDate && (
//                             <p className="text-sm text-gray-700 mt-1">
//                               <strong>Next due:</strong>{" "}
//                               {enrollment.nextInstallmentDate}
//                             </p>
//                           )}
//                         </div>
//                       )}

//                       {/* Payment History */}
//                       {enrollment.paymentHistory.length > 0 && (
//                         <div className="mt-4">
//                           <p className="text-sm font-semibold text-dark mb-2">
//                             Payment History
//                           </p>
//                           <div className="space-y-2">
//                             {enrollment.paymentHistory.map((payment) => (
//                               <div
//                                 key={payment.id}
//                                 className="flex justify-between text-sm text-gray-700 p-2 bg-gray-50 rounded"
//                               >
//                                 <span>
//                                   {payment.date} - {payment.method}
//                                 </span>
//                                 <span className="font-semibold">
//                                   ₦{payment.amount.toLocaleString()}
//                                 </span>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       )}
//                     </div>

//                     {/* Actions */}
//                     <div className="ml-4">
//                       {enrollment.paymentStatus !== "completed" && (
//                         <button
//                           onClick={() => handleContinuePayment(enrollment)}
//                           className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold whitespace-nowrap"
//                         >
//                           Make Payment
//                         </button>
//                       )}
//                       {enrollment.paymentStatus === "completed" && (
//                         <div className="text-center">
//                           <p className="text-green-600 font-semibold">
//                             Payment Complete
//                           </p>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>
//         </div>

//         {/* Enroll in More Courses */}
//         <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
//           <h3 className="text-lg font-bold text-dark mb-2">
//             Want to Learn More?
//           </h3>
//           <p className="text-gray-600 mb-4">
//             You can enroll in additional courses at any time
//           </p>
//           <button
//             onClick={() => navigate("/courses")}
//             className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
//           >
//             Explore More Courses
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentDashboard;
