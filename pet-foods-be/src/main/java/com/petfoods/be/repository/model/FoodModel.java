package com.petfoods.be.repository.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="foods")
public class FoodModel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String marca; 
	private String descrizione;
	private Long prezzo;
	private Long peso;
	private String unitaDiMisura;
	
	@OneToMany(mappedBy = "food", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<ComponentiAnaliticiModel> componentiAnalitici = new ArrayList<>();
	
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
	public List<ComponentiAnaliticiModel> getComponentiAnalitici() {
		return componentiAnalitici;
	}
	public void setComponentiAnalitici(List<ComponentiAnaliticiModel> componentiAnalitici) {
		this.componentiAnalitici = componentiAnalitici;
	}
    
}
