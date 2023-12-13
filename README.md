# Aquari

## Description Deliverable

### Elevator Pitch


Are you a passionate fishkeeper looking to take your aquatic hobby to the next level? Welcome to Aquari, the all-in-one website that empowers you to dive deeper into the enchanting world of aquariums!
With Aquari, you can effortlessly track and manage your diverse collection of aquatic wonders. Bring order to your underwater paradise, ensuring the optimal health and happiness of your finned friends. Say goodbye to the hassle of juggling notes and spreadsheets. Aquari streamlines your collection management, helping you monitor water parameters, feeding schedules, and health records with ease.
But that's just the beginning! Curious about which fish species harmonize together in the same tank? Our comprehensive compatibility database, backed by expert insights, will guide you towards creating a harmonious underwater ecosystem, minimizing stress and maximizing beauty.
And the icing on the cake? Our cutting-edge aquascape simulator lets you unleash your creativity. Design your dream tank layout, and experiment with different plants, decorations, and substrate options—all in a risk-free virtual environment. Watch your imagination come to life as you craft stunning aquascapes and perfect your aquatic masterpiece before implementing it in the real world.

### Design

![Aquatics Page](aquatics_page.png)


Above is the live creatures section, and below is the equipment and tools section.


![Hardware Page](hardware_page.png)


Next, we have a product page where customers can buy products.


![Product Page](product_page.png)


Here is an FAQ page where fishkeepers can ask questions about the basics of fishkeeping.


![FAQ Page](faq_page.png)


### Key Features


- Secure login over HTTPS
- Users track their collection of fish tanks, which is stored in a database
- Users can see others' collections and profiles, and message each other to form a sense of community
- Users can make public posts and stream live videos of their collections
- Users can do research into fish compatibility, breeding, diseases and medications, etc to assure their tanks are as healthy as can be
- There will be an educational section for beginner fishkeepers
- Users can purchase live and inanimate products for their fish tanks
- Users can simulate fish tanks to see how they would look in the simulator


### Technologies


I am going to use the required technologies in the following ways.

- **HTML** - Uses correct HTML structure for application. Seven main HTML pages for the title screen, home screen, live products, inanimate products, product-specific/purchase screen, FAQ screen, and research directory. Hyperlinks to artifacts included for all selections.
- **CSS** - Application styling that looks good on different screen sizes, uses good whitespace, color choice and contrast.
- **JavaScript** - Provides login, purchasing functionality, forms the backbone of the design simulator, makes public posting functional, directs users to appropriate pages they click on, backend endpoint calls.
- **Service** - Backend service with endpoints for:
  - login
  - retrieving messages from other fishkeepers
  - recording new collection info to database
  - displaying public posts
  - calculating compatibility levels between fish
- **DB** - Store users, and the data on their collections such as water parameters, fish health, names, species and quantities of each they own, etc.
- **Login** - Register and login users. Credentials securely stored in database. Users who are not authenticated cannot log in, use the application or send messages to others' profiles
- **WebSocket** - Displays messages and public posts in real time
- **React** - Application ported to use the React web framework.


## HTML Deliverable
For this deliverable I built out the structure of my application using HTML.

HTML pages - There are currently 13 HTML pages that I have made the basic layout for that represent not only Aquari's multi-faceted functionality, but also educational and legal material for my brand. Four of these pages accessible from the header navbar simply have "COMING SOON!" on them, as
some facets of this project will be out of the scope of this semester. 
Additionally, a couple of pages are not accessible from the website yet, 
despite being in my development environment. This is intentional, I plan on using those pages later but for now they do not need to be graded.

Links - On most pages except the login, account creation, terms and conditions, and contact pages there is a navigation menu in the header with links to all other relevant pages, and a button to sign out, which takes the user back to the login page. There is also a footer with a couple of informational links about the website on the bottom.

Text - Each page has it's basic text, whether that be "COMING SOON", the 
navigation bars in the header and footer along with the logo in the header, the categories and their checkboxes and labels on the homepage (those are meant to be search filters for customers to filter what kind of products they want), the text on the terms and conditions and privacy policy page, and basic headers and titles for other pages as well.

Images - I have two images so far on the research page, which are logo links to fish research databases. I plan on adding more images to the research and tutorial pages, and perhaps some other pages as well.

Login - Input box and submit button for login on the index page, as well as an option to sign up which takes the user to an account creation page.

Database - On the home page, there are many categories, all of which have many checkboxes underneath them. These are meant to be search filters for when the users are trying to find a product. Users can filter products by brand, live fish, food, decor, equipment for their tanks, chemicals for water maintenance, etc. They can also filter by categories such as size and type in some instances, such as when searching for a tank of the proper dimensions. When the user presses the search button on the bottom of the home page, all of the product filters they have selected will be applied, and the user will be taken to the browse products page where they can see the available products that match the description they are giving. 

This is where the database factor comes in; when the filter checkboxes on the home page are clicked (which are only placeholders now), SQL calls will be run that filter all product listings stored in the database by their filter tag values, so that when the user clicks "Search" and is taken to the browsing page, only product listings relevant to them will be displayed. 

Additionally, users' login info will be stored in the database in a separate section from the products as well, and by the end of the semester I'm hoping that user accounts will be fully functional and secure.

WebSocket - On the community page, there is a live chat function implemented with WebSocket that allows users to ask each other questions and talk about their fish keeping pursuits.
## CSS Deliverable
For this deliverable I properly styled the application into its final appearance.

