package com.nuttawit.backend.dto.grade;

public class GradeResponseDto {
    private String studentCode;
    private String firstName;
    private String lastName;
    private String subject;
    private int score;
    private String gradeLetter;

    // Constructor
    public GradeResponseDto() {
    }

    public GradeResponseDto(String studentCode, String firstName, String lastName, String subject, int score, String gradeLetter) {
        this.studentCode = studentCode;
        this.firstName = firstName;
        this.lastName = lastName;
        this.subject = subject;
        this.score = score;
        this.gradeLetter = gradeLetter;
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
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    public String getSubject() {
        return subject;
    }
    public void setSubject(String subject) {
        this.subject = subject;
    }
    public int getScore() {
        return score;
    }
    public void setScore(int score) {
        this.score = score;
    }
    public String getGradeLetter() {
        return gradeLetter;
    }
    public void setGradeLetter(String gradeLetter) {
        this.gradeLetter = gradeLetter;
    }
}