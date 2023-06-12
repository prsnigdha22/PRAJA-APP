package com.example.india.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.india.entity.State;
import com.example.india.service.StateService;

@RestController
@RequestMapping("/api/v1") 
@CrossOrigin("http://localhost:3000/")
public class StateController {
	@Autowired
	private StateService stateService;

	// Save state details
	@PostMapping("/addState")
	public State addState(@RequestBody State state) {
		return stateService.saveState(state);
	}

	@PostMapping("/addStates")
	public List<State> addStates(@RequestBody List<State> states) {
		return stateService.saveStates(states);
	}

	// View state details
	@GetMapping("/states")
	public List<State> findAllStates() {
		return stateService.getAllStates();
	}

	/*
	 * @GetMapping("/state/{id}") public State findStateById(@PathVariable int id) {
	 * return stateService.getStateById(id); }
	 */
	@GetMapping("/state/{stateName}")
	public State findStateByName(@PathVariable String stateName) {
		return stateService.getStateByName(stateName);
	}
	@GetMapping("/state/")
	public State findState() {
		return null;
	}
}
