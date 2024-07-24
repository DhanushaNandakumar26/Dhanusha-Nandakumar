import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import './App.css'
import Experience from "./pages/Experience/Experience";
import Projects from "./pages/Projects/Projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}>
        </Route>
        <Route path="/experience" element={<Experience />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
