# Cypress UI tests:


## Getting Started

The below instructions will get you an idea about how to run the cypress UI tests.

### Prerequisites

What software/ tools you need to install and their versions

```
Install npm and node.js  >>> v10.15.3
Install cypress 4.0.2 version  >>  command follows >> $ npm install cypress --save-dev
Install npm i for installing all the dependencies mentioned in package.json

```

### Instructions:

A step by step process that tell you how to run the Cypress. 
note: Run commands are written under scripts section in package.json file 

```

1) Clone the github repo [ https://github.com/scrumvisualize/intelliHR.git ] to some location drive, example C:\Work\intelli
2) Open a CLI example ... navigate to windows > Run > type cmd   
3) From the command prompt cd to the folder directory, assume if the project is cloned to the following location C:\Work\intelli\intelliHR
   then cd C:\Work\intelli\intelliHR
4) Now type npm run cy:test-intelliHR from the CLI prompt to run in headless mode.
5) Cypress successfully starts running the tests in headless mode.


Now if the user need to open the Cypress test runner, follow the below command:

From the command prompt 
 >> Type  npm run cy:open-intelliHR 
Cypress test runner will open successfully. Now you can click on spec files to run the tests.


```
 

### Break down into end to end tests into four spec files:

```
1. addCurrency.spec.js
2. editCurrency.spec.js
3. deleteCurrency.spec.js
4. listAndGroupCurrency.spec.js

```

```
1) Automation UI tests are created in App actions.

2) baseUrl is configured in cypress.json file.

3) parameters are reading from Cypress.env file like units, price etc

4) App actions are written in 'commands.js' file, sits under cypress/support/ folder

5) Run commands are written in package.json > under scripts section 

    cy:open-intelliHR  -- this will open the cypress test runner
	cy:test-intelliHR  -- this will run cypress in headless mode.

	You need to run the command as below from command prompt
		$ npm run cy:test-intelliHR 
		$ npm run cy:open-intelliHR 

6. Video will be created  and available under cypress/videos folder for every cypress run. Vidoes will not be created while running 
   using cypress open command / running from test runner

```

## Authors

* **Vinod M**


## Note

* For the time being not integrated the tests run to cypress dashboard.


