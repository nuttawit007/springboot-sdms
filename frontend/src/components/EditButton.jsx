import React from 'react'
import { Pencil } from "lucide-react"
import { useNavigate } from 'react-router';

const EditButton = ({type, id}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (type == 'student') {
            navigate(`/edit-student/${id}`); // Example navigation to edit student with ID
        }
    }

    return (
        <button onClick={() => handleClick()} className="inline-flex items-center gap-1.5 rounded-lg bg-[#31487A] px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-[#1E2E4F] cursor-pointer">
            <Pencil className="h-3.5 w-3.5" />
            Edit
        </button>
    )
}

export default EditButton