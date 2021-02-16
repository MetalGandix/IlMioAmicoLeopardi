package leopardiproject.csd.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import leopardiproject.csd.model.Poesie;

public interface PoesieRepository extends JpaRepository<Poesie, Long>{
    
    Poesie findByTitolo(String titolo);
    List<Poesie> findByCapitolo(int capitolo);

    @Query("SELECT p FROM Poesie p WHERE p.titolo LIKE %?1%")
    public List<Poesie> search(String titolo);

    Poesie findById(long id);
}
