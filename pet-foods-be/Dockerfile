FROM maven:3.6.3-jdk-8 AS build
COPY src /home/app/src
COPY pom.xml /home/app
RUN mvn -f /home/app/pom.xml -Dmaven.test.skip=true clean package

FROM openjdk:8-jdk-alpine
COPY --from=build /home/app/target/*.jar /usr/local/lib/app.jar
EXPOSE 8091
ENTRYPOINT ["java","-jar","/usr/local/lib/app.jar"]