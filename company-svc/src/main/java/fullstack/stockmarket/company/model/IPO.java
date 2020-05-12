package fullstack.stockmarket.company.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

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
@Table(name = "IPO")
public class IPO {
	@Id
	@Column(name = "id", nullable = false)
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "company_name", nullable = false)
	private String companyName;
	
	@Column(name = "price_per_share")
	private float pricePerShare;
	
	@Column(name = "total_number_share")
	private float totalNumberShare;
	
	@Column(name = "open_date_time")
	private Date openDateTime;
	
	@Column(name = "remarks")
	private String remarks;
	
	@Column(name = "sector_id")
	private int sectorId;
	
	@Column(name = "exchange_id")
	private int exchangeId;
}
