package com.petfoods.be.exception;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.fasterxml.jackson.databind.JsonMappingException;
import com.petfoods.be.exception.dto.ErrorDto;

@ControllerAdvice
@RestController
public class RestExceptionHandler extends  
ResponseEntityExceptionHandler
{

	@Override
	protected ResponseEntity<Object> handleHttpMessageNotReadable(HttpMessageNotReadableException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		ErrorDto res = createErroDto(ex,HttpStatus.BAD_REQUEST);
		return new ResponseEntity<Object>(res, new HttpHeaders(), HttpStatus.BAD_REQUEST);
	}

	@ExceptionHandler(JsonMappingException.class) // Or whatever exception type you want to handle
	public ResponseEntity<ErrorDto> handleConverterErrors(JsonMappingException ex) { // Or whatever exception type you want to handle
		
		ErrorDto res = createErroDto(ex,HttpStatus.BAD_REQUEST);
		return new ResponseEntity<ErrorDto>(res, new HttpHeaders(), HttpStatus.BAD_REQUEST);
	}


	@ExceptionHandler(Exception.class)
	public final ResponseEntity<ErrorDto> serviceExceptionNotFoundHandler(Exception ex)
	{
		ErrorDto res = createErroDto(ex,HttpStatus.INTERNAL_SERVER_ERROR);
		return new ResponseEntity<ErrorDto>(res, new HttpHeaders(), HttpStatus.INTERNAL_SERVER_ERROR);
	}

	

	private ErrorDto createErroDto(Exception ex, HttpStatus status) {
		ErrorResponse errore = new ErrorResponse();
		errore.setStackTrace(ex.getStackTrace());
		errore.setMessaggio(ex.getMessage());
		ErrorDto res = new ErrorDto(errore,status.name(),status.value());
		return res;
	}

}
