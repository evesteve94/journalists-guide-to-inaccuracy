# The Journalist's Guide To Inaccuracy

## Overview

**The Journalist's Guide To Inaccuracy** is a fun, interactive platform designed to embrace creativity and absurdity in storytelling. Powered by AI, the app generates humorous and inaccurate articles narrated by quirky characters like Marvin the Paranoid Android, Arthur Dent, and Zaphod Beeblebrox. Dive into a world where truth is optional, and imagination reigns supreme!

### Features:

- **AI-Powered Storytelling:** Generate humorous, nonsensical articles based on user inputs.
- **Quirky Narrators:** Choose from Marvin, Arthur, or Zaphod to narrate your story.
- **Cloud-Hosted Images:** Custom AI-generated visuals accompany each article.
- **Interactive Steps:** Select a topic, audience, and narrator for a personalized story experience.

---

## News Feed

Below is the News Feed:

![News Feed](client/public/news-feed.png)

## Article

Below is an example of a generate article:

![News Feed](client/public/article.png)

## Technologies Used

### Frontend:

- Built with **React** and **TypeScript**.
- Bundled using **Vite** for fast builds and development.
- **React Router** for dynamic page navigation.
- **Axios** for API requests.

#### Frontend Package Dependencies:

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.26.2",
  "axios": "^1.7.7",
  "@nanostores/react": "github:ai/react",
  "ai": "^3.4.9"
}
```

````

#### Backend:

Node.js with TypeScript for robust server-side logic.
Express.js for handling API endpoints.
Prisma as the ORM for PostgreSQL database management.
OpenAI and AI SDK for story and image generation.
Cloudinary for image storage and retrieval.
Multer for handling file uploads.


Backend Package Dependencies:

```json

```json
{
  "express": "^4.21.0",
  "prisma": "^5.20.0",
  "dotenv": "^16.4.5",
  "openai": "^4.67.2",
  "cloudinary": "^1.41.3",
  "multer": "^1.4.5-lts.1",
  "zod": "^3.23.8"
}
````

#### Installation and Setup

Prerequisites:

- Node.js v20.x or later.
- PostgreSQL database.
- API keys for OpenAI and Cloudinary.
  Steps:

1. Clone the repo
2. Install dependencies for front-and backend
3. Set up environment variables: Create a .env file in the server directory with the following keys:

```evn
DATABASE_URL='postgresql://<username>:<password>@<host>/<dbname>?sslmode=require'
OPENAI_API_KEY=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

4. Run the development environment:

Start the backend server:

npm run dev
Start the frontend:

cd client
