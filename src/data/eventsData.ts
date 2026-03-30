export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  type: "webinar" | "workshop" | "conference" | "meetup";
  location: string;
  description: string;
  image: string;
  capacity: number;
  registered: number;
  speaker?: string;
  tags: string[];
  status: "upcoming" | "past" | "sold-out";
}

export const eventsData: Event[] = [
  {
    id: 1,
    title: "Advanced React Patterns & Performance Optimization",
    date: "April 15, 2024",
    time: "2:00 PM - 4:00 PM",
    type: "workshop",
    location: "Online - Zoom",
    description:
      "Deep dive into advanced React patterns, hooks optimization, and performance best practices. Perfect for intermediate to advanced developers.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    capacity: 100,
    registered: 87,
    speaker: "Sarah Johnson",
    tags: ["React", "Performance", "JavaScript"],
    status: "upcoming",
  },
  {
    id: 2,
    title: "Full-Stack AI Integration Workshop",
    date: "April 22, 2024",
    time: "3:00 PM - 5:30 PM",
    type: "workshop",
    location: "Online - Zoom",
    description:
      "Learn how to integrate AI models into your full-stack applications. From API calls to prompt engineering.",
    image:
      "https://images.unsplash.com/photo-1677442d019cecf8e5aa1e36a3d86ad1f4c2dcb7?w=500&h=300&fit=crop",
    capacity: 80,
    registered: 65,
    speaker: "Michael Chen",
    tags: ["AI", "APIs", "Full-Stack"],
    status: "upcoming",
  },
  {
    id: 3,
    title: "Web Design Trends 2024",
    date: "April 10, 2024",
    time: "1:00 PM - 2:00 PM",
    type: "webinar",
    location: "Online - YouTube Live",
    description:
      "Explore the latest web design trends and best practices shaping the industry in 2024.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
    capacity: 500,
    registered: 342,
    speaker: "Lisa Park",
    tags: ["Design", "Web", "Trends"],
    status: "upcoming",
  },
  {
    id: 4,
    title: "TypeScript Mastery Course Launch",
    date: "May 1, 2024",
    time: "6:00 PM - 7:00 PM",
    type: "conference",
    location: "Virtual & In-Person",
    description:
      "Join us for the official launch of our comprehensive TypeScript course. Early bird pricing available!",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
    capacity: 150,
    registered: 150,
    speaker: "David Rodriguez",
    tags: ["TypeScript", "Course", "Launch"],
    status: "sold-out",
  },
  {
    id: 5,
    title: "Developer Networking Meetup",
    date: "March 28, 2024",
    time: "5:30 PM - 7:00 PM",
    type: "meetup",
    location: "Coffee Shop Downtown",
    description:
      "Casual networking event for developers to connect, share experiences, and discuss projects.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    capacity: 50,
    registered: 42,
    speaker: "James Murphy",
    tags: ["Networking", "Community", "Meetup"],
    status: "past",
  },
  {
    id: 6,
    title: "Database Design Best Practices",
    date: "March 20, 2024",
    time: "4:00 PM - 5:30 PM",
    type: "webinar",
    location: "Online - Zoom",
    description:
      "Learn how to design scalable, efficient databases. Covers SQL, NoSQL, and optimization techniques.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=500&h=300&fit=crop",
    capacity: 200,
    registered: 156,
    speaker: "Emma Williams",
    tags: ["Database", "Backend", "SQL"],
    status: "past",
  },
];
