package leopardiproject.csd.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import leopardiproject.csd.model.Eventi;

public interface EventiRepository extends JpaRepository<Eventi, Long>{
    Optional<Eventi> findByNomeEvento(String nomeEvento);
}
