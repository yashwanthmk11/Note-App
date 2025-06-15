📝 Full Stack Notes App
A full stack application built with React for the frontend, Node.js + Express for the backend, and MongoDB for data storage. Users can create, view, toggle (mark as done/undo), and delete notes — all with a clean UI and responsive design.

🚀 Live Demo
Add your deployed link here (e.g. Vercel frontend + Render backend)

📂 Folder Structure
bash
Copy code
notes-app/
├── client/             # React frontend
├── server/             # Express backend + MongoDB
🔧 Technologies Used
🖥️ Frontend (React)
React

JSX

CSS

Fetch API

🔙 Backend (Node.js + Express)
Express.js

Mongoose

MongoDB (local or Atlas)

CORS, dotenv

📦 Features
Add new notes

Mark notes as Done or Undo

Delete notes

Responsive and animated UI

Backend REST API with MongoDB

Full CRUD functionality

⚙️ Installation & Run Locally
1. Clone the repo
bash
Copy code
git clone https://github.com/your-username/notes-app.git
cd notes-app
2. Setup Backend
bash
Copy code
cd server
npm install
node server.js
Make sure MongoDB is running locally at mongodb://localhost:27017/notesdb

3. Setup Frontend
Open a new terminal:

bash
Copy code
cd client
npm install
npm start
Frontend will run at: http://localhost:3000
Backend will run at: http://localhost:5000

🌐 API Endpoints
Method	Endpoint	Description
GET	/api/notes	Get all notes
POST	/api/notes	Add a new note
PUT	/api/notes/:id	Toggle note status
DELETE	/api/notes/:id	Delete a note