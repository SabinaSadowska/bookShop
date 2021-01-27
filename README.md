# Bookshop APP
The app render a list of books in homepage. There is also a simple menu to navigate to basket and to order form. You can add books to the basket and remove them (one or all of them) from the basket. The Redux store updates the state. Once you have an item/items in your basket you can complite the order by clicking "Formularz" in the top menu. As the Redux store is keeping the basket state, once you complitetd all requested fields, click on "Wyślij" button to post the http request. 

## To run the app follow the steps:

### 1. In terminal in main folder:
#### cd api
#### npm install 
#### npm start
mock api server will run on http://localhost:3001

### 2. Open another terminal window in main folder:
#### cd front
#### npm install 
#### npm start
local server will run on http://localhost:3000/

### Technologies:
#### React, Redux, SASS, Mock API server, Material-UI

Still to do: styles update, rwd, submit button in the basket, alert on order completed
