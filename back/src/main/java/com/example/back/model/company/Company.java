package com.example.back.model.company;

import com.example.back.model.person.Person;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
@Table(name = "Company")
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int company_id;

    @NotNull(message = "Name Required")
    private String name;

    @NotNull(message = "City Required")
    private String city;

    @NotNull(message = "Phone Required")
    private String phone;

    @NotNull(message = "Turnover Required")
    private int turnover;

    @OneToMany(mappedBy = "company", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnoreProperties({ "company" })
    private List<Person> listPerson;
}
