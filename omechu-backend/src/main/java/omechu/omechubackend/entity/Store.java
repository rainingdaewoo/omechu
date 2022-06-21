package omechu.omechubackend.entity;

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

    private String phone;
}
