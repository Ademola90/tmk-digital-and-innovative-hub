export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export const faqData: FAQItem[] = [
  {
    id: 1,
    question: "How can I get in touch with your team?",
    answer:
      "You can reach us through the contact form on this page, email us directly, or call our support team. We typically respond within 24 business hours.",
    category: "Support",
  },
  {
    id: 2,
    question: "What courses do you offer?",
    answer:
      "We offer comprehensive courses in Web Development, Mobile Development, Data Science, AI/ML, and Cloud Computing. Each course includes hands-on projects and lifetime access.",
    category: "Courses",
  },
  {
    id: 3,
    question: "Are there any prerequisites for your courses?",
    answer:
      "Most of our beginner courses require no prior experience. Intermediate and advanced courses recommend familiarity with basic programming concepts. Check individual course pages for specific requirements.",
    category: "Courses",
  },
  {
    id: 4,
    question: "Do you offer refunds?",
    answer:
      "Yes, we offer a 30-day money-back guarantee if you're not satisfied with your course. No questions asked.",
    category: "Support",
  },
  {
    id: 5,
    question: "How often do you host events and webinars?",
    answer:
      "We host multiple events every month, including weekly webinars, monthly workshops, and quarterly conferences. Check our Events page for the complete schedule.",
    category: "Events",
  },
  {
    id: 6,
    question: "Can I access courses on mobile devices?",
    answer:
      "Absolutely! Our platform is fully responsive and works seamlessly on all devices. Download our mobile app for offline access.",
    category: "Technical",
  },
  {
    id: 7,
    question: "Do you provide certificates upon completion?",
    answer:
      "Yes, all students receive a verified certificate upon course completion. These certificates are recognized by industry leaders and can be shared on LinkedIn.",
    category: "Courses",
  },
  {
    id: 8,
    question: "How can I become an instructor?",
    answer:
      "We're always looking for talented instructors! Visit our 'Become an Instructor' page to learn about our application process and requirements.",
    category: "Support",
  },
  {
    id: 9,
    question: "Is there a community for students?",
    answer:
      "Yes! We have an active Discord community where students can collaborate, ask questions, and network with peers and instructors.",
    category: "Community",
  },
  {
    id: 10,
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and various local payment methods depending on your region.",
    category: "Support",
  },
];
