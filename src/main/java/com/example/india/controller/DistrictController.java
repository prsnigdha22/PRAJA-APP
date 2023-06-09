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
import com.example.india.entity.Assembly;
import com.example.india.entity.District;
import com.example.india.entity.Parliament;
import com.example.india.service.DistrictService;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:3000/")
public class DistrictController 
{
	@Autowired
	private DistrictService districtService;
	// Save District details
		@PostMapping("/addDistrict")
		public District addDistrict(@RequestBody District district) {
			return districtService.saveDistrict(district);
		}

		@PostMapping("/addDistricts")
		public List<District> addDistricts(@RequestBody List<District> districts) {
			return districtService.saveDistricts(districts);
		}

	// View District details
		@GetMapping("/districts")
		public List<District> findAllDistricts() {
			return districtService.getAllDistricts();
		}

		@GetMapping("/district/{districtName}")
		public District findDistrictByName(@PathVariable String districtName) {
			return districtService.getDistrictByName(districtName);
		}
		@GetMapping("/districtById/{sid}")
		public District findDistrictByFid(@PathVariable int sid)
		{
			return districtService.getDistrictById(sid);	
		}
	// view parliament const. details 
		@GetMapping("/district/{districtName}/parliamentList")
	    public List<Parliament> getParliamentList(@PathVariable String districtName) {
	        return districtService.getParliamentConstituenciesByDistrictName( districtName);
	    }
	// view parliament const. details 
		@GetMapping("/district/{districtName}/assemblyList")
	     public List<Assembly> getAssemblyList(@PathVariable String districtName) {
	        return districtService.getAssemblyConstituenciesByDistrictName( districtName);
		 }
		
}
