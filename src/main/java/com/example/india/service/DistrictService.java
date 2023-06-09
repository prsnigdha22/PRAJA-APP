package com.example.india.service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.india.entity.Assembly;
import com.example.india.entity.District;
import com.example.india.entity.Parliament;
import com.example.india.repository.DistrictRepository;

@Service
public class DistrictService 
{
	public DistrictService(DistrictRepository districtRepository) {
		this.districtRepository=districtRepository;
	}
	@Autowired
	private DistrictRepository districtRepository;
	
	 //save districts
			public District saveDistrict(District district)
			{
				return districtRepository.save(district);
			}
			public List<District> saveDistricts(List<District> districts)
			{
				return districtRepository.saveAll(districts);
			}
	//get districts
			public List<District> getAllDistricts()
			{
				return districtRepository.findAll();
			}
			public District getDistrictByName(String districtName)
			{
				return districtRepository.findByDistrictName(districtName);
			}
			public District getDistrictById(int sid) {
				return districtRepository.findById(sid).orElse(null);
			}
	//update districts
			public District updateDistrict(District district) {
				District existingDistrict = districtRepository.findById(district.getDid()).orElse(district);
				existingDistrict.setDistrictName(district.getDistrictName());
				existingDistrict.setD_headquarters(district.getD_headquarters());
				existingDistrict.setD_population(district.getD_population());
				existingDistrict.setD_area(district.getD_area());	
				existingDistrict.setPin(district.getPin());	
				return districtRepository.save(existingDistrict);
			}
			public List<Parliament> getParliamentConstituenciesByDistrictName(String districtName) {
		        District district = districtRepository.findByDistrictName(districtName);
		        if (district != null) {
		            return district.getParliaments();
		        }
		        return Collections.emptyList();
		    }

		    public List<Assembly> getAssemblyConstituenciesByDistrictName(String districtName) {
		        District district = districtRepository.findByDistrictName(districtName);
		        if (district != null) {
		            return district.getAssemblies();
		        }
		        return Collections.emptyList();
		    }
			
			
			
}
