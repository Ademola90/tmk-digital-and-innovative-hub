import { create } from "zustand";
import type { Course } from "../type";
import { coursesData } from "../data/courseData";

interface CourseState {
  courses: Course[];
  enrolledCourses: string[]; // Course IDs
  favorites: string[]; // Course IDs
  enrollCourse: (courseId: number) => void;
  unenrollCourse: (courseId: number) => void;
  toggleFavorite: (courseId: number) => void;
  isEnrolled: (courseId: number) => boolean;
  isFavorite: (courseId: number) => boolean;
  getEnrolledCourses: () => Course[];
  getFavoriteCourses: () => Course[];
}

export const useCourseStore = create<CourseState>((set, get) => ({
  courses: coursesData,
  enrolledCourses: [],
  favorites: [],

  enrollCourse: (courseId: number) => {
    set((state) => ({
      enrolledCourses: [
        ...new Set([...state.enrolledCourses, courseId.toString()]),
      ],
    }));
  },

  unenrollCourse: (courseId: number) => {
    set((state) => ({
      enrolledCourses: state.enrolledCourses.filter(
        (id) => id !== courseId.toString(),
      ),
    }));
  },

  toggleFavorite: (courseId: number) => {
    set((state) => ({
      favorites: state.favorites.includes(courseId.toString())
        ? state.favorites.filter((id) => id !== courseId.toString())
        : [...state.favorites, courseId.toString()],
    }));
  },

  isEnrolled: (courseId: number) => {
    return get().enrolledCourses.includes(courseId.toString());
  },

  isFavorite: (courseId: number) => {
    return get().favorites.includes(courseId.toString());
  },

  getEnrolledCourses: () => {
    const { courses, enrolledCourses } = get();
    return courses.filter((c) => enrolledCourses.includes(c.id.toString()));
  },

  getFavoriteCourses: () => {
    const { courses, favorites } = get();
    return courses.filter((c) => favorites.includes(c.id.toString()));
  },
}));
