package leopardiproject.csd.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import leopardiproject.csd.model.ImageModel;

public interface ImageRepository extends JpaRepository<ImageModel, Long> {
	Optional<ImageModel> findByName(String name);
}
