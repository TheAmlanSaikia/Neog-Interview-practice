Mock Interview(24/09/2021):
Prakhar Varshney and Himadri Shah:
Coding:
1) Create a password checker web app. If password is lesser than 10 characters then show an error to user otherwise show success. Extension: Check button to be active only if password greater than 10 characters
2) Mock explaination of syntax for fetch command (the fetch(url).then().then().catch(err))

Conceptual: 
1) Consequences of placing script tag inside head
2) Differences between Vanila JS & React JS (Points given by Himadri: 1) Declarative vs Imperative programming;2) Use of components in React; 3) Javascript uses Actual DOM React uses Virtual DOM[suggested by Prakhar] )
3) CSS Box model explaination: HTML elements are modeled as a box comprising of 4 parts: content,padding,border and margin
4) Inline Elements vs Block Elements
(Examples for Block elements: div tag; examples for inline elements: span tag) 

Hetav Desai and Samyuktha Sudhakar:
Coding:
1)  Create a web app and render your name using any heading or paragraph tag. It should have a border of 1px around it. Create 2 buttons, '5px' and '10px' below your name. The width of border should change to 5px and 10px by clicking respective buttons.
2) Display the results of this API's response : https://quick-access-api.desaihetav.repl.co/ on the screen 

Conceptual:
1) Description of Git and Github. Branching concept on Github and the use of it
2) Understanding of promises: 
3) Callback functions(question asked in this manner: What's the 2nd parameter passed to the addEventListener) .Explaination and why aren't curly braces added to it (Answer: a function passed to another function)?

Tip from Hetav and Prakhar: Stay calm during the interview. Keep the dev environment ready before the interview.Interviewer can tell us any time to code in React or Vanilla Js






### Interviewer: **Ishan  
Interviewee: Shivam**

**Conceptual Question:** 

1. What is DOM ?
2. What is an API ?
3. What is Semantic HTML ?

**Coding Question:** 
Build a counter application and then some questions were asked related to the coding part. 

Interviewee used VanillaJS.

Here is the CodeSandBox link:

[https://codesandbox.io/s/agitated-dawn-i9qy5?file=/index.html](https://codesandbox.io/s/agitated-dawn-i9qy5?file=/index.html)

### Interviewer: **Pranshu  
Interviewee: Saksham**

**Conceptual Question:** 

What is the difference between inline and inline-block ?

**Coding Question:** 
The question Pranshu asked was that the user will not be able to
 add more characters after a certain limit has been reached (deleting 
characters is still possible). He asked Saksham to disable the button 
when the text area is empty and enable it when something is typed.

As an extension of this, you can also cover the edge case that the 
button should remain disabled if there are only spaces in the text area.

Interviewee used React.

### Interviewer: Supriya 
**Interviewee:** Bharati

**Conceptual Question:** 
1. Explain about promises  
2. What are the ways of linking stylesheet to HTML file

**Coding Question:** 
Fetch an API ( [https://jsonplaceholder.typicode.com/todos](https://jsonplaceholder.typicode.com/todos) ) and display it on the output on screen.

Interviewee used JavaScript.











**Conceptual Question:**  

1. What are the different ways of linking CSS stylesheets to HTML ?

Answer : Inline styles, style tag within head and external CSS using link tag.

2. If a particular h1 tag has all the 3 types of styles applied(inline, style in head tag as well as external) then which one will be applied finally

Answer is inline.

3. Why is useState being used in React ?

4. What is Git ?

5. What is GitHub?

**Coding Question:**

Take an input from the user in text format. 
Have 3 buttons with the names of "Log" ,"Warn" and "Error".
If user clicks on "Log" button then the text entered by user will be shown in black color.
Similarly if the user clicks on "Warn " and "Error " buttons then the text entered by user will be shown on the screen in the yellow and red colors respectively. 

Interviewee used ReactJS.

### Interviewer: Kushank  
**Interviewee: Lakshay**

**Coding Question:** 

Here's an API Link: [https://mystery-api.kushanksriraj.repl.co/get](https://mystery-api.kushanksriraj.repl.co/get) 

This API link can give two errors, either 404, or 401. 
If the error is 404, show the user 'page not found' and if the error is 401, show the user 
'you are not logged in'. 

Followup question: If the status is 200 then show the message "API is working"

Interviewee used Vanilla JS

[Possible solution: Just the status code comparison will be fine, no need to convert to JSON.]

### Interviewer: Prakhar 
**Interviewee: Irfan**

**Conceptual Question:** 

1. Explain differences between Semantic and Non-Semantic HTML with examples. 

Answer: 
Semantic examples: section, aside. 
Advantage: Web page easily read by screen readers.

2. Explain what is Git and its process or flow (from creating a repository to finally pushing and updating it through different commits online on GitHub)

**Coding Question:** 

Create a web app, where I input my name, and then I input a password.
If the password contains the input name in it, show an error message "Password can't have name"

**Hint provided:** use .includes function

Interviewee used ReactJS

🧑‍💻 **Mock interview summary credits: Roshan J**




4


### **Coding:**

Create an Input Element, which shows a display message according to the Input text with the click of a button. If you type - 
"Tanvi" - then show, "She is the best CEO ever!"
"Tanay" - then show, "He is our FUNNY mentor!"
"Swapnil" - then show, "He helps us CONQUER jobs!"
"Akanksha" - then show, "She is our CHEERFUL Interviewer!"

(Kajal did it in VanillaJS)

### **Conceptual:**

1. Importance of CSS Variables. Demonstration with code was also asked.
2.  Difference between React JS and Vanilla JS. Why does one use it?

**Feedback:** 
Take care of the network before the actual interview happens and make appropriate arrangements for the same. Rest coding was good.

---

### Interviewer: Prakhar Varshney

### Interviewee: Shishir Neupane

### Coding:

Create 2 buttons with text YJHD and ZNMD. At the click of a button, call the given API with the query as same as the button text, and display the message you get on the screen. 
Followup: Instead of using calling the fetch function twice in both events(clicking of buttons), enclose it in a different function so that it can be used accordingly in both areas.

The trick in the follow-up: addEventListerner methods do not require any additional parameter to be attached in the function that is passed as 2nd parameter otherwise that function gets called there itself on the spot instead of executing the function on the event. Solved by using arrow Function

API -

[https://mock-practice.prakhar10v.repl.co/bollywood?name=](https://mock-practice.prakhar10v.repl.co/bollywood?name=)

Eg - Clicking on the button YJHD will make a call to

[https://mock-practice.prakhar10v.repl.co/bollywood?name=YJHD](https://mock-practice.prakhar10v.repl.co/bollywood?name=YJHD)

### .

(Shishir did it in Vanilla JS)

Conceptual:

1. Speak about promises using the example of fetch API.
2. Explain Git and Github to Prakhar as if he is a 10-year-old kid.

**Feedback:** 
    
    The expected approach would have been to check about the innerText of the button clicked and then go ahead with the values and try it out.
    

🧑‍💻 **Mock interview summary credits: Roshan J**




5

### Interviewee:  Krituraj Anand

You have to create a profit and loss calculator, in which you will make two input sections one will take current price and other one will take the cost price and to show result one will click on a button and a message will be shown, if there is loss then you just have to show a message with loss amount and similarly for profit

(Krituraj did it using Vanilla JS on vscode)
Conceptual:
1) Reason of placing the script tag at the bottom in the index.html file.
2) Within querySelector you have used class selector. Are we allowed to try something else like "id"?
3) Difference between class and id
4) Speak about the box model
5) What's the feature of React that you like most?

Feedback:
1) Be ready with your code editor
2) Engage with your interviewer 

