export const assignments = [
  {
    id: 1,
    title: "JavaScript Basics",
    viewCount: 120,
    description: "Learn the fundamentals of JavaScript programming.",
    tags: ["JavaScript", "Programming"],
    author: {
      name: "John Doe",
      studentId: "20BQ1A0123",
      avatar: "https://example.com/johndoe-avatar.jpg",
    },
    problems: [
      {
        serialNo: 1,
        title: "Introduction to Variables",
        status: "Not Started",
        difficulty: "Easy",
      },
      {
        serialNo: 2,
        title: "Functions and Control Flow",
        status: "In Progress",
        difficulty: "Medium",
      },
    ],
  },
  {
    id: 2,
    title: "React Project",
    viewCount: 98,
    description: "Build a simple React application from scratch.",
    tags: ["React", "Web Development"],
    author: {
      name: "Jane Smith",
      studentId: "20BQ1A0456",
      avatar: "https://example.com/janesmith-avatar.jpg",
    },
    problems: [
      {
        serialNo: 1,
        title: "Setting Up React Environment",
        status: "Completed",
        difficulty: "Easy",
      },
      {
        serialNo: 2,
        title: "Creating Components",
        status: "Not Started",
        difficulty: "Medium",
      },
    ],
  },
];

export const problems = [
  {
    serialNo: 1,
    title: "Introduction to Variables",
    status: "Not Started",
    difficulty: "Easy",
    assignment: "JavaScript Basics",
  },
  {
    serialNo: 2,
    title: "Functions and Control Flow",
    status: "In Progress",
    difficulty: "Medium",
    assignment: "JavaScript Basics",
  },
];
