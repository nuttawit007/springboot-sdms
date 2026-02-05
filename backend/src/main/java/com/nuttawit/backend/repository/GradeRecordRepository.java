package com.nuttawit.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nuttawit.backend.entity.GradeRecord;

@Repository
public interface GradeRecordRepository extends JpaRepository<GradeRecord, Long> {
    List<GradeRecord> findByStudent_StudentCode(String studentCode);
}
