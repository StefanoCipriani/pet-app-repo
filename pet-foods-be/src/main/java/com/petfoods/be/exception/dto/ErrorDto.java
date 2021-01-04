package com.petfoods.be.exception.dto;

import com.petfoods.be.exception.ErrorResponse;

public class ErrorDto extends BaseDto<ErrorResponse>{

	public ErrorDto(ErrorResponse err, String descr, int codice) {
		this.setCodice(codice);
		this.setData(err);
		this.setDescrizione(descr);
	}
}
