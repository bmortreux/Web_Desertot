package com.example.back.repositories.person;

import com.example.back.model.person.Person;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PersonRepository extends CrudRepository<Person,Integer> {

    Optional<Person> findById(Integer personId);

    List<Person> findAll();

    List<Person> findByName(String name);
}
