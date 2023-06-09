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
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "DISTRICT_TBL")
public class District {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int did;
	private String districtName;
	private String d_headquarters;
	private long d_population;
	private double d_area;
	private long pin;

	// for state
	@ManyToOne
	@JoinColumn(name = "sd_fid", referencedColumnName = "sid")
	@JsonIgnoreProperties("districts")
	private State state;

	// for parliament const.
	@JsonIgnoreProperties("district")
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "district", cascade = CascadeType.ALL)
	List<Parliament> parliaments = new ArrayList<>();

	// for assembly const.
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "district", cascade = CascadeType.ALL)
	 @JsonIgnoreProperties("district")
	List<Assembly> assemblies = new ArrayList<>();

	public District() {

	}

	public District(int did, String districtName, String d_headquarters, long d_population, double d_area, long pin,
			State state) {
		super();
		this.did = did;
		this.districtName = districtName;
		this.d_headquarters = d_headquarters;
		this.d_population = d_population;
		this.d_area = d_area;
		this.pin = pin;
		this.state = state;
	}

	public int getDid() {
		return did;
	}

	public void setDid(int did) {
		this.did = did;
	}

	public String getDistrictName() {
		return districtName;
	}

	public void setDistrictName(String districtName) {
		this.districtName = districtName;
	}

	public String getD_headquarters() {
		return d_headquarters;
	}

	public void setD_headquarters(String d_headquarters) {
		this.d_headquarters = d_headquarters;
	}

	public long getD_population() {
		return d_population;
	}

	public void setD_population(long d_population) {
		this.d_population = d_population;
	}

	public double getD_area() {
		return d_area;
	}

	public void setD_area(double d_area) {
		this.d_area = d_area;
	}

	public long getPin() {
		return pin;
	}

	public void setPin(long pin) {
		this.pin = pin;
	}
	
	public List<Parliament> getParliaments() {
		return parliaments;
	}

	public void setParliaments(List<Parliament> parliaments) {
		this.parliaments = parliaments;
	}

	public List<Assembly> getAssemblies() {
		return assemblies;
	}

	public void setAssemblies(List<Assembly> assemblies) {
		this.assemblies = assemblies;
	}
}
