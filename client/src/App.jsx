import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import Landing from "./pages/Landing";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AddProject from "./components/project/AddProject";
import Header from "./components/common/header/Header";
import Footer from "./components/common/Footer";

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

          <Route path="/project">
            <Route path="addProject" element={<AddProject />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
