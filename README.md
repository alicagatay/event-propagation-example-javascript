# JavaScript Event Propagation Example

JavaScript Event Propagation Example is a simple project I have created in order to practice my understandings of event propagation, event bubbling and event capturing in JavaScript.

This project is made by using pure JavaScript, HTML and CSS. No frameworks or libraries are used.

## How to test the project

Simply go to https://alicagatay.github.io/event-propagation-example-javascript/.
There, you will see 2 different buttons. Before pressing any of them, open your browser's developer tools, and then open the JavaScript console in your developer tools.

Then, firstly press the button number 1. You will see that all the divs will be logged out to the console. This is because of the event bubbling. The event is triggered on the button, and then it bubbles up to the parent elements.

Then, press the button number 2. You will see that only the class name of the div will be logged out to the console. Because in this case, the `stopPropagation()` method is used, which stops the event from bubbling up to the parent elements, as can be seen from `index.js`.
