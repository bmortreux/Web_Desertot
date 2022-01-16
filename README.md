# TP Programmation Serveur & Composants
Développement d'une application type annuaire afin de gérer des personnes ainsi que des entreprises.
## Pré-requis
- Docker
- JDK 1.8
## Fabriqué avec
- Spring Boot
- Angular
- HSQLDB
- Intellij
- WebStorm
- Git
- Postman (Importer le fichier Postman se trouvant dans les ressources du back)
- Windows PowerShell (pour lancer les commandes)
## Installation
### Global
```bash
docker-compose up --build
```
Une fois lancé se rendre à l'adresse localhost:4200 pour voir le site web
### Local
Si on ne souhaite pas lancer le front avec Docker
```bash
ng serve
```
Si on ne souhaite pas lancer le back avec Docker
```bash
mvn spring-boot:run
```
## Kafka
### Accéder
A partir de la CMD, il faut entrer la commande suivante :
```bash
docker exec -ti web_desertot_kafka_1 /bin/sh
```
Nous arrivons sur la console Shell Unix, il faudra ensuite entrer
```
kafka-console-producer --broker-list kafka:9092 --topic annuaire
```
La console kafka sera ouverte et c'est ici que nous pourrons taper nos données sous format json afin de les sauvegarder dans la base de données.
Par exemple nous pouvons taper : 
```
{"name": "Desertot", "firstname": "Mikael", "phone": "+336010203", "city": "Lille", "profession": "PDG"}
```
### Format json
Le format json est de la forme :
```
{"name": "", "firstname": "", "phone": "", "city": "", "profession": ""}
```
## Récupération du dépôt github
```bash
git clone https://github.com/bmortreux/Web_Desertot.git
```
