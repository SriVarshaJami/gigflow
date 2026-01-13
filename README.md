GigFlow – Full Stack Internship Assignment

GigFlow is a full-stack freelancing platform inspired by Fiverr/Upwork, where clients can post gigs, freelancers can place bids, and clients can hire freelancers.
This project demonstrates backend API design, MongoDB relationships, and frontend integration.

🚀 Features
🔹 Backend

User authentication (JWT – implemented)

Gig management (Create, View)

Bidding system

Hiring logic with MongoDB transaction

Proper validation and error handling

🔹 Frontend

Built with React + Vite

Pages:

Login / Register

Gig List

Gig Details

Submit Bid

Axios-based API integration

🛠 Tech Stack

Backend

Node.js

Express.js

MongoDB + Mongoose

JWT Authentication

Frontend

React (Vite)

Axios

React Router DOM

📂 Project Structure
gigflow/
│
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   ├── Gig.js
│   │   └── Bid.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── gigRoutes.js
│   │   └── bidRoutes.js
│   │
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── server.js
│   └── .env.example
│
├── frontend/
│   ├── src/
│   │   ├── api/axios.js
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── GigList.jsx
│   │   │   └── GigDetails.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│
└── README.md

🔗 API Endpoints
Gigs
Method	Endpoint	Description
GET	/api/gigs	Get all gigs
POST	/api/gigs	Create a new gig
Bids
Method	Endpoint	Description
POST	/api/bids	Submit a bid
GET	/api/bids/:gigId	View bids for a gig
PATCH	/api/bids/:bidId/hire	Hire freelancer
💡 Hiring Logic (Bonus ⭐)

The hiring process uses MongoDB Transactions:

Verify gig is open

Mark selected bid as hired

Assign freelancer to gig

Reject all other bids

This prevents race conditions and ensures data consistency.

⚙️ Environment Variables

Create a .env file inside backend/:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

▶️ How to Run
Backend
cd backend
npm install
node server.js


Server runs on:

http://localhost:5000

Frontend
cd frontend
npm install
npm run dev


Frontend runs on:

http://localhost:5173

📌 Notes for Evaluators

Authentication middleware is implemented.

For easier local testing, some endpoints can be tested without auth.

Core focus is on data modeling, API logic, and hiring workflow.

👩‍💻 Author

Jami Srivarsha
Full Stack Developer Intern Applicant
