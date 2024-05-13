import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Upload from "./pages/Upload.jsx";
import Organize from "./pages/Organize.jsx";
import Analyze from "./pages/Analyze.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/upload" element={<Upload />} />
        <Route path="/organize" element={<Organize />} />
        <Route path="/analyze" element={<Analyze />} />
      </Routes>
    </Router>
  );
}

export default App;
