package com.example.back.service.kafka;

import com.example.back.model.person.Person;
import com.example.back.repositories.person.PersonRepository;
import com.fasterxml.jackson.databind.json.JsonMapper;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class Kafka {

    @Autowired
    PersonRepository personRepository;

    //permet de vérifier si la personne est déjà présente dans la bdd ou non
    @KafkaListener(topics = "annuaire", groupId = "groupe-ms")
    public void add(ConsumerRecord<String, String> consumerRecord) throws Exception {
        //On récupère la person
        Person person = personEvent(consumerRecord.value());
        if(!personRepository.findByPhone(person.getPhone()).isPresent()) {
            personRepository.save(person);
        }
    }

    // Convertir le String envoyé en JSON
    private Person personEvent(String jsonPersonEvent) throws Exception{
        JsonMapper jsonMapper=new JsonMapper();
        Person personEvent = jsonMapper.readValue(jsonPersonEvent, Person.class);

        return personEvent;
    }
}
