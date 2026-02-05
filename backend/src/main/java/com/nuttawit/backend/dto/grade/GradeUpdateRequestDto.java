package com.nuttawit.backend.dto.grade;

public class GradeUpdateRequestDto {
    private String studentCode;
    private String subject;
    private int  score;
    private String gradeLetter;

    // Constructor
    public GradeUpdateRequestDto(String studentCode, String subject, int score, String gradeLetter) {
        this.studentCode = studentCode;
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