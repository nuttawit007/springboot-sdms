import { BrowserRouter, Route, Routes, Navigate } from 'react-router';

import StudentPage from "./pages/student/StudentPage.jsx";
import CreateStudentPage from "./pages/student/CreateStudentPage.jsx";
import EditStudentPage from "./pages/student/EditStudentPage.jsx";
import GradeRecordPage from './pages/grade/GradeRecordPage.jsx';
import ViewGradePage from './pages/grade/ViewGradePage.jsx';
import Sidebar from "./components/Sidebar.jsx";
import EditGradePage from './pages/grade/EditGradePage.jsx';
import CreateGradePage from './pages/grade/CreateGradePage.jsx';


export default function App() {
  return (
      <>
        <BrowserRouter>
          <div className="flex">
            <Sidebar/>
            <div className="flex-1 p-6">
              <Routes>
                <Route path="/" element={<Navigate to="/students" />} /> 
                <Route path="/students" element={<StudentPage/>} />
                <Route path="/create-student" element={<CreateStudentPage/>} />
                <Route path="/edit-student/:studentCode" element={<EditStudentPage/>} />
                <Route path='/grades' element={<GradeRecordPage />} />
                <Route path='/view-grade/:studentCode' element={<ViewGradePage />} />
                <Route path='/edit-grade/:studentCode/:subject' element={<EditGradePage />} />
                <Route path='/create-grade/:studentCode' element={<CreateGradePage />} />

              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </>
    );
  };
