## Sample Cypress Tests

This is a repo for simple tests based on Cypress for "React Shopping Cart" App.


## Basic Overview -

Create sample tests using Cypress to validate UI functions.

#### Features

- Added Integration Tests to cover UI Features like Home Page, Select Sizes, Add product to Cart.
 -   homepage.spec.js
 -   addtocart.spec.js
 -   verifysizes.spec.js
    
- Added a End To End Test to cover flow for a user to navigate to home 
page, Select a filter on Size, Click 1st Product, Add to Cart and Verify Cart once loaded.

 -  endtoend.spec.js

## Getting started

git clone https://github.com/hughsoong/react-shopping-cart
cd react-shopping-cart
git checkout master
git checkout git checkout feature/ppatsa_evaluation

OR Download and extract the zip file provided and follow below steps in a terminal console.

## Build/Run

#### Requirements

- Node.js
- NPM

```javascript

/* First, Install the needed packages */
npm install

/* Then start both Node and React */
npm start

```

## About tests

1. Open another terminal window and navigate to folder where above repo is cloned.
2. To Run All Cypress Tests using default headless option, use command
```bash
npm run cypress_test
```
3. To run All Cypress Tests using Mochawsome reporter option, use command
```bash
npm run cypress_test_mocha
```
4. To run tests through Cypress UI to validate each test and trigger them manually, use command (node verison >5.2 is required).
```bash
npm run cypress
```