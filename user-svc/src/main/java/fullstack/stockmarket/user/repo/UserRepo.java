package fullstack.stockmarket.user.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fullstack.stockmarket.user.model.User;




@Repository
public interface UserRepo extends JpaRepository<User, Integer>{
	
	User findUserById(int id);
	
	User findByEmail(String email);
	
	User findByPhoneNumber(String phoneNumber);
	
	List<User> findAll();
	
}