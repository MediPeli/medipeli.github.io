# Setting Up the App Locally

This guide will walk you through the process of setting up the app on your local machine.

## Prerequisites

Before you begin, ensure you have Node.js installed on your system along with all necessary dependincies.

## Cloning the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/EmreAkcaa/trustmed-beta
cd trustmed-beta
```
## Database Configuration

Make sure that your IP is registered as whitelisted IP addresses in the security settings of MongoDB database. For this step and populating the environment variables correctly, you might contact the developer.

## Backend Configuration

Navigate to the `backend` folder and have the `.env`. Make sure that you populated it with correct environment variables. The `FRONTEND_URL` in that `.env` file should point to the URL where your frontend application is running (typically `http://localhost:3000` if you're running it locally).
  
## Frontend Configuration

Navigate to the `frontend` folder and create a file: `.env`. The `VITE_API_BASE_URL` should point to the URL where your backend application is running (typically `http://localhost:7000` or `http://localhost:7001` if you're running it locally).

## Running the Application

Application will run on 2 servers on your local computer as per the following instructions:

1. **Backend**:
    - Navigate to the `backend` directory.
    - Install dependencies: `npm install`.
    - Start the server: `npm start`.

2. **Frontend**:
    - Open a new terminal and navigate to the `frontend` directory.
    - Install dependencies: `npm install`.
    - Start the frontend application: `npm run dev`.
    - The application should now be running on `http://localhost:5173` but verify this in your command line terminal.
