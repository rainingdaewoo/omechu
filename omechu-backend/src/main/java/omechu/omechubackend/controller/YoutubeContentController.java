package omechu.omechubackend.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import omechu.omechubackend.request.PostYoutubeContentCreate;
import omechu.omechubackend.service.PostService;
import omechu.omechubackend.service.PostYoutubeContentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@Slf4j
@RestController
@RequiredArgsConstructor
public class YoutubeContentController {

    private final PostYoutubeContentService PostYoutubeContentService;

    @PostMapping("/youtubeContent")
    public ResponseEntity<?> postYoutubeContent(@RequestBody @Valid PostYoutubeContentCreate request){
        System.out.println("컨트롤러 진입 확인");

        PostYoutubeContentService.writeYoutubeContent(request);
        return null;
    }

}
