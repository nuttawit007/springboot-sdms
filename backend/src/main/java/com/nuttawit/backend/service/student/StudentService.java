package com.nuttawit.backend.service.student;

import java.util.List;

import com.nuttawit.backend.dto.student.StudentCreateRequestDto;
import com.nuttawit.backend.dto.student.StudentResponseDto;
import com.nuttawit.backend.dto.student.StudentUpdateRequestDto;
import com.nuttawit.backend.entity.Student;

public interface StudentService {

    // CRUD operations for Student
    // Retrieve all students
    List<StudentResponseDto> getAllStudents();

    // Retrieve a student by their ID
    StudentResponseDto getStudentById(String studentCode);

    // Create a new student
    Student createStudent(StudentCreateRequestDto studentCreateRequestDto);

    // Update an existing student
    Student updateStudent(String studentCode, StudentUpdateRequestDto studentUpdateRequestDto);

    // Delete a student by their ID
    String deleteStudent(String studentCode);
}
