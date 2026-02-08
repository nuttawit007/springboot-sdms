package com.nuttawit.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nuttawit.backend.dto.student.StudentCreateRequestDto;
import com.nuttawit.backend.dto.student.StudentResponseDto;
import com.nuttawit.backend.dto.student.StudentUpdateRequestDto;
import com.nuttawit.backend.entity.Student;
import com.nuttawit.backend.service.student.StudentService;

@RestController
@RequestMapping("/api")
public class StudentController {

    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping("/students")
    public List<StudentResponseDto> getStudents() {
        return studentService.getAllStudents();
    }

    @GetMapping("/students/{studentCode}")
    public StudentResponseDto getStudentById(@PathVariable String studentCode) {
        return studentService.getStudentById(studentCode);
    }

    @PostMapping("/students")
    public Student createStudent(@RequestBody StudentCreateRequestDto studentCreateRequestDto) {
        return studentService.createStudent(studentCreateRequestDto);
    }

    @PutMapping("/students/{studentCode}")
    public Student updateStudent(@PathVariable String studentCode, @RequestBody StudentUpdateRequestDto studentUpdateRequestDto) {
        return studentService.updateStudent(studentCode, studentUpdateRequestDto);
    }

    @DeleteMapping("/students/{studentCode}")
    public String deleteStudent(@PathVariable String studentCode) {
        return studentService.deleteStudent(studentCode);
    }
}