# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

I have not any experiences with Docker, YET! :) but you can run the app locally by typing npm start in command.\
Then open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.\

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `follow up questions:`

What libraries did you use? What are they used for? Why did you choose them
specifically?
- I used Material UI for some UI components, as it is known for its fast prototyping that leads to speed up the development speed when creating UI. It helped me to spend most of my time on the logic of this task rather than wrangling with CSS-related interface elements.
- I also used React Hook form, because it has a high performance, it has no dependencies and is lightweight, and also can be easily integrated with any UI-library.

What improvements or new features would you add if you had more time to work on
the problem?
- If I had more time to spand on this project, I would handle api error alerts, loadings and placeholders, empty state for activities table and would wite tests for my UI. for now, I was satisfied with a unit test in my utilities folder, as I believe the functions are the most important parts to consider while writing tests.
- Also I would definitely spend more time on design, and used mui components more carefully. 

Which parts did you find most difficult and which parts did you spend the most time
with?
- Considering all parts, I spent more time and effort on writing and testing the part that requires to avoid user to define activities on a same pitch at the same time, while defining a new activity or editing an existing one.

What are key things to consider when deploying this application for customer
use/production?
- we are avoiding users from defining activities on a same pitch at the same time. I think when deploying such app to production, we need to consider the same for task performers, too. I mean we need to check one task is assigned to each person at a same time.
- Plus, all options must be fetched from an api call. 
- Also, there shold be an api to return pre-defined activities to display on the client side.  





