# TGM web automation

### Technologies used
This project uses [Cypress](https://www.cypress.io/) and [Cucumber](https://cucumber.io/)

### Prerequisites
1. [node](https://nodejs.org/en/)
2. [yarn](https://yarnpkg.com/)

### Dependencies
The project has the following dependencies:
1. [cypress](https://www.npmjs.com/package/cypress): JavaScript end-to-end testing framework built on top of Node.js
2. [@badeball/cypress-cucumber-preprocessor](https://www.npmjs.com/package/@badeball/cypress-cucumber-preprocessor): Cypress preprocessor that allows us to use Gherkin syntax to write the tests
3. [@bahmutov/cypress-esbuild-preprocessor](https://www.npmjs.com/package/@bahmutov/cypress-esbuild-preprocessor): Cypress preprocessor that uses [esbuild](https://esbuild.github.io/) to bundle and transpile the test files
4. [esbuild](https://www.npmjs.com/package/esbuild): JavaScript bundler and transpiler that compiles modern JavaScript code to be compatible with older browsers

### Folder structure
The project has the following file structure:

```
cypress/
    e2e/
        features/
            **.feature
        step_definitions
            **.js
    page-objects/
        **.js
    support/
     commands.js
     e2e.js
.gitignore
cypress.config.js
package.json
README.md
yarn.lock
```

The `e2e` folder contains the feature file and the step definitions that implement the test.
The `page-objects` folder contains the page objects that implement the test.
The `support` folder contains custom commands and other configuration files for Cypress.
The `.gitignore` file lists the files and directories that should not be tracked by Git.
The `cypress.config.js` file contains configuration options for Cypress, Cucumber and Pre processors.
The `package.json` file lists the project metadata and dependencies.
The `yarn.lock` file lists the exact version of each dependency used in the project.


### Getting started
To get started, clone this repository and install the dependencies:

git clone https://github.com/TheGivingMovementDev/qa-web-automation.git
cd qa-web-automation
yarn install

## We can then open the tests using Cypress:
yarn cypress:open
This will open the Cypress Test Runner, where we can select the `**.feature` file and run the tests.