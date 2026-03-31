export interface SuccessStory {
  id: number;
  name: string;
  role: string;
  company?: string;
  image: string;
  quote: string;
  achievement: string;
  rating: number;
}
import testone from "../assets/testone.png";
import testtwo from "../assets/testtwo.png";
import testthree from "../assets/testthree.png";
import testfour from "../assets/testfour.png";
import testfive from "../assets/testfive.png";
import testsix from "../assets/testsix.png";

export const successStories: SuccessStory[] = [
  {
    id: 1,
    name: "Olaniyi Oluwaseun",
    role: "Frontend Web Developer",
    company: "TechStartup Inc.",
    image: testone,
    quote:
      "The Web Development program gave me a solid foundation in HTML, CSS, JavaScript, and React. I can now build modern, responsive websites confidently.",
    achievement: "Built and deployed 10+ real-world responsive websites",
    rating: 5,
  },
  {
    id: 2,
    name: "Olaoluwa Grace",
    role: "Fullstack Web Developer",
    company: "Digital Solutions Co.",
    image: testtwo,
    quote:
      "From frontend to backend, the Fullstack Development training helped me understand how to build complete web applications with real-world tools.",
    achievement:
      "Developed and deployed a fullstack app with authentication and payment integration",
    rating: 5,
  },
  {
    id: 3,
    name: "Ahmed Hassan",
    role: "UI/UX Designer (Product Designer)",
    company: "Creative Agency",
    image: testthree,
    quote:
      "The UI/UX Design course completely changed how I design products. I now create user-centered designs that are both functional and visually appealing.",
    achievement: "Designed 5+ user-friendly mobile and web applications",
    rating: 5,
  },
  {
    id: 4,
    name: "Adewale David",
    role: "Backend Developer",
    company: "Innovation Labs",
    image: testfour,
    quote:
      "The Backend Development training helped me master APIs, databases, and server-side logic. I can now build secure and scalable systems.",
    achievement:
      "Built RESTful APIs and handled database architecture for production apps",
    rating: 5,
  },
  {
    id: 5,
    name: "Adisa Flurence",
    role: "Digital Marketer",
    company: "Indie Projects",
    image: testfive,
    quote:
      "The Digital Marketing program taught me SEO, social media marketing, and paid ads. I now run campaigns that bring real results.",
    achievement:
      "Managed ad campaigns generating consistent leads and sales growth",
    rating: 5,
  },
  {
    id: 6,
    name: "Michael Adeolu",
    role: "Graphic Designer",
    company: "Global Tech Corp",
    image: testsix,
    quote:
      "The Graphic Design training improved my creativity and technical skills. I now create professional designs that attract clients.",
    achievement:
      "Designed branding materials for multiple businesses and startups",
    rating: 5,
  },
];
