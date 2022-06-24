package omechu.omechubackend.repository;

import omechu.omechubackend.entity.Post;

import java.util.List;

public interface PostRepositoryCustom {

    List<Post> getList(int page);
}
