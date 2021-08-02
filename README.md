# vagary
Travel website
# PROJECT 3 README <!-- omit in toc -->

> The Project Planning section **should be completed** for your project pitch with instructors.
>
> To ensure correct Markdown, I recommend cloning this wiki and copy/pasting the raw template code.

- [Overview](#Overview)
  - [Team Members](#Team-Members)
  - [Team Expectations](#Team-Expectations)
  - [Permissions](#Permissions)
- [MVP](#MVP)
  - [Goals](#Goals)
  - [Libraries](#Libraries)
  - [Client (Front End)](#Client-Front-End)
    - [Wireframes](#Wireframes)
    - [Component Hierarchy](#Component-Hierarchy)
    - [Component Breakdown](#Component-Breakdown)
    - [Component Estimates](#Component-Estimates)
  - [Server (Back End)](#Server-Back-End)
    - [ERD Model](#ERD-Model)
    - [Data Heirarchy](#Data-Heirarchy)
- [Post-MVP](#Post-MVP)
- [Code Showcase](#Code-Showcase)
- [Code Issues & Resolutions](#Code-Issues--Resolutions)

<br>

## Overview

_**Project Title** 
```
Vagary - a latin word meaning a magical journey
### Team Members


Created, designed, and developed by [Nash Anderson](https://github.com/andersonnash) (Git Czar), [Luz Lopez](https://github.com/luzmlx), [Babak Bayati](https://github.com/mishakessler), and [Tafari Bearsford](https://github.com/mishakessler) for the General Assembly Software Engineering Immersive (November '19 Cohort) Unit 3 Group Project.

### Team Expectations

Team values and expectations can be found on our project's [Group Expectation Setting Document](https://git.generalassemb.ly/sei-nyc-constellations/class-info/blob/master/projects/template_group-expectation-setting.md).

### Permissions

Digital assets used with full licensing and permission from [Death to Stock Photo](), [Freepik](), and [Unsplash](). Custom digital design and branding by John Lansing. Digital assets stored locally and on [Imgur]().

<br>

## MVP

> The Minimum Viable Product should be a well-planned, easily-communicated product, ensuring that the client's deliverable will be achievable and meet specifications within the time frame estimated.

_The **Project Title** MVP lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus fermentum risus vitae bibendum. Integer vel ipsum mollis odio sollicitudin ornare eu vel ex. In quis fringilla velit, ac maximus quam. Etiam eget placerat neque. Aenean faucibus sem non nisi lobortis ullamcorper._

<br>

### Goals

- Full CRUD
-Creat User, Sign In, Sign Out
-Form for adding and or modifying itinerary
-Media Query/Responsive Design
-Working submit buttons
-Tailwind
```


<br>

### Libraries

> Use this section to list all supporting libraries and dependencies, and their role in the project.

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | JS Library for building UI |
|  React-Router-Dom| Connecting routes/components|
|  Axios           | For API requests |
| Morgan           | Middleware for handeling API |
|     Express      | Creating a backend database |
|       Cors       | It allows or restricts restricted resources ona webserver|
|  Mongoose        | Object data modeling |
|  JWT             | Security function that hashes user data and passwords |
|  Nodemon         | restarts application once something is changed and saved in the file |





<br>

### Client (Front End)

#### Wireframes

[wireframes] https://www.figma.com/file/oLKO9SM34Of9YwHuvSvgea/Wireframe?node-id=0%3A1

![Dummy Link](url)

- Desktop Landing

![Dummy Link](url)

- Desktop Hero

![Dummy Link](url)

- Resource Index

![Dummy Link](url)

- Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app.
[Comp Heirarchy] https://lucid.app/lucidchart/34c50e4a-6e56-42b7-b840-99d4ac85ab98/edit?beaconFlowId=60130015EADA4F8A&page=0_0#

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
|__ services/

```

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|   Sign Up    |   class    |   y   |   n   | _The gallery will render the posts using cards in flexbox._      |
| Sign In      | functional |   n   |   y   | _The cards will render the post info via props._                 |
| Create       | functional |   n   |   y   | _The cards will render the post info via props._                 |
| Update       | functional |   n   |   y   | _The cards will render the post info via props._                 |
| Galery       | functional |   n   |   y   | _The cards will render the post info via props._                 |
| Itinerary Card| functional |   n   |   y   | _The cards will render the post info via props._                 |

|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |

#### Component Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Seting up API Config    |    H     |     1.5 hrs      |      hrs     |     hrs    |
| Create Models       |    H     |     1 hrs      |      hrs     |     TBD     |
| Rendering Data      |    H     |      3hrs      |      hrs     |     TBD     |
| Routes              |    H     |     2 hrs      |      hrs     |     TBD     |
| Postman Trials      |    H     |     2 hrs      |      hrs     |     TBD     |
| Sign Up Comp        |    H     |     2 hrs      |      hrs     |     TBD     |
| Sign In Comp        |    H     |     2 hrs      |      hrs     |     TBD     |
| Create Comp         |    H     |     2 hrs      |      hrs     |     TBD     |
| Update Comp         |    H     |     2 hrs      |      hrs     |     TBD     |
| Edit Comp           |    H     |     2 hrs      |      hrs     |     TBD     |
| Delet Comp          |    H     |     3 hrs      |      hrs     |     TBD     |
| Media Query         |    H     |     2 hrs      |      hrs     |     TBD     |
| CSS                 |    H     |     3 hrs      |      hrs     |     TBD     |
| Tailwind            |    H     |     3 hrs      |      hrs     |     TBD     |
| Netlify Deploy      |    H     |     1 hrs      |      hrs     |     TBD     |
| Heroku Deployment   |    H     |     1 hrs      |      hrs     |     TBD     |
| TOTAL               |          |     31 hrs     |     hrs      |     TBD     |



<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model.

#### Data Heirarchy

> Use this section to display the database, table, and attribute heirarchy.


``` structure

database_db
|__ users/
|__ resources/
|__ posts/

```

<br>

***

## Post-MVP
```
-Intergrate Instagram
-Integrate Calendar
-Travel Quiz
```

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.
