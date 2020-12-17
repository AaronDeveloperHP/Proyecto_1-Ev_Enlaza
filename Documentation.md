# Documentation
1. [Data Model](#data-model)
2. [Technologies Comparation](#technologies-comparation)
3. [Usability](#usability)
4. [User Requirements](#user-requirements)
5. [Prototype](#prototype)
## Data Model
### Tables
My aplication is composed of four table:
* Users
* Petitions
* Types
* Action
### Diagrams
* Case use Diagram

![Diagrama de casos de uso](https://github.com/KiraGONW/Proyecto_1-Ev_Enlaza/blob/master/docImg/CasosDeUso.PNG)
* E/R Diagram

![Diagrama entidad relacion](https://github.com/KiraGONW/Proyecto_1-Ev_Enlaza/blob/master/docImg/ER.PNG)
## Technologies Comparation
|   |Description|Advantages| Disadvantages |
|----|---------|------------------ | ------------------|
|WEB|An application designed for browsers (Example:ieselrincon.org)|-They use very little device resources where it is used<br/>-They can be adapted for any device or browser | -Slower than others<br/> -Not accessible throug appstores | 
|NATIVE|An applications that is installed in the device (Example:WhatsApp)|-They work offline<br/>-They are the fastest if they make a efficient use of the resources of the device |-They depends of your device specifications<br/>-If you want to make the app for multiple platforms, you must programm it once for each platform |
|HYBRID|An application that combines the web and native features(Example:Gmail)|-They can be installed and also used in the browser<br/>-You only have to programm once to make it multi platform|-They have a limited user interface options<br/>-Slower transitions between pages |
|PWA|A Web aplication that can be aded to the home screen of a device like a native app (example:Trivago,Pinterest)|-They have offline capabilities<br/>-They use Push Notifications<br/>-No installation or manual updates required |-Compatibility with IOS<br/>-They can´t use all the device capabilities because they aren´t native |
## Usability
## User Requirements
R1 Plataform
R1.1. The application must be mobile-first.
R1.2. But also can be used in the browser.
R2 The app must have various roles for make different actions.
R3 Authentication
R3.1. The regular users can´t be registered by themselves. 
R3.2. The admin can register new users.
R3.3. The users need to login to enter the applcation.
R3.4. Once a user is loged, the app generates a token that is used to the rest of actions.
R4 Menu
R4.1. Depend of the loged user´s type the options that are displayed in the menu.
R4.2. The menu must be intuitive
R5 Actions
R5.1. The standar user can generate petition, view his petitions, view his data.
R5.2 The admin user can view and manage the petitions of the users,view his data, view the data of the users and register new users.
## Prototype
The prototype isn´t already finished but is an approximation of what i want to do to the project´s application.<br/>
Prototype link: https://www.justinmind.com/usernote/tests/49456582/49502737/49524566/index.html
