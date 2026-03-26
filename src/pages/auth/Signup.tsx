import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useAuthStore } from "../../store/authStore";
import { useToastStore } from "../../store/toastStore";
import Button from "../../components/ui/buttons";

// ✅ Define Types
type FormDataType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type FormErrors = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Signup = () => {
  const navigate = useNavigate();
  const signup = useAuthStore((state) => state.signup);
  const isLoading = useAuthStore((state) => state.isLoading);
  const addToast = useToastStore((state) => state.addToast);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [agreeTerms, setAgreeTerms] = useState(false);

  // ✅ Validation
  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    } as FormErrors;

    if (!formData.name) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    return Object.values(newErrors).every((err) => err === "");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!agreeTerms) {
      addToast("Please agree to the Terms of Service", "error");
      return;
    }

    if (!validateForm()) {
      addToast("Please fix the errors above", "error");
      return;
    }

    try {
      await signup(formData.name, formData.email, formData.password);
      addToast("Account created successfully! Verifying email...", "success");
      navigate("/verify-otp", { state: { email: formData.email } });
    } catch (error: unknown) {
      if (error instanceof Error) {
        addToast(error.message, "error");
      } else {
        addToast("Signup failed. Please try again.", "error");
      }
    }
  };

  // Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-5 py-12">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-dark mb-2">Join TMK</h1>
          <p className="text-gray-600">
            Create an account and start learning today
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-dark mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className={`w-full px-4 py-3 rounded-lg border-2 ${
                  errors.name
                    ? "border-red-500"
                    : "border-gray-200 focus:border-primary"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-dark mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={`w-full px-4 py-3 rounded-lg border-2 ${
                  errors.email
                    ? "border-red-500"
                    : "border-gray-200 focus:border-primary"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-dark mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 ${
                    errors.password
                      ? "border-red-500"
                      : "border-gray-200 focus:border-primary"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-3.5"
                >
                  {showPassword ? <HiEyeOff /> : <HiEye />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}

            <div>
              <label className="block text-sm font-semibold text-dark mb-2">
                Confirm Password
              </label>

              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 ${
                    errors.confirmPassword
                      ? "border-red-500"
                      : "border-gray-200 focus:border-primary"
                  }`}
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className="absolute right-3 top-3.5"
                >
                  {showConfirmPassword ? <HiEyeOff /> : <HiEye />}
                </button>
              </div>

              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2 py-2">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
              />
              <span>I agree to Terms</span>
            </div>

            {/* FIXED BUTTON */}
            <Button
              type="submit"
              text={isLoading ? "Creating..." : "Create Account"}
              className="w-full bg-primary text-white py-3"
              disabled={isLoading}
            />
          </form>

          <Link to="/login" className="block text-center mt-4">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;

// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { HiEye, HiEyeOff } from "react-icons/hi";
// import { useAuthStore } from "../../store/authStore";
// import { useToastStore } from "../../store/toastStore";
// import Button from "../../components/ui/buttons";

// const Signup = () => {
//   const navigate = useNavigate();
//   const signup = useAuthStore((state) => state.signup);
//   const isLoading = useAuthStore((state) => state.isLoading);
//   const addToast = useToastStore((state) => state.addToast);

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [agreeTerms, setAgreeTerms] = useState(false);

//   const validateForm = () => {
//     let newErrors = { name: "", email: "", password: "", confirmPassword: "" };

//     if (!formData.name) {
//       newErrors.name = "Name is required";
//     } else if (formData.name.length < 2) {
//       newErrors.name = "Name must be at least 2 characters";
//     }

//     if (!formData.email) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Email is invalid";
//     }

//     if (!formData.password) {
//       newErrors.password = "Password is required";
//     } else if (formData.password.length < 6) {
//       newErrors.password = "Password must be at least 6 characters";
//     }

//     if (!formData.confirmPassword) {
//       newErrors.confirmPassword = "Please confirm your password";
//     } else if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = "Passwords do not match";
//     }

//     setErrors(newErrors);
//     return (
//       !newErrors.name &&
//       !newErrors.email &&
//       !newErrors.password &&
//       !newErrors.confirmPassword
//     );
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!agreeTerms) {
//       addToast("Please agree to the Terms of Service", "error");
//       return;
//     }

//     if (!validateForm()) {
//       addToast("Please fix the errors above", "error");
//       return;
//     }

//     try {
//       await signup(formData.name, formData.email, formData.password);
//       addToast("Account created successfully! Verifying email...", "success");
//       navigate("/verify-otp", { state: { email: formData.email } });
//     } catch (error) {
//       addToast("Signup failed. Please try again.", "error");
//     }
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     if (errors[name as keyof typeof errors]) {
//       setErrors((prev) => ({ ...prev, [name]: "" }));
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-5 py-12">
//       <div className="w-full max-w-md">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h1 className="text-4xl font-bold text-dark mb-2">Join TMK</h1>
//           <p className="text-gray-600">
//             Create an account and start learning today
//           </p>
//         </div>

//         {/* Form Card */}
//         <div className="bg-white rounded-2xl shadow-xl p-8">
//           <form onSubmit={handleSubmit} className="space-y-4">
//             {/* Name */}
//             <div>
//               <label className="block text-sm font-semibold text-dark mb-2">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="John Doe"
//                 className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors ${
//                   errors.name
//                     ? "border-red-500 focus:border-red-500"
//                     : "border-gray-200 focus:border-primary"
//                 }`}
//               />
//               {errors.name && (
//                 <p className="text-red-500 text-sm mt-1">{errors.name}</p>
//               )}
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block text-sm font-semibold text-dark mb-2">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="you@example.com"
//                 className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors ${
//                   errors.email
//                     ? "border-red-500 focus:border-red-500"
//                     : "border-gray-200 focus:border-primary"
//                 }`}
//               />
//               {errors.email && (
//                 <p className="text-red-500 text-sm mt-1">{errors.email}</p>
//               )}
//             </div>

//             {/* Password */}
//             <div>
//               <label className="block text-sm font-semibold text-dark mb-2">
//                 Password
//               </label>
//               <div className="relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   placeholder="••••••••"
//                   className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors ${
//                     errors.password
//                       ? "border-red-500 focus:border-red-500"
//                       : "border-gray-200 focus:border-primary"
//                   }`}
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-3.5 text-gray-500 hover:text-gray-700"
//                 >
//                   {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
//                 </button>
//               </div>
//               {errors.password && (
//                 <p className="text-red-500 text-sm mt-1">{errors.password}</p>
//               )}
//             </div>

//             {/* Confirm Password */}
//             <div>
//               <label className="block text-sm font-semibold text-dark mb-2">
//                 Confirm Password
//               </label>
//               <div className="relative">
//                 <input
//                   type={showConfirmPassword ? "text" : "password"}
//                   name="confirmPassword"
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                   placeholder="••••••••"
//                   className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors ${
//                     errors.confirmPassword
//                       ? "border-red-500 focus:border-red-500"
//                       : "border-gray-200 focus:border-primary"
//                   }`}
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                   className="absolute right-3 top-3.5 text-gray-500 hover:text-gray-700"
//                 >
//                   {showConfirmPassword ? (
//                     <HiEyeOff size={20} />
//                   ) : (
//                     <HiEye size={20} />
//                   )}
//                 </button>
//               </div>
//               {errors.confirmPassword && (
//                 <p className="text-red-500 text-sm mt-1">
//                   {errors.confirmPassword}
//                 </p>
//               )}
//             </div>

//             {/* Terms */}
//             <div className="flex items-start gap-2 py-2">
//               <input
//                 type="checkbox"
//                 id="terms"
//                 checked={agreeTerms}
//                 onChange={(e) => setAgreeTerms(e.target.checked)}
//                 className="mt-1 w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
//               />
//               <label htmlFor="terms" className="text-sm text-gray-600">
//                 I agree to the{" "}
//                 <span className="text-primary font-semibold cursor-pointer hover:underline">
//                   Terms of Service
//                 </span>{" "}
//                 and{" "}
//                 <span className="text-primary font-semibold cursor-pointer hover:underline">
//                   Privacy Policy
//                 </span>
//               </label>
//             </div>

//             {/* Sign Up Button */}
//             <Button
//               text={isLoading ? "Creating Account..." : "Create Account"}
//               onClick={() => {}}
//               className="w-full bg-primary text-white hover:bg-secondary py-3 font-semibold mt-6"
//               disabled={isLoading}
//             />
//           </form>

//           {/* Divider */}
//           <div className="my-6 flex items-center gap-4">
//             <div className="flex-1 h-px bg-gray-200"></div>
//             <span className="text-gray-500 text-sm">
//               Already have an account?
//             </span>
//             <div className="flex-1 h-px bg-gray-200"></div>
//           </div>

//           {/* Login Link */}
//           <Link
//             to="/login"
//             className="w-full block text-center py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-lg transition-colors"
//           >
//             Sign In
//           </Link>
//         </div>

//         {/* Footer */}
//         <p className="text-center text-gray-600 text-sm mt-6">
//           By creating an account, you agree to our Terms of Service
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;
