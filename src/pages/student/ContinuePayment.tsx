// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   HiArrowLeft,
//   HiOutlineClipboardCopy,
//   HiOutlinePhone,
// } from "react-icons/hi";
// import { useStudentStore } from "../../store/studentStore";
// import { useToastStore } from "../../store/toastStore";
// import type { CourseEnrollment } from "../../store/studentStore";

// const ContinuePayment = () => {
//   const navigate = useNavigate();
//   const getStudent = useStudentStore((state) => state.getStudent);
//   const addPaymentToEnrollment = useStudentStore(
//     (state) => state.addPaymentToEnrollment,
//   );
//   const addToast = useToastStore((state) => state.addToast);

//   const [enrollment, setEnrollment] = useState<CourseEnrollment | null>(null);
//   const [paymentAmount, setPaymentAmount] = useState("");
//   const [paymentMethod, setPaymentMethod] = useState<
//     "Pay Online" | "Bank Transfer"
//   >("Bank Transfer");
//   const [copiedAccountNumber, setCopiedAccountNumber] = useState(false);
//   const [showPaymentSummary, setShowPaymentSummary] = useState(false);

//   // Environment variables for bank details and WhatsApp
//   const accountNumber = import.meta.env.VITE_BANK_ACCOUNT_NUMBER || "18722139";
//   const accountName =
//     import.meta.env.VITE_BANK_ACCOUNT_NAME || "Ademola Abdullahi Akofe";
//   const bank = import.meta.env.VITE_BANK_NAME || "Access Bank";
//   const whatsappNumber =
//     import.meta.env.VITE_WHATSAPP_NUMBER || "2348134392733";

//   useEffect(() => {
//     const studentEmail = sessionStorage.getItem("studentEmail");
//     const enrollmentId = sessionStorage.getItem("continuePaymentEnrollmentId");

//     if (!studentEmail || !enrollmentId) {
//       navigate("/student/portal-login");
//       return;
//     }

//     const student = getStudent(studentEmail);
//     if (!student) {
//       navigate("/student/portal-login");
//       return;
//     }

//     const foundEnrollment = student.enrollments.find(
//       (e) => e.enrollmentId === enrollmentId,
//     );
//     if (!foundEnrollment) {
//       addToast("Enrollment not found", "error");
//       navigate("/student/dashboard");
//       return;
//     }

//     setEnrollment(foundEnrollment);
//     setPaymentAmount(
//       String(foundEnrollment.totalAmount - foundEnrollment.amountPaid),
//     );
//   }, []);

//   const copyAccountNumber = () => {
//     navigator.clipboard.writeText(accountNumber);
//     setCopiedAccountNumber(true);
//     setTimeout(() => setCopiedAccountNumber(false), 2000);
//   };

//   const handlePaymentSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!enrollment) return;

//     const amount = parseFloat(paymentAmount);
//     if (isNaN(amount) || amount <= 0) {
//       addToast("Please enter a valid payment amount", "error");
//       return;
//     }

//     if (amount > enrollment.totalAmount - enrollment.amountPaid) {
//       addToast(
//         `Payment amount cannot exceed outstanding balance of ₦${(enrollment.totalAmount - enrollment.amountPaid).toLocaleString()}`,
//         "error",
//       );
//       return;
//     }

//     setShowPaymentSummary(true);
//   };

//   const handleConfirmPayment = () => {
//     const studentEmail = sessionStorage.getItem("studentEmail");
//     if (!studentEmail || !enrollment) return;

//     const payment = {
//       id: Date.now().toString(),
//       amount: parseFloat(paymentAmount),
//       date: new Date().toLocaleDateString(),
//       method: paymentMethod as "Pay Online" | "Bank Transfer",
//       status: "pending" as const,
//     };

//     addPaymentToEnrollment(studentEmail, enrollment.enrollmentId, payment);

//     // Send WhatsApp with payment info
//     const paymentInfo = `
// Payment Received:
// 📚 Course: ${enrollment.courseName}
// 💰 Amount: ₦${parseFloat(paymentAmount).toLocaleString()}
// 📍 Payment Method: ${paymentMethod}
// 📧 Email: ${studentEmail}
//     `;

//     const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(paymentInfo)}`;
//     window.open(whatsappLink, "_blank");

//     addToast(
//       "Payment recorded! WhatsApp opened for receipt submission...",
//       "success",
//     );
//     setTimeout(() => navigate("/student/dashboard"), 2000);
//   };

//   if (!enrollment) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <p className="text-gray-600">Loading payment information...</p>
//       </div>
//     );
//   }

//   const outstandingBalance = enrollment.totalAmount - enrollment.amountPaid;

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
//       <div className="max-w-2xl mx-auto">
//         {/* Header */}
//         <div className="mb-8">
//           <button
//             onClick={() => navigate("/student/dashboard")}
//             className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4"
//           >
//             <HiArrowLeft size={20} />
//             Back to Dashboard
//           </button>
//           <h1 className="text-3xl font-bold text-dark mb-2">
//             Continue Payment
//           </h1>
//           <p className="text-gray-600">{enrollment.courseName}</p>
//         </div>

