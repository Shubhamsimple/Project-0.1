# BookStore Project Documentation

Overview
BookStore is a full-stack web application that enables users to browse, register, log in, and view a list of books. It uses a modern React-based frontend with modular components, a Node.js/Express backend, and MongoDB to store users and books data. Authentication is handled with bcrypt for password hashing, and the UI is styled with TailwindCSS and DaisyUI.

Table of Contents
1. Project Structure

2. Backend
Dependencies
Database Models
API Endpoints
Environment Variables

3. Frontend
Key Components
Authentication Flow
Book Fetching

4. Styling
5. Running the Project
6. Troubleshooting

. Project Structure
0.1 text
/backend
    /controller
        book.controller.js
        user.controller.js
    /model
        book.model.js
        user.model.js
    /route
        book.route.js
        user.route.js
    index.js
    package.json
    package-lock.json

/frontend
    /src
        /components
            Navbar.jsx
            Footer.jsx
            Login.jsx
            Logout.jsx
            Signup.jsx
            Cards.jsx
            Banner.jsx
        /context
            AuthProvider.jsx
        /courses
            Course.jsx
        /home
            Home.jsx
        App.jsx
        main.jsx
        index.css
    /public
        list.json (book data)
        Banner.jpg
        react.jpg
    tailwind.config.js
    eslint.config.js
    vite.config.js

    
. Backend

0.2 Dependencies
(From package.json)
express
mongoose
dotenv
cors
bcryptjs

Database Models
Book Model (book.model.js)
js
{
  name: String,
  price: Number,
  category: String,
  image: String,
  title: String
}
User Model (user.model.js)
js
{
  fullname: String,
  email: String, (unique)
  password: String
}

.  API Endpoints
Book Routes (/book)
   GET / — Fetch all books

User Routes (/user)
POST /signup — Create a new user (registration)
    Request body: { fullname, email, password }
POST /login — Authenticate user and login
     Request body: { email, password }

Controllers
book.controller.js: Handles retrieving all books from the database.
user.controller.js: Handles user signup and login, including password hashing and user existence checks.

Environment Variables
Use a .env file with at least the following:

text
MongoDBURI=<your-mongodb-connection-string>
PORT=4000
Frontend
Built with React, using hooks, modular components, and Vite for fast development.

 . Key Components
Navbar & Footer: Persistent header/footer with navigation and theme toggling.
Signup/Login: Authentication forms, calling backend endpoints, and managing authentication state with context.
Home, Courses, Banner, Cards, FreeBook: UI components for landing page, book lists, carousels, and book display.

. Authentication Flow
AuthProvider.jsx manages the authentication context using React Context API and localStorage.
Signup and Login forms handle input validation and communicate with the backend. User tokens (if implemented) or info are saved in localStorage post-login/signup.
Logout.jsx clears session data and notifies the user.

. Book Fetching
Book data is fetched from the backend (/book endpoint) and stored in local state.
Static book data for the carousel and some sections is imported from list.json inside /public.

Styling
TailwindCSS for utility-first styling.
DaisyUI for additional UI components.
Custom fonts via Google Fonts set in index.css.

Running the Project


. Prerequisites
Node.js and npm
MongoDB instance (local or Atlas)

0.3 Backend
Install dependencies:
npm install
Setup your .env file.
Start backend:
node index.js or nodemon index.js

0.4 Frontend
Install dependencies:
npm install
Start frontend:
npm run dev
Frontend runs on default Vite port (localhost:5173), Backend on port 4000 (or as specified).

0.5 Troubleshooting
MongoDB Connection Errors: Double-check your MongoDBURI in .env.
CORS Issues: Confirm backend CORS settings.

Notes
Use secure practices in production, such as JWT for authentication and secure password storage/salting.
Only necessary data is exposed to the client—never the password.
Dependency Errors: Ensure all required npm packages are installed.

Port Conflicts: Make sure ports 4000 (backend) and 5173 (frontend) are free or change them appropriately.
