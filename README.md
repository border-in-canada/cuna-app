This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### 'DESIGN'

My thinking for this app was to use a lightweight component library (react-formalized) for retrieving user input that already had validation, accessibility, state, and general styling, so as not to have to implement these things from scratch. My goal here was also to build a reusable and scalable component for use on multiple forms. You can see a variation in the signup form, where I chose to store input values in component state as well as the internal formalized state, due to the fact that we needed to validate that the confirm password field matched the password field.

I also wanted to show competency using Redux for a small amount of state management, which is why I chose to dispatch an action and update state for the response of the loan application. This also allows me to set a boolean for when a user is declined, which will guard all other routes other than the declined route, so that the user is unable to use the browser history controls to resubmit the application form.

This has been a fun little project! Any project I am asked to do, I try and utilize it as a learning experience. In this case, learning the react-formalized library was fun and allowed me the opportunity to compare and contrast against other form libraries that are more widely utilized. Open source tools are great!