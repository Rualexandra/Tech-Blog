# Tech-Blog
## Description
Tech Blog is a CMS-style blog site where developers can publish their blog posts and comment on other developers' posts. Built from scratch, the site follows the MVC paradigm, utilizing Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

User Story

AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
Acceptance Criteria
Homepage: Displays existing blog posts, navigation links, and login option.
Navigation: Prompts for sign-up/sign-in if not logged in.
Sign-Up: Allows creating a username and password and logs the user in.
Sign-In: Allows logging in with username and password.
Dashboard: Displays user’s blog posts with options to add, update, or delete posts.
Comments: Allows leaving comments on blog posts while logged in.
Logout: Logs the user out and redirects to the homepage.
Session Expiry: Prompts login after a set idle time.

## Installation
Clone the repository:

git clone https://github.com/Rualexandra/Tech-Blog.git
cd Tech-Blog

## Install dependencies:

npm install

## Set up the database:

npx sequelize-cli db:create
npx sequelize-cli db:migrate

## Create a .env file in the root directory with the following content:

DB_NAME=tech_blog_db
DB_USER=
DB_PASSWORD=
DB_HOST=127.0.0.1
DB_DIALECT=postgres

## Start the server:

node server.js

## Usage
Visit http://localhost:3001/ in your browser.
Sign up or log in to start creating and commenting on blog posts.

## Known Issues
    Signup Error: Receiving a 500 Internal Server Error during signup. The error logs indicate an issue with model initialization.
## Steps Taken:
    Verified model definitions and initialization.
    Added detailed error logging.
    Tested API endpoints with Insomnia.
## Next Steps: 
Seek further assistance from the instructor/TA to resolve this issue.
Models
## User
    Column	Type	Notes
    id	INTEGER	Primary Key, Auto Increment
    username	STRING	Unique, Not Null
    password	STRING	Not Null
## Post
    Column	Type	Notes
    id	INTEGER	Primary Key, Auto Increment
    title	STRING	Not Null
    content	TEXT	Not Null
    user_id	INTEGER	Foreign Key to User
## Comment
    Column	Type	Notes
    id	INTEGER	Primary Key, Auto Increment
    comment_text	TEXT	Not Null
    user_id	INTEGER	Foreign Key to User
    post_id	INTEGER	Foreign Key to Post
## License
This project is licensed under the MIT License.











New version of GPT available - Continue chatting to use the old version, or start a new chat for the latest version.