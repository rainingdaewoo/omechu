package omechu.omechubackend.request;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class PostCreate {

    @NotBlank
    private String title;
    private String content;
}
