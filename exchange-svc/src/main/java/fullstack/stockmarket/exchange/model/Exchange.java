package fullstack.stockmarket.exchange.model;
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
@Table(name = "exchange")
public class Exchange {
	@Id
	@Column(name = "id", nullable = false)
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "exchange_name", nullable = false)
	private String exchangeName;
	
	@Column(name = "contact_address")
	private String contactAddress;
	
	@Column(name = "remarks")
	private String remarks;
	
	@Column(name = "brief")
	private String brief;
	
}