---

### Interviewer: Ishan Jirety

### Interviewee:  Krituraj Anand

Here is an API: [https://otpgenerator.ishanjirety.repl.co/get-otp?name=](https://otpgenerator.ishanjirety.repl.co/get-otp?name=)

You will enter a name as input from your app and send this API a request with the name along with it (this will be the final URL :

[https://otpgenerator.ishanjirety.repl.co/get-otp?name=Nameentered](https://otpgenerator.ishanjirety.repl.co/get-otp?name=Nameentered)

) on button click. In the response, you will get an OTP which should be shown on the screen.

Followup1: Make another input section that asks the user to guess the OTP and for checking whether the guess is equal to the actual one or not add a button "Validate" which on clicking shows the message "Success " or "Failure" depending.  The response is coming in the form of

```
Name-OTP
```

format so something like

```
Pratyush-570928
```

So compare the OTP value from the response as well as the input which is being entered

Followup2: Change the color of validating message to GREEN when success comes up and change it to RED if failure comes up on the click of Validate Button. 

(done using Vanilla JS on VScode)
Conceptual:
1) Speak about DOM.
2) Speak about the use of Fetch in your application.
3) What do you think Javascript is synchronous or asynchronous?




6


# Mock Interview Summary :

### Interviewer: Kanishk Gupta

### Interviewee:  Shivam Pandey

Here is an API - [https://jsonplaceholder.typicode.com/todos](https://jsonplaceholder.typicode.com/todos). The response show the titles of all items on the screen
(Shivam done it using  React Js on Codesandbox)

(Krituraj did it using Vanilla JS on vscode)
Conceptual:

1) Number of ways of using fetch: depending on the type of request - GET, POST, PUT. Can read more on MDN docs
2) Reason for using the key in the code which he has written.

---

### Interviewer: Kanishk Gupta

### Interviewee:  Shishir Neupane

Coding: Input a single-digit number and check whether the number is an Automorphic number or not. Render output on the page.
An automorphic number is a number whose square "ends" in the same digits as the number itself.
For example,
52 = 25, here 25 ends with ‘5’. Display :"5 is an Automorphic Number" on the screen
62 = 36, here 36 ends with ‘6’
So 5 and 6 are automorphic numbers

7 isn't an automorphic number because 7**2=49.Display :"7 is not an Automorphic Number" on the screen
(done by using  Vanilla JS on Vscode)

Follow-up: If the square of a number has more than 3 digits, then how you can solve the same question 

Conceptual:

) Use of typeof in the code
2) Describe promises: Shishir explained it using the fetch API speaking about the different states (i.e. fulfilled or rejected) and why does it happen?


7

Coding:  Create a password checker web application having 2 input sections that takes the password. If the value in both sections are equal then show the message Success on the screen and if not equal then show Passwords Mismatched on the click of a button
(done using Vanilla JS on Repl)

Conceptual:
a)  Discussion of Block and Inline elements with examples
b) Use of alt attribute in the image HTML tag.
c) Discussion of CSS Box Model

Feedback:
Step by step explanation during the coding and conceptual part appreciated!!

---

### Interviewer: Sneha Pujari

### Interviewee:  Akshat Gupta

Coding: Create a list of 3 objects that has 2 attributes name of the task and completed which is a boolean value true or false. Display those tasks which are completed or which have attributes as completed:true on the click of a button.
(done using Vanilla JS on Repl)

Conceptual:
a) Distinguish between display:none and visibility:hidden.
b) Different ways of writing styles to a webpage

Feedback:
Staying calm while solving the question and quick error solving during the interview!!