package com.example.back.model.person;

import com.example.back.model.company.Company;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
@Table(name = "Person")
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int person_id;

    private String profession;

    @NotNull(message = "Name Required")
    private String name;

    @NotNull(message = "Surname Required")
    private String firstname;

    @NotNull(message = "Phone Required")
    private String phone;

    @NotNull(message = "City Required")
    private String city;

    @ManyToOne
    @JoinColumn(name = "company_id")
    @JsonIgnoreProperties({ "listPerson" })
    private Company company;

}