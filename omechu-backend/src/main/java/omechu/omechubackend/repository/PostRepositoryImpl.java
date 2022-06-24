package omechu.omechubackend.repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import omechu.omechubackend.entity.Post;
import omechu.omechubackend.entity.QPost;

import java.util.List;

@RequiredArgsConstructor
public class PostRepositoryImpl implements PostRepositoryCustom{

    private final JPAQueryFactory jpaQueryFactory;


    @Override
    public List<Post> getList(int page) {
        jpaQueryFactory.selectFrom(QPost.post);

        return null;
    }
}
