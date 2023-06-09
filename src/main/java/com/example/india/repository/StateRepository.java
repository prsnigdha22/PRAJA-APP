package com.example.india.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.india.entity.State;

public interface StateRepository extends JpaRepository<State, Integer>{

	State findByStateName(String stateName);
}
