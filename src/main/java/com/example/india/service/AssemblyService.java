package com.example.india.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.india.entity.Assembly;
import com.example.india.repository.AssemblyRepository;



@Service
public class AssemblyService
{
	@Autowired
	private AssemblyRepository assemblyRepository;
	
	//save ac data
	public Assembly saveAssembly(Assembly assembly)
	{
		return assemblyRepository.save(assembly);
	}
	public List<Assembly> saveAssemblies(List<Assembly> assemblies)
	{
		return assemblyRepository.saveAll(assemblies);
	}
	//view ac data
	public List<Assembly> getAllAssemblies()
	{
		return assemblyRepository.findAll();
	}
	//update assembly const.
	public Assembly updateDistrict(Assembly assembly) {
		Assembly existingAssembly = assemblyRepository.findById(assembly.getAc_id()).orElse(assembly);
		existingAssembly.setAssemblyName(assembly.getAssemblyName());
		existingAssembly.setMemberOfLegislativeAssembly(assembly.getMemberOfLegislativeAssembly());
		existingAssembly.setAc_population(assembly.getAc_population());
		existingAssembly.setAc_maleVoters(assembly.getAc_maleVoters());	
		existingAssembly.setAc_femaleVoters(assembly.getAc_femaleVoters());	
		return assemblyRepository.save(existingAssembly);
	}
}
