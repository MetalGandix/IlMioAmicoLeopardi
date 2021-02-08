package leopardiproject.csd.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import leopardiproject.csd.model.Audio;

public interface AudioRepository extends JpaRepository<Audio,Long>{
    
}
