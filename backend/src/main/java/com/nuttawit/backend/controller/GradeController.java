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

import com.nuttawit.backend.dto.grade.GradeCreateRequestDto;
import com.nuttawit.backend.dto.grade.GradeResponseDto;
import com.nuttawit.backend.dto.grade.GradeUpdateRequestDto;
import com.nuttawit.backend.entity.GradeRecord;
import com.nuttawit.backend.service.grade.GradeRecordService;

@RestController 
@RequestMapping("/api")
public class GradeController {

    private final GradeRecordService gradeRecordService;

    public GradeController(GradeRecordService gradeRecordService) {
        this.gradeRecordService = gradeRecordService;
    }

    @GetMapping("/grades")
    public List<GradeResponseDto> getAllGrades() {
        return gradeRecordService.getAllGradeRecords();
    }

    @GetMapping("/grades/{studentCode}")
    public List<GradeResponseDto> getGradeById(@PathVariable String studentCode) {
        return gradeRecordService.getGradeRecordById(studentCode);
    }

    @PostMapping("/grades")
    public GradeRecord createGrade(@RequestBody GradeCreateRequestDto gradeCreateRequestDto) {
        return gradeRecordService.createGradeRecord(gradeCreateRequestDto);
    }

    @PutMapping("/grades/{studentCode}")
    public GradeRecord updateGrade(@PathVariable String studentCode, @RequestBody GradeUpdateRequestDto gradeUpdateRequestDto) {
        return gradeRecordService.updateGradeRecord(studentCode, gradeUpdateRequestDto);
    }

    @DeleteMapping("/grades/{studentCode}")
    public String deleteGrade(@PathVariable String studentCode) {
        return gradeRecordService.deleteGradeRecord(studentCode);
    }
}