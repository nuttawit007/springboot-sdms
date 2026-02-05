package com.nuttawit.backend.service.grade;

import java.util.List;

import com.nuttawit.backend.dto.grade.GradeCreateRequestDto;
import com.nuttawit.backend.dto.grade.GradeResponseDto;
import com.nuttawit.backend.dto.grade.GradeUpdateRequestDto;
import com.nuttawit.backend.entity.GradeRecord;

public interface GradeRecordService {
    // CRUD operations for GradeRecord  
    // Retieve all GradeRecords
    List<GradeResponseDto> getAllGradeRecords();

    // Retieve GradeRecord by StudentCode
    List<GradeResponseDto> getGradeRecordById(String studentCode);

    // Create new GradeRecord
    GradeRecord createGradeRecord(GradeCreateRequestDto gradeCreateRequestDto);

    // Update existing GradeRecord
    GradeRecord updateGradeRecord(String studentCode, GradeUpdateRequestDto gradeUpdateRequestDto);

    // Delete GradeRecord by StudentCode
    String deleteGradeRecord(String studentCode);

}