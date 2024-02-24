# Health App

This project aims to create a Health App.

## Author

- Name: Van Thieu Nguyen
- Email: vanthieunguyen234@gmail.com
- GitHub: [vanthieu97](https://github.com/vanthieu97)

## Live Preview

Check out the live preview [here](https://healthy-app-gamma.vercel.app/).

## Description

Health App is a single web application focused on health.

This app includes three main pages:

### Home Page

Users can access the home page via the slug `/`. This page includes the following components:

- Date-Achievement Rate: Displays the achievement rate over time.
- Body Weight - Body Fat Percentage Graph: Presents a graph showing the relationship between body weight and body fat percentage.
- Button to Transition to Input: Allows users to filter results of meal history.
- Meal History: Shows a record of past meals.

### My Record Page

Users can access the my record page via the slug `/my-record`. This page includes the following components:

- Button to Move to Each Entry Screen: Allows users to navigate to specific entry screens.
- Body Fat Percentage Graph: Displays a graph showing the body fat percentage over time.
- Exercise Record: Provides a record of past exercises.
- Diary: Allows users to maintain a diary of their activities.

### Column Page

Users can access the column page via the slug `/column`. This page includes the following components:

- Button to Transition to Input: Allows users to filter the results of the records.
- The Column Records: Displays the records for the column.

## Technical Stacks

- TypeScript: A statically typed superset of JavaScript that adds optional static typing to the language.
- React (function components): A JavaScript library for building user interfaces, particularly known for its component-based architecture.
- Chart.js: A JavaScript library for creating various types of charts, such as line charts, bar charts, and pie charts, to visualize data.
- @emotion: A library for styling React components using the CSS-in-JS approach, allowing you to write styles directly within your JavaScript code using template literals.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run prettier` and `npm run prettier:fix`

Runs the Prettier checker and fixes the Prettier issues.

### `npm run build`

Builds the app for production to the `build` folder.

Your app is ready to be deployed!
