import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router';
import { createGradeRecord } from '../../api/gradeApi';
import { ArrowLeft, PlusCircle, Lock } from 'lucide-react';

const CreateGradePage = () => {
    const { studentCode } = useParams();
    const navigate = useNavigate();
    const [gradeData, setGradeData] = useState({
        studentCode: studentCode,
        subject: '',
        score: 0,
        term: '',
        gradeLetter: 'F',
        remark: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        createGradeRecord(gradeData)
        .then(() => {
            navigate(-1)
        })
        .catch(error => {
            console.error("Failed to create grade record:", error);
        });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setGradeData(prevData => ({
            ...prevData,
            [name]: value
        }));
        if (name === 'score') {
            const gradeLetter = handleGradeLetter(Number(value));
            setGradeData(prevData => ({
                ...prevData,
                gradeLetter: gradeLetter
            }));
        }
    }

    const handleGradeLetter = (score) => {
        if (score >= 80) return 'A';
        if (score >= 70) return 'B';
        if (score >= 60) return 'C';
        if (score > 50) return 'D';
        return 'F';
    }

    const getGradeColor = (grade) => {
        switch (grade) {
            case "A": return "bg-[#31487A] text-white"
            case "B": return "bg-[#8FB3E2] text-[#192338]"
            case "C": return "bg-[#D9E1F1] text-[#192338]"
            case "D": return "bg-[#D9E1F1]/60 text-[#31487A]"
            default: return "bg-red-100 text-red-600"
        }
    }

    return (
        <section className='ml-120 mx-auto max-w-2xl'>
            <button onClick={() => navigate(-1)} className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#31487A] transition-colors hover:text-[#1E2E4F] cursor-pointer">
                <ArrowLeft className="h-4 w-4" /> 
                <p>Back to Grades</p>
            </button>

            <div className="overflow-hidden rounded-xl border border-[#8FB3E2]/30 bg-white shadow-sm">
                {/* Header */}
                <div className="border-b border-[#D9E1F1] bg-[#1E2E4F] px-6 py-5">
                    <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#31487A]">
                            <PlusCircle className="h-4.5 w-4.5 text-white" />
                        </div>
                        <div>
                            <h1 className="text-lg font-semibold tracking-tight text-white">
                                Create Grade
                            </h1>
                            <p className="mt-0.5 text-sm text-[#8FB3E2]/80">
                                Add a new grade record for the student
                            </p>
                        </div>
                    </div>
                </div>
                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-6">
                    {/* Student Code */}
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="studentCode"className="flex items-center gap-1.5 text-sm font-medium text-[#192338]">
                            Student Code
                            <Lock className="h-3 w-3 text-[#8FB3E2]" />
                        </label>
                        <input type="text" name="studentCode" value={gradeData.studentCode} onChange={handleChange} readOnly className="cursor-not-allowed rounded-lg border border-[#D9E1F1] bg-[#D9E1F1]/30 px-4 py-2.5 text-sm text-[#31487A]/70 outline-none"/>
                    </div>
                    {/* Subject & Term */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        {/* Subject */}
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="subject" className="text-sm font-medium text-[#192338]">
                                Subject
                            </label>
                            <input type="text" id="subject" name="subject" value={gradeData.subject} onChange={handleChange} placeholder='Math' required className="rounded-lg border border-[#8FB3E2]/40 bg-white px-4 py-2.5 text-sm text-[#192338] placeholder-[#8FB3E2]/60 outline-none transition-colors focus:border-[#31487A] focus:ring-2 focus:ring-[#31487A]/20"/>
                        </div>
                        {/* Term */}
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="term" className="text-sm font-medium text-[#192338]">
                                Term
                            </label>
                            <input type="text" id="term" name="term" value={gradeData.term} onChange={handleChange} placeholder='2569/1' required className="rounded-lg border border-[#8FB3E2]/40 bg-white px-4 py-2.5 text-sm text-[#192338] placeholder-[#8FB3E2]/60 outline-none transition-colors focus:border-[#31487A] focus:ring-2 focus:ring-[#31487A]/20"/>
                        </div>
                    </div>
                    {/* Score & Grade Letter */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        {/* Score */}
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="score" className="text-sm font-medium text-[#192338]">
                                Score
                            </label>
                            <input type="number" id="score" name="score" min={0} max={100} value={gradeData.score} onChange={handleChange} required className="rounded-lg border border-[#8FB3E2]/40 bg-white px-4 py-2.5 text-sm text-[#192338] placeholder-[#8FB3E2]/60 outline-none transition-colors focus:border-[#31487A] focus:ring-2 focus:ring-[#31487A]/20"/>
                        </div>
                        {/* Grade Letter */}
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="gradeLetter" className="flex items-center gap-1.5 text-sm font-medium text-[#192338]">
                                Grade Letter
                                <Lock className="h-3 w-3 text-[#8FB3E2]" />
                            </label>
                            <div className="flex items-center gap-3 rounded-lg border border-[#D9E1F1] bg-[#D9E1F1]/30 px-4 py-2.5">
                                <input type="text" id="gradeLetter" name="gradeLetter" value={gradeData.gradeLetter} readOnly className="w-0 flex-1 cursor-not-allowed bg-transparent text-sm text-[#31487A]/70 outline-none"/>
                                <span className={`inline-flex h-7 w-7 items-center justify-center rounded-md text-xs font-bold ${getGradeColor(gradeData.gradeLetter)}`}>
                                    {gradeData.gradeLetter}
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* Score preview bar */}
                    <div className="flex flex-col gap-1.5">
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-[#31487A]/60">Score Preview</span>
                            <span className="text-xs font-medium tabular-nums text-[#192338]">
                            {gradeData.score}/100
                            </span>
                        </div>
                        <div className="h-2 w-full overflow-hidden rounded-full bg-[#D9E1F1]">
                            <div className="h-full rounded-full bg-[#31487A] transition-all duration-300" style={{ width: `${Math.min(Math.max(gradeData.score, 0), 100)}%` }}/>
                        </div>
                    </div>
                    {/* Remark */}
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="remark" className="text-sm font-medium text-[#192338]">
                            Remark
                        </label>
                        <textarea id="remark" name="remark" value={gradeData.remark} onChange={handleChange} placeholder="Additional notes about this grade..." required rows={3} className="resize-none rounded-lg border border-[#8FB3E2]/40 bg-white px-4 py-2.5 text-sm text-[#192338] placeholder-[#8FB3E2]/60 outline-none transition-colors focus:border-[#31487A] focus:ring-2 focus:ring-[#31487A]/20"/>
                    </div>
                    {/* Divider */}
                        <div className="border-t border-[#D9E1F1]" />
                    {/* Button  */}
                    <div className='flex justify-end'>
                        <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-[#31487A] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1E2E4F] cursor-pointer">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default CreateGradePage