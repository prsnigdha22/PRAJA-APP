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
@Table(name = "PARLIAMENT_TBL")
public class Parliament
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int pc_id;
	private String parliamentName;
	private String memberOfParliament;
	private long pc_population;
	private long pc_maleVoters;
	private long pc_femaleVoters;

	// for district
	@ManyToOne
	@JoinColumn(name = "pd_fid", referencedColumnName = "did")
	@JsonIgnoreProperties("parliamentaries")
	private District district;

	
	public Parliament(int pc_id, String parliamentName, String memberOfParliament, long pc_population,
			long pc_maleVoters, long pc_femaleVoters, District district) {
		super();
		this.pc_id = pc_id;
		this.parliamentName = parliamentName;
		this.memberOfParliament = memberOfParliament;
		this.pc_population = pc_population;
		this.pc_maleVoters = pc_maleVoters;
		this.pc_femaleVoters = pc_femaleVoters;
		this.district = district;
	}

	public Parliament() 
	{
		super();
	}

	public int getPc_id() {
		return pc_id;
	}

	public void setPc_id(int pc_id) {
		this.pc_id = pc_id;
	}

	public String getParliamentName() {
		return parliamentName;
	}

	public void setParliamentName(String parliamentName) {
		this.parliamentName = parliamentName;
	}

	public String getMemberOfParliament() {
		return memberOfParliament;
	}

	public void setMemberOfParliament(String memberOfParliament) {
		this.memberOfParliament = memberOfParliament;
	}

	public long getPc_population() {
		return pc_population;
	}

	public void setPc_population(long pc_population) {
		this.pc_population = pc_population;
	}

	public long getPc_maleVoters() {
		return pc_maleVoters;
	}

	public void setPc_maleVoters(long pc_maleVoters) {
		this.pc_maleVoters = pc_maleVoters;
	}

	public long getPc_femaleVoters() {
		return pc_femaleVoters;
	}

	public void setPc_femaleVoters(long pc_femaleVoters) {
		this.pc_femaleVoters = pc_femaleVoters;
	}
	

}
