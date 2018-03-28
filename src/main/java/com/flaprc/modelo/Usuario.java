package com.flaprc.modelo;

import java.io.Serializable;


/**
 * Entidade responsável pelo espelho da tabela do banco de dados.
 * 
 * @author savio.maciel
 */
public class Usuario extends FlapRCEntidade implements Serializable {
	
	/**
	 * serialVersionUID
	 */
	private static final long serialVersionUID = -7236633653716705389L;

	private String login;
	
	private String senha;

	/**
	 * @return the login
	 */
	public String getLogin() {
		return login;
	}

	/**
	 * @param login the login to set
	 */
	public void setLogin(String login) {
		this.login = login;
	}

	/**
	 * @return the senha
	 */
	public String getSenha() {
		return senha;
	}

	/**
	 * @param senha the senha to set
	 */
	public void setSenha(String senha) {
		this.senha = senha;
	}
	
}