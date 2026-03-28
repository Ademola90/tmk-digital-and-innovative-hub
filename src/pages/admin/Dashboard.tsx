import { Link } from "react-router-dom";
import {
  HiUsers,
  HiCreditCard,
  HiChartBar,
  HiArrowRight,
} from "react-icons/hi";
import { useStudentStore } from "../../store/studentStore";
import { coursesData } from "../../data/courseData";

const AdminDashboard = () => {
  const students = useStudentStore((state) => state.students);
  const getTotalRevenue = useStudentStore((state) => state.getTotalRevenue);
  const getPendingPayments = useStudentStore(
    (state) => state.getPendingPayments,
  );

  const totalRevenue = getTotalRevenue();
  const pendingPayments = getPendingPayments();
  const totalStudents = students.length;
  const completedPayments = students.filter(
    (s) => s.paymentStatus === "completed",
  ).length;

  // Get stats by course
  const courseStats = coursesData.map((course) => {
    const courseStudents = students.filter((s) => s.courseId === course.id);
    return {
      courseName: course.title,
      totalEnrolled: courseStudents.length,
      revenue: courseStudents.reduce((sum, s) => sum + s.amountPaid, 0),
    };
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-dark mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">
            Track students, payments, and course analytics
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Total Students */}
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">
                  Total Students
                </p>
                <p className="text-3xl font-bold text-dark mt-2">
                  {totalStudents}
                </p>
              </div>
              <HiUsers size={32} className="text-blue-500 opacity-20" />
            </div>
          </div>

          {/* Total Revenue */}
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">
                  Total Revenue
                </p>
                <p className="text-3xl font-bold text-dark mt-2">
                  ₦{(totalRevenue / 1000000).toFixed(1)}M
                </p>
              </div>
              <HiCreditCard size={32} className="text-green-500 opacity-20" />
            </div>
          </div>

          {/* Pending Payments */}
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-yellow-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">
                  Pending Payments
                </p>
                <p className="text-3xl font-bold text-dark mt-2">
                  {pendingPayments.length}
                </p>
              </div>
              <HiChartBar size={32} className="text-yellow-500 opacity-20" />
            </div>
            <p className="text-xs text-gray-500 mt-2">
              ₦
              {pendingPayments
                .reduce((sum, s) => sum + (s.totalAmount - s.amountPaid), 0)
                .toLocaleString()}{" "}
              outstanding
            </p>
          </div>

          {/* Completed Payments */}
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-teal-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">
                  Completed Payments
                </p>
                <p className="text-3xl font-bold text-dark mt-2">
                  {completedPayments}
                </p>
              </div>
              <HiCreditCard size={32} className="text-teal-500 opacity-20" />
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Link
            to="/admin/students"
            className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-dark mb-1">
                  Manage Students
                </h3>
                <p className="text-sm text-gray-600">
                  View and manage all student enrollments
                </p>
              </div>
              <HiArrowRight
                size={24}
                className="text-gray-400 group-hover:text-blue-500 transition-colors"
              />
            </div>
          </Link>

          <Link
            to="/admin/payments"
            className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-dark mb-1">
                  Payment Tracking
                </h3>
                <p className="text-sm text-gray-600">
                  Monitor payment status and history
                </p>
              </div>
              <HiArrowRight
                size={24}
                className="text-gray-400 group-hover:text-green-500 transition-colors"
              />
            </div>
          </Link>

          <Link
            to="/admin/analytics"
            className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-dark mb-1">
                  Course Analytics
                </h3>
                <p className="text-sm text-gray-600">
                  View enrollment and revenue by course
                </p>
              </div>
              <HiArrowRight
                size={24}
                className="text-gray-400 group-hover:text-teal-500 transition-colors"
              />
            </div>
          </Link>
        </div>

        {/* Course Performance */}
        {courseStats.length > 0 && (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-dark">
                Course Performance
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-6 py-3 text-left font-semibold text-gray-700">
                      Course
                    </th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-700">
                      Enrollments
                    </th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-700">
                      Revenue
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {courseStats.map((stat, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-gray-200 hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 text-gray-900">
                        {stat.courseName}
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {stat.totalEnrolled}
                      </td>
                      <td className="px-6 py-4 font-semibold text-green-600">
                        ₦{stat.revenue.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
