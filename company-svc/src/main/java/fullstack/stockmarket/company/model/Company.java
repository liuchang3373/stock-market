package fullstack.stockmarket.company.model;
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
@Table(name = "COMPANY")
public class Company {
	@Id
	@Column(name = "id", nullable = false)
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "company_code", nullable = false)
	private String companyCode;
	
	@Column(name = "company_name", nullable = false)
	private String companyName;
	
	@Column(name = "turnover")
	private float turnOver;
	
	@Column(name = "ceo_name")
	private String ceoName;
	
	@Column(name = "board_director")
	private String boardDirector;
	
	@Column(name = "brief")
	private String brief;
	
	@Column(name = "sector_id")
	private int sectorId;
	
	@Column(name = "exchange_id")
	private int exchangeId;
	
	
}
