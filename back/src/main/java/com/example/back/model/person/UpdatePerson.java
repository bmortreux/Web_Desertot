package com.example.back.model.person;

import com.example.back.model.company.Company;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UpdatePerson {

    private String name;

    private String firstname;

    private String phone;

    private String city;

    private String nameCompany;

}
