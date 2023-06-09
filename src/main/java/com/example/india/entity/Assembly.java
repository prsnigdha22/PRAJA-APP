package com.example.india.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "ASSEMBLY_TBL")

public class Assembly
{
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private int ac_id;
	private String assemblyName;
	private String memberOfLegislativeAssembly;
	private long ac_population;
	private long ac_maleVoters;
	private long ac_femaleVoters;
	//for district
	@ManyToOne
	@JoinColumn(name = "ad_fid", referencedColumnName = "did")
	@JsonIgnoreProperties("assemblies")
	private District district; 
	
	public Assembly(int ac_id, String assemblyName, String memberOfLegislativeAssembly, long ac_population,
			long ac_maleVoters, long ac_femaleVoters, District district) {
		super();
		this.ac_id = ac_id;
		this.assemblyName = assemblyName;
		this.memberOfLegislativeAssembly = memberOfLegislativeAssembly;
		this.ac_population = ac_population;
		this.ac_maleVoters = ac_maleVoters;
		this.ac_femaleVoters = ac_femaleVoters;
		this.district = district;
	}
	
	public Assembly() 
	{
		
	}

	public int getAc_id() {
		return ac_id;
	}
	public void setAc_id(int ac_id) {
		this.ac_id = ac_id;
	}
	public String getAssemblyName() {
		return assemblyName;
	}
	public void setAssemblyName(String assemblyName) {
		this.assemblyName = assemblyName;
	}
	public String getMemberOfLegislativeAssembly() {
		return memberOfLegislativeAssembly;
	}
	public void setMemberOfLegislativeAssembly(String memberOfLegislativeAssembly) {
		this.memberOfLegislativeAssembly = memberOfLegislativeAssembly;
	}
	public long getAc_population() {
		return ac_population;
	}
	public void setAc_population(long ac_population) {
		this.ac_population = ac_population;
	}
	public long getAc_maleVoters() {
		return ac_maleVoters;
	}
	public void setAc_maleVoters(long ac_maleVoters) {
		this.ac_maleVoters = ac_maleVoters;
	}
	public long getAc_femaleVoters() {
		return ac_femaleVoters;
	}
	public void setAc_femaleVoters(long ac_femaleVoters) {
		this.ac_femaleVoters = ac_femaleVoters;
	}
	
}
