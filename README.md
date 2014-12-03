# Reddit Clone

## Task
This Project is part of a school project. Goal was to code a Reddit Clone using Javascript Front-End Frameworks.  
For more information, see File [task.pdf](http://de.wikipedia.org/ "Task Description from teacher")  
The same project was realized in another Project (Client & Server) using **JSF**. This project focuses only on the Client part though. The Server part was already given.

## Current State
State: **In Progress** (about 95% finished)

### How it works
![Entries (/links)](comingsoon "Main Page")  
![Entry (/post/:id)](comingsoon "Comment Page")  
Coming soon...

### Setup
1. Install [NodeJS](http://nodejs.org/download "NodeJS Download Page")
2. Run the command "npm install" on the project directory
3. Edit your IP Address in the file "dataService.js" (used for Socket.io)  
`var socket = io.connect('http://localhost:4730/');`
4. Run the server using the command "node server.js" on the project directory
5. Open "http://localhost:4730/Client.html" on your Browser

### ToDo's
* Design optimizations
* Regex-Checks for Inputs (Username, Password, URL)
* *Responsive Design (optional)*
* Speed optimization (CDN,min,..)
* Testing

### Known Issues
* Bad view before Entries are loaded from the Server
* Model and Controller are a bit mixed up

## Q&A
* What is Reddit?
	* Check it out yourself: [Reddit](http://reddit.com/ "Reddit")
* Which school was this project made for?
	* School Name: HSR Rapperswil
	* Module Name: Internettechnologien (Internet Technologies)

## About
This was my first project using AngularJS (maybe even my first real Javascript Project).  
There may be some bad coding styles or not correct differentiation of MVC.