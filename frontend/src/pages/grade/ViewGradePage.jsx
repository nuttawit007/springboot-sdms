import React, { useState, useEffect } from 'react'
import { getGradeByStudentCode } from '../../api/gradeApi'
import { getStudentByStudentCode } from '../../api/studentApi'
import { useParams, useNavigate } from 'react-router'
import { ArrowLeft, Award } from "lucide-react"
import GradeCard from '../../components/GradeCard'
import CreateButton from '../../components/CreateButton'


const ViewGradePage = () => {
    const { studentCode } = useParams();
    const navigate = useNavigate();
    const [gradeData, setGradeData] = useState([]);
    const [studentData, setStudentData] = useState({});

    useEffect(() => {
        getGradeByStudentCode(studentCode)
            .then(data => {
                setGradeData(data)
            })
            .catch(error => {
                console.error("Error fetching grade data:", error);
            });
    }, [studentCode]);

    useEffect(() => {
        getStudentByStudentCode(studentCode).then(data => {
            setStudentData(data);
        })
        .catch(error => {
            console.error("Error fetching student data:", error);
        });
    }, [studentCode]);

    return (
        <section className='ml-50'>
            <button onClick={() => navigate('/grades')} className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#31487A] transition-colors hover:text-[#1E2E4F] cursor-pointer">
                <ArrowLeft className="h-4 w-4" /> 
                <p>Back to Grades Record</p>
            </button>
            {/* Page header */}
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-semibold tracking-tight text-[#192338]">
                    Grades
                    </h1>
                    <p className="mt-1 text-sm text-[#31487A]/70">
                    {studentData.firstName} {studentData.lastName} - {studentData.studentCode}
                    </p>
                </div>
                <div className='flex items-end gap-2'>
                    {/* Create New Subject */}
                    <CreateButton type={"grades"} studentCode={studentCode}/>
                    {/* Subjects */}
                    <div className="flex items-center gap-2 rounded-lg border border-[#8FB3E2]/30 bg-white px-4 py-2.5 shadow-sm">
                        <Award className="h-4 w-4 text-[#31487A]" />
                        <span className="text-sm font-medium text-[#192338]">
                        {gradeData.length} Subjects
                        </span>
                    </div>
                </div>
            </div>
            {/* Grades */}
            {gradeData.length > 0 && (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {gradeData.map((grade, index) => (
                        <GradeCard grade={grade} index={index} key={index} />
                    ))}
                </div>
            )}
            {gradeData.length === 0 && (
                <p className="text-sm text-[#31487A]/70">No grades available for this student.</p>
            )}
        </section>
    )
}

export default ViewGradePage