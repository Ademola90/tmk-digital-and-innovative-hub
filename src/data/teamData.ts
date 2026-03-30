export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    bio: "Serial entrepreneur with 15+ years in tech education",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Head of Product",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Product strategist passionate about learning experiences",
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "Lead Instructor",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    bio: "Expert in web development and mentoring",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "CTO",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    bio: "Full-stack engineer building scalable platforms",
    social: {
      github: "#",
      linkedin: "#",
    },
  },
  {
    id: 5,
    name: "Lisa Park",
    role: "Design Lead",
    image:
      "https://images.unsplash.com/photo-1507169767897-36f6b9f44924?w=400&h=400&fit=crop",
    bio: "Creative director focused on user experience",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 6,
    name: "James Murphy",
    role: "Community Manager",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    bio: "Building vibrant learning communities",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
];
