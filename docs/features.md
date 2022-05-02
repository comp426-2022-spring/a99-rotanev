## Features

* Users can create, login, update, and delete an account
* The users' data is stored in a database
* Users can enter the name of the food and how many calories it was. The app will not accept invalid values for the calorie amount.
* Once a user enters the food item, it will be added to a list. This list can be sorted by ascending of descending calorie amounts using the drop-down menu.
* Individual items from the list can be deleted. Furthermore, the entire list can be cleared by using the "Delete All" button.
* As one would expect, the total amount of calories is calculated from all of the items in the list. This value is updated anytime a new food is added to the list.
* Finally, when the page is refreshed, the data is saved for the user to return to.

## Endpoints

* /app/ : READ (HTTP method GET) at root endpoint /app/
* /app/adduser : CREATE and ADD new user at endpoint /app/adduser
* /app/emailexists/ : DETERMINES if email exists or not in the database at endpoint /app/emailexists/
* /app/accountexists/ : DETERMINES if the account exists or not in the database using email and password at endpoint /app/accountexists/
* /app/deleteuser/ : DELETE a single user 
* /app/updateuser/ : UPDATE a single user
* /app/users/ : READ a list of users (HTTP method GET) at endpoint /app/users/
* /app/interactions : READ user interactions


## Dependencies

* "@testing-library/jest-dom": "^5.16.4"
* "@testing-library/react": "^13.1.1",
* "@testing-library/user-event": "^13.5.0",
* "axios": "^0.27.2",
* "better-sqlite3": "^7.5.1",
* "history": "^5.3.0",
* "md5": "^2.3.0",
* "react": "^18.0.0",
* "react-dom": "^18.0.0",
* "react-router-dom": "^6.3.0",
* "react-scripts": "^5.0.1",
* "web-vitals": "^2.1.4"