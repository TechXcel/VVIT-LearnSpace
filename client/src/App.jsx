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
import FacultyNotesTable from "./components/faculty/notes/FacultyNotesTable";

import FacultyProjectsTable from "./components/faculty/projects/FacultyProjectsTable";
import FacultyAssignments from "./components/faculty/assignments/FacultyAssignments";
import FacultyProblems from "./components/faculty/assignments/problems/FacultyProblems";
import StudentsSubmissions from "./components/faculty/assignments/problems/submissions/StudentsSubmissions";
import SolutionEditor from "./components/faculty/assignments/problems/submissions/SolutionEditor";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import FacultyPapersTable from "./components/faculty/papers/FacultyPapersTable";
import FacultyResearchTable from "./components/faculty/research/FacultyResearchTable";
import StudentPaperTable from "./components/student/papers/StudentPaperTable";
import StudentResearchTable from "./components/student/research/StudentResearchTable";
import PaperTable from "./components/admin/papers/PaperTable";
import ResearchTable from "./components/admin/research/ResearchTable";
import Dashboard from "./components/admin/Dashboard";
import { Dashboard as FacultyDashboard } from "./components/faculty/Dashboard";
import { Dashboard as StudentDashboard } from "./components/student/Dashboard";
import Roadmaps from "./components/resources/roadmaps/Roadmaps";
import Frontend from "./components/resources/roadmaps/Frontend";
import MySubmissions from "./components/student/submissions/MySubmissions";
import StudentEditor from "./components/student/submissions/StudentEditor";
import Researches from "./components/resources/research/Researches";
import NotFound from "./components/common/NotFound";
import Unauthorized from "./components/common/Unauthorized";
import NotAuthenticated from "./components/common/NotAuthenticated";
import AdminSubmissions from "./components/admin/submissions/AdminSubmissions";

function App() {
  const role = useSelector((state) => state.auth.role);
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router>
        <Header />
        <Routes>
          {/* Landing page route */}
          <Route path="/" element={<Landing />} />

          {/* Authentication routes */}
          <Route path="/auth">
            <Route path="signin" element={<Login />} />
            <Route path="signup" element={<Register />} />
          </Route>

          {/* Projects routes */}
          <Route path="/">
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:projectId" element={<ViewProject />} />
          </Route>

          {/*Research routes*/}

          <Route path="/">
            <Route path="research" element={<Researches/>}/>
            
          </Route>

          {/* Notes routes */}
          <Route path="/">
            <Route path="notes" element={<Branches />} />
            <Route path="notes/:branchName" element={<Semesters />} />
            <Route path="notes/:branchName/:semId" element={<Subjects />} />
          </Route>

          {/* Papers routes */}
          <Route path="/">
            <Route path="papers" element={<Branch />} />
            <Route path="papers/:branchName" element={<PapersSemesters />} />
            <Route path="papers/:branchName/:semId" element={<ViewSubject />} />
          </Route>

          

          {/* Assignments routes */}
          <Route path="/assignments">
            <Route index element={<Assignments />} />
            <Route path=":assignmentId" element={<Problems />} />
            {role === "student" && (
              <Route path=":assignmentId/:problemId" element={<Editor />} />
            )}
          </Route>

          

          {/* Roadmap routes */}
          <Route path="/roadmaps">
            <Route index element={<Roadmaps />} />
            <Route path="frontend" element={<Frontend />} />
          </Route>

          {/* Admin routes */}
          {role === "admin" && (
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="students" element={<Students />} />
              <Route path="faculty" element={<Faculty />} />
              <Route path="projects" element={<ProjectsTable />} />
              <Route path="notes" element={<NotesTable />} />
              <Route path="papers" element={<PaperTable />} />
              <Route path="research" element={<ResearchTable />} />
              <Route path="assignments" element={<AdminSubmissions />} />
            </Route>
          )}

          {/* Student routes */}
          {role === "student" && (
            <Route path="/student" element={<StudentLayout />}>
              <Route index element={<StudentDashboard />} />
              <Route path="projects" element={<StudentProjectsTable />} />
              <Route path="notes" element={<StudentNotesTable />} />
              <Route path="papers" element={<StudentPaperTable />} />
              <Route path="research" element={<StudentResearchTable />} />
              <Route path="submissions" element={<MySubmissions />} />
              <Route
                path="submissions/:submissionId"
                element={<StudentEditor />}
              />
            </Route>
          )}

          {/* Faculty routes */}
          {role === "faculty" && (
            <Route path="/faculty" element={<FacultyLayout />}>
              <Route index element={<FacultyDashboard />} />
              <Route path="notes" element={<FacultyNotesTable />} />
              <Route path="projects" element={<FacultyProjectsTable />} />
              <Route path="papers" element={<FacultyPapersTable />} />
              <Route path="research" element={<FacultyResearchTable />} />
              <Route
                path="assignments"
                element={<FacultyAssignments />}
              ></Route>
              <Route
                path="assignments/:assignmentId"
                element={<FacultyProblems />}
              />
              <Route
                path="assignments/:assignmentId/:problemId"
                element={<StudentsSubmissions />}
              />
              <Route
                path="assignments/:assignmentId/:problemId/:submissionId"
                element={<SolutionEditor />}
              />
            </Route>
          )}
          <Route path="*" element={<NotFound />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/unauthenticated" element={<NotAuthenticated />} />
        </Routes>
        <Footer />
        <Toaster position="top-right" reverseOrder={false} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
