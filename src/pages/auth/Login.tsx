import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useAuthStore } from "../../store/authStore";
import { useToastStore } from "../../store/toastStore";
import Button from "../../components/ui/buttons";

// Types
type LoginFormData = {
  email: string;
  password: string;
};

type LoginErrors = {
  email: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const isLoading = useAuthStore((state) => state.isLoading);
  const addToast = useToastStore((state) => state.addToast);

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<LoginErrors>({
    email: "",
    password: "",
  });

  // Validate Form
  const validateForm = () => {
    const newErrors: LoginErrors = {
      email: "",
      password: "",
    };

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

    setErrors(newErrors);

    return Object.values(newErrors).every((err) => err === "");
  };

  // Submit Handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      addToast("Please fix the errors above", "error");
      return;
    }

    try {
      await login(formData.email, formData.password);
      addToast("Login successful!", "success");

      // Check if admin login and redirect accordingly
      const adminEmail = import.meta.env.VITE_ADMIN_EMAIL || "admin@tmk.com";
      if (formData.email === adminEmail) {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        addToast(error.message, "error");
      } else {
        addToast("Login failed. Please try again.", "error");
      }
    }
  };

  //  Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof LoginErrors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-5 py-12">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-dark mb-2">Welcome Back</h1>
          <p className="text-gray-600">
            Sign in to access your courses and progress
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
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
                    ? "border-red-500 focus:border-red-500"
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
                  placeholder="••••••••"
                  className={`w-full px-4 py-3 rounded-lg border-2 ${
                    errors.password
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-200 focus:border-primary"
                  }`}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-3.5 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
                </button>
              </div>

              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <Link
                to="/forgot-password"
                className="text-primary hover:text-secondary text-sm font-semibold"
              >
                Forgot Password?
              </Link>
            </div>

            {/*  FIXED BUTTON */}
            <Button
              type="submit"
              text={isLoading ? "Signing in..." : "Sign In"}
              className="w-full bg-primary text-[#1E3A8A] hover:text-[#2563EB] cursor-pointer hover:bg-secondary py-3 font-semibold"
              disabled={isLoading}
            />
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-gray-500 text-sm">New to TMK?</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Sign Up */}
          <Link
            to="/signup"
            className="w-full block text-center py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-lg transition-colors"
          >
            Create New Account
          </Link>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-600 text-sm mt-6">
          By signing in, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Login;

// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { HiEye, HiEyeOff } from "react-icons/hi";
// import { useAuthStore } from "../../store/authStore";
// import { useToastStore } from "../../store/toastStore";
// import Button from "../../components/ui/buttons";

// // Types
// type LoginFormData = {
//   email: string;
//   password: string;
// };

// type LoginErrors = {
//   email: string;
//   password: string;
// };

// const Login = () => {
//   const navigate = useNavigate();
//   const login = useAuthStore((state) => state.login);
//   const isLoading = useAuthStore((state) => state.isLoading);
//   const addToast = useToastStore((state) => state.addToast);

//   const [showPassword, setShowPassword] = useState(false);

//   const [formData, setFormData] = useState<LoginFormData>({
//     email: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState<LoginErrors>({
//     email: "",
//     password: "",
//   });

//   // Validate Form
//   const validateForm = () => {
//     const newErrors: LoginErrors = {
//       email: "",
//       password: "",
//     };

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

//     setErrors(newErrors);

//     return Object.values(newErrors).every((err) => err === "");
//   };

//   // Submit Handler
//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       addToast("Please fix the errors above", "error");
//       return;
//     }

//     try {
//       await login(formData.email, formData.password);
//       addToast("Login successful!", "success");
//       navigate("/");
//     } catch (error: unknown) {
//       if (error instanceof Error) {
//         addToast(error.message, "error");
//       } else {
//         addToast("Login failed. Please try again.", "error");
//       }
//     }
//   };

//   //  Handle Input Change
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({ ...prev, [name]: value }));

//     if (errors[name as keyof LoginErrors]) {
//       setErrors((prev) => ({ ...prev, [name]: "" }));
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-5 py-12">
//       <div className="w-full max-w-md">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h1 className="text-4xl font-bold text-dark mb-2">Welcome Back</h1>
//           <p className="text-gray-600">
//             Sign in to access your courses and progress
//           </p>
//         </div>

//         {/* Form Card */}
//         <div className="bg-white rounded-2xl shadow-xl p-8">
//           <form onSubmit={handleSubmit} className="space-y-5">
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
//                 className={`w-full px-4 py-3 rounded-lg border-2 ${
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
//                   className={`w-full px-4 py-3 rounded-lg border-2 ${
//                     errors.password
//                       ? "border-red-500 focus:border-red-500"
//                       : "border-gray-200 focus:border-primary"
//                   }`}
//                 />

//                 <button
//                   type="button"
//                   onClick={() => setShowPassword((prev) => !prev)}
//                   className="absolute right-3 top-3.5 text-gray-500 hover:text-gray-700"
//                 >
//                   {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
//                 </button>
//               </div>

//               {errors.password && (
//                 <p className="text-red-500 text-sm mt-1">{errors.password}</p>
//               )}
//             </div>

//             {/* Forgot Password */}
//             <div className="text-right">
//               <Link
//                 to="/forgot-password"
//                 className="text-primary hover:text-secondary text-sm font-semibold"
//               >
//                 Forgot Password?
//               </Link>
//             </div>

//             {/*  FIXED BUTTON */}
//             <Button
//               type="submit"
//               text={isLoading ? "Signing in..." : "Sign In"}
//               className="w-full bg-primary text-black hover:bg-secondary py-3 font-semibold"
//               disabled={isLoading}
//             />
//           </form>

//           {/* Divider */}
//           <div className="my-6 flex items-center gap-4">
//             <div className="flex-1 h-px bg-gray-200"></div>
//             <span className="text-gray-500 text-sm">New to TMK?</span>
//             <div className="flex-1 h-px bg-gray-200"></div>
//           </div>

//           {/* Sign Up */}
//           <Link
//             to="/signup"
//             className="w-full block text-center py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-lg transition-colors"
//           >
//             Create Account
//           </Link>
//         </div>

//         {/* Footer */}
//         <p className="text-center text-gray-600 text-sm mt-6">
//           By signing in, you agree to our Terms of Service and Privacy Policy
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
