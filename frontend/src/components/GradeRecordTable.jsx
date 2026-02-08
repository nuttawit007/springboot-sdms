import React from 'react'
import ViewButton from './ViewButton'

const GradeRecordTable = ({students}) => {
return (
        <section className='overflow-hidden rounded-xl border border-[#8FB3E2]/30 bg-card shadow-sm'>
            <table className='w-full text-sm'>
                <thead>
                    <tr className="bg-[#1E2E4F] text-white">
                        <th className="px-5 py-3.5 text-left font-medium tracking-wide">ID</th>
                        <th className="px-5 py-3.5 text-left font-medium tracking-wide">StudentCode</th>
                        <th className="px-5 py-3.5 text-left font-medium tracking-wide">Firstname</th>
                        <th className="px-5 py-3.5 text-left font-medium tracking-wide">Lastname</th>
                        <th className="px-5 py-3.5 text-left font-medium tracking-wide">Classroom</th>
                        <th className="px-5 py-3.5 text-center font-medium tracking-wide">Action</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-[#D9E1F1]">
                    {students.map((student, index) => (
                        <tr key={student.id} className="transition-colors hover:bg-[#D9E1F1]/40">
                            <td className="px-5 py-3.5 text-[#192338] font-medium">{index + 1}</td>
                            <td className="px-5 py-3.5 text-[#31487A] font-mono text-xs tracking-wider">{student.studentCode}</td>
                            <td className="px-5 py-3.5 text-[#192338]">{student.firstName}</td>
                            <td className="px-5 py-3.5 text-[#31487A]">{student.lastName}</td>
                            <td className="px-5 py-3.5 text-[#31487A]">{student.classroom}</td>
                            <td className="px-5 py-3.5">
                                <div className="flex items-center justify-center gap-2">
                                    <ViewButton type="grades" studentCode={student.studentCode} />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default GradeRecordTable