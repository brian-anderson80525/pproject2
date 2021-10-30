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
Our user is someone who is currently using a general purpose notes app like Evernote for grocery shopping list. Our user is able to:
- mobile only experience
- add items to the list as necessary
- add or edit quantities if desired
- delete items as they are picked up
- see the list without reading glasses or changing phone settings
## Challenges

- My main struggle was with file paths in the beginning.  I did gradually get better at them and now have a better understanding.
- I couldn't figure out the modal on just one page...one time, even Alex said it was "tricky" so i ended up googling and finding a work around using a button based YouTube tutorial (see below for url).  It was also in Discord.
- I used a new/separate database for this build...of course it changed the DATABASE_URL in Heroku which took me like 90 minutes to figure out why it wasn't working.
- my CSS is a mess. I was unsuccessful in getting my css to show on the edit.liquid page.  I tried a few different ways.  If you have a weak stomach, you may want to look away at that point...its ugly.
## List of Technologies
- Express
- html, css
- Javascript
- Liquid for templates
- Mongoose
- MongoDB (database)
- For Modal - i followed the tutorial found at https://www.youtube.com/watch?v=MBaw_6cPmAw
- band-aids, gatoraid, kleenex (for the blood, sweat & tears)
