import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import Landing from "./pages/Landing";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Header from "./components/common/header/Header";
import Footer from "./components/common/Footer";
import Projects from "./components/projects/Projects";
import ViewProject from "./components/projects/ViewProject";
import Branches from "./components/resources/notes/Branches";

import AdminLayout from "./layouts/AdminLayout";
import Branch from "./components/resources/papers/Branches";
import ViewSubject from "./components/resources/papers/ViewSubjects";
import Students from "./components/admin/students/Students";
import Faculty from "./components/admin/faculty/Faculty";
import ProjectsTable from "./components/admin/projects/ProjectsTable";
import NotesTable from "./components/admin/notes/NotesTable";

import Assignments from "./components/resources/assignments/Assignments";
import Problems from "./components/resources/assignments/Problems";
import Editor from "./components/resources/assignments/editor/Editor";

import StudentLayout from "./layouts/StudentLayout";
import StudentProjectsTable from "./components/student/projects/StudentProjectsTable";
import StudentNotesTable from "./components/student/notes/StudentNotesTable";

import Semesters from "./components/resources/notes/Semesters";
import PapersSemesters from "./components/resources/papers/PapersSemesters";
import Subjects from "./components/resources/notes/Subjects";
import FacultyLayout from "./layouts/FacultyLayout";
import FacultyNotesTable from "./components/admin/faculty/FacultyNotesTable";
import FacultyProjectsTable from "./components/admin/faculty/FacultyProjectsTable";
import FacultyAssignments from "./components/faculty/assignments/FacultyAssignments";
import FacultyProblems from "./components/faculty/assignments/problems/FacultyProblems";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />

          <Route path="/auth">
            <Route path="signin" element={<Login />} />
            <Route path="signup" element={<Register />} />
          </Route>

          <Route path="/">
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:projectId" element={<ViewProject />} />
          </Route>

          <Route path="/">
            <Route path="notes" element={<Branches />} />
            <Route path="notes/:branchName" element={<Semesters />} />
            <Route path="notes/:branchName/:semId" element={<Subjects />} />
          </Route>

          <Route path="/">
            <Route path="papers" element={<Branch />} />
            <Route path="papers/:branchName" element={<PapersSemesters />} />
            <Route path="papers/:branchName/:semId" element={<ViewSubject />} />
          </Route>

          <Route path="/assignments">
            <Route index element={<Assignments />} />
            <Route path=":assignmentId" element={<Problems />} />
            <Route path=":assignmentId/:problemId" element={<Editor />} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route path="students" element={<Students />} />
            <Route path="faculty" element={<Faculty />} />
            <Route path="projects" element={<ProjectsTable />} />
            <Route path="notes" element={<NotesTable />} />
          </Route>
          <Route path="/student" element={<StudentLayout />}>
            <Route path="projects" element={<StudentProjectsTable />} />
            <Route path="notes" element={<StudentNotesTable />} />
          </Route>
          <Route path="/faculty" element={<FacultyLayout />}>
            <Route path="notes" element={<FacultyNotesTable />} />
            <Route path="projects" element={<FacultyProjectsTable />} />
            <Route path="assignments" element={<FacultyAssignments />}></Route>
            <Route
              path="assignments/:assignmentId"
              element={<FacultyProblems />}
            />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
