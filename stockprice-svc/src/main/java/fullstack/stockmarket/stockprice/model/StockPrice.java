package fullstack.stockmarket.stockprice.model;


import java.sql.Time;
import java.sql.Date;

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
@Table(name = "stock_price")
public class StockPrice {
	@Id
	@Column(name = "id", nullable = false)
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "company_code", nullable = false)
	private String companyCode;
	
	@Column(name = "stock_exchange", nullable = false)
	private String stockExchange;
	
	@Column(name = "current_price")
	private float currentPrice;
	
	@Column(name = "price_date")
	private Date priceDate;
	
	@Column(name = "price_time")
	private Time priceTime;
	
}
