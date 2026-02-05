package com.nuttawit.backend.dto.student;

import com.nuttawit.backend.entity.StudentStatus;

public class StudentUpdateRequestDto {

    public String firstName;
    public String lastName;
    public String classroom;
    public StudentStatus status;

    // Constructor
    public StudentUpdateRequestDto() {
    }

    public StudentUpdateRequestDto(String firstName, String lastName, String classroom, StudentStatus status) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.classroom = classroom;
        this.status = status;
    }

    // getters and setters
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
