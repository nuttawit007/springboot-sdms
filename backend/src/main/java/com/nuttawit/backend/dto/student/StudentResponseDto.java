package com.nuttawit.backend.dto.student;

import com.nuttawit.backend.entity.StudentStatus;

public class StudentResponseDto {

    public Long id;
    public String studentCode;
    public String firstName;
    public String lastName;
    public String classroom;
    public StudentStatus status;

    // Constructor
    public StudentResponseDto(Long id, String studentCode, String firstName, String lastName, String classroom, StudentStatus status) {
        this.id = id;
        this.studentCode = studentCode;
        this.firstName = firstName;
        this.lastName = lastName;
        this.classroom = classroom;
        this.status = status;
    }

    // getters and setters
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getStudentCode() {
        return studentCode;
    }
    public void setStudentCode(String studentCode) {
        this.studentCode = studentCode;
    }
    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    public String getClassroom() {
        return classroom;
    }
    public void setClassroom(String classroom) {
        this.classroom = classroom;
    }
    public StudentStatus getStatus() {
        return status;
    }
    public void setStatus(StudentStatus status) {
        this.status = status;
    }
}