Header, footer, and main content body on all applicable HTML pages are styled properly (except the login, account creation and community pages! A few elements on those pages are not styled, but all proper styling is on all other pages). The header and footer are styled the way they need to be on all pages. In terms of body styling, the home page is heavily styled to format the categories properly, while styling on other pages' body sections is minimal because the content on those pages is minimal so far. Every page has an appropriate background color (which I might change later to be easier on the eyes, despite how thematic it is).

Navigation elements - I dropped the underlines, changed text color, and made the navigation bar background have a nice blue color. Additionally, I made it so that all navigation items, whether in the header navbar or footer navbar, are spaced evenly and have some padding so the elements have some room to breathe aesthetically.

Responsive to window resizing - My app looks great on all window sizes and devices, as the navigation bars in both the header and footer stretch and condense to match window resizing. If the window gets as small as a phone or small tablet, the header navigation bar displays vertically. 

Application elements - Used good contrast and whitespace, everything has padding so that things are not all smushed together.

Application text content - All text consistently uses the Roboto google font as imported in my CSS file, style.css, except the logo. The title/logo has its own font that I imported to make it look smoother.

Application images - On the research page, I styled the third-party aquarium database logo images to look like buttons by putting grey borders around them that have rounded corners, like most rectagular buttons do. I also made it so that each image is 100 pixels tall, with the width of the image being set to auto, which allows the computer to set the width in such a way that the image is not being pushed in or stretched out beyond its original aspect ratio.
## JavaScript Deliverable
For this deliverable I implemented by JavaScript so that the application works for a single user. I also added placeholders for future technology.

login - When you press enter or the login button it takes you to the voting page. I built out functions for both the log in and sign up functionality, although those functions will not be fully complete until my database and authentication stuff is done later in the semester. The logical skeleton is there though.

database - Storing information such as usernames, passwords, emails for new and existing users, and put sections where code will validate users as they log in. Also wrote out a function to store basic informational data for when clients list products they are selling, such as listing titles, descriptions, materials, color, and dimensions of the product. Additionally, I created the skeleton of a function for a user to add a new tank to their collection, which is just a list of all the tanks they have for informational purposes. Data on the tank such as dimensions, description, capacity and number of fish is taken and stored here when the user presses the submit new tank button. Currently all of this info is stored and retrieved from local storage, but it will be replaced with the database data later.

WebSocket - I laid out the JavaScript functionality for the chat on the community page. I will likely be adding more social media-esque functionality to this community page later on in the semester, such as registered users making public posts about their tanks, asking for advice, etc. I hope to have a system where users can chat pictures as well, but filtering out inappropriate pictures may be difficult, so that particular function may not happen this semester. I will also likely implement websocket to actively check in real time as a new user is signing up if their passwrd and the confirmation password match or not, so they don't have to submit their info first to know that they made a typo when confirming their password.

application logic - Began making log in and sign up logic, as well as logic for the sell page/for when customers are creating a new product listing. Also made the skeleton of the collection page, and a function to go with it that takes data the user provided on a new fish tank they got and added to their collection, adds the new tank to their collection list (which will be displayed to them using SQL calls as well), and displays a popup alert at the top of the page asking the user to tell the community bout their new tank on the community page.
## Service Deliverable
For this deliverable I added backend endpoints that receives input text for a post and returns the post in a neat table row format. I worked with index.js, public/post.js, and public/post_view.html

Node.js/Express HTTP service - done

Static middleware for frontend - done

Calls to third party endpoints - done at the very bottom of the post.js file, I did a third party call to a chuck norris joke generator on my website. This is displayed on the post_view.html page, above the post button.

Backend service endpoints - Placeholders for login that stores the current user on the server. Endpoints for posting. Post info is stored on the table on the post_view.html page.

Frontend calls service endpoints - I did this using the try/catch things in my post.js file, along with the functions in there, to update the table on the front end with server-stored info.
## Database Deliverable
For this deliverable I stored all user posts from the post page in the database.

MongoDB Atlas database created - account and database cluster both created, information put into dbConfig.json for convenience.

Endpoints for data - My stubbed out endpoints now process the data and send it to Mongo. 

Stores data in MongoDB - done!
## Authentication Deliverable
For this deliverable I associate posts and general functionality with the logged in user.

User registration - Creates a new account in the database.

existing user - Stores data such as posts under the same user if the user already exists.

Use MongoDB to store credentials - Stores both user credentials and their posts.

Restricts functionality - You cannot access most pages on the site (besides the terms and conditions, contact info and login pages) if you are not logged in. This is because buying, selling, posts and chats are not meant to be anonymous, so that any behavior that violates the terms and conditions can result in disciplinary action up to banning of that user, thus enforcing the terms of appropriate usage and behavior on the site. Banning will not be implemented this semester, but that is one of the points to restricting people without accounts.
## WebSocket Deliverable
For this deliverable I used webSocket to update the chat on the frontend community page in realtime.

Backend listens for WebSocket connection - done!

Frontend makes WebSocket connection - done!

Data sent over WebSocket connection - done!

WebSocket data displayed - All user chats display in realtime.
## React Deliverable
For this deliverable I converted the application over to use Vue. I know it is supposed to use React, but the instructor said I could use Vue because I already have extensive experience with React.

Bundled and transpiled - done!

Components - Login, voting list, vote are all components.

Router - Routing between login and voting components.

Hooks - Vue uses class properties instead of UseState to track changes in vote state.
