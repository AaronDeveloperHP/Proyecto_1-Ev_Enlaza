![OFGC](https://github.com/KiraGONW/Proyecto_1-Ev_Enlaza/blob/master/docImg/Logo.PNG)
# Proyecto_1-Ev_Enlaza
1. [Introduction](#introduction)
2. [Technologies](#technologies)
3. [Prerequisites](#prerequesites)
4. [Installation guide](#installation-guide)
5. [Documentation](#documentation)
## Introduction
The first evaluation project is uploaded in this repository.<br/>
In my case it consists of an application to manage the attendance of the employees of the Philharmonic Orchestra of Gran Canaria.<br/>
Because the virus of this year has changed the way the people work and that ocassionate new problems in the company or in the working envioremnet,<br/>
and there must be an application or a technologie to minimize these news problems and make the life easier for the user.<br/>
For example my app is made to manage the employees petitions about where they want to work if they prefer to go to the office, or work from their houses,
or they really can´t go to office because they're ill or doing quarantine.<br/>
## Technologies
The technologies are divided in two blocks:
#### Frontend
* Ionic with Angular
#### Backend
* Laravel
* MySQL
## Prerequisites
* Git - You can install it from https://git-scm.com/downloads.
* MySQL - You can install it from https://www.mysql.com/downloads/.
* MySQL Workbench - You can install it from https://dev.mysql.com/downloads/workbench/.
* Visual Studio Code - The Editor used in this project
* Composer - Install it from https://getcomposer.org/download/
* Php - You can install it from https://www.php.net/downloads
## Installation guide
Once you have all the prerequisites intalled,to make this app work, you will need to: 

1. Install Ionic using this command:
``` markdown
npm install -g @ionic/cli
```
2. Clone this project
3. Create a new database
4.Create a new MySql user
To use mysql native authentication run the following script in MySQL Workbench:
```
CREATE USER 'YOUR_USER'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YOUR_PASSWORD';
GRANT ALL PRIVILEGES ON *.* TO 'YOUR_USER'@'localhost' WITH GRANT OPTION;
```
5. Open the file .env inside backend folder and change the values to yours:
``` markdown
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=MyDatabaseName
DB_USERNAME=MySqlUserName
DB_PASSWORD=MySqlUserPassword
```
6. Install all the back end packages:
```
composer install
```
7. Run the migrations to create all tables(to start with the application you need to insert manually the first user in the table 'users' to later use the frontend) :
```
php artisan migrate
```
8. Create Auth Encryption Keys:
```
php artisan passport:install
```
8. Run the sercvice:
```
php artisan serve
```
9. Now go to the frontend folder and run:
```
npm install
```
10. Run the application
```
ionic serve
```
Install the package @ionic/lab to prove the online device simulator with this command:
```
ionic serve --lab
```
## Documentation
If you want to know more about the app and how it´s made. <br/>
Link to the rest of the documentation:[here](/Documentation.md)

