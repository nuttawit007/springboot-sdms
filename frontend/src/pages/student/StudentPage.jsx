import React, { useState, useEffect } from 'react'
import { getAllStudents } from '../../api/studentApi'
import StudentTable from '../../components/StudentTable';
import CreateButton from '../../components/CreateButton';

const StudentPage = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllStudents().then(data => {
            setStudents(data);
            setLoading(false);
        }).catch(error => {
            console.error("Error fetching students:", error);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <p>Loading students...</p>;
    }
    return (  
        <section className='ml-50'>
            <div className="mb-4 flex items-end justify-between">
                <div>
                    <h1 className="text-2xl font-semibold tracking-tight text-[#192338]">Student Page</h1>
                    <p className="mt-1 text-sm text-[#31487A]/70">Manage and view all registered students</p>
                </div>
                <CreateButton type={"student"} />
            </div>
            <StudentTable students={students} />
        </section>
    )
}

export default StudentPage