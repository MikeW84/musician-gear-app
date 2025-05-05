# Project Setup Guide

## Step 1: Setup and Project Initialization

### Objective
Set up the development environment for the Musician Gear App, initialize the React frontend, Express backend, and Git repository.

### Instructions
1. **Install Prerequisites**
   - Download and install Node.js (includes npm) from [nodejs.org](https://nodejs.org).
   - Install MongoDB Community Edition from [mongodb.com](https://www.mongodb.com/try/download/community).

2. **Create React Frontend**
   - Open a terminal and run:
     ```bash
     npx create-react-app musician-gear-app
     cd musician-gear-app
     npm start
     ```
   - Verify the default React app runs at `http://localhost:3000`.

3. **Create Express Backend**
   - Create a new folder called `backend` outside the `musician-gear-app` folder:
     ```bash
     mkdir backend
     cd backend
     npm init -y
     npm install express
     ```
   - Create a file `index.js` in the `backend` folder with:
     ```javascript
     const express = require('express');
     const app = express();
     const port = 5000;

     app.get('/', (req, res) => {
       res.send('Hello from the backend!');
     });

     app.listen(port, () => {
       console.log(`Server running at http://localhost:${port}`);
     });
     ```
   - Run the backend:
     ```bash
     node index.js
     ```
   - Verify it responds at `http://localhost:5000`.

4. **Initialize Git Repository**
   - In the project root (create a parent folder, e.g., `musician-gear-project`, containing both `musician-gear-app` and `backend`):
     ```bash
     git init
     echo "node_modules/" > .gitignore
     echo "backend/node_modules/" >> .gitignore
     git add .
     git commit -m "Initial project setup"
     ```
   - Create a GitHub repository and push:
     ```bash
     git remote add origin <your-repo-url>
     git push -u origin main
     ```

5. **Test Connectivity**
   - From the React app, make a test API call to the backend:
     - Install Axios in the frontend:
       ```bash
       cd musician-gear-app
       npm install axios
       ```
     - Modify `src/App.js` in the React app:
       ```javascript
       import React, { useEffect } from 'react';
       import axios from 'axios';

       function App() {
         useEffect(() => {
           axios.get('http://localhost:5000')
             .then(response => console.log(response.data))
             .catch(error => console.error('Error:', error));
         }, []);

         return <div>Hello from Musician Gear App!</div>;
       }

       export default App;
       ```
     - Ensure the backend is running (`node index.js` in the `backend` folder).
     - Run the frontend (`npm start` in `musician-gear-app`).
     - Check the browser console for “Hello from the backend!”.

### Next Steps
- Confirm the setup works (React app loads, backend responds, Git pushes successfully).
- Provide feedback on any issues or questions.
- Move to designing the MongoDB schema for the Gear Inventory feature.