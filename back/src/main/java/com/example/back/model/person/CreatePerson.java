package com.example.back.model.person;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CreatePerson {

    private String profession;
    private String name;
    private String firstname;
    private String phone;
    private String city;

}
