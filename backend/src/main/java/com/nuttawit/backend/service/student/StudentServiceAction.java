package com.nuttawit.backend.service.student;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nuttawit.backend.dto.student.StudentCreateRequestDto;
import com.nuttawit.backend.dto.student.StudentResponseDto;
import com.nuttawit.backend.dto.student.StudentUpdateRequestDto;
import com.nuttawit.backend.entity.Student;
import com.nuttawit.backend.repository.StudentRepository;

import jakarta.transaction.Transactional;

@Service
public class StudentServiceAction implements StudentService {

    private final StudentRepository studentRepository;

    @Autowired
    public StudentServiceAction(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }
    // Get all students
    @Override
    public List<StudentResponseDto> getAllStudents() {
        return studentRepository.findAll().stream()
                .map(student -> new StudentResponseDto(
                        student.getId(),
                        student.getStudentCode(),
                        student.getFirstName(),
                        student.getLastName(),
                        student.getClassroom(),
                        student.getStatus()))
                .toList();
    }
    // Get student by ID
    @Override
    public StudentResponseDto getStudentById(String studentCode) {
        Student student = studentRepository.findByStudentCode(studentCode).orElseThrow(() -> new RuntimeException("Student not found"));
        return new StudentResponseDto(
            student.getId(),
            student.getStudentCode(),
            student.getFirstName(),
            student.getLastName(),
            student.getClassroom(),
            student.getStatus());
    }
    // Post student
    @Override
    @Transactional
    public Student createStudent(StudentCreateRequestDto studentCreateRequestDto) {
        return studentRepository.save(new Student(
                studentCreateRequestDto.getStudentCode(),
                studentCreateRequestDto.getFirstName(),
                studentCreateRequestDto.getLastName(),
                studentCreateRequestDto.getClassroom(),
                studentCreateRequestDto.getStatus()
        ));
    }

    // Put student
    @Override
    @Transactional
    public Student updateStudent(String studentCode, StudentUpdateRequestDto studentUpdateRequestDto) {
        Student student = studentRepository.findByStudentCode(studentCode).orElseThrow(() -> new RuntimeException("Student not found"));
        student.setFirstName(studentUpdateRequestDto.getFirstName());
        student.setLastName(studentUpdateRequestDto.getLastName());
        student.setClassroom(studentUpdateRequestDto.getClassroom());
        student.setStatus(studentUpdateRequestDto.getStatus());
        return studentRepository.save(student);
    }

    // Delete student
    @Override
    @Transactional
    public String deleteStudent(String studentCode) {
        Student student = studentRepository.findByStudentCode(studentCode).orElseThrow(() -> new RuntimeException("Student not found"));
        studentRepository.delete(student);
        return "Student deleted successfully";
    }
}