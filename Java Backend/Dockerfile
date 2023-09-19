# create a dockerfile for the java backend
# use the maven image
FROM eclipse-temurin:17-jdk-alpine AS build

# set the working directory
WORKDIR /app

# copy the maven executable
COPY mvnw .
COPY .mvn .mvn

# copy the pom.xml file
COPY pom.xml .

# build all the dependencies in preparation to go offline
# this is a separate step so the dependencies will be cached unless
# the pom.xml file has changed
RUN ./mvnw dependency:go-offline -B

# copy the project source
COPY src src

# package the application
RUN ./mvnw package -DskipTests
RUN mkdir -p target/dependency && (cd target/dependency; jar -xf ../*.jar)

# create docker image to run the application
FROM eclipse-temurin:17-jdk-alpine

ARG DEPENDENCY=/app/target/dependency

# copy the dependency application file from build stage artifact
COPY --from=build ${DEPENDENCY}/BOOT-INF/lib /app/lib
COPY --from=build ${DEPENDENCY}/META-INF /app/META-INF
COPY --from=build ${DEPENDENCY}/BOOT-INF/classes /app

ENTRYPOINT [ "java", "-cp", "app:app/lib/*", "com.fullstackapp.demo.DemoApplication" ]