package com.petfoods.be.dto;

public class ComponentiAnaliticiDto {

	private Long id;
	private Long food_id;
	private String nome;
	private Double valorePercentuale;
    private String note;
    
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getFood_id() {
		return food_id;
	}
	public void setFood_id(Long food_id) {
		this.food_id = food_id;
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
