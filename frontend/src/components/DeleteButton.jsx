import React from 'react'
import { deleteStudent } from '../api/studentApi'
import { deleteGradeRecord } from '../api/gradeAPi'
import { Trash2 } from "lucide-react"

const DeleteButton = ({type, studentCode, subject}) => {
    const handleDelete = async () => {
        if (type === 'student') {
            try {
                await deleteStudent(studentCode);
                alert('Student deleted successfully');
                window.location.reload();
            } catch (error) {
                console.error("Error deleting student:", error);
                alert('Failed to delete student');
            }
        } else if (type === 'grades') {
            try {
                await deleteGradeRecord(studentCode, subject);
                alert('Grade record deleted successfully');
                window.location.reload();
            } catch (error) {
                console.error("Error deleting grade record:", error);
                alert('Failed to delete grade record');
            }
        }
    }
    return (
        <>
            {type === 'student' && (
                <button onClick={handleDelete} className="inline-flex items-center gap-1.5 rounded-lg bg-[#192338] px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-[#192338]/80 cursor-pointer">
                    <Trash2 className="h-3.5 w-3.5" />
                    Delete
                </button>
            )}
            {type === 'grades' && (
                <button onClick={handleDelete} className="ml-auto inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium text-red-500/70 transition-colors hover:bg-red-50 hover:text-red-600 cursor-pointer">
                    <Trash2 className="h-3.5 w-3.5" />
                    Delete
                </button>
            )}
        </>
)
}

export default DeleteButton