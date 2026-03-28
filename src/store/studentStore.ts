import { create } from "zustand";

export interface StudentEnrollment {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
  courseId: number;
  courseName: string;
  coursePrice: number;
  courseDuration: string;
  courseFrequency: string;
  courseMode: string;
  state: string;
  lga: string;
  enrollmentDate: string;
  referralSource: string[];
  paymentMethod: "Pay Now In Full" | "Pay by Installment" | "Pay Later";
  paymentOption?: "Pay Online" | "Bank Transfer";
  paymentStatus: "pending" | "partial" | "completed";
  amountPaid: number;
  totalAmount: number;
  lastPaymentDate?: string;
  notes?: string;
}

interface StudentState {
  students: StudentEnrollment[];
  addStudent: (student: StudentEnrollment) => void;
  updateStudent: (id: string, updates: Partial<StudentEnrollment>) => void;
  getStudent: (id: string) => StudentEnrollment | undefined;
  getStudentsByCourse: (courseId: number) => StudentEnrollment[];
  getStudentsByPaymentStatus: (
    status: StudentEnrollment["paymentStatus"],
  ) => StudentEnrollment[];
  getTotalRevenue: () => number;
  getPendingPayments: () => StudentEnrollment[];
}

export const useStudentStore = create<StudentState>((set, get) => ({
  students: (() => {
    const stored = localStorage.getItem("tmk_students");
    return stored ? JSON.parse(stored) : [];
  })(),

  addStudent: (student: StudentEnrollment) => {
    set((state) => {
      const newStudents = [
        ...state.students,
        { ...student, id: Date.now().toString() },
      ];
      localStorage.setItem("tmk_students", JSON.stringify(newStudents));
      return { students: newStudents };
    });
  },

  updateStudent: (id: string, updates: Partial<StudentEnrollment>) => {
    set((state) => {
      const newStudents = state.students.map((student) =>
        student.id === id ? { ...student, ...updates } : student,
      );
      localStorage.setItem("tmk_students", JSON.stringify(newStudents));
      return { students: newStudents };
    });
  },

  getStudent: (id: string) => {
    return get().students.find((student) => student.id === id);
  },

  getStudentsByCourse: (courseId: number) => {
    return get().students.filter((student) => student.courseId === courseId);
  },

  getStudentsByPaymentStatus: (status: StudentEnrollment["paymentStatus"]) => {
    return get().students.filter((student) => student.paymentStatus === status);
  },

  getTotalRevenue: () => {
    return get().students.reduce(
      (total, student) => total + student.amountPaid,
      0,
    );
  },

  getPendingPayments: () => {
    return get().students.filter(
      (student) =>
        student.paymentStatus === "pending" ||
        student.paymentStatus === "partial",
    );
  },
}));
