package leopardiproject.csd.repository;
import leopardiproject.csd.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long>{
    Role findById(long id);
}
