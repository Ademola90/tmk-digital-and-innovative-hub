import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import VerifyOTP from "./pages/auth/VerifyOTP";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Home from "./pages/home";
import Courses from "./pages/courses";
import CourseDetailsNew from "./pages/courseDetails";
import Enrollment from "./pages/enrollment";
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
          </Routes>
        </main>
        <Footer />
        <Toast />
      </div>
    </Router>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./pages/auth/Login";
// import Signup from "./pages/auth/Signup";
// import VerifyOTP from "./pages/auth/VerifyOTP";
// import Home from "./pages/home";
// import Courses from "./pages/courses";
// import CourseDetails from "./pages/courseDetails";
// import Footer from "./components/footer";
// import Toast from "./components/Toast";
// import ForgotPassword from "./pages/auth/ForgotPassword";

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen flex flex-col">
//         <main className="flex-1">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/courses" element={<Courses />} />
//             <Route path="/course/:id" element={<CourseDetails />} />
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

// import React, { useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/home";
// import CourseDetails from "./pages/courseDetails";
// import Courses from "./pages/courses";

// function App() {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   return (
//     <Router>
//       <div className="min-h-screen flex flex-col">
//         <main className="flex-1">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/course/:id" element={<CourseDetails />} />
//             <Route path="/courses" element={<Courses />} />{" "}
//             {/* Placeholder for courses page */}
//           </Routes>
//         </main>
//         {/* <Footer /> */}
//       </div>
//     </Router>
//   );
// }

// export default App;
