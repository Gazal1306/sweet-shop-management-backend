# Sweet Shop Management System (Backend)

## Overview
A backend system for managing a sweet shop with secure authentication and CRUD operations.

## Tech Stack
- Node.js
- Express.js
- MySQL
- JWT Authentication
- bcrypt
- dotenv

## Features
- User Registration & Login
- JWT-based Authentication
- Protected APIs
- Add, View, Update, Delete sweets
- Input validation and error handling

## Database Tables
### users
- id
- email
- password

### sweets
- id
- name
- price
- quantity

## API Endpoints

### Auth
- POST /api/auth/register
- POST /api/auth/login

### Sweets (Protected)
- POST /api/sweets
- GET /api/sweets
- PUT /api/sweets/:id
- DELETE /api/sweets/:id

## Setup Instructions
1. Clone the repository
2. Run `npm install`
3. Create a `.env` file with DB credentials
4. Run `node index.js`
5. Test APIs using Postman

## Testing
All APIs tested using Postman with JWT authentication.
