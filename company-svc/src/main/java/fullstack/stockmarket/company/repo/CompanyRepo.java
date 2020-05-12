package fullstack.stockmarket.company.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fullstack.stockmarket.company.model.Company;


@Repository
public interface CompanyRepo extends JpaRepository<Company, Integer>{
	
	Company findByCompanyName(String companyName);
	
	Company findByCompanyCode(String companyCode);
	
	Company findById(int id);
	
	List<Company> findAll();
	
}