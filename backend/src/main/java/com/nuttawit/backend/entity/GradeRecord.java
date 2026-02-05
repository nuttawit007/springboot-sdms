package com.nuttawit.backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(
  name = "grade_records"
)
public class GradeRecord {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ManyToOne(fetch = FetchType.LAZY, optional = false)
  @JoinColumn(name = "student_code", nullable = false)
  private Student student;

  // เก็บเป็นข้อความเพื่อความเร็ว เช่น "2026/1" หรือ "2569/1"
  @Column(nullable = false, length = 20)
  private String term;

  // เก็บชื่อวิชาเป็นข้อความ เช่น "คณิตศาสตร์"
  @Column(nullable = false, length = 200)
  private String subject;

  @Column
  private Integer score; // 0-100

  @Column(length = 5)
  private String gradeLetter; // A, B+, C

  @Column(length = 255)
  private String remark;

  // Constructor
  public GradeRecord() {}

  public GradeRecord(Student student, String term, String subject, Integer score, String gradeLetter,
      String remark) {
    this.student = student;
    this.term = term;
    this.subject = subject;
    this.score = score;
    this.gradeLetter = gradeLetter;
    this.remark = remark;
  }

  // getters/setters
  public Long getId() {
    return id;
  }
  public void setId(Long id) {
    this.id = id;
  }
  public Student getStudent() {
    return student;
  }
  public void setStudent(Student student) {
    this.student = student;
  }
  public String getTerm() {
    return term;
  }
  public void setTerm(String term) {
    this.term = term;
  }
  public String getSubject() {
    return subject;
  }
  public void setSubject(String subject) {
    this.subject = subject;
  }
  public Integer getScore() {
    return score;
  }
  public void setScore(Integer score) {
    this.score = score;
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
