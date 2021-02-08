package leopardiproject.csd.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import leopardiproject.csd.model.DAOUser;
import leopardiproject.csd.model.PrenotazioneVisita;

@Repository
public interface PrenotazioneVisitaRepository extends JpaRepository<PrenotazioneVisita, Long> {
List<PrenotazioneVisita> findByPrenotazioneVisitatore(DAOUser username);
}