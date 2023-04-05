# Habitify

## Description
  
A weekly habit tracker application created with a Rails API backend and JavaScript React & Redux frontend. Users can create, edit, and delete habits for specific days of the week, and mark them as complete or incomplete for that day. Styled with Semantic UI and CSS. 
  
## Functionality

- Users can create accounts and sign in, authenticated and authorized through BCrpyt, stored through JWT.

- Users can create habits for specific days of the week, and edit & delete them. 

- Users can view a weekly calendar of their habits marked as complete or incomplete.


## Media 
<img width="800" height="380" src="https://user-images.githubusercontent.com/84604278/230031218-6d31fcce-c951-49ea-84b6-13f7d92fbe20.png">



## Tech Stack

- Ruby 
- Rails
- React
- Redux
- Semantic UI React
- HTML & CSS
- PostgresQL - Database
- Bcrypt and JWT for authentication and authorization
- rack-cors - provides support for Cross-Origin Resource Sharing for Rack compatible web applications(allows the front-end portion of this project to perform fetch requests)
- active_model_serializers - allows customization and rendering of data in JSON format as responses to requests
- React Router

## Instructions

- clone the backend repo:  https://github.com/ashhhlynn/habit-app-back to your local environment -- git clone < git repository >
- run $bundle install - installs gems and dependencies
- run $rails db:create - creates the database for the first time, or try $rails db:reset
- run $rails db:migrate - creates the tables for the database
- run $rails db:seed - seed the data necessary
- run rails s to start the server
- clone this repo to your local environment -- git clone < git repository >
- cd(change directory) into the repo
- run $'npm install' into your command line
- run $'npm start' into your command line

