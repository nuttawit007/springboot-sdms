package com.nuttawit.backend.service.grade;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nuttawit.backend.dto.grade.GradeCreateRequestDto;
import com.nuttawit.backend.dto.grade.GradeResponseDto;
import com.nuttawit.backend.dto.grade.GradeUpdateRequestDto;
import com.nuttawit.backend.entity.GradeRecord;
import com.nuttawit.backend.entity.Student;
import com.nuttawit.backend.repository.GradeRecordRepository;
import com.nuttawit.backend.repository.StudentRepository;

import jakarta.transaction.Transactional;

@Service
public class GradeRecordServiceAction implements GradeRecordService {

    // Implement CRUD operations for GradeRecord
    private final GradeRecordRepository gradeRecordRepository;

    private final StudentRepository studentRepository;

    @Autowired
    public GradeRecordServiceAction(GradeRecordRepository gradeRecordRepository, StudentRepository studentRepository) {
        this.gradeRecordRepository = gradeRecordRepository;
        this.studentRepository = studentRepository;
    }

    // Get all GradeRecords
    @Override
    public List<GradeResponseDto> getAllGradeRecords() {
        return gradeRecordRepository.findAll().stream()
                .map(gradeRecord -> new GradeResponseDto(
                gradeRecord.getStudent().getStudentCode(),
                gradeRecord.getStudent().getFirstName(),
                gradeRecord.getStudent().getLastName(),
                gradeRecord.getSubject(),
                gradeRecord.getScore(),
                gradeRecord.getGradeLetter()))
                .toList();
    }

    @Override
    public List<GradeResponseDto> getGradeRecordById(String studentCode) {
        List<GradeRecord> gradeRecord = gradeRecordRepository.findByStudent_StudentCode(studentCode);

        if (gradeRecord.isEmpty()) {
            throw new RuntimeException("No grade record found for studentCode: " + studentCode);
        }

        return gradeRecord.stream()
                .map(gr -> new GradeResponseDto(
                gr.getStudent().getStudentCode(),
                gr.getStudent().getFirstName(),
                gr.getStudent().getLastName(),
                gr.getSubject(),
                gr.getScore(),
                gr.getGradeLetter()
        ))
                .toList();
    }

    @Override
    @Transactional
    public GradeRecord createGradeRecord(GradeCreateRequestDto gradeCreateRequestDto) {
        Student student = studentRepository.findByStudentCode(gradeCreateRequestDto.getStudentCode())
                .orElseThrow(() -> new RuntimeException("Student not found with code: " + gradeCreateRequestDto.getStudentCode()));
        return gradeRecordRepository.save(new GradeRecord(
                student,
                gradeCreateRequestDto.getTerm(),
                gradeCreateRequestDto.getSubject(),
                gradeCreateRequestDto.getScore(),
                gradeCreateRequestDto.getGradeLetter(),
                gradeCreateRequestDto.getRemark()
        ));
    }

    @Override
    @Transactional
    public GradeRecord updateGradeRecord(String studentCode, String subject, GradeUpdateRequestDto gradeUpdateRequestDto) {
        List<GradeRecord> gradeRecords = gradeRecordRepository.findByStudent_StudentCode(studentCode);
        if (gradeRecords.isEmpty()) {
            throw new RuntimeException("No grade record found for studentCode: " + studentCode);
        }

        boolean subjectExists = gradeRecords.stream()
                .anyMatch(gr -> gr.getSubject().equals(subject));
        if (!subjectExists) {
            throw new RuntimeException("No grade record found for subject: " + subject);
        }

        GradeRecord gradeRecord = gradeRecords.stream()
                .filter(gr -> gr.getSubject().equals(subject))
                .findFirst()
                .get();
        gradeRecord.setSubject(gradeUpdateRequestDto.getSubject());
        gradeRecord.setScore(gradeUpdateRequestDto.getScore());
        gradeRecord.setGradeLetter(gradeUpdateRequestDto.getGradeLetter());

        return gradeRecordRepository.save(gradeRecord);
    }

    @Override
    @Transactional
    public String deleteGradeRecord(String studentCode, String subject) {
        List<GradeRecord> gradeRecords = gradeRecordRepository.findByStudent_StudentCode(studentCode);
        if (gradeRecords.isEmpty()) {
            throw new RuntimeException("No grade record found for studentCode: " + studentCode);
        }
        GradeRecord gradeRecord = gradeRecords.stream()
                .filter(gr -> gr.getSubject().equals(subject))
                .findFirst()
                .orElseThrow(() -> new RuntimeException("No grade record found for subject: " + subject));
        gradeRecordRepository.delete(gradeRecord);
        return "deleted successfully";
    }

}
