package com.petfoods.be.exception.dto;

import org.springframework.http.HttpStatus;

public class Utils {

	public static <T> void  populateDto(BaseDto<T> dto, T data, HttpStatus status) {
		dto.setData(data);
		dto.setCodice(status.value());
		dto.setDescrizione(status.name());
	}
	
	public static <T> void  populateDto(BaseDto<T> dto, T data, HttpStatus status, String descrizione) {
		dto.setData(data);
		dto.setCodice(status.value());
		dto.setDescrizione(descrizione);
	}
}
