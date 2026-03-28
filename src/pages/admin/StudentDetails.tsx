import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { HiArrowLeft, HiPencil, HiSave, HiX } from "react-icons/hi";
import {
  useStudentStore,
  type StudentEnrollment,
} from "../../store/studentStore";
import { useToastStore } from "../../store/toastStore";

const StudentDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const getStudent = useStudentStore((state) => state.getStudent);
  const updateStudent = useStudentStore((state) => state.updateStudent);
  const addToast = useToastStore((state) => state.addToast);

  const student = id ? getStudent(id) : undefined;
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Partial<StudentEnrollment>>(
    student || {},
  );

  if (!student) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-gray-600 mb-4">Student not found.</p>
          <button
            onClick={() => navigate("/admin/students")}
            className="text-blue-600 hover:text-blue-700 transition-colors"
          >
            Back to Students
          </button>
        </div>
      </div>
    );
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (!id) return;
    updateStudent(id, formData);
    addToast("Student information updated successfully!", "success");
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(student || {});
    setIsEditing(false);
  };

  const outstandingAmount = student.totalAmount - student.amountPaid;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate("/admin/students")}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4 transition-colors"
          >
            <HiArrowLeft size={20} />
            Back to Students
          </button>
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold text-dark">Student Details</h1>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {isEditing ? (
                <>
                  <HiX size={20} />
                  Cancel
                </>
              ) : (
                <>
                  <HiPencil size={20} />
                  Edit
                </>
              )}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-dark mb-4">
                Personal Information
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    First Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName || ""}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <p className="text-gray-900">{student.firstName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Last Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName || ""}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <p className="text-gray-900">{student.lastName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Email
                  </label>
                  <p className="text-gray-900">{student.email}</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Phone
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone || ""}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <p className="text-gray-900">{student.phone}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Course Information */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-dark mb-4">
                Course Information
              </h2>
              <div className="space-y-2 text-gray-900">
                <p>
                  <strong>Course:</strong> {student.courseName}
                </p>
                <p>
                  <strong>Duration:</strong> {student.courseDuration}
                </p>
                <p>
                  <strong>Frequency:</strong> {student.courseFrequency}
                </p>
                <p>
                  <strong>Mode:</strong> {student.courseMode}
                </p>
                <p>
                  <strong>Enrollment Date:</strong> {student.enrollmentDate}
                </p>
              </div>
            </div>

            {/* Location Information */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-dark mb-4">Location</h2>
              <div className="space-y-2 text-gray-900">
                <p>
                  <strong>State:</strong> {student.state}
                </p>
                <p>
                  <strong>LGA:</strong> {student.lga}
                </p>
              </div>
            </div>

            {/* Payment Notes */}
            {isEditing && (
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold text-dark mb-4">Notes</h2>
                <textarea
                  name="notes"
                  value={formData.notes || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  placeholder="Add notes about this student..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                />
              </div>
            )}

            {isEditing && (
              <div className="flex gap-4">
                <button
                  onClick={handleSave}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <HiSave size={20} />
                  Save Changes
                </button>
                <button
                  onClick={handleCancel}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
                >
                  <HiX size={20} />
                  Cancel
                </button>
              </div>
            )}
          </div>

          {/* Sidebar - Payment Summary */}
          <div className="space-y-6">
            {/* Payment Status Card */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-dark mb-4">
                Payment Status
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600 text-sm">Total Amount</p>
                  <p className="text-2xl font-bold text-dark">
                    ₦{student.totalAmount.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Amount Paid</p>
                  <p className="text-2xl font-bold text-green-600">
                    ₦{student.amountPaid.toLocaleString()}
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-gray-600 text-sm">Outstanding</p>
                  <p className="text-2xl font-bold text-red-600">
                    ₦{outstandingAmount.toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Payment Status
                </label>
                {isEditing ? (
                  <select
                    name="paymentStatus"
                    value={formData.paymentStatus || "pending"}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="pending">Pending</option>
                    <option value="partial">Partial</option>
                    <option value="completed">Completed</option>
                  </select>
                ) : (
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                      student.paymentStatus === "completed"
                        ? "bg-green-100 text-green-800"
                        : student.paymentStatus === "partial"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                    }`}
                  >
                    {student.paymentStatus.charAt(0).toUpperCase() +
                      student.paymentStatus.slice(1)}
                  </span>
                )}
              </div>

              {isEditing && (
                <div className="mt-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Amount Paid
                  </label>
                  <input
                    type="number"
                    name="amountPaid"
                    value={formData.amountPaid || 0}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}
            </div>

            {/* Payment Details Card */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-bold text-dark mb-4">
                Payment Details
              </h2>
              <div className="space-y-2 text-sm text-gray-700">
                <p>
                  <strong>Method:</strong> {student.paymentMethod}
                </p>
                <p>
                  <strong>Option:</strong> {student.paymentOption || "N/A"}
                </p>
                <p>
                  <strong>Last Payment:</strong>{" "}
                  {student.lastPaymentDate || "No payment yet"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;

// import { useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { HiArrowLeft, HiPencil, HiSave, HiX } from "react-icons/hi";
// import {
//   useStudentStore,
//   type StudentEnrollment,
// } from "../../store/studentStore";
// import { useToastStore } from "../../store/toastStore";

// const StudentDetails = () => {
//   const { id } = useParams<{ id: string }>();
//   //   const navigate = useNavigate();
//   const getStudent = useStudentStore((state) => state.getStudent);
//   const updateStudent = useStudentStore((state) => state.updateStudent);
//   const addToast = useToastStore((state) => state.addToast);

//   const student = id ? getStudent(id) : undefined;
//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState<Partial<StudentEnrollment>>(
//     student || {},
//   );

//   if (!student) {
//     return (
//       <div className="min-h-screen bg-gray-50 py-12">
//         <div className="max-w-2xl mx-auto px-4">
//           <p className="text-gray-600">Student not found.</p>
//           <Link
//             to="/admin/students"
//             className="text-blue-600 hover:text-blue-700"
//           >
//             Back to Students
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSave = () => {
//     if (!id) return;
//     updateStudent(id, formData);
//     addToast("Student information updated successfully!", "success");
//     setIsEditing(false);
//   };

//   const handleCancel = () => {
//     setFormData(student || {});
//     setIsEditing(false);
//   };

//   const outstandingAmount = student.totalAmount - student.amountPaid;

//   return (
//     <div className="min-h-screen bg-gray-50 py-12">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="mb-8">
//           <Link
//             to="/admin/students"
//             className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4"
//           >
//             <HiArrowLeft size={20} />
//             Back to Students
//           </Link>
//           <div className="flex items-center justify-between">
//             <h1 className="text-4xl font-bold text-dark">Student Details</h1>
//             <button
//               onClick={() => setIsEditing(!isEditing)}
//               className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//             >
//               {isEditing ? (
//                 <>
//                   <HiX size={20} />
//                   Cancel
//                 </>
//               ) : (
//                 <>
//                   <HiPencil size={20} />
//                   Edit
//                 </>
//               )}
//             </button>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Main Content */}
//           <div className="lg:col-span-2 space-y-6">
//             {/* Personal Information */}
//             <div className="bg-white rounded-lg shadow p-6">
//               <h2 className="text-xl font-bold text-dark mb-4">
//                 Personal Information
//               </h2>
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-1">
//                     First Name
//                   </label>
//                   {isEditing ? (
//                     <input
//                       type="text"
//                       name="firstName"
//                       value={formData.firstName || ""}
//                       onChange={handleInputChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   ) : (
//                     <p className="text-gray-900">{student.firstName}</p>
//                   )}
//                 </div>
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-1">
//                     Last Name
//                   </label>
//                   {isEditing ? (
//                     <input
//                       type="text"
//                       name="lastName"
//                       value={formData.lastName || ""}
//                       onChange={handleInputChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   ) : (
//                     <p className="text-gray-900">{student.lastName}</p>
//                   )}
//                 </div>
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-1">
//                     Email
//                   </label>
//                   <p className="text-gray-900">{student.email}</p>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-1">
//                     Phone
//                   </label>
//                   {isEditing ? (
//                     <input
//                       type="text"
//                       name="phone"
//                       value={formData.phone || ""}
//                       onChange={handleInputChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   ) : (
//                     <p className="text-gray-900">{student.phone}</p>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Course Information */}
//             <div className="bg-white rounded-lg shadow p-6">
//               <h2 className="text-xl font-bold text-dark mb-4">
//                 Course Information
//               </h2>
//               <div className="space-y-2 text-gray-900">
//                 <p>
//                   <strong>Course:</strong> {student.courseName}
//                 </p>
//                 <p>
//                   <strong>Duration:</strong> {student.courseDuration}
//                 </p>
//                 <p>
//                   <strong>Frequency:</strong> {student.courseFrequency}
//                 </p>
//                 <p>
//                   <strong>Mode:</strong> {student.courseMode}
//                 </p>
//                 <p>
//                   <strong>Enrollment Date:</strong> {student.enrollmentDate}
//                 </p>
//               </div>
//             </div>

//             {/* Location Information */}
//             <div className="bg-white rounded-lg shadow p-6">
//               <h2 className="text-xl font-bold text-dark mb-4">Location</h2>
//               <div className="space-y-2 text-gray-900">
//                 <p>
//                   <strong>State:</strong> {student.state}
//                 </p>
//                 <p>
//                   <strong>LGA:</strong> {student.lga}
//                 </p>
//               </div>
//             </div>

//             {/* Payment Notes */}
//             {isEditing && (
//               <div className="bg-white rounded-lg shadow p-6">
//                 <h2 className="text-xl font-bold text-dark mb-4">Notes</h2>
//                 <textarea
//                   name="notes"
//                   value={formData.notes || ""}
//                   onChange={(e) =>
//                     setFormData({ ...formData, notes: e.target.value })
//                   }
//                   placeholder="Add notes about this student..."
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   rows={4}
//                 />
//               </div>
//             )}

//             {isEditing && (
//               <div className="flex gap-4">
//                 <button
//                   onClick={handleSave}
//                   className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
//                 >
//                   <HiSave size={20} />
//                   Save Changes
//                 </button>
//                 <button
//                   onClick={handleCancel}
//                   className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
//                 >
//                   <HiX size={20} />
//                   Cancel
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* Sidebar - Payment Summary */}
//           <div className="space-y-6">
//             {/* Payment Status Card */}
//             <div className="bg-white rounded-lg shadow p-6">
//               <h2 className="text-xl font-bold text-dark mb-4">
//                 Payment Status
//               </h2>
//               <div className="space-y-4">
//                 <div>
//                   <p className="text-gray-600 text-sm">Total Amount</p>
//                   <p className="text-2xl font-bold text-dark">
//                     ₦{student.totalAmount.toLocaleString()}
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-gray-600 text-sm">Amount Paid</p>
//                   <p className="text-2xl font-bold text-green-600">
//                     ₦{student.amountPaid.toLocaleString()}
//                   </p>
//                 </div>
//                 <div className="pt-4 border-t border-gray-200">
//                   <p className="text-gray-600 text-sm">Outstanding</p>
//                   <p className="text-2xl font-bold text-red-600">
//                     ₦{outstandingAmount.toLocaleString()}
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-6">
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                   Payment Status
//                 </label>
//                 {isEditing ? (
//                   <select
//                     name="paymentStatus"
//                     value={formData.paymentStatus || "pending"}
//                     onChange={handleInputChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   >
//                     <option value="pending">Pending</option>
//                     <option value="partial">Partial</option>
//                     <option value="completed">Completed</option>
//                   </select>
//                 ) : (
//                   <span
//                     className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
//                       student.paymentStatus === "completed"
//                         ? "bg-green-100 text-green-800"
//                         : student.paymentStatus === "partial"
//                           ? "bg-yellow-100 text-yellow-800"
//                           : "bg-red-100 text-red-800"
//                     }`}
//                   >
//                     {student.paymentStatus.charAt(0).toUpperCase() +
//                       student.paymentStatus.slice(1)}
//                   </span>
//                 )}
//               </div>

//               {isEditing && (
//                 <div className="mt-4">
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Amount Paid
//                   </label>
//                   <input
//                     type="number"
//                     name="amountPaid"
//                     value={formData.amountPaid || 0}
//                     onChange={handleInputChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>
//               )}
//             </div>

//             {/* Payment Details Card */}
//             <div className="bg-white rounded-lg shadow p-6">
//               <h2 className="text-lg font-bold text-dark mb-4">
//                 Payment Details
//               </h2>
//               <div className="space-y-2 text-sm text-gray-700">
//                 <p>
//                   <strong>Method:</strong> {student.paymentMethod}
//                 </p>
//                 <p>
//                   <strong>Option:</strong> {student.paymentOption || "N/A"}
//                 </p>
//                 <p>
//                   <strong>Last Payment:</strong>{" "}
//                   {student.lastPaymentDate || "No payment yet"}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentDetails;
