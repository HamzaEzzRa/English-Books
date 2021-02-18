

FROM maven:3.6.0-jdk-11-slim AS build

COPY pom.xml /Users/mpfa/IdeaProjects/Titsuite
RUN mvn -f pom.xml clean package

#
# Package stage
#
FROM openjdk:11-jre-slim
COPY --from=build /Users/mpfa/IdeaProjects/Titsuite/target/Titsuite-1.0-SNAPSHOT.jar /usr/local/lib/Titsuite-1.0-SNAPSHOT.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/usr/local/lib/Titsuite-1.0-SNAPSHOT.jar"]