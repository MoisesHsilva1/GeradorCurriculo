import { Routes, Route } from "react-router";
import ResumeTemplate1 from "../pages/ResumeTemplate1";
import ResumeTemplate2 from "../pages/ResumeTemplate2";
import Home from "../pages/Home";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/ResumeTemplateOne" element={<ResumeTemplate1 />} />
      <Route path="/ResumeTemplateTwo" element={<ResumeTemplate2 />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
