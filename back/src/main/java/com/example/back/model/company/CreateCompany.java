package com.example.back.model.company;

import com.example.back.model.person.CreatePerson;
import com.example.back.model.person.Person;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CreateCompany {

    private String name;
    private int turnover;
    private List<Person> listPerson;

}
