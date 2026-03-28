import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import VerifyOTP from "./pages/auth/VerifyOTP";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Home from "./pages/home";
import Courses from "./pages/courses";
import CourseDetailsNew from "./pages/courseDetails";
import Enrollment from "./pages/enrollment";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminDashboard from "./pages/admin/Dashboard";
import StudentsManagement from "./pages/admin/Students";
import PaymentTracking from "./pages/admin/Payment";
import StudentDetails from "./pages/admin/StudentDetails";
import Footer from "./components/footer";
import Toast from "./components/Toast";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course/:id" element={<CourseDetailsNew />} />
            <Route path="/enroll/:id" element={<Enrollment />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/verify-otp" element={<VerifyOTP />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* Admin Routes */}
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute requiredRole="admin">
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/students"
              element={
                <ProtectedRoute requiredRole="admin">
                  <StudentsManagement />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/payments"
              element={
                <ProtectedRoute requiredRole="admin">
                  <PaymentTracking />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/student/:id"
              element={
                <ProtectedRoute requiredRole="admin">
                  <StudentDetails />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
        <Toast />
      </div>
    </Router>
  );
}

export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./pages/auth/Login";
// import Signup from "./pages/auth/Signup";
// import VerifyOTP from "./pages/auth/VerifyOTP";
// import ForgotPassword from "./pages/auth/ForgotPassword";
// import Home from "./pages/home";
// import Courses from "./pages/courses";
// import CourseDetailsNew from "./pages/courseDetails";
// import Enrollment from "./pages/enrollment";
// import Footer from "./components/footer";
// import Toast from "./components/Toast";

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen flex flex-col">
//         <main className="flex-1">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/courses" element={<Courses />} />
//             <Route path="/course/:id" element={<CourseDetailsNew />} />
//             <Route path="/enroll/:id" element={<Enrollment />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/verify-otp" element={<VerifyOTP />} />
//             <Route path="/forgot-password" element={<ForgotPassword />} />
//           </Routes>
//         </main>
//         <Footer />
//         <Toast />
//       </div>
//     </Router>
//   );
// }

// export default App;
