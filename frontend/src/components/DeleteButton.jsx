import React from 'react'
import { deleteStudent } from '../api/studentApi'
import { Trash2 } from "lucide-react"

const DeleteButton = ({type, id}) => {
    const handleDelete = async () => {
        if (type === 'student') {
            try {
                await deleteStudent(id);
                alert('Student deleted successfully');
                window.location.reload();
            } catch (error) {
                console.error("Error deleting student:", error);
                alert('Failed to delete student');
            }
        }
    }
    return (
        <button onClick={handleDelete} className="inline-flex items-center gap-1.5 rounded-lg bg-[#192338] px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-[#192338]/80 cursor-pointer">
            <Trash2 className="h-3.5 w-3.5" />
            Delete
        </button>
)
}

export default DeleteButton