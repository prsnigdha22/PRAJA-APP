package com.example.india.entity;

import java.util.ArrayList;

import java.util.List;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;


@Entity
@Table(name = "STATE_TBL")
public class State {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int sid;
	private String stateName;
	private String capital;
	private String chiefMinister;
	private long population;
	private double area;
	private int assembly_constituencies;
	private int parliamentary_constituencies;
	
	@OneToMany(fetch = FetchType.LAZY,mappedBy = "state", cascade = CascadeType.ALL)
	@JsonIgnoreProperties("state")
    List <District> districts = new ArrayList<> ();
	
//	@OneToMany(fetch = FetchType.LAZY,mappedBy = "state", cascade = CascadeType.ALL)
//	@JsonIgnoreProperties("state")
//    List <Parliamentary> distric = new ArrayList<> ();
	
	
	public State(int sid, String stateName, String capital, String chiefMinister, 
			long population, double area, int assembly_constituencies, int parliamentary_constituencies,
			List<District> districts) {
		super();
		this.sid = sid;
		this.stateName = stateName;
		this.capital = capital;
		this.chiefMinister = chiefMinister;
		this.population = population;
		this.area = area;
		this.assembly_constituencies = assembly_constituencies;
		this.parliamentary_constituencies = parliamentary_constituencies;
		this.districts = districts;
	
	}

	public State()
	{
		
	}

	public int getSid() {
		return sid;
	}

	public void setSid(int sid) {
		this.sid = sid;
	}

	public List<District> getDistricts() {
		return districts;
	}

	public void setDistricts(List<District> districts) {
		this.districts = districts;
	}

	public String getStateName() {
		return stateName;
	}
	public void setStateName(String stateName) {
		this.stateName = stateName;
	}
	public String getCapital() {
		return capital;
	}
	public void setCapital(String capital) {
		this.capital = capital;
	}
	public String getChiefMinister() {
		return chiefMinister;
	}
	public void setChiefMinister(String chiefMinister) {
		this.chiefMinister = chiefMinister;
	}
	
	public long getPopulation() {
		return population;
	}
	public void setPopulation(long population) {
		this.population = population;
	}
	public double getArea() {
		return area;
	}
	public void setArea(double area) {
		this.area = area;
	}
	public int getAssembly_constituencies() {
		return assembly_constituencies;
	}
	public void setAssembly_constituencies(int assembly_constituencies) {
		this.assembly_constituencies = assembly_constituencies;
	}
	public int getParliamentary_constituencies() {
		return parliamentary_constituencies;
	}
	public void setParliamentary_constituencies(int parliamentary_constituencies) {
		this.parliamentary_constituencies = parliamentary_constituencies;
	}

	
	
}
