package com.petfoods.be.exception;

import java.text.SimpleDateFormat;
import java.util.Date;


public class ErrorResponse {

	private String data = new SimpleDateFormat("dd/MM/yyyy").format(new Date());
	private StackTraceElement[] stackTrace;
	private String messaggio;
	
	public String getData() {
		return data;
	}
	public void setData(String data) {
		this.data = data;
	}
	public StackTraceElement[] getStackTrace() {
		return stackTrace;
	}
	public void setStackTrace(StackTraceElement[] stackTraceElements) {
		this.stackTrace = stackTraceElements;
	}
	public String getMessaggio() {
		return messaggio;
	}
	public void setMessaggio(String messaggio) {
		this.messaggio = messaggio;
	}

	
}
