import api from "./http";

export const getAllGrades = async () => {
    const response = await api.get('/grades');
    return response.data;
}

export const getGradeByStudentCode = async (studentCode) => {
    const response = await api.get(`/grades/${studentCode}`);
    return response.data;
}

export const createGradeRecord = async (gradeData) => {
    const response = await api.post('/grades', gradeData);
    return response.data;
}

export const updateGradeRecord = async (studentCode, gradeData) => {
    const response = await api.put(`/grades/${studentCode}`, gradeData);
    return response.data;
}

export const deleteGradeRecord = async (studentCode) => {
    const response = await api.delete(`/grades/${studentCode}`);
    return response.data;
}