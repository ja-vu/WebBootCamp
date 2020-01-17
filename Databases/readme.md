# Databases

## Intro to Databases
* What is a database?
    * A collection of information/data
    * Has an interface
* SQL (relational) vs. NoSQL (non-relational)

## Intro to MongoDB
* What is MongoDB?
* Why are we using it?
* Let's install it!

MEAN Stack: Mongo-Express-Angular-Node

db.posts.insert({
    title:'Post One',
    body:'Body of post one',
    category:'News',
    date:Date(),
    likes:4,
    tags:['news','events','games'],
    user:{
        name:'John Doe',
        status:'author'
    }
})

db.posts.insertMany([
    {
    title:'Post Two',
    body:'Body of post two',
    category:'News',
    date:Date()
    },
    {
    title:'Post Three',
    body:'Body of post three',
    category:'Entertainment',
    date:Date()
    },
    {
    title:'Post Four',
    body:'Body of post four',
    category:'Games',
    date:Date()
    }
])