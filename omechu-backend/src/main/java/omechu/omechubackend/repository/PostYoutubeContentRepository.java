package omechu.omechubackend.repository;

import omechu.omechubackend.entity.YoutubeContent;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostYoutubeContentRepository extends JpaRepository<YoutubeContent, Long> {
}
