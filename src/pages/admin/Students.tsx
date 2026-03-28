import { useState } from "react";
import { Link } from "react-router-dom";
import { HiArrowLeft, HiSearch, HiEye } from "react-icons/hi";
import { useStudentStore } from "../../store/studentStore";

const StudentsManagement = () => {
  const students = useStudentStore((state) => state.students);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCourse, setFilterCourse] = useState("all");
  const [filterPayment, setFilterPayment] = useState("all");

  // Get unique courses from students
  const uniqueCourses = Array.from(new Set(students.map((s) => s.courseName)));

  // Filter students based on search and filters
  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCourse =
      filterCourse === "all" || student.courseName === filterCourse;
    const matchesPayment =
      filterPayment === "all" || student.paymentStatus === filterPayment;

    return matchesSearch && matchesCourse && matchesPayment;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <Link
              to="/admin/dashboard"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4"
            >
              <HiArrowLeft size={20} />
              Back to Dashboard
            </Link>
            <h1 className="text-4xl font-bold text-dark">
              Students Management
            </h1>
            <p className="text-gray-600 mt-1">
              Total: {students.length} students
            </p>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <HiSearch
                className="absolute left-3 top-3 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Filter by Course */}
            <div>
              <select
                value={filterCourse}
                onChange={(e) => setFilterCourse(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Courses</option>
                {uniqueCourses.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </div>

            {/* Filter by Payment Status */}
            <div>
              <select
                value={filterPayment}
                onChange={(e) => setFilterPayment(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Payment Status</option>
                <option value="pending">Pending</option>
                <option value="partial">Partial</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-6 py-3 text-left font-semibold text-gray-700">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-700">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-700">
                    Course
                  </th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-700">
                    Enrollment Date
                  </th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-700">
                    Payment Status
                  </th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-700">
                    Amount Paid
                  </th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.length > 0 ? (
                  filteredStudents.map((student) => (
                    <tr
                      key={student.id}
                      className="border-b border-gray-200 hover:bg-gray-50"
                    >
                      <td className="px-6 py-4">
                        <div className="font-semibold text-gray-900">
                          {student.firstName} {student.lastName}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {student.email}
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {student.courseName}
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {student.enrollmentDate}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
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
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900">
                        ₦{student.amountPaid.toLocaleString()}
                      </td>
                      <td className="px-6 py-4">
                        <Link
                          to={`/admin/student/${student.id}`}
                          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
                        >
                          <HiEye size={18} />
                          View
                        </Link>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-6 py-8 text-center text-gray-500"
                    >
                      No students found matching your criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsManagement;
