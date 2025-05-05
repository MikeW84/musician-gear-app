# Musician Gear App: MVP and Development Plan

## Overview
A web app for musicians to track their gear, maximize its use, and make intentional purchase decisions. The MVP focuses on simplicity, interactivity, and inspiring creativity with existing gear.

## MVP Features
1. **Gear Inventory**
   - **Description**: Add, view, edit, and delete gear (instruments, pedals, etc.).
   - **Fields**: Name, category, brand, purchase date, notes, photo (optional).
   - **Value**: Central hub for gear management.
   - **Interactivity**: Visual gear list with photo thumbnails.

2. **Gear Usage Tracker**
   - **Description**: Log gear usage (e.g., practice, gigs) and track last used dates.
   - **Fields**: Date, context (e.g., gig), notes.
   - **Value**: Highlights underused gear to encourage rediscovery.
   - **Interactivity**: Dashboard with “neglected gear” alerts (unused for 3+ months).

3. **Creative Gear Combos**
   - **Description**: Suggests random gear combinations with creative prompts.
   - **Example**: “Pair your acoustic guitar with your reverb pedal for an ambient sound.”
   - **Value**: Sparks experimentation with existing gear.
   - **Interactivity**: Save or dismiss suggestions; rate combos.

4. **Wishlist with Reflection**
   - **Description**: List desired gear with a focus on intentionality.
   - **Fields**: Item name, category, “Why I want this,” priority (low/medium/high).
   - **Value**: Promotes mindful purchasing.
   - **Interactivity**: 30-day reassessment prompt for wishlist items.

## Tech Stack
- **Frontend**: React (component-based, beginner-friendly UI).
- **Backend**: Node.js + Express (simple JavaScript-based API).
- **Database**: MongoDB (flexible for gear and usage data).
- **Hosting**: Vercel (free, easy deployment).
- **Authentication**: Firebase Auth (optional for MVP; for user accounts).

## Development Plan
A step-by-step plan to build the MVP while learning full-stack development.

1. **Setup and Project Initialization (1-2 days)**
   - Install Node.js, npm, and MongoDB locally.
   - Create a React app using `create-react-app`.
   - Set up an Express server in a separate folder.
   - Initialize a Git repository and push to GitHub.
   - Test basic React frontend and Express backend connectivity.

2. **Gear Inventory Feature (3-4 days)**
   - Design MongoDB schema for gear (name, category, etc.).
   - Build Express routes for CRUD operations (GET, POST, PUT, DELETE).
   - Create React components: GearList, GearForm, GearItem.
   - Connect frontend to backend via Axios for API calls.
   - Test adding, viewing, and deleting gear.

3. **Gear Usage Tracker (2-3 days)**
   - Extend MongoDB schema to include usage logs (gear ID, date, context).
   - Add Express routes for logging and retrieving usage data.
   - Build React component for usage form and dashboard.
   - Implement logic to flag gear unused for 3+ months.
   - Test usage logging and dashboard display.

4. **Creative Gear Combos (2 days)**
   - Write a simple JavaScript function to generate random gear combos.
   - Add Express route to serve combo suggestions.
   - Create React component for displaying and saving combos.
   - Test suggestion generation and save functionality.

5. **Wishlist with Reflection (2-3 days)**
   - Design MongoDB schema for wishlist (item, reason, priority).
   - Build Express routes for wishlist CRUD.
   - Create React components: WishlistForm, WishlistItem.
   - Add logic for 30-day reassessment prompt (client-side timer).
   - Test wishlist management and reassessment flow.

6. **Basic Styling and UX (2 days)**
   - Use Tailwind CSS for responsive, clean design.
   - Style components for intuitive navigation (e.g., sidebar, cards).
   - Ensure mobile-friendly layout.
   - Test UI across devices.

7. **Deployment (1 day)**
   - Deploy backend to Vercel (or Heroku if preferred).
   - Deploy React frontend to Vercel.
   - Test end-to-end functionality in production.
   - Fix any deployment-related bugs.

## Timeline
- Total: ~2-3 weeks (assuming part-time coding as a beginner).
- Weekly Focus:
  - Week 1: Setup, Gear Inventory.
  - Week 2: Usage Tracker, Creative Combos.
  - Week 3: Wishlist, Styling, Deployment.

## Learning Goals
- Understand full-stack architecture (frontend, backend, database).
- Practice React component design and state management.
- Learn REST API development with Express.
- Gain experience with MongoDB and CRUD operations.
- Explore deployment and basic UX principles.

## Next Steps
- Pick one feature (e.g., Gear Inventory) to start coding.
- Create a wireframe for UI layout.
- Set up the development environment and test a “Hello World” app.