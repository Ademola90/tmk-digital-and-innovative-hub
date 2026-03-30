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

export const successStories: SuccessStory[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechStartup Inc.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    quote:
      "This platform transformed how I approach web development. The courses are comprehensive and the community support is outstanding.",
    achievement: "Advanced from Junior to Senior Developer in 8 months",
    rating: 5,
  },
  {
    id: 2,
    name: "Ahmed Hassan",
    role: "Full Stack Developer",
    company: "Digital Solutions Co.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    quote:
      "The hands-on projects and real-world examples helped me land a job at my dream company. Highly recommended!",
    achievement: "Secured Senior Developer role with 40% salary increase",
    rating: 5,
  },
  {
    id: 3,
    name: "Maria Garcia",
    role: "UX Designer",
    company: "Creative Agency",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    quote:
      "The curriculum is constantly updated with the latest industry trends. Worth every penny invested.",
    achievement: "Launched 5 successful projects with clients in 6 months",
    rating: 5,
  },
  {
    id: 4,
    name: "David Chen",
    role: "Tech Lead",
    company: "Innovation Labs",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    quote:
      "The mentorship program connected me with industry experts. Game-changer for my career.",
    achievement: "Promoted to Tech Lead leading a team of 8 engineers",
    rating: 5,
  },
  {
    id: 5,
    name: "Lisa Wong",
    role: "Freelance Developer",
    company: "Indie Projects",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69da36?w=400&h=400&fit=crop",
    quote:
      "Started as a beginner, now I'm building projects for Fortune 500 companies. Best investment ever!",
    achievement: "Built freelance business generating $50K+ monthly revenue",
    rating: 5,
  },
  {
    id: 6,
    name: "Michael Roberts",
    role: "Product Engineer",
    company: "Global Tech Corp",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    quote:
      "The depth of knowledge and practical skills taught here are unmatched. Transformed my career.",
    achievement: "Transitioned from Manual QA to Product Engineering role",
    rating: 5,
  },
];
