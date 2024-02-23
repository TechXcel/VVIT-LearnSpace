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
import Sems from "./components/resources/notes/Sems";
import ViewSubjects from "./components/resources/notes/ViewSubjects";
import Branch from "./components/resources/papers/Branches";
import Sem from "./components/resources/papers/Sems";
import ViewSubject from "./components/resources/papers/ViewSubjects";

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
            <Route path="notes/:branchName" element={<Sems />} />
            <Route path="notes/:branchName/:semId" element={<ViewSubjects />} />
          </Route>
          <Route path="/">
            <Route path="papers" element={<Branch />} />
            <Route path="papers/:branchName" element={<Sem />} />
            <Route path="papers/:branchName/:semId" element={<ViewSubject />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
