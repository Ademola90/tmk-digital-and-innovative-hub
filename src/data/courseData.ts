// import { Course, BlogPost, Instructor } from '../types/index'

import type { BlogPost, Course, Instructor } from "../type";
import frontendimg from "../assets/frontendimg.png";
import uiuximg from "../assets/uiuximg.png";
import backendimg from "../assets/backendimg.png";
import datascienceimg from "../assets/datascienceimg.png";
import fullstackimg from "../assets/fullstackimg.png";
import digitalmarketingimg from "../assets/digitalmarketingimg.png";
import graphicdesignimg from "../assets/graphicdesignimg.png";

export const coursesData: Course[] = [
  {
    id: 1,
    title: "Frontend Web Development",
    category: "Web",
    image: frontendimg,
    rating: 4.5,
    price: 150000,
    lessons: 10,
    duration: "4 Months",
    frequency: "Three times a week",
    mode: "ONLINE",
    students: 20,
    instructor: {
      name: "Samantha",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop",
    },
    description:
      "Build modern, responsive websites and web applications using HTML, CSS, JavaScript, and frameworks. Learn to create fast, interactive, and visually appealing user interfaces.",
  },
  {
    id: 2,
    title: "UI/UX (Product Design)",
    category: "Design",
    image: uiuximg,
    rating: 4.5,
    price: 120000,
    lessons: 12,
    duration: "4 Months",
    frequency: "Twice a week",
    mode: "ONLINE",
    students: 20,
    instructor: {
      name: "Charles",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop",
    },
    description:
      "Design user-friendly digital products with a focus on usability and experience. Learn wireframing, prototyping, and design tools to create intuitive and engaging interfaces.",
  },
  {
    id: 3,
    title: "Backend Development",
    category: "Web",
    image: backendimg,
    rating: 4.5,
    price: 160000,
    lessons: 8,
    duration: "3 Months",
    frequency: "Three times a week",
    mode: "ONLINE",
    students: 20,
    instructor: {
      name: "Morgan",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop",
    },
    description:
      "Build the engine behind web applications. Learn how to create secure systems, manage data, and handle server-side logic for scalable digital solutions.",
  },
  {
    id: 4,
    title: "Data Science",
    category: "Data Science",
    image: datascienceimg,
    rating: 4.8,
    price: 150000,
    lessons: 15,
    duration: "4 Months",
    frequency: "Three times a week",
    mode: "ONLINE",
    students: 25,
    instructor: {
      name: "Brian Brewer",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop",
    },
    description:
      "Analyze data and uncover valuable insights. Learn how to interpret data, visualize results, and solve real-world problems using data-driven techniques.",
  },
  {
    id: 5,
    title: "Fullstack Web Development",
    category: "Web Development",
    image: fullstackimg,
    rating: 4.6,
    price: 300000,
    lessons: 11,
    duration: "6 Months",
    frequency: "Three times a week",
    mode: "ONLINE",
    students: 22,
    instructor: {
      name: "Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop",
    },
    description:
      "Master social media marketing across all platforms. Learn content creation, audience engagement, and analytics.",
  },
  {
    id: 6,
    title: "Digital Marketing",
    category: "Digital Marketing",
    image: digitalmarketingimg,
    rating: 4.4,
    price: 130000,
    lessons: 9,
    duration: "3 Months",
    frequency: "Twice a week",
    mode: "ONLINE",
    students: 18,
    instructor: {
      name: "Eddie Leon",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop",
    },
    description:
      "Learn how to grow businesses online using proven digital strategies. Master social media, content creation, and online marketing techniques to drive results.",
  },
  {
    id: 7,
    title: "Graphic Design",
    category: "Design",
    image: graphicdesignimg,
    rating: 4.4,
    price: 100000,
    lessons: 9,
    duration: "3 Months",
    frequency: "Twice a week",
    mode: "ONLINE",
    students: 18,
    instructor: {
      name: "Eddie Leon",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop",
    },
    description:
      "Become a skilled graphic designer by learning how to create eye-catching visuals for digital and print. Develop practical skills in branding, social media design, and visual communication.",
  },
];

export const relatedCourses = (courseId: number) => {
  return coursesData
    .filter(
      (course) =>
        course.id !== courseId &&
        course.category ===
          coursesData.find((c) => c.id === courseId)?.category,
    )
    .slice(0, 3);
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title:
      "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
    date: "14 June 2023",
    comments: 10,
    readMore: true,
  },
  {
    id: 2,
    title:
      "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
    date: "21 April 2023",
    comments: 10,
    readMore: true,
  },
  {
    id: 3,
    title:
      "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
    date: "11 June 2023",
    comments: 10,
    readMore: true,
  },
];

export const instructors: Instructor[] = [
  {
    name: "Esther Howard",
    role: "UI/UX Designer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
    rating: 4.9,
  },
  {
    name: "Beverly Hillnoak",
    role: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    rating: 4.8,
  },
  {
    name: "Donald Gorosples",
    role: "Frontend Developer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
    rating: 4.7,
  },
  {
    name: "Eddie Leon",
    role: "Backend Engineer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
    rating: 4.9,
  },
];
