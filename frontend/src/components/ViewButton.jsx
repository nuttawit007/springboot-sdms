import React from 'react'
import { TableOfContents } from "lucide-react"
import { useNavigate } from 'react-router';

const ViewButton = ({type, studentCode}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (type == 'grades') {
            navigate(`/view-grade/${studentCode}`);
        }
    }

    return (
        <button onClick={() => handleClick()} className="inline-flex items-center gap-1.5 rounded-lg bg-[#31487A] px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-[#1E2E4F] cursor-pointer">
            <TableOfContents className="h-3.5 w-3.5" />
            View
        </button>
    )
}

export default ViewButton