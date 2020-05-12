package fullstack.stockmarket.company.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fullstack.stockmarket.company.model.Company;
import fullstack.stockmarket.company.model.IPO;


@Repository
public interface IPORepo extends JpaRepository<IPO, Integer>{
	
	IPO findByCompanyName(String companyName);
	
	IPO findById(int id);
	
	List<IPO> findAll();
	
}