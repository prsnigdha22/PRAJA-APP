package com.example.india.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.india.entity.Assembly;
import com.example.india.service.AssemblyService;


@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:3000/")
public class AssemblyController
{
	@Autowired
	private AssemblyService assemblyService;
	
	// Save state details
		@PostMapping("/addAssembly")
		public Assembly addAssembly(@RequestBody Assembly assembly) {
			return assemblyService.saveAssembly(assembly);
		}

		@PostMapping("/addAssemblies")
		public List<Assembly> addStates(@RequestBody List<Assembly> assemblies) {
			return assemblyService.saveAssemblies(assemblies);
		}

		// View state details
		@GetMapping("/assemblies")
		public List<Assembly> findAllAssemblies() {
			return assemblyService.getAllAssemblies();
		}

}
