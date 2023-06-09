package com.example.india.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.india.entity.Parliament;
import com.example.india.service.ParliamentService;



@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:3000/")
public class ParliamentController
{
	@Autowired
	private ParliamentService parliamentService;
	
	// Save state details
		@PostMapping("/addParliament")
		public Parliament addState(@RequestBody Parliament parliament) {
			return parliamentService.saveParliamentary(parliament);
		}

		@PostMapping("/addParliaments")
		public List<Parliament> addStates(@RequestBody List<Parliament> parliaments) {
			return parliamentService.saveParliaments(parliaments);
		}

		// View state details
		@GetMapping("/parliaments")
		public List<Parliament> findAllParliaments() {
			return parliamentService.getAllParliaments();
		}


		// view details of specific district
		

}
