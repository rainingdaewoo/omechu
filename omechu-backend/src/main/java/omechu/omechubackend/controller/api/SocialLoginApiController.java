package omechu.omechubackend.controller.api;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SocialLoginApiController {

    @GetMapping
    public String redir(@RequestParam String code) {

        return "테스트";
    }


}
