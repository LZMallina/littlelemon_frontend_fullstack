# Objective:
* Build a website for the Little Lemon restaurant in this Capstone project.
* Complete tasks assigned each week

# Week 1 (Starting the project)
## Setting up the project

* setup version control with Github
* download the latest version of npm and node.js
* setup local react development environment on VS code: with:

$npm init react-app little-lemon

or

$npx create-react-app little-lemon

## Planning the UX and UI

* Wireframes and Prototypes were created with Figma.

* Wireframes: <https://www.figma.com/file/3f1FyZL4SNqrP8xB9YodIC/Capstone%2FWeek1%2FWireframing-the-Project%3A-Little-Lemon-Booking-App?node-id=2%3A5&t=8qMjwUWxYFvDf8Uo-1>

* Prototype: <https://www.figma.com/file/9r6RUgOZcLkFMxnJastrjC/Capstone%2FWeek1%2FApplying_Design_Fundamentals?node-id=1%3A5&t=8qMjwUWxYFvDf8Uo-1>

# Week 2 (Project Foundations)

## Setting up page and component folder and ensure routes work:

### for git hub page deployment:

*gitHub page does not work with BrowserRouter, you need version 5 of react-router-dom and HashRouter

* $npm install react-router-dom@5

### for other deployment use BrowserRouter version 6:

$npm install react-router-dom@6

### Other dependencies:

* icons:

$ npm i --save @fortawesome/free-brands-svg-icons

$ npm i --save @fortawesome/fontawesome-svg-core

$ npm i --save @fortawesome/free-solid-svg-icons

$ npm i --save @fortawesome/free-regular-svg-icons

$ npm i --save @fortawesome/react-fontawesome@latest

* to fix dependency problem during installation:

$ npm i --save @fortawesome/react-fontawesome@latest

## Adding meta tags and setting up OGP (Open Graph Protocol)
* OGP enhance social media search.

1) Add the appropriate description meta tag:

* In public folder, open index.html, inside <head> add <meta name ="description" content ="your text goes here">;

2) Add the og:title meta tag

* <meta name ="og:title" content = "" />

3) Add the og:description meta tag

* <meta name ="og:description" content = " />

4) Add the og:image meta tag
* <meta name ="og:image" content ="" />

## Setting up the CSS layout

1) Set up the CSS rules

Client Requirments

* Primary colors: hex #495E57, #F4CD14
* Secondary Colors: hex #EE9972, #FBDABB, #EDEFEE, #333333

* Typefaces: Markazi Text (titles and Subtitles), Karla (paragraphs), Uppercase for all section titles
* 1.5 line height, Max 65 characters per line

2) Apply the CSS rules to the HTML elements

3) Verify that the HTML elements are positioned correctly

## Styling elements

1) Consider your Figma design and wireframe

2) Style the HTML headings, paragraphs and spans

3) Style the navigation elements

4) Style your images

5) Apply the rules to existing HTML elements

6) Verify that the HTML elements are styled correctly

* bootstrap and react-bootstrap

$npm install bootstrap react-bootstrap

In index.js, import 'bootstrap/dist/css/bootstrap.min.css';
# Week 3: Home, Footer, About, Menu

# Week 4: Reservation, Confirmation, Registration, Login

## Reservation

### Forms
* use Formik  to create forms and yup for form verification

$ npm install formik --save

import {useFormik} from "formik";

$ npm install yup react-yup

import *as Yup from 'yup';

### BookingSlots

* download react-datepicker

$ npm install react-datepicker --save

2. Code the form structure
* use sessionStorage and localStorage to store inputs

3. Create a local host data base API to mimic server side API

* create a folder outside of src name: data
* inside of data, create a new file name db.json, which would be a Object storage
* cut and pasted the menu items to the db.json
* ensure all data is in json format.
* open a new terminal window, create a REST API in localHost3500

$ npx json-server -p 3500 -w data/db.json
  const API_URL = '<http://localhost:3500/wineList>';

* No access to API outside of localhost, therefore, hosted API on github instead.  Since github API is raw data, I can only perform fetch not POST or any other http functions.

# Week 5: Order online

## Organize the data
* data folder inside SRC
* image folder inside public
