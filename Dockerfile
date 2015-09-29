FROM java:8
MAINTAINER David Jarvis <david@ursacorp.io>

ADD target/shrike.jar /srv/app.jar

WORKDIR /srv
CMD ["java", "-jar", "/srv/app.jar"]
