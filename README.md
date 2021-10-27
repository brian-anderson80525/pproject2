# Project 2
#### By Brian Anderson

## Project Summary

I'm building a grocery shopping app.  It will incorporate all 7 restful routes.  My goals for this app are
1. Mobile only really
2. Readability (don't need glasses)
3. items disappear so the list stays clean and current

## Models

I believe there will be just one.  Although I would like to organize the list into Produce, Meats, Isle, Dairy, Pharmacy once I have achieved MVP with the basic app functionality. 

## Route Table

List your routes in a table

| url | method | action |
|-----|--------|--------|
| /list | get | get all items (index)|
| /list/:id | get | get a particular item (show)|
| /list/new | get | show "add new" html form item (new)|
| /list | post | add the new item to database (create)|
| /list /:id/edit| get | show form to edit existing item  (edit)|
| /list/:id | put | change database to update item (update)|
| /list/:id | delete | remove the item from database (destroy)|

## User Stories
Our user is someone who is currently using a general purpose notes app like Evernote for grocery shopping list.  While it kinda works, our user wants something that is easier to read (larger font size without everything on their phone being affected).  They want the items to "disappear" after marked, so their list stays current (only the items remaining need to be shopped for) and organized. 
## Challenges

- detail roadblocks and anything you did to overcome whether you did or didn't

## List of Technologies
- Express
- html, css
- Javascript
- Mongoose
- MongoDB (database)
- band-aids, gatoraid, kleenex (for the blood, sweat & tears)