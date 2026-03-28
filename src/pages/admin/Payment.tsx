import { useState } from "react";
import { Link } from "react-router-dom";
import { HiArrowLeft, HiSearch } from "react-icons/hi";
import { useStudentStore } from "../../store/studentStore";

const PaymentTracking = () => {
  const students = useStudentStore((state) => state.students);
  const getTotalRevenue = useStudentStore((state) => state.getTotalRevenue);
  const getPendingPayments = useStudentStore(
    (state) => state.getPendingPayments,
  );
  const [searchTerm, setSearchTerm] = useState("");

  const totalRevenue = getTotalRevenue();
  const pendingPayments = getPendingPayments();
  const outstandingAmount = pendingPayments.reduce(
    (sum, s) => sum + (s.totalAmount - s.amountPaid),
    0,
  );

  // Filter students based on search
  const filteredStudents = students.filter(
    (student) =>
      student.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/admin/dashboard"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4"
          >
            <HiArrowLeft size={20} />
            Back to Dashboard
          </Link>
          <h1 className="text-4xl font-bold text-dark">Payment Tracking</h1>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm font-medium">Total Revenue</p>
            <p className="text-3xl font-bold text-green-600 mt-2">
              ₦{(totalRevenue / 1000000).toFixed(1)}M
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm font-medium">
              Outstanding Amount
            </p>
            <p className="text-3xl font-bold text-red-600 mt-2">
              ₦{(outstandingAmount / 1000000).toFixed(1)}M
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm font-medium">
              Pending Payments
            </p>
            <p className="text-3xl font-bold text-yellow-600 mt-2">
              {pendingPayments.length}
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="relative">
            <HiSearch
              className="absolute left-3 top-3 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search by student name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Payment Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-6 py-3 text-left font-semibold text-gray-700">
                    Student Name
                  </th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-700">
                    Course
                  </th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-700">
                    Total Amount
                  </th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-700">
                    Amount Paid
                  </th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-700">
                    Outstanding
                  </th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-700">
                    Payment Method
                  </th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-700">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-700">
                    Last Payment
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
                      <td className="px-6 py-4 font-semibold text-gray-900">
                        {student.firstName} {student.lastName}
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {student.courseName}
                      </td>
                      <td className="px-6 py-4 font-semibold">
                        ₦{student.totalAmount.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-green-600 font-semibold">
                        ₦{student.amountPaid.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-red-600 font-semibold">
                        ₦
                        {(
                          student.totalAmount - student.amountPaid
                        ).toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {student.paymentMethod}
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
                      <td className="px-6 py-4 text-gray-600">
                        {student.lastPaymentDate || "N/A"}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={8}
                      className="px-6 py-8 text-center text-gray-500"
                    >
                      No payment records found.
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

export default PaymentTracking;
