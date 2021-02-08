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

 /*   @Query("SELECT p FROM Product p WHERE p.name LIKE %?1%"
    + " OR p.brand LIKE %?1%"
    + " OR p.madein LIKE %?1%"
    + " OR CONCAT(p.price, '') LIKE %?1%")
    public List<Product> search(String keyword); */

}
