# Profile Collection App - Backend

## Tech Stack:
- Node.js with Express.js
- Sequelize ORM with PostgreSQL
- Axios for API handling

## Project Structure:
- `server.js` - Entry point for the backend.
- `routes/profileRoutes.js` - API routes for profile operations.
- `controllers/profileController.js` - Handles business logic.
- `models/Profile.js` - Sequelize model for the Profile table.

## Features:
- Stores user profiles with Name, Email, Bio, and Location.
- Uses Sequelize for database management.
- Provides API endpoints for profile creation and retrieval.

## API Endpoints:
- `POST /api/profiles/userCreate` - Creates a new profile.
- `POST /api/profiles/userList` - Retrieves all stored profiles.

## How to Run:
1. Install dependencies: `pnpm install`
2. Configure PostgreSQL connection in `config.json`
3. Run migrations: `npx sequelize-cli db:migrate`
4. Start the backend: `pnpm start`
