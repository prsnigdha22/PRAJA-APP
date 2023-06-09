package com.example.india.service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.india.entity.District;
import com.example.india.entity.Parliament;
import com.example.india.repository.ParliamentRepository;


@Service
public class ParliamentService 
{
	
	@Autowired
	private ParliamentRepository parliamentRepository;

	// save pc data
	public Parliament saveParliamentary(Parliament parliament) {
		return parliamentRepository.save(parliament);
	}

	public List<Parliament> saveParliaments(List<Parliament> parliaments) {
		return parliamentRepository.saveAll(parliaments);
	}

	// view pc data
	public List<Parliament> getAllParliaments() {
		return parliamentRepository.findAll();
	}
	
	//update parliamentary const.
		public Parliament updateDistrict(Parliament parliament) {
			Parliament existingParliament = parliamentRepository.findById(parliament.getPc_id()).orElse(parliament);
			existingParliament.setParliamentName(parliament.getParliamentName());
			existingParliament.setMemberOfParliament(parliament.getMemberOfParliament());
			existingParliament.setPc_population(parliament.getPc_population());
			existingParliament.setPc_maleVoters(parliament.getPc_maleVoters());	
			existingParliament.setPc_femaleVoters(parliament.getPc_femaleVoters());	
			return parliamentRepository.save(existingParliament);
		}

		/* Returns list of parliaments data with district name
		public List<Parliament> getParliamentList(String districtName) {
		    List<Parliament> pList = new ArrayList<>();

		    for (District district : districts) {
		        if (district.getDistrictName().equalsIgnoreCase(districtName)) {
		            for (Parliament par : district.getParliaments()) {
		                Parliament pl = new Parliament();
		                pl.setParliamentName(par.getParliamentName());
		                pl.setMemberOfParliament(par.getMemberOfParliament());
		                pl.setPc_population(par.getPc_population());
		                pl.setPc_maleVoters(par.getPc_maleVoters());
		                pl.setPc_femaleVoters(par.getPc_femaleVoters());
		                pList.add(pl);
		            }
		            break; // If district name is found, exit the loop
		        }
		    }

		    return pList;
		}*/
}
