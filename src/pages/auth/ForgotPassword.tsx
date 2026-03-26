import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useAuthStore } from "../../store/authStore";
import { useToastStore } from "../../store/toastStore";
import Button from "../../components/ui/buttons";

type FormErrors = {
  email: string;
  password: string;
  confirmPassword: string;
};

const ForgotPassword = () => {
  const navigate = useNavigate();
  const resetPassword = useAuthStore((state) => state.resetPassword);
  const isLoading = useAuthStore((state) => state.isLoading);
  const addToast = useToastStore((state) => state.addToast);

  const [step, setStep] = useState<"email" | "otp" | "password">("email");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    otp: ["", "", "", "", "", ""],
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<FormErrors>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Step 1: Email Verification
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email) {
      setErrors((prev) => ({ ...prev, email: "Email is required" }));
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrors((prev) => ({ ...prev, email: "Email is invalid" }));
      return;
    }

    try {
      addToast("OTP sent to your email", "success");
      setStep("otp");
      setErrors({ email: "", password: "", confirmPassword: "" });
    } catch (error: unknown) {
      if (error instanceof Error) {
        addToast(error.message, "error");
      } else {
        addToast("Failed to send OTP", "error");
      }
    }
  };

  // Step 2: OTP Verification
  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...formData.otp];
    newOtp[index] = value;
    setFormData((prev) => ({ ...prev, otp: newOtp }));

    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const otpCode = formData.otp.join("");
    if (otpCode.length !== 6) {
      addToast("Please enter all 6 digits", "error");
      return;
    }

    addToast("OTP verified successfully", "success");
    setStep("password");
  };

  // Step 3: Password Reset
  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ FIXED
    const newErrors = {
      email: "",
      password: "",
      confirmPassword: "",
    } as FormErrors;

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

    if (newErrors.password || newErrors.confirmPassword) {
      addToast("Please fix the errors above", "error");
      return;
    }

    try {
      await resetPassword(formData.email, formData.password);
      addToast("Password reset successfully!", "success");
      navigate("/login");
    } catch (error: unknown) {
      // ✅ FIXED
      if (error instanceof Error) {
        addToast(error.message, "error");
      } else {
        addToast("Failed to reset password", "error");
      }
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-5 py-12">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-dark mb-2">Reset Password</h1>
          <p className="text-gray-600">
            Don't worry, we'll help you reset your password
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Step 1: Email */}
          {step === "email" && (
            <form onSubmit={handleEmailSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-dark mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData((prev) => ({ ...prev, email: e.target.value }));
                    setErrors((prev) => ({ ...prev, email: "" }));
                  }}
                  placeholder="you@example.com"
                  className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors ${
                    errors.email
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-200 focus:border-primary"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <Button
                text={isLoading ? "Sending..." : "Send OTP"}
                type="submit"
                onClick={() => {}}
                className="w-full bg-primary text-white hover:bg-secondary py-3 font-semibold"
                disabled={isLoading}
              />
            </form>
          )}

          {/* Step 2: OTP */}
          {step === "otp" && (
            <form onSubmit={handleOtpSubmit} className="space-y-6">
              <div>
                <p className="text-gray-600 text-sm mb-4">
                  Enter the 6-digit code sent to{" "}
                  <span className="font-semibold">{formData.email}</span>
                </p>
                <div className="flex gap-2 justify-center">
                  {formData.otp.map((digit, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      className="w-12 h-12 text-center text-2xl font-bold border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                    />
                  ))}
                </div>
              </div>

              <Button
                text={isLoading ? "Verifying..." : "Verify OTP"}
                onClick={() => {}}
                className="w-full bg-primary text-white hover:bg-secondary py-3 font-semibold"
                disabled={isLoading || formData.otp.some((d) => !d)}
              />

              <button
                type="button"
                onClick={() => setStep("email")}
                className="w-full text-center text-primary hover:text-secondary font-semibold text-sm transition-colors"
              >
                Back to Email
              </button>
            </form>
          )}

          {/* Step 3: New Password */}
          {step === "password" && (
            <form onSubmit={handlePasswordSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-dark mb-2">
                  New Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => {
                      setFormData((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }));
                      setErrors((prev) => ({ ...prev, password: "" }));
                    }}
                    placeholder="••••••••"
                    className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors ${
                      errors.password
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-200 focus:border-primary"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3.5 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? (
                      <HiEyeOff size={20} />
                    ) : (
                      <HiEye size={20} />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-dark mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={(e) => {
                      setFormData((prev) => ({
                        ...prev,
                        confirmPassword: e.target.value,
                      }));
                      setErrors((prev) => ({ ...prev, confirmPassword: "" }));
                    }}
                    placeholder="••••••••"
                    className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors ${
                      errors.confirmPassword
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-200 focus:border-primary"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-3.5 text-gray-500 hover:text-gray-700"
                  >
                    {showConfirmPassword ? (
                      <HiEyeOff size={20} />
                    ) : (
                      <HiEye size={20} />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              <Button
                text={isLoading ? "Resetting..." : "Reset Password"}
                onClick={() => {}}
                className="w-full bg-primary text-white hover:bg-secondary py-3 font-semibold"
                disabled={isLoading}
              />
            </form>
          )}

          {/* Back to Login */}
          <div className="mt-6 text-center">
            <Link
              to="/login"
              className="text-primary hover:text-secondary font-semibold text-sm transition-colors"
            >
              Back to Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
