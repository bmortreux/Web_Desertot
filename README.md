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
## Récupération du dépôt github
```bash
git clone https://github.com/bmortreux/Web_Desertot.git
```
