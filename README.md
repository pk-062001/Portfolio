# Production-Grade Developer Portfolio (MERN Stack)

A production-grade developer portfolio built on the **MERN (MongoDB, Express, React, Node.js)** stack using plain JavaScript. Features rich aesthetics, glassmorphism, responsive navigation, skills and projects filtering, smooth animations, and a secure server-side contact form submission flow.

---

## 📁 Project Structure

```
project/
├── client/                 # React frontend (Vite)
│   ├── src/
│   │   ├── components/     # React component files (.jsx)
│   │   ├── data/           # Configured portfolio details (experience, projects, skills)
│   │   ├── hooks/          # Custom react hooks (useScrollAnimation)
│   │   └── utils/          # Helper animations configuration
│   ├── index.html          # Frontend main index
│   └── package.json        # Frontend dependencies & configurations
│
├── server/                 # Express backend (Node.js)
│   ├── config/             # Database connection settings
│   ├── middleware/         # Centralized API error handling
│   ├── models/             # Mongoose schemas (Contact)
│   ├── routes/             # API endpoints (/api/contact)
│   └── package.json        # Backend dependencies & configurations
│
├── package.json            # Root configuration to orchestrate client and server
└── README.md               # Documentation
```

---

## 🛠️ Prerequisites

Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [MongoDB](https://www.mongodb.com/try/download/community) (Local server running on port `27017` or a MongoDB Atlas connection string)

---

## 🚀 Getting Started

### 1. Installation

You can install all dependencies for both the frontend and backend at once from the root directory:

```bash
# Install root orchestration tools (concurrently)
npm install

# Install client-side dependencies
npm run install --prefix client

# Install server-side dependencies
npm run install --prefix server
```

Alternatively, you can navigate into each folder individually to install dependencies:
```bash
# In client/
cd client
npm install

# In server/
cd ../server
npm install
```

---

## ⚙️ Environment Configuration

Create a `.env` file inside the `server/` directory to configure your environment variables. 

You can copy the provided example:
```bash
cp server/.env.example server/.env
```

Set the values in `server/.env`:
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/portfolio
CLIENT_ORIGIN=http://localhost:5173

# Optional: Nodemailer SMTP settings (to get email notifications for contact submissions)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_gmail@gmail.com
SMTP_PASS=your_app_password
CONTACT_TO_EMAIL=your_receiving_email@gmail.com
```

---

## 🖥️ Running the Application

There are two ways to start the application:

### Option A: Start Both Concurrently (Recommended)
You can launch both the frontend client and backend server simultaneously with a single command from the root directory:

```bash
npm run dev
```

- **Frontend client** will run at: [http://localhost:5173](http://localhost:5173)
- **Backend server** will run at: [http://localhost:5000](http://localhost:5000)

---

### Option B: Start Frontend & Backend Separately

#### 1. Start the Backend Server
In a new terminal window, navigate to the `server/` directory and run:
```bash
cd server
npm run dev
```
*Note: Nodemon is used to automatically restart the server when files change.*

#### 2. Start the Frontend Client
In another terminal window, navigate to the `client/` directory and run:
```bash
cd client
npm run dev
```

---

## 📝 Features & Integrations

- **Vite + React (JS)**: Powered by fast build tooling, glassmorphism CSS components, and Framer Motion micro-animations.
- **Form Submission**: Submissions sent to `POST /api/contact` validate parameters using `express-validator`.
- **Database Entry**: Successful submissions are saved to MongoDB as `Contact` documents.
- **NodeMailer Integration**: If SMTP credentials are set up in `server/.env`, submissions will send an automated notification email containing the user's name, email, subject, and message.
