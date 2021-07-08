# innovorder-crud-api-test

## To launch the API

Use `npm start` to make your first request !

You can use postman or insomnia to make API requests. Make sure to sign-up using the route **auth/sign-up** and then login using the route **auth/login**.
You can also use the frontend repository called **innovorder-test-frontend**.

Once identified you will be able to make your first requests using the route **/products/:id**, and make sure to use the bar code of a product like this : 

``/products/04963406``

## The data the routes expect

### POST  /auth/sign-up     

`{
  "username": "example",
  "password": "password",
  "email": "example@email.com"
  }`
  
### POST /auth/login       

`{
  "username": "example",
  "password": "password"
  }`
  
**Don't forget to copy the access_token you received on the response if you are using postman or insomnia.**
  
### GET /products/:id     

Example : ``/products/04963406``
**Make sure to use the access_token you received when you logged in.**

### PUT /user/update

`{
  "username": "example",
  "password": "password",
  "email": "example@email.com"
  }`
