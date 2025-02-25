# DeepCode

## Overview
DeepCode is an AI-powered platform designed for developers and students to optimize their coding workflow. Users can debug code, translate between programming languages, and prepare for technical interviews using AI-driven tools. This project is built with the MERN stack and integrates AI using Google Gemini.

## Features
- **AI Code Helper**: Instantly debug code with AI-powered explanations and solutions.
- **AI Code Translator**: Seamlessly convert code between multiple programming languages.
- **AI Interview Preparation**: Generate technical interview questions based on user skills and resume.
- **Authentication System**: Users can sign up and log in using their email and password. JWT-based authentication ensures security.
- **Real-time Response**: AI-generated results are not stored; users receive solutions instantly, and history is cleared upon logout.
- **Unlimited Requests**: Users can send unlimited requests but must wait for a response before sending another request.

## Tech Stack

### Frontend
- React.js
- Context API
- React Router
- Tailwind CSS
- Axios
- Monaco Editor
- React Icons
- React Markdown
- React Syntax Highlighter
- Remark GFM

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose ORM)
- Google Gemini AI API
- JWT for authentication
- bcrypt for password hashing
- Multer for file uploads
- pdf-parse & mammoth for document processing
- Cookie-parser & CORS for security & cross-origin requests

## Authentication & Security
- **JWT Authentication**: Access tokens are used for session management. Users must be logged in to access DeepCode tools.
- **Middleware Protection**: A middleware verifies JWT tokens before processing any user request.
- **Password Hashing**: User passwords are securely hashed with bcrypt before storing in the database.
- **Session-based Data Handling**: User-generated results are temporary; they are not saved in the database.

## User Flow
1. User signs up or logs in.
2. Once authenticated, they can access AI tools.
3. They submit a request (debugging, translation, interview prep, etc.).
4. AI processes the request and returns a response in real time.
5. Users can send a new request after receiving their current response.
6. Logging out clears all session data and history.

## Error Handling
- If an AI request fails, an appropriate error message is displayed.
- Users can retry failed requests manually.
- AI-generated responses are post-processed to ensure relevance before being displayed.

## Contribution
This project is open-source and available on GitHub. Developers can contribute by improving AI response handling, adding new AI-powered features, or optimizing performance.

## License
DeepCode is released under the MIT License. Feel free to use and modify it as needed.

---

### Contact
For inquiries or contributions, feel free to reach out via GitHub or email.
