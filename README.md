# programize
This is a todo list in express framework
Used postman to check the api (https://www.getpostman.com/)
Created: 
1. Add a TODO
2. Edit a TODO
3. Delete a TODO
4. Get all TODOs

Execution instructions:
In postman a new collection and four calls were  added
1.for the request:
    in the headers section created a new key: 'Content-Type' with value 'application/json'
    in the body section with 'raw' selected insereted the code 
    {
    "title": "Bake cookies"
    }
2.for the request:
    in the headers section created a new key: 'Content-Type' with value 'application/json'
    in the body section with 'raw' selected insereted the code 
    {
    "title": "Buy ice-cream",
    "done": true
    }
3.
4.Inserted hardcoded the output in the app.js file
{
  "items": [
    {
      "title": "Buy ice-cream",
      "done": true
    },
    {
      "title": "Learn React",
      "done": false
    }
  ]
}
