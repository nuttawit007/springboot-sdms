import api from './http';

export const getAllStudents = async () => {
    const response = await api.get('/students');
    return response.data;
}

export const getStudentByStudentCode = async (studentCode) => {
    const response = await api.get(`/students/${studentCode}`);
    return response.data;
}

export const createStudent = async (studentData) => {
    const response = await api.post('/students', studentData);
    return response.data;
}

export const updateStudent = async (studentCode, studentData) => {
    const response = await api.put(`/students/${studentCode}`, studentData);
    return response.data;
}

export const deleteStudent = async (studentCode) => {
    const response = await api.delete(`/students/${studentCode}`);
    return response.data;
}



