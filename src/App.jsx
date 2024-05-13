import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Upload from "./pages/Upload.jsx";
import Organize from "./pages/Organize.jsx";
import Analyze from "./pages/Analyze.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Library from "./pages/Library.jsx";
import Chat from "./pages/Chat.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/upload" element={<Upload />} />
        <Route path="/organize" element={<Organize />} />
        <Route path="/analyze" element={<Analyze />} />
      <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/library" element={<Library />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
