import Assignment from "@/components/icons/Assignment";
import Note from "@/components/icons/Note";
import Paper from "@/components/icons/Paper";
import Project from "@/components/icons/Project";
import Research from "@/components/icons/Research";

export const sidebarItems = {
  admin: [
    { icon: <Project />, text: "Projects", link: "/admin/projects" },
    { icon: <Note />, text: "Notes", link: "/admin/notes" },
    { icon: <Paper />, text: "Papers", link: "/admin/papers" },
    { icon: <Assignment />, text: "Assignments", link: "/admin/assignments" },
    { icon: <Research />, text: "Research", link: "/admin/research" },
  ],
  student: [
    { icon: <Project />, text: "Projects", link: "/student/projects" },
    { icon: <Note />, text: "Notes", link: "/student/notes" },
    { icon: <Paper />, text: "Papers", link: "/student/papers" },
    { icon: <Assignment />, text: "Assignments", link: "/student/assignments" },
  ],
  faculty: [
    { icon: <Project />, text: "Projects", link: "/faculty/projects" },
    { icon: <Note />, text: "Notes", link: "/faculty/notes" },
    { icon: <Paper />, text: "Papers", link: "/faculty/papers" },
    { icon: <Assignment />, text: "Assignments", link: "/faculty/assignments" },
  ],
};
