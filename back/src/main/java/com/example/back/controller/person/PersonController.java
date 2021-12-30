package com.example.back.controller.person;

import com.example.back.model.company.Company;
import com.example.back.model.person.CreatePerson;
import com.example.back.model.person.Person;
import com.example.back.model.person.UpdatePerson;
import com.example.back.repositories.company.CompanyRepository;
import com.example.back.repositories.person.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class PersonController {

    @Autowired
    PersonRepository personRepository;

    @Autowired
    CompanyRepository companyRepository;

    @GetMapping("persons")
    public List<Person> getPersons() {
        return personRepository.findAll();
    }

    @GetMapping("person/{id}")
    public Optional<Person> getPerson(@PathVariable("id") Integer id) { return personRepository.findById(id); }

    @GetMapping("persons/{name}")
    public List<Person> getPersons(@PathVariable("name") String name) {
        return personRepository.findByName(name);
    }

    /*Ajouter une personne en fonction de l'entreprise, il faut se placer dans l'entreprise en question afin de créer
    une personne dans l'annuaire*/
    @PostMapping("{idCompany}/addPerson")
    public void createPerson(@Validated @RequestBody CreatePerson newPerson, @PathVariable("idCompany") Integer idcompany) {
        Optional<Company> companyOptional = companyRepository.findById(idcompany);
        Company company = null;
        if (companyOptional.isPresent()) {
            company = companyOptional.get();
        }
        personRepository.save(Person.builder().name(newPerson.getName()).city(newPerson.getCity()).phone(newPerson.getPhone())
                .firstname(newPerson.getFirstname()).company(company).profession(newPerson.getProfession()).build());
    }

    /*Supprimer une personne en fonction de son ID*/
    @DeleteMapping("person/{id}")
    public ResponseEntity<?> deletePerson(@PathVariable("id") Integer idPerson) {
        if (!personRepository.existsById(idPerson)) {
            throw new ResourceNotFoundException("Aucune personne n'a été trouvé avec comme id " + idPerson);
        }
        return personRepository.findById(idPerson).map(person -> {
            personRepository.delete(person);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new ResourceNotFoundException("Aucune personne n'a été trouvé avec comme id " + idPerson));
    }

    /*Modifier une personne en fonction de son ID*/
    @PutMapping("person/{id}")
    public Person updatePerson(@PathVariable("id") Integer idPerson,
            @Validated @RequestBody UpdatePerson updatePerson) {
        Company temp;
        /*Si la company d'une personne est null c'est à dire nous avons essayé de mettre une company inexistante à notre
         personne dans l'annuaire alors il faudra d'abord créer notre company puis revenir modifier notre personne*/
        if (personRepository.findById(idPerson).get().getCompany() != null) {
            if (personRepository.findById(idPerson).get().getCompany().getName().equals(updatePerson.getNameCompany())) {
                temp = personRepository.findById(idPerson).get().getCompany();
            } else {
                temp = companyRepository.findByName(updatePerson.getNameCompany());
            }
        }
        else {
            temp = companyRepository.findByName(updatePerson.getNameCompany());
        }
        return personRepository.findById(idPerson).map(person -> {
            person.setCity(updatePerson.getCity());person.setFirstname(updatePerson.getFirstname());
            person.setName(updatePerson.getName());person.setPhone(updatePerson.getPhone());
            person.setCompany(temp);/*person.setProfession(updatePerson.getProfession());*/
            return personRepository.save(person);
        }).orElse(null);
    }
}
