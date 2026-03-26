import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { useToastStore } from "../../store/toastStore";
import Button from "../../components/ui/buttons";

const VerifyOTP = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const verifyOTP = useAuthStore((state) => state.verifyOTP);
  const isLoading = useAuthStore((state) => state.isLoading);
  const addToast = useToastStore((state) => state.addToast);

  const email = (location.state?.email as string) || "";
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (!email) {
      navigate("/signup");
      return;
    }

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          setCanResend(true);
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [email, navigate]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const otpCode = otp.join("");
    if (otpCode.length !== 6) {
      addToast("Please enter all 6 digits", "error");
      return;
    }

    try {
      await verifyOTP(email, otpCode);
      addToast("Email verified successfully!", "success");
      navigate("/");
    } catch (error: unknown) {
      if (error instanceof Error) {
        addToast(error.message, "error");
      } else {
        addToast("Invalid OTP. Please try again.", "error");
      }

      setOtp(["", "", "", "", "", ""]);
    }
  };

  const handleResend = () => {
    setCanResend(false);
    setTimer(60);
    addToast("OTP sent to your email", "success");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-5 py-12">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-dark mb-2">Verify Email</h1>
          <p className="text-gray-600">
            We've sent a 6-digit code to{" "}
            <span className="font-semibold">{email}</span>
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* OTP Inputs */}
            <div className="flex gap-2 justify-center">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-12 h-12 text-center text-2xl font-bold border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                />
              ))}
            </div>

            {/* Timer & Resend */}
            <div className="text-center">
              {!canResend ? (
                <p className="text-sm text-gray-600">
                  Resend OTP in{" "}
                  <span className="font-semibold text-primary">{timer}s</span>
                </p>
              ) : (
                <button
                  type="button"
                  onClick={handleResend}
                  className="text-primary hover:text-secondary font-semibold text-sm transition-colors"
                >
                  Resend OTP
                </button>
              )}
            </div>

            {/* Verify Button */}
            <Button
              text={isLoading ? "Verifying..." : "Verify Email"}
              onClick={() => {}}
              className="w-full bg-primary text-white hover:bg-secondary py-3 font-semibold"
              disabled={isLoading || otp.some((d) => !d)}
            />
          </form>

          {/* Back to Signup */}
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              Didn't receive a code?{" "}
              <Link
                to="/signup"
                className="text-primary hover:text-secondary font-semibold transition-colors"
              >
                Try signing up again
              </Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-600 text-sm mt-6">
          This code will expire in {Math.floor(timer / 60)}:
          {String(timer % 60).padStart(2, "0")}
        </p>
      </div>
    </div>
  );
};

export default VerifyOTP;
