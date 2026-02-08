import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { getStudentByStudentCode, updateStudent } from '../../api/studentApi';
import { ArrowLeft } from 'lucide-react';

const EditStudentPage = () => {
    const { studentCode } = useParams();
    const navigate = useNavigate();
    const [studentData, setStudentData] = useState({
        studentCode: '',
        firstName: '',
        lastName: '',
        classroom: '',
        status: 'ACTIVE',
    });

    useEffect(() => {
        getStudentByStudentCode(studentCode).then(data => {
            setStudentData(data);
        }).catch(error => {
            console.error("Error fetching student data:", error);
        });
    }, [studentCode]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudentData(prevData => ({
            ...prevData,
            [name]: value
        }));
        console.log(studentData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateStudent(studentCode, studentData).then(() => {
            navigate('/students');
        }).catch(error => {
            console.error("Error updating student data:", error);
        });
    }

    return (
        <section className='ml-120 mx-auto max-w-2xl'>
            <button onClick={() => navigate('/students')} className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#31487A] transition-colors hover:text-[#1E2E4F] cursor-pointer">
                    <ArrowLeft className="h-4 w-4" /> 
                    <p>Back to Students</p>
            </button>

            <div className="overflow-hidden rounded-xl border border-[#8FB3E2]/30 bg-white shadow-sm">
                {/* Header */}
                <div className="border-b border-[#D9E1F1] bg-[#1E2E4F] px-6 py-5">
                    <h1 className="text-lg font-semibold tracking-tight text-white">
                    Edit Student
                    </h1>
                    <p className="mt-0.5 text-sm text-[#8FB3E2]/80">
                    Update student information below
                    </p>
                </div>
                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-6">
                    {/* StudentCode */}
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="studentCode" className="text-sm font-medium text-[#192338]">Student Code</label>
                        <input type="text" name="studentCode" value={studentData.studentCode} onChange={handleChange} placeholder="Student Code" readOnly className="rounded-lg border border-[#8FB3E2]/40 bg-white px-4 py-2.5 text-sm text-[#8fb3e2] placeholder-[#8FB3E2]/60 outline-none transition-colors focus:border-[#31487A] focus:ring-2 focus:ring-[#31487A]/20"/>
                    </div>
                    {/* First Name */}
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="firstName" className="text-sm font-medium text-[#192338]">First Name</label>
                        <input type="text" name="firstName" value={studentData.firstName} onChange={handleChange} placeholder="First Name" required className="rounded-lg border border-[#8FB3E2]/40 bg-white px-4 py-2.5 text-sm text-[#192338] placeholder-[#8FB3E2]/60 outline-none transition-colors focus:border-[#31487A] focus:ring-2 focus:ring-[#31487A]/20"/>
                    </div>
                    {/* Last Name */}
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="lastName" className="text-sm font-medium text-[#192338]">Last Name</label>
                        <input type="text" name="lastName" value={studentData.lastName} onChange={handleChange} placeholder="Last Name" required className="rounded-lg border border-[#8FB3E2]/40 bg-white px-4 py-2.5 text-sm text-[#192338] placeholder-[#8FB3E2]/60 outline-none transition-colors focus:border-[#31487A] focus:ring-2 focus:ring-[#31487A]/20"/>
                    </div>
                    {/* Classroom */}
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="classroom" className="text-sm font-medium text-[#192338]">Classroom</label>
                        <input type="text" name="classroom" value={studentData.classroom} onChange={handleChange} placeholder="Classroom" required className="rounded-lg border border-[#8FB3E2]/40 bg-white px-4 py-2.5 text-sm text-[#192338] placeholder-[#8FB3E2]/60 outline-none transition-colors focus:border-[#31487A] focus:ring-2 focus:ring-[#31487A]/20"/>
                    </div>
                    {/* Status */}
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="status" className="text-sm font-medium text-[#192338]">Status</label>
                        <select name="status" value={studentData.status} onChange={handleChange} className="rounded-lg border border-[#8FB3E2]/40 bg-white px-4 py-2.5 text-sm text-[#192338] outline-none transition-colors focus:border-[#31487A] focus:ring-2 focus:ring-[#31487A]/20">
                            <option value="ACTIVE">ACTIVE</option>
                            <option value="INACTIVE">INACTIVE</option>
                        </select>
                    </div>
                    <button type="submit" className="mt-4 rounded-lg bg-[#31487A] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#263f6a] focus:outline-none focus:ring-2 focus:ring-[#31487A]/50 cursor-pointer">Submit</button>
                </form>
            </div>
        </section>
    )
}

export default EditStudentPage