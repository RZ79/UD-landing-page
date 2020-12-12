# Landing Page Project

## Table of Contents
|index.html| styles.css| app.js | README.md |
|------|------|------|------|

* [Instructions](#instructions)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.
___
## index.html
* I add the section 4 to the code and the `<script>` before `</body>` to link index.html to app.js.
## styles.css
* I add `.active` class to the `.navbar__menu`  
* make the landing page responsive by add many media queries to the end of styles.css
 ___
## app.js
#### Global Variables 
var navbarList = document.querySelector('ul');
var navbarList = document.querySelector('ul');
* Define two variables `sections` , `navbarList` that reflect all `<section>` and `<ul>` tags.
#### Build Navbar 
* I used the for loop to add multi tags `<li>` and `<a>` to the `<ul>` tag.  
* add two class to all `<a>` tags `.menu__link` , `.link` and attribute `data-nav` that fill it out with the same `id` content in each `<section>` 
    ___

#### Scroll to section on link click
* Define variable `links` that reflect all `<a>` by the class name `.link`
* use `forEach` to dealing with each component separately.
* define variable `linkName` that store the value of each `data-nav`
* define variable `anchor` to store the value of id for each `linkName` , that represent the section.
* addEventListener when click to each link then anchor to section depends on the id for each `linkName` , scroll to section **smooth** and from **start** of section.
     ___

#### Main Function
 ##### Add class 'active' to section when near top of viewport
 * Define function `requiredSection` as arrow function.
 * use for loop to iterate sections and links then store in two variables `link , section`
 * Define `offsetTop` and `offsetHeight` to store the value in it foreach section
 * iterate tha condition `if (offsetTop <= scrollY + 100 && offsetTop + offsetHeight > scrollY + 100) ` for each section then add class `your-active-class` to section and class `active` to link.
 * else remove class `your-active-class` from section and class `active` from link.
 * ddEventListener for window while scroll calls the arrow function `requiredSection`

____

