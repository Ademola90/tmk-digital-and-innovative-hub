// src/data/courseDetailsData.ts

export interface AccordionItem {
  id: string;
  title: string;
  content: string | string[];
  hasImage?: boolean;
  imageUrl?: string;
}

export interface CourseDetails {
  courseId: number;
  accordions: AccordionItem[];
  successStories: Array<{
    name: string;
    role: string;
    quote: string;
    image: string;
  }>;
}

export const courseDetailsData: Record<number, CourseDetails> = {
  1: {
    courseId: 1,
    accordions: [
      {
        id: "about",
        title: "About this Course",
        content:
          "Build and deploy robust web applications and apps using Django. Using Django's security implications to create safe web applications with it.\n\nIn this course, you'll learn backend web development using Python and Django from scratch. Python is the most used programming language in the world today, for both web development and Artificial intelligence although Python has several frameworks that is built on it for web development Django which is our choice is one of the most powerful and widely used web frameworks. Through hands-on projects and real-world applications, you'll learn to build scalable, secure, and efficient backend systems that power modern web applications.",
        hasImage: true,
        imageUrl:
          "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
      },
      {
        id: "learn",
        title: "What you will Learn",
        content: [
          "Python Fundamentals: Master the core concepts of Python, including object-oriented programming, data structures, and scripting.",
          "Django Framework: Learn to build full-featured web applications using Django, a high-level Python framework that simplifies backend development.",
          "Database Management: Work with PostgreSQL and Django ORM to efficiently store, retrieve, and manipulate data.",
          "RESTful API Development: Learn how to build and integrate APIs for seamless communication between frontend and backend systems.",
          "Authentication & Security: Implement user authentication, manage sessions, and follow security best practices to protect applications.",
          "Deployment & Scaling: Deploy Django applications to cloud platforms and optimize them for performance and scalability.",
        ],
      },
      {
        id: "who",
        title: "Who Should Take This Course?",
        content: [
          "Beginners who want to start a career in backend development.",
          "Frontend developers looking to become a fullstack web developer.",
          "Tech enthusiasts who want to understand more about software development and how to build AI Applications.",
        ],
      },
      {
        id: "real-world",
        title: "Real-World Applications",
        content: [
          "A fully functional web application using Python Django.",
          "A RESTful API to interact with frontend applications.",
          "A secure authentication system for user management.",
          "How to build AI Applications and integrate third party API and workflow automations.",
        ],
      },
      {
        id: "prerequisites",
        title: "Prerequisites",
        content: [
          "A computer on which you can install software (Windows, MacOS, or Linux)",
          "Laptop Specifications(8gb -16gb RAM, 256SSD or 500gb)",
          "3 Months to learn and work hard to build a career in tech.",
          "No prior programming experience is required. We will start from the very basics",
        ],
      },
      {
        id: "career",
        title: "Career Prospects",
        content:
          "Graduates of this course are well-equipped for roles such as:\n\n• Backend Developer\n• Software Engineer\n• API Developer\n• Full-Stack Developer (when combined with frontend knowledge)\n\nAt Univelcity, we provide career support through mentorship, networking, and our HireMe platform, connecting our graduates with top employers.",
      },
      {
        id: "outline",
        title: "Course Outline",
        content: [
          "Week 1: Introduction to Python Programming",
          "Week 2: Data Structures & Looping Constructs",
          "Week 3: Functions & Methods",
          "Week 4: Object-Oriented Programming(OOP)",
          "Week 5: Building Apps with Django",
          "Week 6: Django Database Models class",
          "Week 7: Django and REST APIs",
          "Week 8: Front-End development tools",
          "Week 9: Django Templates",
          "Week 10: Deploying a Django Project",
          "Week 11: DevOps",
          "Week 12: Personal Project & Graduation",
        ],
      },
      {
        id: "schedule",
        title: "Class Schedule",
        content:
          "Days Of Class: Mondays and Wednesdays\n\nTime: 6:00 PM - 8:00 PM\n\nDuration: 3 Months (12 weeks)\n\nFormat: Live online classes with recorded sessions available for review",
      },
    ],
    successStories: [
      {
        name: "Adekunle Okafor",
        role: "Backend Developer at TechStart",
        quote:
          "The Django course transformed my career. I went from frontend developer to fullstack in just 3 months. The hands-on projects were invaluable.",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      },
      {
        name: "Chioma Eze",
        role: "Junior Software Engineer",
        quote:
          "Best investment I made in my career. The instructors are industry experts and the curriculum is up-to-date with real-world requirements.",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      },
      {
        name: "Tunde Adelabu",
        role: "API Developer at DataFlow",
        quote:
          "I secured a job within 2 weeks of completing the course. The portfolio projects really impressed my employer. Highly recommended!",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      },
    ],
  },
  2: {
    courseId: 2,
    accordions: [
      {
        id: "about",
        title: "About this Course",
        content:
          "Learn frontend web development using React and TypeScript. Build interactive user interfaces and dynamic web applications that users love.",
        hasImage: true,
        imageUrl:
          "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=600&h=400&fit=crop",
      },
      {
        id: "learn",
        title: "What you will Learn",
        content: [
          "React Fundamentals: Components, JSX, and the virtual DOM",
          "State Management: UseState, UseEffect, and advanced patterns",
          "TypeScript: Type safety and advanced TypeScript patterns",
          "Modern CSS: Tailwind CSS and responsive design",
          "API Integration: Fetch, Axios, and REST API consumption",
          "Testing: Unit and integration testing with Jest and React Testing Library",
        ],
      },
      {
        id: "who",
        title: "Who Should Take This Course?",
        content: [
          "Beginners looking to start a career in web development",
          "Backend developers wanting to learn frontend skills",
          "Anyone interested in building modern web applications",
        ],
      },
      {
        id: "real-world",
        title: "Real-World Applications",
        content: [
          "E-commerce applications with shopping cart functionality",
          "Social media feed with real-time updates",
          "Project management dashboard",
          "Real-time chat application",
        ],
      },
      {
        id: "prerequisites",
        title: "Prerequisites",
        content: [
          "Basic HTML and CSS knowledge",
          "Familiarity with JavaScript",
          "A code editor (VS Code recommended)",
          "A laptop with at least 8GB RAM",
        ],
      },
      {
        id: "career",
        title: "Career Prospects",
        content:
          "Graduates can pursue roles such as:\n\n• Frontend Developer\n• React Developer\n• Full-Stack Developer\n• UI/UX Engineer\n\nWith strong portfolio projects, graduates secure positions at leading tech companies.",
      },
      {
        id: "outline",
        title: "Course Outline",
        content: [
          "Week 1: React Basics & JSX",
          "Week 2: Components & Props",
          "Week 3: State & Hooks",
          "Week 4: Event Handling & Forms",
          "Week 5: API Integration",
          "Week 6: Routing with React Router",
          "Week 7: State Management",
          "Week 8: TypeScript Fundamentals",
          "Week 9: Advanced TypeScript with React",
          "Week 10: Testing React Applications",
          "Week 11: Performance Optimization",
          "Week 12: Capstone Project & Deployment",
        ],
      },
      {
        id: "schedule",
        title: "Class Schedule",
        content:
          "Days Of Class: Tuesdays and Thursdays\n\nTime: 6:00 PM - 8:00 PM\n\nDuration: 3 Months (12 weeks)",
      },
    ],
    successStories: [
      {
        name: "Amara Nwosu",
        role: "Frontend Developer at WebDesign Co",
        quote:
          "React course gave me the skills to build production-ready applications. The instructors explained concepts clearly.",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      },
      {
        name: "Jamal Ahmed",
        role: "Senior React Developer",
        quote:
          "The TypeScript section was game-changing. Now I write safer, more maintainable code.",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      },
      {
        name: "Zainab Hassan",
        role: "Full-Stack Developer",
        quote:
          "Combined this with the backend course. Now I can build complete applications from scratch.",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      },
    ],
  },
};

export const getCourseDetails = (
  courseId: number,
): CourseDetails | undefined => {
  return courseDetailsData[courseId];
};
