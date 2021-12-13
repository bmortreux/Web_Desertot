package com.example.back.controller.company;

import com.example.back.model.company.Company;
import com.example.back.model.company.CreateCompany;
import com.example.back.repositories.company.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class CompanyController {

    @Autowired
    CompanyRepository companyRepository;

    @GetMapping("companies")
    public List<Company> getCompanies() {
        return companyRepository.findAll();
    }

    @GetMapping("company/{nameCompany}")
    public Company getCompany(@PathVariable("nameCompany") String name) {
        return companyRepository.findByName(name);
    }

    /*Création de notre company avec au préalable 0 personnes dans l'entreprise, nous devons les ajouter par la suite*/
    @PostMapping("addCompany")
    public void createCompany(@Validated @RequestBody CreateCompany newCompany) throws IOException {
        companyRepository.save(Company.builder().name(newCompany.getName()).turnover(newCompany.getTurnover()).listPerson(newCompany.getListPerson()).build());
    }
}