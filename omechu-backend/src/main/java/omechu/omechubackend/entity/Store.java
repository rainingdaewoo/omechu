package omechu.omechubackend.entity;

import lombok.Builder;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Store {

    @Id @GeneratedValue
    @Column(name = "store_id")
    private Long id;

    private String storeName;

    private String address;

    private String storeNaverURL;

    private String phone;

    public Store() {

    }

    @Builder
    public Store(String storeName, String address, String phone, String storeNaverURL) {
        this.storeName = storeName;
        this.address = address;
        this.phone = phone;
        this.storeNaverURL = storeNaverURL;
    }


}
