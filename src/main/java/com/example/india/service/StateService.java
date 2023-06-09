package com.example.india.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.india.entity.State;
import com.example.india.repository.StateRepository;

@Service
public class StateService
{
	@Autowired
	private StateRepository stateRepository;
	
	//save states
		public State saveState(State state)
		{
			return stateRepository.save(state);
		}
		public List<State> saveStates(List<State> states)
		{
			return stateRepository.saveAll(states);
		}
	//get state
	public List<State> getAllStates()
	{
		return stateRepository.findAll();
	}
	public State getStateByName(String stateName)
	{
		return stateRepository.findByStateName(stateName);
	}

	/*
	 * public State getStateById(int id) { return
	 * stateRepository.findById(id).orElse(null); }
	 */
	//update state details
	public State updateState(State state) {
		State existingState = stateRepository.findById(state.getSid()).orElse(state);
		existingState.setStateName(state.getStateName());
		existingState.setCapital(state.getCapital());
		existingState.setPopulation(state.getPopulation());
		existingState.setArea(state.getArea());
		existingState.setChiefMinister(state.getChiefMinister());
		existingState.setAssembly_constituencies(state.getAssembly_constituencies());
		existingState.setParliamentary_constituencies(state.getParliamentary_constituencies());
		return stateRepository.save(existingState);
	}
			
}
