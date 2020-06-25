# Password Generator

This was a task for my Coding Boot Camp.

The task was proposed as below:

## 03 JavaScript: Password Generator

Create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.
If you are unfamiliar with special characters, take a look at some examples.

### User Story

AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

#### Acceptance Criteria

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
The following image demonstrates the application functionality.

## How I approached to solve this task?

I started by dividing in the different small tasks at hand and progressively code and test by using console().

Once I got a hold of the main functionality I started working on the HTML side.

One challenge I had was to pass information from the script to the HTML, I looked on a lot of Stackoverflow examples. Finally I found one easy way by using document.getElementById, this will show the password generated into the web page.

I added a button "Try it" to make it recursive, this will generate another new password.

I used CSS elements, Javascript elements, I tried to used everything we have learned upto this point, the most basic ones.

One thing I have not figured out yet is to put the HTML web page first before the script runs, this is something I need to learn.
