package com.example.india.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.india.entity.District;
import com.example.india.entity.Parliament;


public interface ParliamentRepository extends JpaRepository<Parliament, Integer>
{
	//District getParliamentByName(String districtName);
}
