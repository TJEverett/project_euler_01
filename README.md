# Project Euler (even fibonacci)

#### _Create a function that outputs the sum of even fibonacci numbers, 06/19/2020_

#### By _**Tristen Everett**_

## Description

This Project was my attempt at using automated testing through jest to create a function that can take a maximum number and output the sum of all even numbers from the fibonacci sequence up to that number. I also added the functionality to chose what number for the fibonacci sequence to be divisible by rather that limiting it to only be even numbers.

|specs|example input|example output|
|-|-|-|
|Create a function that will take an input of the cap number and output the fibonacci sequence as an array up to that number|100|[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]|
|Create a function that will take an input of a divisor and an array and output a new array of all numbers form the inputted array that are evenly divisible by the divisor|2, [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]|[0, 2, 8, 34]|
|Create a function that will take an input of an array and add all th numbers within together and output the answer|[0, 2, 8, 34]|44|
|Create a function that will take a maximum number and a divisor as inputs then run them through the previous functions and output the sum|100, 2|44|


## Setup/Installation Requirements

1. clone the repo
2. open the command line in the repo's root directory
3. run npm install
4. run npm test

## Technologies Used

* webpack
* node
* jest
* javascript

### License

This software is licensed under the MIT license

Copyright (c) 2020 **_Tristen Everett_**