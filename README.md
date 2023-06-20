# _Pizza Parlor_

#### By _**Sage Paden**_

#### _Demonstration of Object-Oriented Programming in JavaScipt_

[GitHub Repo](https://github.com/sagepaden/pizza-parlor.git)

## Technologies Used

* _JavaScript_
* _HTML_
* _CSS_
* _VS Code_
* _Bootstrap_

## Description

_This is a demonstration of my knowledge of Objects, prototypes, and seperation of functions._

## Setup/Installation Requirements

* _Clone this repository to your desktop_
* _Navigate to the directory you've cloned_
* _Open the file "index.html" in your browser_
* _pick your style of pizza on the webpage_
* _Click submit your order and recieve your total_
* _Repeat as many times as you would like_

## Known Bugs

* _No known bugs as of 06/19/2023_

## License

MIT License

Copyright (c) [2023] [Sage Paden]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


_If you run into any issues or have questions, ideas or concerns, please reach out via email: sagepaden@gmail.com .  Contributions to the code are highly encouraged._


## Logic Tests:


### Describe: _Pizza()_

* _Test:_ 
_"It should return a Pizza object with two properties for toppings and size"_

* _Code:_ 
_const myPizza = new Pizza(["cheese", "pineapple"], "Large");_

* _Expected Output:_ 
_Pizza { toppings: ["cheese", "pineapple"], size: "Large" }_

*Passed*



### Describe: _Pizza.prototype.calculateCost()_

* _Test:_ 
_"It should return the correct cost for a large pizza with no toppings"_

* _Code:_
_const myPizza = new Pizza([], "large");_
_const cost = myPizza.calculateCost();_

* _Expected Output:_
_8_

*Passed*


* _Test:_ 
_"It should return the correct cost for a medium pizza with one topping."_

* _Code:_
_const myPizza = new Pizza(["anchovy"], "medium");_
_const cost = myPizza.calculateCost();_

* _Expected Output:_
_14_

*Passed*

* _Test:_ 
_"It should return the cost of a large pizza with all toppings"_

* _Code:_
_const myPizza = new Pizza(["anchovy", "cheese", "pineapple", "pepperoni", "jalapeno"], "large");_
_const cost = myPizza.calculateCost();_

* _Expected Output:_ 
_21_

*Passed*

