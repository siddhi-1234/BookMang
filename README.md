# BookMan-Build
Server >>Storing certain book data
       >>User Register
       >>Subscriber

This is book record management API Server/backend for library system or management of records or manuals or books

Fine System:
User:24/07/2024 - 24/10/2024
27/10/2024=>50*3=150/-

## Subscription Types
3 months(Basic)
6 months(Standard)
12 months(Premium)

If the subscription type is standard & if subscription date is 24/7/2024
=>then subscription valid till 24/10/2024

within subscription date>> if we miss renewal >>50/- day
subscription date is also been missded>> and also missed renewal >>100+50/-day

>> book1
>> basic
>> 24/7/2024 -> subscription date
>> 25/7/2024 -> borrowed book from library
>> book1 renewal date is on 31/7/2024
>> 2/8/2024 -> we need to pay fine of 50*2=100/-

>> book2
>> basic
>> 24/7/2024 -> subscription date
>> 25/7/2024 -> borrowed book from library
>> book2 renewal date is on 31/7/2024
>> 2/8/2024 -> we need to pay fine of 100+(no of day*50)

missed by renewal>> 50/-
missed by subscription date>>100/-
missed by renewal && subscription date>>150/-

# Routes and Endpoints

## /users
POST: create new user
GET: Get all the user info here

## /users/{id}
GET: Get user by id
PUT: Update user by their id
DELETE: Delete user by id(check if he/she still have an issued book)&&(is there any fine to be paid)

## /users/subscription-details/{id}
GET: Get user subscription details
     >>Date of subscription
     >>Valid till
     >>Is there any fine

## /books
GET:Get all the books
POST:Create/add new book

## /books/{id}
GET: get book by id
PUT: update book by id

## /books/issued
GET: get all issued books

## /books/issued/withFine
GET: get all issued books with their fine


## npm init

## npm i nodemon --save-dev

## npm run dev
