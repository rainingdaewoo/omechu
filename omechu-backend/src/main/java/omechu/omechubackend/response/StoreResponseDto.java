package omechu.omechubackend.response;

import lombok.Getter;
import omechu.omechubackend.entity.Store;

import java.util.List;
import java.util.stream.Collectors;

@Getter
public class StoreResponseDto {

    private Long id;
    private String storeName;
    private String address;
    private String storeNaverURL;
    private String phone;
    private List<YoutubeContentResponseDto> youtubeContents;

    public StoreResponseDto() {
    }

    public StoreResponseDto(Store store) {
        this.id = store.getId();
        this.storeName = store.getStoreName();
        this.address = store.getAddress();
        this.storeNaverURL = store.getStoreNaverURL();
        this.phone = store.getPhone();
        this.youtubeContents =store.getYoutubeContents().stream().map(YoutubeContentResponseDto::new).collect(Collectors.toList());
    }


}
