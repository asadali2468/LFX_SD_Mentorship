# Project: LFX Sailing Downstream Coding Challange

## Description
This repository contains a solution for the coding challenge which involves writing a program that accepts a list of integers, emits an error message if the list is not a multiple of 10 in length, and returns or prints a list of integers based on the input list, but with items at positions which are a multiple of 2 or 3 removed. The program is implemented in JavaScript.

## Files
- **filterMultipleTwoThree.js**: JavaScript file containing the implementation of the program.
- **filterMultipleTwoThree.test.js**: Jest test file containing robust testing for the program.
- **package.json**: JSON file defining metadata and dependencies for the project.

## Usage

To use the program:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies by running `npm install`.
4. Run the program using `npm start`.
5. Optionally, run tests using `npm test`.

## Implementation Details

The program checks if the length of the input list is a multiple of 10. If not, it emits an error message. If the length is valid, the program removes items from the list at positions that are multiples of both 2 and 3. The filtered list is then returned.

Example:
```javascript
const filterMultipleTwoThree = require('./filterMultipleTwoThree.js');

const inputArray = [12, 10, 15, 18, 19, 13, 14, 10, 0, 18];
const filteredArray = filterMultipleTwoThree(inputArray);
console.log(filteredArray);
```

## Dependencies
- **jest**: Testing framework for JavaScript code.

## Author
- **Name**: Asad Ali

## License
- **License**: ISC
