package fullstack.stockmarket.stockprice.repo;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fullstack.stockmarket.stockprice.model.StockPrice;




@Repository
public interface StockPriceRepo extends JpaRepository<StockPrice, Integer>{
	
	List<StockPrice> findByCompanyCode(String companyCode);
	
	StockPrice findByCompanyCodeAndDate(String companyCode, Date date);
	
	List<StockPrice> findAll();
	
}