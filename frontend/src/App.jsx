import { BrowserRouter, Route, Routes, Navigate } from 'react-router';

import StudentPage from "./pages/student/StudentPage.jsx";
import CreateStudentPage from "./pages/student/CreateStudentPage.jsx";
import EditStudentPage from "./pages/student/EditStudentPage.jsx";
import Sidebar from "./components/Sidebar.jsx";


export default function App() {
  return (
      <>
        <BrowserRouter>
          <div className="flex">
            <Sidebar />
            <div className="flex-1 p-6">
              <Routes>
                <Route path="/" element={<Navigate to="/students" />} /> 
                <Route path="/students" element={<StudentPage/>} />
                <Route path="/create-student" element={<CreateStudentPage/>} />
                <Route path="/edit-student/:id" element={<EditStudentPage/>} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </>
    );
  };