//         {/* Course Summary */}
//         <div className="bg-white rounded-lg shadow-md p-6 mb-6">
//           <h2 className="text-xl font-bold text-dark mb-4">Payment Summary</h2>
//           <div className="space-y-3">
//             <div className="flex justify-between">
//               <span className="text-gray-600">Course:</span>
//               <span className="font-semibold text-dark">
//                 {enrollment.courseName}
//               </span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-600">Total Amount:</span>
//               <span className="font-semibold text-dark">
//                 ₦{enrollment.totalAmount.toLocaleString()}
//               </span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-600">Already Paid:</span>
//               <span className="font-semibold text-green-600">
//                 ₦{enrollment.amountPaid.toLocaleString()}
//               </span>
//             </div>
//             <div className="border-t border-gray-300 pt-3 flex justify-between">
//               <span className="text-gray-700 font-semibold">
//                 Outstanding Balance:
//               </span>
//               <span className="font-bold text-red-600 text-lg">
//                 ₦{outstandingBalance.toLocaleString()}
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Payment Method Selection */}
//         <div className="bg-white rounded-lg shadow-md p-6 mb-6">
//           <h2 className="text-xl font-bold text-dark mb-4">Payment Method</h2>
//           <div className="space-y-4">
//             <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50">
//               <input
//                 type="radio"
//                 name="paymentMethod"
//                 value="Pay Online"
//                 checked={paymentMethod === "Pay Online"}
//                 onChange={(e) =>
//                   setPaymentMethod(e.target.value as "Pay Online")
//                 }
//                 className="w-4 h-4"
//               />
//               <span className="ml-3">
//                 <span className="font-semibold text-dark">Pay Online</span>
//                 <p className="text-sm text-gray-600">Via payment portal</p>
//               </span>
//             </label>
//             <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50">
//               <input
//                 type="radio"
//                 name="paymentMethod"
//                 value="Bank Transfer"
//                 checked={paymentMethod === "Bank Transfer"}
//                 onChange={(e) =>
//                   setPaymentMethod(e.target.value as "Bank Transfer")
//                 }
//                 className="w-4 h-4"
//               />
//               <span className="ml-3">
//                 <span className="font-semibold text-dark">Bank Transfer</span>
//                 <p className="text-sm text-gray-600">Direct bank deposit</p>
//               </span>
//             </label>
//           </div>
//         </div>

//         {/* Bank Details (if Bank Transfer selected) */}
//         {paymentMethod === "Bank Transfer" && (
//           <div className="bg-yellow-50 border border-yellow-400 rounded-lg p-6 mb-6">
//             <h3 className="font-semibold text-dark mb-4">
//               Bank Transfer Details
//             </h3>
//             <div className="space-y-3 text-gray-700">
//               <p>
//                 <strong>Account Name:</strong> {accountName}
//               </p>
//               <p className="flex items-center justify-between">
//                 <span>
//                   <strong>Account Number:</strong> {accountNumber}
//                 </span>
//                 <button
//                   onClick={copyAccountNumber}
//                   className="ml-3 p-2 hover:bg-yellow-200 rounded transition-colors"
//                 >
//                   <HiOutlineClipboardCopy
//                     size={18}
//                     className={
//                       copiedAccountNumber ? "text-green-600" : "text-gray-600"
//                     }
//                   />
//                 </button>
//               </p>
//               {copiedAccountNumber && (
//                 <p className="text-sm text-green-600 font-medium">
//                   Copied to clipboard!
//                 </p>
//               )}
//               <p>
//                 <strong>Bank:</strong> {bank}
//               </p>
//             </div>
//           </div>
//         )}

//         {/* Payment Amount Form */}
//         {!showPaymentSummary && (
//           <form
//             onSubmit={handlePaymentSubmit}
//             className="bg-white rounded-lg shadow-md p-6 mb-6"
//           >
//             <div className="mb-6">
//               <label className="block text-sm font-semibold text-dark mb-2">
//                 Payment Amount
//               </label>
//               <div className="flex items-center">
//                 <span className="text-2xl font-bold text-gray-600 mr-2">₦</span>
//                 <input
//                   type="number"
//                   value={paymentAmount}
//                   onChange={(e) => setPaymentAmount(e.target.value)}
//                   placeholder="0.00"
//                   step="1"
//                   min="1"
//                   max={outstandingBalance}
//                   className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-lg"
//                 />
//               </div>
//               <p className="text-xs text-gray-500 mt-2">
//                 Maximum: ₦{outstandingBalance.toLocaleString()}
//               </p>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
//             >
//               Continue to Summary
//             </button>
//           </form>
//         )}

//         {/* Payment Summary Modal */}
//         {showPaymentSummary && (
//           <div className="bg-white rounded-lg shadow-md p-6 mb-6">
//             <h2 className="text-xl font-bold text-dark mb-4">
//               Confirm Payment
//             </h2>
//             <div className="bg-blue-50 border border-blue-300 rounded-lg p-4 mb-6">
//               <p className="text-2xl font-bold text-blue-600 text-center">
//                 ₦{parseFloat(paymentAmount).toLocaleString()}
//               </p>
//               <p className="text-sm text-gray-600 text-center mt-2">
//                 Payment amount for {enrollment.courseName}
//               </p>
//             </div>

//             <div className="space-y-4 mb-6">
//               <div className="flex justify-between p-3 bg-gray-50 rounded">
//                 <span>New Balance After Payment:</span>
//                 <span className="font-semibold">
//                   ₦
//                   {(
//                     outstandingBalance - parseFloat(paymentAmount)
//                   ).toLocaleString()}
//                 </span>
//               </div>
//             </div>

//             <div className="space-y-3">
//               <button
//                 onClick={handleConfirmPayment}
//                 className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
//               >
//                 <HiOutlinePhone size={20} />
//                 Confirm & Open WhatsApp
//               </button>
//               <button
//                 onClick={() => setShowPaymentSummary(false)}
//                 className="w-full bg-gray-300 text-dark py-3 rounded-lg font-semibold hover:bg-gray-400 transition-colors"
//               >
//                 Back
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ContinuePayment;
