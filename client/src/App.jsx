import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "./components/theme-provider";
import Landing from "./pages/Landing";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
