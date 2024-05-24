# Реалізація інформаційного та програмного забезпечення

В рамках проекту розробляється:
## SQL-скрипт для створення на початкового наповнення бази даних

```sql
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
    
DROP SCHEMA IF EXISTS `db-theme-3` ;
   
CREATE SCHEMA IF NOT EXISTS `db-theme-3` DEFAULT CHARACTER SET utf8 ;
USE `db-theme-3` ;
DROP TABLE IF EXISTS `db-theme-3`.`Export`;
 
CREATE TABLE IF NOT EXISTS `db-theme-3`.`Export` (
    `Export.id` INT NOT NULL,
    `Export.isSuccess` BOOLEAN,
    `Export.time` DATETIME NOT NULL,
    `History_History.id` INT NOT NULL,
     PRIMARY KEY (`Export.id`),
     INDEX `fk_History_Export_idx` (`History_History.id` ASC) VISIBLE,
     CONSTRAINT `fk_History_Export`
        FOREIGN KEY (`History_History.id`)
        REFERENCES `db-theme-3`.`History` (`History.id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
ENGINE = InnoDB;

DROP TABLE IF EXISTS `db-theme-3`.`History` ;
    
CREATE TABLE IF NOT EXISTS `db-theme-3`.`History` (
      `History.id` INT NOT NULL,
      `History.name` VARCHAR(45) NULL,
      `History.time` DATETIME NULL,
      PRIMARY KEY (`History.id`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `db-theme-3`.`SupportRequest` (
    `SupportRequest.id` INT NOT NULL PRIMARY KEY,
    `SupportRequest.isAnswered` BOOLEAN,
    `SupportRequest.type` VARCHAR(45) NOT NULL,
    `Client_Client.id` INT NOT NULL,
    `History_History.id` INT NOT NULL,
    INDEX `fk_SupportRequest_Client_idx` (`Client_Client.id` ASC) VISIBLE,
    CONSTRAINT `fk_SupportRequest_Client`
        FOREIGN KEY (`Client_Client.id`)
        REFERENCES `db-theme-3`.`Client` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    INDEX `fk_SupportRequest_History_idx` (`History_History.id` ASC) VISIBLE,
    CONSTRAINT `fk_SupportRequest_History`
        FOREIGN KEY (`History_History.id`)
        REFERENCES `db-theme-3`.`History` (`History.id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db-theme-3`.`adminAnswer`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db-theme-3`.`adminAnswer` ;

CREATE TABLE IF NOT EXISTS `db-theme-3`.`adminAnswer` (
  `adminAnswer.id` SERIAL NOT NULL,
  `adminAnswer.text` VARCHAR(250) NOT NULL,
  `adminAnswer.time` DATETIME NOT NULL,
  `supportRequest.id` INT NOT NULL,
  PRIMARY KEY (`adminAnswer.id`),
  INDEX `fk_SupportRequest_Export_idx` (`supportRequest.id` ASC) VISIBLE,
     CONSTRAINT `fk_SupportRequest_Export`
        FOREIGN KEY (`supportRequest.id`)
        REFERENCES `db-theme-3`.`SupportRequest` (`SupportRequest.id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `db-theme-3`.`userMessage`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db-theme-3`.`userMessage` ;
CREATE TABLE IF NOT EXISTS `db-theme-3`.`userMessage` (
  `userMessage.id` INT NOT NULL,
  `userMessage.text` VARCHAR(250) NOT NULL,
  `userMessage.time` DATETIME NOT NULL,
  `SupportRequest_SupportRequest.id` INT NOT NULL,
  PRIMARY KEY (`userMessage.id`),
  INDEX `fk_userMessage_SupportRequest_idx` (`SupportRequest_SupportRequest.id` ASC) VISIBLE,
  CONSTRAINT `fk_userMessage_SupportRequest`
    FOREIGN KEY (`SupportRequest_SupportRequest.id`)
    REFERENCES `db-theme-3`.`SupportRequest` (`SupportRequest.id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


DROP TABLE IF EXISTS `db-theme-3`.`Task`;

CREATE TABLE IF NOT EXISTS `db-theme-3`.`Task` (
    `Task.id` INT NOT NULL ,
    `Task.name` VARCHAR(255) NOT NULL,
    `Task.deadline` DATETIME NOT NULL,
    `Client_Client.id` INT NOT NULL,
    PRIMARY KEY (`Task.id`),
    INDEX `fk_Task_Client1_idx` (`Client_Client.id` ASC) VISIBLE,
    CONSTRAINT `fk_Task_Client1`
    FOREIGN KEY (`Client_Client.id`)
    REFERENCES `db-theme-3`.`Client` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

DROP TABLE IF EXISTS `db-theme-3`.`Request` ;
    
CREATE TABLE IF NOT EXISTS `db-theme-3`.`Request` (
      `id` INT NOT NULL,
      `name` VARCHAR(45) NULL,
      `time` TIME NULL,
      `description` VARCHAR(45) NULL,
      `History_History.id` INT NOT NULL,
      `Client.id` INT NOT NULL,
      PRIMARY KEY (`id`),
      INDEX `fk_Request_History1_idx` (`History_History.id` ASC) VISIBLE,
      INDEX `fk_Request_Client1_idx` (`Client.id` ASC) VISIBLE,
      CONSTRAINT `fk_Request_History1`
        FOREIGN KEY (`History_History.id`)
        REFERENCES `db-theme-3`.`History` (`History.id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
      CONSTRAINT `fk_Request_Client1`
        FOREIGN KEY (`Client.id`)
        REFERENCES `db-theme-3`.`Client` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
ENGINE = InnoDB;


DROP TABLE IF EXISTS `db-theme-3`.`Client` ;
    
CREATE TABLE IF NOT EXISTS `db-theme-3`.`Client` (
      `id` INT NOT NULL,
      `name` VARCHAR(45) NULL,
      `lastname` VARCHAR(45) NULL,
      `mail` VARCHAR(45) NULL,
      `password` VARCHAR(45) NULL,
      `Role.id` INT NOT NULL,
       UNIQUE INDEX `mail_UNIQUE` (`mail` ASC) VISIBLE,
      PRIMARY KEY (`id`),
      INDEX `fk_Client_Role1_idx` (`Role.id` ASC) VISIBLE,
      CONSTRAINT `fk_Client_Role1`
        FOREIGN KEY (`Role.id`)
        REFERENCES `db-theme-3`.`Role` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
ENGINE = InnoDB;


    DROP TABLE IF EXISTS `db-theme-3`.`Role` ;
    
    CREATE TABLE IF NOT EXISTS `db-theme-3`.`Role` (
      `id` INT NOT NULL,
      `name` VARCHAR(45) NULL,
      `permission` VARCHAR(45) NULL,
      `description` VARCHAR(45) NULL,
      PRIMARY KEY (`id`))
    ENGINE = InnoDB;

START TRANSACTION;
USE `db-theme-3`;
INSERT INTO `db-theme-3`.`userMessage` (`userMessage.id`, `userMessage.text`, `userMessage.time`, `SupportRequest_SupportRequest.id`) VALUES (1, 'Question 1', '2024-04-19 12:34:56', 1);
INSERT INTO `db-theme-3`.`userMessage` (`userMessage.id`, `userMessage.text`, `userMessage.time`, `SupportRequest_SupportRequest.id`) VALUES (2, 'Question 2', '2024-05-19 21:43:11', 1);
INSERT INTO `db-theme-3`.`userMessage` (`userMessage.id`, `userMessage.text`, `userMessage.time`, `SupportRequest_SupportRequest.id`) VALUES (3, 'Question 3', '2024-05-19 16:05:25', 1);
COMMIT;

START TRANSACTION;
USE `db-theme-3`;
INSERT INTO `db-theme-3`.`Request` (`id`, `name`, `time`, `description`, `History_History.id`, `Client.id`) VALUES (1, 'Swc', '11:30', 'SwERVREVREc', 1, 1);
INSERT INTO `db-theme-3`.`Request` (`id`, `name`, `time`, `description`, `History_History.id`, `Client.id`) VALUES (2, 'Wdcw', '22:00', 'SwFDVFVc', 1, 2);
INSERT INTO `db-theme-3`.`Request` (`id`, `name`, `time`, `description`, `History_History.id`, `Client.id`) VALUES (3, 'Ccec', '13:00', 'SwEVSGMUIc', 1, 3);  
COMMIT;
START TRANSACTION;
USE `db-theme-3`;
INSERT INTO `db-theme-3`.`Client` (`id`, `name`, `lastname`, `mail`, `password`,`Role.id`) VALUES (1, 'Swc', 'frc', 'Swc@gmail.com', '123', 1);
INSERT INTO `db-theme-3`.`Client` (`id`, `name`, `lastname`, `mail`, `password`,`Role.id`) VALUES (2, 'fewc', 'Swc', 'fewc@gmail.com', '321', 2);
INSERT INTO `db-theme-3`.`Client` (`id`, `name`, `lastname`, `mail`, `password`,`Role.id`) VALUES (3, 'Gdwc', 'oirwc','Gdwc@gmail.com', '123456', 3);
COMMIT;

START TRANSACTION;
USE `db-theme-3`;
INSERT INTO `db-theme-3`.`Role` (`id`, `name`, `permission`, `description`) VALUES (1, 'Swc', 'frc', 'bhvruoeijrnwp');
INSERT INTO `db-theme-3`.`Role` (`id`, `name`, `permission`, `description`) VALUES (2, 'fewc', 'Swc', 'njnjevjnvenijveni');
INSERT INTO `db-theme-3`.`Role` (`id`, `name`, `permission`, `description`) VALUES (3, 'Gdwc', 'oirwc', 'fvvkfnjewojcw');
COMMIT;

START TRANSACTION;
USE `db-theme-3`;
INSERT INTO `db-theme-3`.`adminAnswer` (`adminAnswer.id`, `adminAnswer.text`, `adminAnswer.time`, `SupportRequest.id`) VALUES (1, 'Answer1', '2024-03-21', 1);
INSERT INTO `db-theme-3`.`adminAnswer` (`adminAnswer.id`, `adminAnswer.text`, `adminAnswer.time`, `SupportRequest.id`) VALUES (2, 'Answer2', '2024-04-19', 1);
INSERT INTO `db-theme-3`.`adminAnswer` (`adminAnswer.id`, `adminAnswer.text`, `adminAnswer.time`, `SupportRequest.id`) VALUES (3, 'Answer3', '2024-05-10', 1);
COMMIT;

START TRANSACTION;
USE `db-theme-3`;
INSERT INTO `db-theme-3`.`Export` (`Export.id`, `Export.isSuccess`, `Export.time`, `History_History.id`) VALUES (1, 0, '2024-3-26', 1);
INSERT INTO `db-theme-3`.`Export` (`Export.id`, `Export.isSuccess`, `Export.time`, `History_History.id`) VALUES (2, 1, '2024-4-17', 1);
INSERT INTO `db-theme-3`.`Export` (`Export.id`, `Export.isSuccess`, `Export.time`, `History_History.id`) VALUES (3, 0, '2024-4-23', 1);
COMMIT;

START TRANSACTION;
USE `db-theme-3`;
INSERT INTO `db-theme-3`.`History` (`History.id`, `History.name`, `History.time`) VALUES (1, 'History 1', '2024-3-26');     
COMMIT;

START TRANSACTION;
USE `db-theme-3`;
INSERT INTO `db-theme-3`.`Task` (`Task.id`, `Task.name`, `Task.deadline`, `Client_Client.id`) VALUES (1, 'Task1', '2024-3-26', 1);
INSERT INTO `db-theme-3`.`Task` (`Task.id`, `Task.name`, `Task.deadline`, `Client_Client.id`) VALUES (2, 'Task2', '2024-4-26', 2);
INSERT INTO `db-theme-3`.`Task` (`Task.id`, `Task.name`, `Task.deadline`, `Client_Client.id`) VALUES (3, 'Task3', '2024-5-26', 3);
COMMIT;

START TRANSACTION;
USE `db-theme-3`;
INSERT INTO `db-theme-3`.`SupportRequest` (`SupportRequest.id`, `SupportRequest.isAnswered`, `SupportRequest.type`, `Client_Client.id`, `History_History.id`) VALUES (1, 1, 'abc', 1, 1);
INSERT INTO `db-theme-3`.`SupportRequest` (`SupportRequest.id`, `SupportRequest.isAnswered`, `SupportRequest.type`, `Client_Client.id`, `History_History.id`) VALUES (2, 1, 'bcd', 1, 1);
INSERT INTO `db-theme-3`.`SupportRequest` (`SupportRequest.id`, `SupportRequest.isAnswered`, `SupportRequest.type`, `Client_Client.id`, `History_History.id`) VALUES (3, 1, 'cde', 1, 1);
COMMIT;
```

## RESTfull сервіс для управління даними

RESTfull API для управління даними таблиці userMessage створеної в MySQL 
було створено за допомогою фреймворку Spring Boot на мові Java. 
RESTfull API представляє собою CRUD застосунок. 
- Файл pom.xml зі встановленими залежностями
```
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>3.3.0</version>
		<relativePath/> <!-- lookup parent from repository -->
	</parent>
	<groupId>db</groupId>
	<artifactId>lab6</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<name>lab6</name>
	<description>Db lab6</description>
	<properties>
		<java.version>17</java.version>
	</properties>
	<dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-data-jpa</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-thymeleaf</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>
		<dependency>
			<groupId>com.mysql</groupId>
			<artifactId>mysql-connector-j</artifactId>
			<scope>runtime</scope>
		</dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-devtools</artifactId>
			<scope>runtime</scope>
			<optional>true</optional>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
		</dependency>
	</dependencies>

	<build>
		<plugins>
			<plugin>
				<groupId>org.springframework.boot</groupId>
				<artifactId>spring-boot-maven-plugin</artifactId>
			</plugin>
		</plugins>
	</build>

</project>
```
- Підключення бази даних
```
spring.application.name=lab6
spring.datasource.url=jdbc:mysql://localhost:3306/db-theme-3
spring.datasource.username=user
spring.datasource.password=12345678
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.hibernate.naming.physical-strategy=org.hibernate.boot.model.naming.PhysicalNamingStrategyStandardImpl
```
- Основний клас для запуску API
```
package db.lab6;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Lab6Application {

	public static void main(String[] args) {
		SpringApplication.run(Lab6Application.class, args);
	}
}
```
- Клас сутності для взаємодії з БД
```
package db.lab6.entity;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "usermessage")
public class UserMessage {
    @Id
    @Column(name = "userMessage.id")
    private int id;

    @Column(name = "userMessage.text")
    private String text;

    @Column(name = "userMessage.time")
    private Date time;

    @Column(name = "SupportRequest_SupportRequest.id")
    private int supportRequestId;

    public UserMessage() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public int getSupportRequestId() {
        return supportRequestId;
    }

    public void setSupportRequestId(int supportRequestId) {
        this.supportRequestId = supportRequestId;
    }
}
```
- Контролер для роботи з опитуваннями
```
package db.lab6.rest;

import db.lab6.entity.UserMessage;
import db.lab6.service.UserMessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/db-theme-3")
public class UserMessageRestController {
    private UserMessageService userMessageService;

    @Autowired
    public UserMessageRestController(UserMessageService userMessageService) {
        this.userMessageService = userMessageService;
    }

    @GetMapping("/userMessages")
    public List<UserMessage> findAll() {
        return userMessageService.findAll();
    }

    @GetMapping("/userMessages/{userMessageId}")
    public UserMessage getUserMessage(@PathVariable int userMessageId) {
        UserMessage userMessage = userMessageService.findById(userMessageId);

        if (userMessage == null) {
            throw new RuntimeException("UserMessage id not found - " + userMessageId);
        }

        return userMessage;
    }

    @PostMapping("/userMessages")
    public UserMessage addUserMessage(@RequestBody UserMessage userMessage) {
        UserMessage dbUserMessage = userMessageService.save(userMessage);

        return dbUserMessage;
    }

    @PutMapping("/userMessages")
    public UserMessage updateUserMessage(@RequestBody UserMessage userMessage) {
        UserMessage dbUserMessage = userMessageService.save(userMessage);

        return dbUserMessage;
    }

    @DeleteMapping("/userMessages/{userMessageId}")
    public String deleteEmployee(@PathVariable int userMessageId) {
        UserMessage tmpUserMessage = userMessageService.findById(userMessageId);

        if (tmpUserMessage == null) {
            throw new RuntimeException("tmpUserMessage id not found - " + userMessageId);
        }
        userMessageService.deleteById(userMessageId);

        return "Deleted userMessage id - " + userMessageId;
    }
}
```
- Сервіс для роботи з опитуваннями
```
package db.lab6.service;

import db.lab6.dao.UserMessageDAO;
import db.lab6.entity.UserMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UserMessageService {
    private UserMessageDAO userMessageDAO;

    @Autowired
    public UserMessageService(UserMessageDAO userMessageDAO) {
        this.userMessageDAO = userMessageDAO;
    }

    public List<UserMessage> findAll() {
        return userMessageDAO.findAll();
    }

    public UserMessage findById(int id) {
        return userMessageDAO.findById(id);
    }

    @Transactional
    public UserMessage save(UserMessage userMessage) {
        return userMessageDAO.save(userMessage);
    }

    @Transactional
    public void deleteById(int id) {
        userMessageDAO.deleteById(id);
    }
}
```
- Об'єкт що надає абстрактний інтерфейс до бази даних
```
package db.lab6.dao;

import db.lab6.entity.UserMessage;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserMessageDAO {
    private EntityManager entityManager;

    @Autowired

    public UserMessageDAO(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    public List<UserMessage> findAll() {
        TypedQuery<UserMessage> theQuery = entityManager.createQuery("from UserMessage", UserMessage.class);
        List<UserMessage> userMessages = theQuery.getResultList();
        return userMessages;
    }

    public UserMessage findById(int id) {
        UserMessage userMessage = entityManager.find(UserMessage.class, id);
        return userMessage;
    }

    public UserMessage save(UserMessage userMessage) {
        UserMessage dbUserMessage = entityManager.merge(userMessage);
        return dbUserMessage;
    }

    public void deleteById(int id) {
        UserMessage userMessage = entityManager.find(UserMessage.class, id);
        entityManager.remove(userMessage);
    }
}
```
