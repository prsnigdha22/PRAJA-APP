package com.example.india.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.india.entity.*;

@Repository
public interface DistrictRepository extends JpaRepository<District, Integer> 
{
	District findByDistrictName(String districtName);
}
