package omechu.omechubackend.controller;

import lombok.extern.slf4j.Slf4j;
import omechu.omechubackend.request.PostCreate;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.Map;

@Slf4j
@RestController
public class PostController {

    //@PostMapping("/posts")
    @PostMapping("/posts")
    public String post() {
        log.info("test");

        return "Hello World";
    }
}
