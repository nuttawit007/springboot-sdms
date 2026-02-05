package com.nuttawit.backend.dto.grade;

public class GradeCreateRequestDto {
    private String studentCode;
    private String subject;
    private int score;
    private String term;
    private String gradeLetter;
    private String remark;

    // Constructor
    public GradeCreateRequestDto(String studentCode, String subject, int score) {
        this.studentCode = studentCode;
        this.subject = subject;
        this.score = score;
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
    public String getTerm() {
        return term;
    }
    public void setTerm(String term) {
        this.term = term;
    }
    public String getGradeLetter() {
        return gradeLetter;
    }
    public void setGradeLetter(String gradeLetter) {
        this.gradeLetter = gradeLetter;
    }
    public String getRemark() {
        return remark;
    }
    public void setRemark(String remark) {
        this.remark = remark;
    }
}



