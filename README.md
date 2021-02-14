# Software Engineer Coding Exercise - Apolitical

### Instructions for setting up

Clone the repository:
```
git clone git@gitlab.com:amybalmforth/software-engineer-2021.git
```

Install dependencies:
```
yarn install
```

Run the tests:
```
yarn test
```

Run the application:
```
yarn start
```
Visit http://localhost:3020 to view the application in the browser.

### Breakdown of different components:

*NameDirectory* Parent component responsible for holding the employee name list in its state. Starts off with 2 employee names already in the state. Function setName receives new employee names from NameInput component, and function deleteName can delete an employee name from the name list. Employee names are alphabetized as they are sent to NameList child component.

*NameInput* Child component responsible for taking input of a new employee name and email address, and sending it to NameDirectory. Validation on the employee name input field will allow only letters, spaces, apostrophe or hyphens (no numbers). No validation on email field, and email can be left blank.

*NameList* Child component responsible for iterating and displaying the list of employee names, plus option to delete each name.

*Title* Renders the page title.
