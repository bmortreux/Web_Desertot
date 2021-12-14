package com.example.back.model.company;

import com.example.back.model.person.Person;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CreateCompany {

    private String name;
    private String city;
    private String phone;
    private int turnover;
    private List<Person> listPerson;

}
