import React from 'react'
import { Pencil } from "lucide-react"
import { useNavigate } from 'react-router';

const EditButton = ({type, studentCode}) => {
    const navigate = useNavigate();

    const handleEdit = () => {
        if (type === 'student') {
            navigate(`/edit-student/${studentCode}`);
        } else if (type === 'grades') {
            navigate(`/edit-grade/${studentCode}`);
        }
    }

    return (
        <>
        {type === 'student' && (
            <button onClick={handleEdit} className="inline-flex items-center gap-1.5 rounded-lg bg-[#31487A] px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-[#1E2E4F] cursor-pointer">
                <Pencil className="h-3.5 w-3.5" />
                Edit
            </button>
        )}
        {type === 'grades' && (
            <button onClick={handleEdit} className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium text-[#31487A] transition-colors hover:bg-[#31487A]/10">
                <Pencil className="h-3.5 w-3.5" />
                Edit
            </button>
        )}
        </>
    )
}

export default EditButton