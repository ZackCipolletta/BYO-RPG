# BYO-RPG


#### An application utilizing objects, branching, linking multiple JS files together, Node.js, RGR workflow using Jest and utilizing user input.

#### By Zachary Cipolletta & Stephen Zook

## Technologies Used

* CSS
* HTML
* JavaScript
* Node.js
* Jest
* Webpack
* npm

## Description
This website is for a basic roleplaying style adventure game.  A user is able to see a text based story printed to the page based on actions taken in the game and see the oucome of choices they have made affect the game.  A player is able to select from threee classes or roles of hero to play, then fight monsters on their quest.  As they defeat monsters the chosen character gains experience leading to increased health and attack power, however they will also face tougher adversaries.

In an effort to decrease development time we incorporated a function which re-interprets console.log statements to print the value to the HTML body instead of the console.  This can be updated to instead utilize HTMLElement.innerText.

## Setup/Installation Requirements

* Clone repository to your desktop
* Navigate to the top level of the directory
* Install all packages with $ npm install.
* Build the project using webpack with $ npm run build
* If you wish to lint JS files in the src folder, run $ npm run lint
* All business logic should be tested and pass Jest using $ npm run test
* Start a development server with $ npm run start

## Known Bugs

* Currently the monster the attackHanlder function is calling the previous monster to fight the hero instead of the current monster called by the callingNewMonsterFunc function.  This seems to be due to the event hanlder assigned to the #fight-monster" button.  A possible solution is to remove the static buttons created on the page in the HTML file and instead dynamically insert and remove them using JS then add an event handler to the newly created button.  This may sovle the issue by creating a new instance of the button and attaching an event handler to the new button each time the button needs to be used.  This would prevent the event handler from recalling the previously assined value of monster, which was assigned when the event handler was instantiated during the previous loop through the program.

* In an effor to debug the issue I have also added a number of console.log statements to announce the value of the monster as it is passed throught he functions to find where the incorrect value is passed.  These have been commented out, but can be removed.

## License
MIT

Copyright (c) 1/29/2023 Zachary Cipolletta