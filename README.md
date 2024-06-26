"# crm-sales-lead-application" 
# Sales Lead Frontend

## Description
This project is a frontend application for managing sales leads. It is built using React and TypeScript.

## Folder Structure

public/
src/
├── components/ # Reusable UI components
│ ├── Dashboard.tsx # Dashboard component
│ ├── EmailDialog.tsx # Email dialog component
│ ├── Footer.tsx # Footer component
│ ├── Header.tsx # Header component
│ ├── LeadDetailPanel.tsx # Lead detail panel component
│ ├── LeadForm.tsx # Lead form component
│ ├── LeadTable.tsx # Lead table component
│ ├── PrivateRoute.tsx # Private route component
│ ├── ProtectedLayout.tsx # Protected layout component
│ ├── SideMenu.tsx # Side menu component
├── contexts/ # React context files
│ └── AuthContext.tsx # Authentication context
├── pages/ # Page components
│ ├── DashboardPage.tsx # Dashboard page
│ ├── LeadsPage.tsx # Leads page
│ ├── LoginPage.tsx # Login page
│ ├── LogoutPage.tsx # Logout page
│ ├── ProfilePage.tsx # Profile page
├── services/ # Service files
│ └── api.ts # API service
├── App.css # App-wide styles
├── App.test.tsx # App component tests
├── App.tsx # Main App component
├── index.css # Global styles
├── index.tsx # Entry point of the application
├── logo.svg # Logo
├── react-app-env.d.ts # React app environment definitions
├── reportWebVitals.ts # Web vitals report
├── setupTests.ts # Test setup
├── types.ts # TypeScript types
.gitignore # Git ignore file
package-lock.json # Lockfile for npm dependencies
package.json # Project metadata and dependencies
README.md # Project documentation
tsconfig.json # TypeScript configuration



## Prerequisites
- Node.js
- npm (Node Package Manager)

## Installation
go to frontend directory then,
npm install

## Running the Project
There are two ways to run the project: in development mode and in production mode.

Development Mode
This mode uses react-scripts to start the development server with hot reloading.

###`npm start`

This will start the development server at http://localhost:3000.

Production Mode
In production mode, the project is built into static files for deployment.

###`npm run build`





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



