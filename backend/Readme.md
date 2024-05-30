# Sales Lead Backend

## Description
This project is a backend service for managing sales leads. It is built using Node.js, Express, TypeScript, and MongoDB.

## Folder Structure
backend/
├── dist/ # Compiled JavaScript files
├── node_modules/ # Project dependencies
├── src/ # Source files
│ ├── middlewares/ # Express middlewares
│ │ └── auth.ts # Authentication middleware
│ ├── models/ # Mongoose models
│ │ ├── leadModel.ts # Model for leads
│ │ └── userModel.ts # Model for users
│ ├── routes/ # Express routes
│ │ ├── leadsRoute.ts # Routes for leads
│ │ └── userRoute.ts # Routes for users
│ ├── services/ # Service files
│ │ └── emailService.ts # Email sending service
│ └── app.ts # Main application file
├── .env # Environment variables (not shown in screenshot)
├── nodemon.json # Nodemon configuration
├── package.json # Project metadata and dependencies
├── package-lock.json # Lockfile for npm dependencies
├── Readme.md # Project documentation
├── tsconfig.json # TypeScript configuration


## Prerequisites
- Node.js
- npm (Node Package Manager)
- MongoDB

## Installation
   open the backend directory
   npm install

## Set up environment variables
    Create a .env file in the root directory and add the following variables:
    
    CLIENT_ID=your-client-id
    CLIENT_SECRET=your-client-secret
    REDIRECT_URI=https://developers.google.com/oauthplayground
    REFRESH_TOKEN=your-refresh-token

## Running the Project
Development Mode -
This mode uses nodemon and ts-node to automatically compile and run TypeScript files.

npm run dev

Production Mode-

npm start



