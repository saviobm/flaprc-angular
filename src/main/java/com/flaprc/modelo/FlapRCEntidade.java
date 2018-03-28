package com.flaprc.modelo;

import java.io.Serializable;

public class FlapRCEntidade implements Serializable {
	
	/**
	 * serialVersionUID.
	 */
	private static final long serialVersionUID = -2182699143671851223L;
	
	private String keyMessageError;

	/**
	 * @return the keyMessageError
	 */
	public String getKeyMessageError() {
		return keyMessageError;
	}

	/**
	 * @param keyMessageError the keyMessageError to set
	 */
	public void setKeyMessageError(String keyMessageError) {
		this.keyMessageError = keyMessageError;
	}

}