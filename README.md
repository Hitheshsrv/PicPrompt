# PicPrompt

PicPrompt is a full-stack web application that allows users to generate and manage AI-powered images. With features like user authentication, credit system, and image generation capabilities, PicPrompt provides a seamless experience for creating unique images.

## Features

- 🎨 AI-powered image generation
- 🔐 User authentication and authorization
- 💳 Credit system for image generation
- 📱 Responsive design for all devices
- 💾 Image download functionality
- 👥 User profiles and management

## Tech Stack

### Frontend
- React.js
- Vite
- Context API for state management
- Modern UI/UX design

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- MongoDB
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd PicPrompt
```

2. Install Frontend Dependencies:
```bash
cd client
npm install
```

3. Install Backend Dependencies:
```bash
cd ../server
npm install
```

## Configuration

1. Create a `.env` file in the server directory with the following variables:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

2. Create a `.env` file in the client directory:
```env
VITE_API_URL=http://localhost:5000
```

## Running the Application

1. Start the Backend Server:
```bash
cd server
npm start
```

2. Start the Frontend Development Server:
```bash
cd client
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

## Project Structure

```
client/           # Frontend React application
  ├── src/
  │   ├── components/  # React components
  │   ├── context/     # Context API files
  │   ├── pages/       # Page components
  │   └── assets/      # Static assets
server/           # Backend Node.js application
  ├── config/     # Configuration files
  ├── controllers/# Route controllers
  ├── middlewares/# Custom middlewares
  ├── models/     # Database models
  └── routes/     # API routes
```

## API Endpoints

### User Routes
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - User login
- `GET /api/users/profile` - Get user profile

### Image Routes
- `POST /api/images/generate` - Generate new image
- `GET /api/images/user` - Get user's generated images