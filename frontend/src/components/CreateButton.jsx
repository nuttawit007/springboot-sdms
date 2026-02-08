import React from 'react'
import { Plus } from "lucide-react"
import { useNavigate } from 'react-router';

const CreateButton = ({type}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (type == 'student') {
            navigate('/create-student');
        }
    }
    return (
        <button onClick={() => handleClick()} className="inline-flex items-center gap-1.5 rounded-lg bg-[#31487A] px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-[#1E2E4F] cursor-pointer">
        <Plus  className="h-3.5 w-3.5"/>
        New Student 
        </button>
    )
}

export default CreateButton