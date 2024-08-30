# Upvotes Test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

There's 3 lists of upvotes. They're designed to be independent of each other in regards to their state and number of upvote buttons.

The "+" adds an upvotes to the list. Clicking an upvote arrow toggles all the upvotes in the upvote list between a "default" and "selected" state.

The state and number of upvotes in the upvote list use sessionStorage so they should persists across page refresh, yet not persist if there's a new page/tab.

The test for the upvote state will be executed through `npm test`