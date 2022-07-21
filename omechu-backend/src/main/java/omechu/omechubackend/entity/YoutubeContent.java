package omechu.omechubackend.entity;

import lombok.Builder;

import javax.persistence.*;

@Entity
public class YoutubeContent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "youtubeContent_id")
    private Long id;

    private String URL;

    private String imageURL;

    private String youtuber;

    @ManyToOne
    @JoinColumn(name = "store_id")
    private Store store;

    public YoutubeContent() {

    }

    @Builder
    public YoutubeContent(String URL, String imageURL, String youtuber, Store store) {
        this.URL = URL;
        this.imageURL = imageURL;
        this.youtuber = youtuber;
        this.store = store;
    }

}
