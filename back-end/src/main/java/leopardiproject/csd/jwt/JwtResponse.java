package leopardiproject.csd.jwt;

import java.io.Serializable;

import org.springframework.security.core.userdetails.UserDetails;


public class JwtResponse implements Serializable {

	private static final long serialVersionUID = -8091879091924046844L;
	private final String jwttoken;
	private final UserDetails utente;


	public JwtResponse(String jwttoken, UserDetails utente) {
		this.jwttoken = jwttoken;
		this.utente = utente;
	}

	public String getToken() {
		return this.jwttoken;
	}

	public UserDetails getUtente() {
		return utente;
	}
}