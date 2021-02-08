package leopardiproject.csd.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import java.io.Serializable;
import java.util.Set;

import javax.persistence.*;

@Entity
@Table(name = "user")
public class DAOUser implements Serializable{

	/**
	 *
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column
	private String username;
	@Column
	@JsonIgnore
	private String password;

	@Column
	private String name;

	@Column
	private String lastname;

	@Column
	private boolean checkbox1;

	@Column
	private boolean checkbox2;

	@Column
	private boolean checkbox3;

	@Column
	private boolean isEnabled;

	// role based
	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "USER_ROLES", joinColumns = { @JoinColumn(name = "USER_ID") }, inverseJoinColumns = {
			@JoinColumn(name = "ROLE_ID") })
	@OnDelete(action = OnDeleteAction.CASCADE)
	private Set<Role> roles;

	public long getId() {
		return this.id;
	}

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

	public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getlastname() {
		return lastname;
	}

	public void setlastname(final String lastname) {
		this.lastname = lastname;
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

	public boolean isEnabled() {
		return isEnabled;
	}

	public void setEnabled(boolean isEnabled) {
		this.isEnabled = isEnabled;
	}

}