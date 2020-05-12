package fullstack.stockmarket.user.model;
import java.sql.Date;
import java.sql.Time;

import javax.persistence.*;

import org.hibernate.annotations.GenericGenerator;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "user_account")
public class User {
	@Id
	@Column(name = "id", nullable = false)
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "email", nullable = false)
	private String email;
	
	@Column(name = "user_name")
	private String userName;
	
	@Column(name = "phone_number")
	private String phoneNumber;
	
	@Column(name = "confirmed_and_active", nullable = false)
	private boolean confirmedAndActive;
	
	@Column(name = "password_hash")
	private String passwordHash;
	
	@Column(name = "access_level")
	private short accessLevel;
	
	@Column(name = "photo_url")
	private String photoUrl;
	
}
