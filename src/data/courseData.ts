// import { Course, BlogPost, Instructor } from '../types/index'

import type { BlogPost, Course, Instructor } from "../type";

export const coursesData: Course[] = [
  {
    id: 1,
    title: "It Statistics Data Science And Business Analysis",
    category: "Digital Marketing",
    image:
      "https://images.unsplash.com/photo-1494783367193-149034c05e41?w=400&h=250&fit=crop",
    rating: 4.5,
    price: 60,
    lessons: 10,
    duration: "3 Months",
    frequency: "Twice a week",
    mode: "FULL TIME",
    students: 20,
    instructor: {
      name: "Samantha",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop",
    },
    description:
      "Learn the fundamentals of statistics and data science with real-world business applications. This comprehensive course covers data analysis, visualization, and decision-making strategies.",
  },
  {
    id: 2,
    title: "Beginner Adobe Illustrator For Graphic Design",
    category: "Digital Marketing",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
    rating: 4.5,
    price: 50,
    lessons: 12,
    duration: "3 Months",
    frequency: "Twice a week",
    mode: "ON CAMPUS & ONLINE",
    students: 20,
    instructor: {
      name: "Charles",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop",
    },
    description:
      "Master Adobe Illustrator from basics to professional level. Learn vector design, typography, and create stunning graphics for web and print.",
  },
  {
    id: 3,
    title: "Starting SEO As Your Home Based Business",
    category: "Digital Marketing",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
    rating: 4.5,
    price: 45,
    lessons: 8,
    duration: "2 Months",
    frequency: "Once a week",
    mode: "ONLINE ONLY",
    students: 20,
    instructor: {
      name: "Morgan",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop",
    },
    description:
      "Start your SEO business from home! Learn keyword research, on-page optimization, link building, and client management strategies.",
  },
  {
    id: 4,
    title: "Advanced Photoshop Techniques",
    category: "Digital Marketing",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
    rating: 4.8,
    price: 75,
    lessons: 15,
    duration: "4 Months",
    frequency: "Twice a week",
    mode: "FULL TIME",
    students: 25,
    instructor: {
      name: "Brian Brewer",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop",
    },
    description:
      "Become a Photoshop expert. Master advanced retouching, compositing, and creative techniques used by professional designers.",
  },
  {
    id: 5,
    title: "Social Media Marketing Mastery",
    category: "Digital Marketing",
    image:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=250&fit=crop",
    rating: 4.6,
    price: 55,
    lessons: 11,
    duration: "3 Months",
    frequency: "Twice a week",
    mode: "ON CAMPUS & ONLINE",
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
    title: "Email Marketing & Automation",
    category: "Digital Marketing",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
    rating: 4.4,
    price: 40,
    lessons: 9,
    duration: "2 Months",
    frequency: "Once a week",
    mode: "FULL TIME",
    students: 18,
    instructor: {
      name: "Eddie Leon",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop",
    },
    description:
      "Build powerful email campaigns and automate your marketing. Learn list building, segmentation, and conversion optimization.",
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
