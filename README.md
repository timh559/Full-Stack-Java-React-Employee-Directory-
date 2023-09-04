# Full Stack Employee Directory

A Employee Directory site that allows you to add employees, update existing employees, view the list of employees and individual employee cards.

### Built with
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

##### Backend
![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring](https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white)
![Hibernate](https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=Hibernate&logoColor=white)

#### Database
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

#### Frontend
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)

### Setup
Clone this GitHub Repo
```
gh repo clone timh559/Full-Stack-Java-React-Employee-Directory-
```
Run your MySql Server and enter your password
```
mysql -u root -p
```
Navigate to Java resources folder and open application.properties file
```
cd ../Java\ Backend/src/main/resources
open application.properties
```
Change MySql Username and Password to your own
```
spring.datasource.username= YOUR USERNAME
spring.datasource.password= YOUR PASSWORD
```
Run the Java Spring Backend
```
cd ../Java\ Backend
mvn spring-boot:run
```
Navigate to the React FrontEnd directory
```
cd ../React\ Frontend
```
Install packages
```
npm install
```
Run the React Frontend
```
npm run dev
```
Open your browser and navigate to your localhost