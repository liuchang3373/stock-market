package fullstack.stockmarket.sector.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fullstack.stockmarket.sector.model.Sector;




@Repository
public interface SectorRepo extends JpaRepository<Sector, Integer>{
	
	Sector findBySectorName(String sectorName);
	
	List<Sector> findAll();
	
}