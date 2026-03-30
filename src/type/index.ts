// src/type/index.ts

export interface Course {
  id: number;
  title: string;
  category: string;
  image: string;
  rating: number;
  price: number;
  lessons: number;
  duration: string;
  frequency?: string;
  mode?: string;
  students: number;
  instructor: {
    name: string;
    avatar: string;
  };
  description?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  image: string;
  date: string;
  comments: number;
  readMore?: boolean;
}

export interface Instructor {
  name: string;
  role: string;
  image: string;
  rating: number;
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
  avatar: string;
}
