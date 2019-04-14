
# Restaurant Reviews App

This is an on-going project to make a restaurant reviews app responsive, web-accessible and available offline.

## To run the code
* Clone this repo:
  `git clone https://github.com/kirtimd/restaurant-reviews-app.git`
* Using terminal, cd into the project directory
* Create an HTTP Server :
  `python -m SimpleHTTPServer 8000`
* Then load the web app by typing the following in any browser:
  `http://localhost:8000`

## Features Added
### Responsive design
  The layout, text, images, sections are made responsive using relative sizing, grid layout and media queries.

### Web Accessibility
  To make the app more accessible to screen reader users:
* `alt` attribute is added to all images
* ARIA roles to elements that are not implicitly added to the accessibility tree
* Also, ARIA labels are added to sections.

### Offline use
 Service Worker is used to create a cache containing the code and image files, so that if user loses internet access after loading the app, they will be able to continue using it(except the map).
