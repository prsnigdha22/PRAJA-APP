package com.example.india.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.india.entity.Assembly;



public interface AssemblyRepository extends JpaRepository<Assembly, Integer>
{

}
