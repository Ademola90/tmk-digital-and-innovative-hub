import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
// import { coursesData } from "../data/coursesData";
// import Button from "../components/ui/Button";
import { useToastStore } from "../store/toastStore";
import { coursesData } from "../data/courseData";
import Button from "../components/ui/buttons";

const Enrollment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const courseId = parseInt(id || "1");
  const course = coursesData.find((c) => c.id === courseId);
  const addToast = useToastStore((state) => state.addToast);

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    track: "Weekdays (Twice a week)",
    location: "Mainland",
    referralSource: [] as string[],
    paymentMethod: "Pay Now In Full",
    paymentOption: "Pay Online",
  });

  const [accountNumber] = useState("18722139");
  const [accountName] = useState("Ademola Abdullahi Akofe");
  const [bank] = useState("Access Bank");

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      referralSource: prev.referralSource.includes(value)
        ? prev.referralSource.filter((item) => item !== value)
        : [...prev.referralSource, value],
    }));
  };

  const handleNext = () => {
    if (step === 1) {
      if (
        !formData.firstName ||
        !formData.lastName ||
        !formData.email ||
        !formData.phone ||
        !formData.gender
      ) {
        addToast("Please fill all required fields", "error");
        return;
      }
    }
    if (step === 2) {
      if (formData.referralSource.length === 0) {
        addToast("Please select at least one referral source", "error");
        return;
      }
    }
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleComplete = () => {
    addToast("Registration completed successfully!", "success");
    navigate("/courses");
  };

  const progressPercent = (step / 4) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12 px-5 lg:px-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-teal-600 font-semibold mb-2">Get Started Today</p>
          {course.mode && (
            <p className="text-teal-100 font-semibold mb-2 text-sm uppercase tracking-wide bg-teal-600 inline-block px-3 py-1 rounded">
              {course.mode}
            </p>
          )}
          <h1 className="text-4xl font-bold text-dark mb-2">{course.title}</h1>
          <p className="text-gray-600">
            Step {step} of 4 -{" "}
            {
              [
                "Tell us about yourself",
                "Select Course & Payment Method",
                "Additional Information",
                "Payment Summary",
              ][step - 1]
            }
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="w-full bg-gray-300 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
          <p className="text-right text-sm text-gray-600 mt-2">
            {Math.round(progressPercent)}%
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          {step === 1 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-dark mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-dark mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-dark mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-dark mb-2">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-dark mb-2">
                    Gender <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={formData.gender === "Male"}
                        onChange={handleInputChange}
                        className="w-4 h-4"
                      />
                      <span className="ml-3 text-gray-700">Male</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={formData.gender === "Female"}
                        onChange={handleInputChange}
                        className="w-4 h-4"
                      />
                      <span className="ml-3 text-gray-700">Female</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-dark mb-2">
                    Track <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="track"
                    value={formData.track}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option>Weekdays (Twice a week)</option>
                    <option>Weekends (Once a week)</option>
                    <option>Full Time</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-dark mb-3">
                  Location <span className="text-red-500">*</span>
                </label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option>Mainland</option>
                  <option>Island</option>
                  <option>Ikoyi</option>
                  <option>Victoria Island</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-dark mb-3">
                  How did you hear about TMK?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="space-y-3">
                  {[
                    "Referral (Family & Friends)",
                    "Instagram",
                    "Twitter",
                    "Facebook",
                    "LinkedIn",
                    "Google",
                    "Online Blog",
                    "YouTube",
                  ].map((source) => (
                    <label key={source} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.referralSource.includes(source)}
                        onChange={() => handleCheckboxChange(source)}
                        className="w-4 h-4"
                      />
                      <span className="ml-3 text-gray-700">{source}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
                <h3 className="font-semibold text-dark mb-4">Course Summary</h3>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>Course:</strong> {course.title}
                  </p>
                  <p>
                    <strong>Price:</strong> ₦{course.price.toLocaleString()}
                  </p>
                  <p>
                    <strong>Duration:</strong> 3 Months (Twice a week)
                  </p>
                  <p>
                    <strong>Start Date:</strong> 9th March, 2025
                  </p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-dark mb-3">
                  Payment Method <span className="text-red-500">*</span>
                </label>
                <div className="space-y-3">
                  {["Pay Now In Full", "Pay by Installment", "Pay Later"].map(
                    (method) => (
                      <label key={method} className="flex items-center">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={method}
                          checked={formData.paymentMethod === method}
                          onChange={handleInputChange}
                          className="w-4 h-4"
                        />
                        <span className="ml-3 text-gray-700">{method}</span>
                      </label>
                    ),
                  )}
                </div>
              </div>

              {formData.paymentMethod === "Pay Now In Full" && (
                <div>
                  <label className="block text-sm font-semibold text-dark mb-3">
                    Pay Now In Full
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="paymentOption"
                        value="Pay Online"
                        checked={formData.paymentOption === "Pay Online"}
                        onChange={handleInputChange}
                        className="w-4 h-4"
                      />
                      <span className="ml-3 text-gray-700">Pay Online</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="paymentOption"
                        value="Bank Transfer"
                        checked={formData.paymentOption === "Bank Transfer"}
                        onChange={handleInputChange}
                        className="w-4 h-4"
                      />
                      <span className="ml-3 text-gray-700">Bank Transfer</span>
                    </label>
                  </div>
                </div>
              )}
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <div className="border-t-4 border-blue-600 pt-6">
                <h3 className="text-2xl font-bold text-dark mb-6">
                  Payment Summary
                </h3>

                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg mb-6">
                  <p className="text-gray-700 mb-2">Total Fee</p>
                  <p className="text-4xl font-bold text-blue-600">
                    ₦{course.price.toLocaleString()}.00
                  </p>
                </div>

                <table className="w-full mb-8 border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="px-4 py-3 text-left font-semibold text-dark">
                        Item
                      </th>
                      <th className="px-4 py-3 text-left font-semibold text-dark">
                        Price
                      </th>
                      <th className="px-4 py-3 text-left font-semibold text-dark">
                        Qty
                      </th>
                      <th className="px-4 py-3 text-left font-semibold text-dark">
                        Line Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-gray-300">
                      <td className="px-4 py-3">{course.title}</td>
                      <td className="px-4 py-3">
                        ₦{course.price.toLocaleString()}.00
                      </td>
                      <td className="px-4 py-3">1</td>
                      <td className="px-4 py-3">
                        ₦{course.price.toLocaleString()}.00
                      </td>
                    </tr>
                    <tr className="border-t border-gray-300 bg-gray-50">
                      <td
                        colSpan={3}
                        className="px-4 py-3 text-right font-semibold"
                      >
                        Total
                      </td>
                      <td className="px-4 py-3 font-semibold">
                        ₦{course.price.toLocaleString()}.00
                      </td>
                    </tr>
                  </tbody>
                </table>

                {formData.paymentOption === "Bank Transfer" && (
                  <div className="bg-yellow-50 border border-yellow-400 p-6 rounded-lg">
                    <h4 className="font-semibold text-dark mb-4">
                      Bank Transfer Details
                    </h4>
                    <div className="space-y-2 text-gray-700">
                      <p>
                        <strong>Account Name:</strong> {accountName}
                      </p>
                      <p>
                        <strong>Account Number:</strong> {accountNumber}
                      </p>
                      <p>
                        <strong>Bank:</strong> {bank}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <button
            onClick={handleBack}
            disabled={step === 1}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 disabled:text-gray-400 disabled:cursor-not-allowed font-semibold"
          >
            <HiArrowLeft /> Return to previous page
          </button>

          {step < 4 ? (
            <Button
              text="Continue"
              className="bg-blue-600 text-white hover:bg-blue-700"
              onClick={handleNext}
            />
          ) : (
            <Button
              text="Complete Registration"
              className="bg-blue-600 text-white hover:bg-blue-700"
              onClick={handleComplete}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Enrollment;

// import { useState } from "react";
// import { useParams, useNavigate, Link } from "react-router-dom";
// import { HiArrowLeft } from "react-icons/hi";

// import { useToastStore } from "../store/toastStore";
// import { coursesData } from "../data/courseData";
// import Button from "../components/ui/buttons";

// const Enrollment = () => {
//   const { id } = useParams<{ id: string }>();
//   const navigate = useNavigate();
//   const courseId = parseInt(id || "1");
//   const course = coursesData.find((c) => c.id === courseId);
//   const addToast = useToastStore((state) => state.addToast);

//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     gender: "",
//     track: "Weekdays (Twice a week)",
//     location: "Mainland",
//     referralSource: [] as string[],
//     paymentMethod: "Pay Now In Full",
//     paymentOption: "Pay Online",
//   });

//   const [accountNumber] = useState("18722139");
//   const [accountName] = useState("Ademola Abdullahi Akofe");
//   const [bank] = useState("Access Bank");

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

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleCheckboxChange = (value: string) => {
//     setFormData((prev) => ({
//       ...prev,
//       referralSource: prev.referralSource.includes(value)
//         ? prev.referralSource.filter((item) => item !== value)
//         : [...prev.referralSource, value],
//     }));
//   };

//   const handleNext = () => {
//     if (step === 1) {
//       if (
//         !formData.firstName ||
//         !formData.lastName ||
//         !formData.email ||
//         !formData.phone ||
//         !formData.gender
//       ) {
//         addToast("Please fill all required fields", "error");
//         return;
//       }
//     }
//     if (step === 2) {
//       if (formData.referralSource.length === 0) {
//         addToast("Please select at least one referral source", "error");
//         return;
//       }
//     }
//     if (step < 4) setStep(step + 1);
//   };

//   const handleBack = () => {
//     if (step > 1) setStep(step - 1);
//   };

//   const handleComplete = () => {
//     addToast("Registration completed successfully!", "success");
//     navigate("/courses");
//   };

//   const progressPercent = (step / 4) * 100;

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12 px-5 lg:px-20">
//       <div className="max-w-4xl mx-auto">
//         {/* Header */}
//         <div className="mb-12 text-center">
//           <p className="text-teal-600 font-semibold mb-2">Get Started Today</p>
//           <h1 className="text-4xl font-bold text-dark mb-2">{course.title}</h1>
//           <p className="text-gray-600">
//             Step {step} of 4 -{" "}
//             {
//               [
//                 "Tell us about yourself",
//                 "Select Course & Payment Method",
//                 "Additional Information",
//                 "Payment Summary",
//               ][step - 1]
//             }
//           </p>
//         </div>

//         {/* Progress Bar */}
//         <div className="mb-12">
//           <div className="w-full bg-gray-300 rounded-full h-2">
//             <div
//               className="bg-blue-600 h-2 rounded-full transition-all duration-300"
//               style={{ width: `${progressPercent}%` }}
//             ></div>
//           </div>
//           <p className="text-right text-sm text-gray-600 mt-2">
//             {Math.round(progressPercent)}%
//           </p>
//         </div>

//         {/* Form Container */}
//         <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
//           {step === 1 && (
//             <div className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-semibold text-dark mb-2">
//                     First Name <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleInputChange}
//                     placeholder="First Name"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-semibold text-dark mb-2">
//                     Last Name <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleInputChange}
//                     placeholder="Last Name"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                   />
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-semibold text-dark mb-2">
//                     Email <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     placeholder="Email Address"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-semibold text-dark mb-2">
//                     Phone <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     placeholder="Phone Number"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                   />
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-semibold text-dark mb-2">
//                     Gender <span className="text-red-500">*</span>
//                   </label>
//                   <div className="space-y-3">
//                     <label className="flex items-center">
//                       <input
//                         type="radio"
//                         name="gender"
//                         value="Male"
//                         checked={formData.gender === "Male"}
//                         onChange={handleInputChange}
//                         className="w-4 h-4"
//                       />
//                       <span className="ml-3 text-gray-700">Male</span>
//                     </label>
//                     <label className="flex items-center">
//                       <input
//                         type="radio"
//                         name="gender"
//                         value="Female"
//                         checked={formData.gender === "Female"}
//                         onChange={handleInputChange}
//                         className="w-4 h-4"
//                       />
//                       <span className="ml-3 text-gray-700">Female</span>
//                     </label>
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-semibold text-dark mb-2">
//                     Track <span className="text-red-500">*</span>
//                   </label>
//                   <select
//                     name="track"
//                     value={formData.track}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                   >
//                     <option>Weekdays (Twice a week)</option>
//                     <option>Weekends (Once a week)</option>
//                     <option>Full Time</option>
//                   </select>
//                 </div>
//               </div>
//             </div>
//           )}

//           {step === 2 && (
//             <div className="space-y-6">
//               <div>
//                 <label className="block text-sm font-semibold text-dark mb-3">
//                   Location <span className="text-red-500">*</span>
//                 </label>
//                 <select
//                   name="location"
//                   value={formData.location}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 >
//                   <option>Mainland</option>
//                   <option>Island</option>
//                   <option>Ikoyi</option>
//                   <option>Victoria Island</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-dark mb-3">
//                   How did you hear about TMK?{" "}
//                   <span className="text-red-500">*</span>
//                 </label>
//                 <div className="space-y-3">
//                   {[
//                     "Referral (Family & Friends)",
//                     "Instagram",
//                     "Twitter",
//                     "Facebook",
//                     "LinkedIn",
//                     "Google",
//                     "Online Blog",
//                     "YouTube",
//                   ].map((source) => (
//                     <label key={source} className="flex items-center">
//                       <input
//                         type="checkbox"
//                         checked={formData.referralSource.includes(source)}
//                         onChange={() => handleCheckboxChange(source)}
//                         className="w-4 h-4"
//                       />
//                       <span className="ml-3 text-gray-700">{source}</span>
//                     </label>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}

//           {step === 3 && (
//             <div className="space-y-6">
//               <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
//                 <h3 className="font-semibold text-dark mb-4">Course Summary</h3>
//                 <div className="space-y-3 text-gray-700">
//                   <p>
//                     <strong>Course:</strong> {course.title}
//                   </p>
//                   <p>
//                     <strong>Price:</strong> ₦{course.price.toLocaleString()}
//                   </p>
//                   <p>
//                     <strong>Duration:</strong> 3 Months (Twice a week)
//                   </p>
//                   <p>
//                     <strong>Start Date:</strong> 9th March, 2025
//                   </p>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-dark mb-3">
//                   Payment Method <span className="text-red-500">*</span>
//                 </label>
//                 <div className="space-y-3">
//                   {["Pay Now In Full", "Pay by Installment", "Pay Later"].map(
//                     (method) => (
//                       <label key={method} className="flex items-center">
//                         <input
//                           type="radio"
//                           name="paymentMethod"
//                           value={method}
//                           checked={formData.paymentMethod === method}
//                           onChange={handleInputChange}
//                           className="w-4 h-4"
//                         />
//                         <span className="ml-3 text-gray-700">{method}</span>
//                       </label>
//                     ),
//                   )}
//                 </div>
//               </div>

//               {formData.paymentMethod === "Pay Now In Full" && (
//                 <div>
//                   <label className="block text-sm font-semibold text-dark mb-3">
//                     Pay Now In Full
//                   </label>
//                   <div className="space-y-3">
//                     <label className="flex items-center">
//                       <input
//                         type="radio"
//                         name="paymentOption"
//                         value="Pay Online"
//                         checked={formData.paymentOption === "Pay Online"}
//                         onChange={handleInputChange}
//                         className="w-4 h-4"
//                       />
//                       <span className="ml-3 text-gray-700">Pay Online</span>
//                     </label>
//                     <label className="flex items-center">
//                       <input
//                         type="radio"
//                         name="paymentOption"
//                         value="Bank Transfer"
//                         checked={formData.paymentOption === "Bank Transfer"}
//                         onChange={handleInputChange}
//                         className="w-4 h-4"
//                       />
//                       <span className="ml-3 text-gray-700">Bank Transfer</span>
//                     </label>
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}

//           {step === 4 && (
//             <div className="space-y-6">
//               <div className="border-t-4 border-blue-600 pt-6">
//                 <h3 className="text-2xl font-bold text-dark mb-6">
//                   Payment Summary
//                 </h3>

//                 <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg mb-6">
//                   <p className="text-gray-700 mb-2">Total Fee</p>
//                   <p className="text-4xl font-bold text-blue-600">
//                     ₦{course.price.toLocaleString()}.00
//                   </p>
//                 </div>

//                 <table className="w-full mb-8 border border-gray-300">
//                   <thead>
//                     <tr className="bg-gray-200">
//                       <th className="px-4 py-3 text-left font-semibold text-dark">
//                         Item
//                       </th>
//                       <th className="px-4 py-3 text-left font-semibold text-dark">
//                         Price
//                       </th>
//                       <th className="px-4 py-3 text-left font-semibold text-dark">
//                         Qty
//                       </th>
//                       <th className="px-4 py-3 text-left font-semibold text-dark">
//                         Line Total
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr className="border-t border-gray-300">
//                       <td className="px-4 py-3">{course.title}</td>
//                       <td className="px-4 py-3">
//                         ₦{course.price.toLocaleString()}.00
//                       </td>
//                       <td className="px-4 py-3">1</td>
//                       <td className="px-4 py-3">
//                         ₦{course.price.toLocaleString()}.00
//                       </td>
//                     </tr>
//                     <tr className="border-t border-gray-300 bg-gray-50">
//                       <td
//                         colSpan={3}
//                         className="px-4 py-3 text-right font-semibold"
//                       >
//                         Total
//                       </td>
//                       <td className="px-4 py-3 font-semibold">
//                         ₦{course.price.toLocaleString()}.00
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>

//                 {formData.paymentOption === "Bank Transfer" && (
//                   <div className="bg-yellow-50 border border-yellow-400 p-6 rounded-lg">
//                     <h4 className="font-semibold text-dark mb-4">
//                       Bank Transfer Details
//                     </h4>
//                     <div className="space-y-2 text-gray-700">
//                       <p>
//                         <strong>Account Name:</strong> {accountName}
//                       </p>
//                       <p>
//                         <strong>Account Number:</strong> {accountNumber}
//                       </p>
//                       <p>
//                         <strong>Bank:</strong> {bank}
//                       </p>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Navigation Buttons */}
//         <div className="flex justify-between items-center">
//           <button
//             onClick={handleBack}
//             disabled={step === 1}
//             className="flex items-center gap-2 text-blue-600 hover:text-blue-700 disabled:text-gray-400 disabled:cursor-not-allowed font-semibold"
//           >
//             <HiArrowLeft /> Return to previous page
//           </button>

//           {step < 4 ? (
//             <Button
//               text="Continue"
//               className="bg-blue-600 text-white hover:bg-blue-700"
//               onClick={handleNext}
//             />
//           ) : (
//             <Button
//               text="Complete Registration"
//               className="bg-blue-600 text-white hover:bg-blue-700"
//               onClick={handleComplete}
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Enrollment;
