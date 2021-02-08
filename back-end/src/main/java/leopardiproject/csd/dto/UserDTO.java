package leopardiproject.csd.dto;


public class UserDTO {
	private String username;
	private String password;
	private String name;
	private String lastname;
	private boolean checkbox1;
	private boolean checkbox2;
	private boolean checkbox3;

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public boolean isCheckbox1() {
		return checkbox1;
	}

	public void setCheckbox1(boolean checkbox1) {
		this.checkbox1 = checkbox1;
	}

	public boolean isCheckbox2() {
		return checkbox2;
	}

	public void setCheckbox2(boolean checkbox2) {
		this.checkbox2 = checkbox2;
	}

	public boolean isCheckbox3() {
		return checkbox3;
	}

	public void setCheckbox3(boolean checkbox3) {
		this.checkbox3 = checkbox3;
	}

}