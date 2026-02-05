package com.nuttawit.backend.dto.student;

import com.nuttawit.backend.entity.StudentStatus;

public class StudentCreateRequestDto {
    private String studentCode;
    private String firstName;
    private String lastName;
    private String classroom;
    private StudentStatus status;

    // Constructor
    public StudentCreateRequestDto(String studentCode, String firstName, String lastName, String classroom, StudentStatus status) {
        this.studentCode = studentCode;
        this.firstName = firstName;
        this.lastName = lastName;
        this.classroom = classroom;
        this.status = status;
    }

    // getters and setters  
    public String getStudentCode() {
        return studentCode;
    }
    public void setStudentCode(String studentCode) {
        this.studentCode = studentCode;
    }

    public String getFirstName() {
        return firstName;
    }
    public void setName(String firstName) {
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
