package com.petfoods.be.repository.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="COMPONENTI_ANALITICI")
public class ComponentiAnaliticiModel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@JsonIgnore
	@ManyToOne
	private FoodModel food;
	private String nome;
	private Double valorePercentuale;
    private String note;
    
	public FoodModel getFood() {
		return food;
	}
	public void setFood(FoodModel food) {
		this.food = food;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public Double getValorePercentuale() {
		return valorePercentuale;
	}
	public void setValorePercentuale(Double valorePercentuale) {
		this.valorePercentuale = valorePercentuale;
	}
	public String getNote() {
		return note;
	}
	public void setNote(String note) {
		this.note = note;
	}
    	
    
	
}
