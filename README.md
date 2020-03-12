# React JS Resume Web App Template with Node JS and Express JS Backend
![](/resume.png)

# [LIVE DEMO](https://mern-resume.herokuapp.com/)

# Description
___
This is a react front end and node,express backend personal resume template. I've created this portfolio website only using react in the
frontend with some npm modules. This modules include
### 1. react-hamburger-menu -> to have an animated hamburger menu on mobile devices or small screens.
### 2. react-reveal -> to have animated component mounts.
### 3. react-scrollspy-nav -> to be able to smooth scroll using navigation links. most people use jquery, i think its an easy way to implement with no jquery required.
### 4.reactstrap -> used mainly in the frontend.
### 5.contact form informations are passed to backend using bodyparser and sendgrid to send emails to personal accounts.

# Make It Yours

## 1. Make sure you have what you need
To build this website, you will need to have Node >=6 downloaded and installed on your machine.

## 2. Build a Create-React-App
Next, you will build the initial application using Create-React-App. You can simply run npx create-react-app [your app name here]

## 3. Download the template
Once you have a React app up and running by following the steps in the above link, download my code by hitting the green "clone or download" button above and hit download zip. All you will have to do now is replace the "public" and "src" folders of your newly built app with mine that you just downloaded(in client folder) and bring in every other file outside of client file. After this step run ```npm install``` in your terminal. All npm modules will be installed. Go to [SENDGRID](https://sendgrid.com) and register a new account, get you apikey(100 emails per day free). Then go to config folder and create a new file and name it ```keys_dev.js```
type in ```module.exports = {
    sendGridAPI: process.env.SENDGRID,
}``` and then plug in your sendGridApi key.  
 

## 4. Replace images and fonts
Next, you will want to replace the images, and fonts if you like, with your own. All you have to do is replace the images at public/src/images and public/favicon.ico with your own. DONT FORGET TO KEEP THE SAME NAMES ON THE IMAGES OR FAVICON.

## 5. Fill in your personal info
To personalize the website, open up all components and replace your info with mine.

## 6. Make any styling changes you would like
Feel free to make any changes and use it as you wish. It's yours now.

## 7. Own It
When you're all done, run npm run dev aand you'll see your new personal resume website! Congratulations!

