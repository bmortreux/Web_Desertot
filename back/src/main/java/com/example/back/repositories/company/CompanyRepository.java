package com.example.back.repositories.company;

import com.example.back.model.company.Company;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CompanyRepository extends CrudRepository<Company,Integer> {

    Optional<Company> findById(Integer companyId);

    List<Company> findAll();

    Company findByName(String name);
}
