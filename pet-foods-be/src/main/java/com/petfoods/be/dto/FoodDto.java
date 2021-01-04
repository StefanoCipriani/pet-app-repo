package com.petfoods.be.dto;

import java.util.List;

public class FoodDto {

	private Long id;
	private String marca; 
	private String descrizione;
	private Long prezzo;
	private Long peso;
	private String unitaDiMisura;
	private List<ComponentiAnaliticiDto> componentiAnalitici;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getMarca() {
		return marca;
	}
	public void setMarca(String marca) {
		this.marca = marca;
	}
	public String getDescrizione() {
		return descrizione;
	}
	public void setDescrizione(String descrizione) {
		this.descrizione = descrizione;
	}
	public Long getPrezzo() {
		return prezzo;
	}
	public void setPrezzo(Long prezzo) {
		this.prezzo = prezzo;
	}
	public Long getPeso() {
		return peso;
	}
	public void setPeso(Long peso) {
		this.peso = peso;
	}
	public String getUnitaDiMisura() {
		return unitaDiMisura;
	}
	public void setUnitaDiMisura(String unitaDiMisura) {
		this.unitaDiMisura = unitaDiMisura;
	}
	public List<ComponentiAnaliticiDto> getComponentiAnalitici() {
		return componentiAnalitici;
	}
	public void setComponentiAnalitici(List<ComponentiAnaliticiDto> componentiAnalitici) {
		this.componentiAnalitici = componentiAnalitici;
	}
	
	
	
}
