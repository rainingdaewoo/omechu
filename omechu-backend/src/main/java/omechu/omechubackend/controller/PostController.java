package omechu.omechubackend.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import omechu.omechubackend.entity.Post;
import omechu.omechubackend.request.PostCreate;
import omechu.omechubackend.response.PostResponse;
import omechu.omechubackend.service.PostService;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
public class PostController {

    private final PostService postService;

    /**
     * 게시판 작성
     * @param request
     */
    @PostMapping("/posts")
    public void post(@RequestBody @Valid PostCreate request) {
        postService.write(request);
    }

    /**
     * 게시글 단건 조회
     * @param postId
     * @return
     */
    @GetMapping("/posts/{postId}")
    public PostResponse get(@PathVariable Long postId) {
        return postService.get(postId);
    }

    @GetMapping("/posts")
    public List<PostResponse> getList(@RequestParam int page) {
        return postService.getList(page);
    }
}
