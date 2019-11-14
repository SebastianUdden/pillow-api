# API

## Things needed for local deployment

-   nodemon --exec babel-node src/index.js
-   .env file
    -   PORT=
    -   MONGODB_URI=
    -   ERASE_DB_ON_SYNC=
    -   SEED_DB_WITH_USERS_AND_MESSAGES=

## Things needed for remote deployment

-   Babel build (No ES6)
-   Procfile
-   heroku config variables
    -   PORT=
    -   MONGODB_URI=
    -   ERASE_DB_ON_SYNC=
    -   SEED_DB_WITH_USERS_AND_MESSAGES=
