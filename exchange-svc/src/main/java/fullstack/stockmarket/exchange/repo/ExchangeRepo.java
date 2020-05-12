package fullstack.stockmarket.exchange.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fullstack.stockmarket.exchange.model.Exchange;


@Repository
public interface ExchangeRepo extends JpaRepository<Exchange, Integer>{
	
	Exchange findByExchangeName(String exchangeName);
	
	Exchange findById(int id);
	
	List<Exchange> findAll();
	
}