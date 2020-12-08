# Landing Page Project

In this project the aim is to design a responsive webpage based on navigation bar which is built dynamically according to the number of sections in the page.

## **Building the navigation bar** ##
Using querySelectorAll() function the number of sections in the page can be detected and all these sections will have a corresponding li elements in the navigation bar.

## **Scrolling to the sections** ##
By looping on all li elements we have and adding an addEventListener() to this li element, we can scroll to the corressponding section of each li.

## **getting the active section** ##
Using getBoundingClientRect() we can calculate which of the sections is in the view port and mark it as 'active'.

