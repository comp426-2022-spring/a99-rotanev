## Features

* **_(can we add info about login here)_**
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
* /app/users/ : READ a list of users (HTTP method GET) at endpoint /app/users/
* /app/user/:id : READ a single user (HTTP method GET) at endpoint /app/user/:id
* /app/update/user/:id : UPDATE a single user (HTTP method PATCH) at endpoint /app/update/user/:id
* /app/delete/user/:id : DELETE a single user (HTTP method DELETE) at endpoint /app/delete/user/:id
* /app/interactions : READ user interactions