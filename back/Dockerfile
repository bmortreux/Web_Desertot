#### image d'un jdk8 sous alpine
FROM openjdk:8-jdk-alpine as build

ENV SPRING_DATASOURCE_URL=jdbc:hsqldb:hsql:/db/test \
SPRING_DATASOURCE_USERNAME=sa \
SPRING_DATASOURCE_PASSWORD=password

# Working directory au sein de l'image
WORKDIR /app

# Copie du maven executable vers l'image
COPY mvnw .
COPY .mvn .mvn

# Copie du fichier pom.xml
COPY pom.xml .

# Build de toutes les dépendances
# Cette étape permettra de mettre les dépendances en cache, sauf si le pom.xml a changé
RUN ./mvnw dependency:go-offline -B

# Copie du projet
COPY src src

# Lancement du serveur springboot
CMD ./mvnw spring-boot:run