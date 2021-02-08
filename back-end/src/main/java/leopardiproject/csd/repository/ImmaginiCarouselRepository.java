package leopardiproject.csd.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import leopardiproject.csd.model.ImmaginiCarousel;

public interface ImmaginiCarouselRepository extends JpaRepository<ImmaginiCarousel, Long> {
    Optional<ImmaginiCarousel> findByName(String name);
}
