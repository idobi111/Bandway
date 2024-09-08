# Use an official OpenJDK runtime as a parent image
FROM maven:3.8.3-openjdk-17

# Set the working directory in the container
WORKDIR /app

# Copy the project’s jar file into the container at /app
COPY target/bandway-1.0.0.jar /app/bandway.jar

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Run the jar file
ENTRYPOINT ["java", "-jar", "bandway.jar"]