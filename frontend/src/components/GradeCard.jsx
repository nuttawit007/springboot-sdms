import React from 'react'
import { BookOpen } from "lucide-react"
import EditButton from './EditButton'
import DeleteButton from './DeleteButton'

const GradeCard = ({grade, index}) => {
    const getGradeColor = (grade) => {
        if (grade === "A") return"bg-[#31487A] text-white"
        if (grade === "B") return "bg-[#8FB3E2] text-[#192338]"
        if (grade === "C") return "bg-[#D9E1F1] text-[#192338]"
        if (grade === "D") return "bg-[#D9E1F1]/60 text-[#31487A]"
        if (grade === "F") return "bg-red-100 text-red-600"
    }

    const getScoreBarWidth = (score) => {
        return `${score}%`
    }
    return (
        <div key={index} className="group overflow-hidden rounded-xl border border-[#8FB3E2]/30 bg-white shadow-sm transition-all hover:border-[#8FB3E2]/60 hover:shadow-md">
            {/* Card header */}
            <div className="flex items-start justify-between px-5 pt-5 pb-3">
                <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1E2E4F]/8">
                        <BookOpen className="h-4 w-4 text-[#31487A]" />
                    </div>
                    <div>
                        <p className="text-xs text-[#31487A]/60 uppercase tracking-wider"> Subject {index + 1}</p>
                        <h2 className="text-sm font-semibold text-[#192338]"> {grade.subject} </h2>
                    </div>
                </div>
                <span className={`inline-flex h-9 min-w-9 items-center justify-center rounded-lg px-2 text-sm font-bold ${getGradeColor(grade.gradeLetter)}`}>
                    {grade.gradeLetter}
                </span>
            </div>
            {/* Score section */}
            <div className="px-5 pb-5">
                <div className="mt-2 flex items-end justify-between">
                <span className="text-xs text-[#31487A]/60">Score</span>
                <span className="text-2xl font-bold tabular-nums text-[#192338]">
                    {grade.score}
                    <span className="text-sm font-normal text-[#31487A]/50">/100</span>
                </span>
                </div>

                {/* Score bar */}
                <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-[#D9E1F1]">
                <div className="h-full rounded-full bg-[#31487A] transition-all duration-500" style={{ width: getScoreBarWidth(grade.score) }}/>
                </div>

            </div>
            {/* Action buttons */}
            <div className="flex items-center border-t border-[#8FB3E2]/20 px-5 py-3">
                <EditButton type="grades" studentCode={grade.studentCode} subject={grade.subject} />
                <DeleteButton type="grades" studentCode={grade.studentCode} subject={grade.subject} />
            </div>
        </div>
    )
}

export default GradeCard