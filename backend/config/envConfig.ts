
import { Pool } from 'pg';

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});





// import dotenv from 'dotenv';

// dotenv.config();

// export const config = {
//   port: process.env.PORT || 5000,
//   dbUser: process.env.DB_USER || 'defaultUser',
//   dbHost: process.env.DB_HOST || 'localhost',
//   dbName: process.env.DB_NAME || 'defaultDB',
//   dbPassword: process.env.DB_PASSWORD || 'defaultPassword',
//   dbPort: parseInt(process.env.DB_PORT || '5432', 10),
// };

// File: app/page.tsx
/*
import { neon } from '@neondatabase/serverless';

export default function Page() {
  async function create(formData: FormData) {
    'use server';
    // Connect to the Neon database
    const sql = neon(`${process.env.DATABASE_URL}`);
    const comment = formData.get('comment');
    // Insert the comment from the form into the Postgres database
    await sql('INSERT INTO comments (comment) VALUES ($1)', [comment]);
  }

  return (
    <form action={create}>
      <input type="text" placeholder="write a comment" name="comment" />
      <button type="submit">Submit</button>
    </form>
  );
}
*/


/*

// src/server.ts
import express from 'express';
import { Pool } from 'pg';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Enable CORS
app.use(cors());
app.use(express.json());  // Middleware to parse JSON requests

// Create PostgreSQL pool using credentials from environment variables
const pool = new Pool({
  user: process.env.DB_USER,       // Database user
  host: process.env.DB_HOST,       // Database host (e.g., localhost)
  database: process.env.DB_NAME,   // Database name
  password: process.env.DB_PASSWORD, // Database password
  port: parseInt(process.env.DB_PORT || '5432', 10),  // PostgreSQL port (default 5432)
});

// API route to handle form submission and insert into database
app.post('/submit-comment', async (req, res) => {
  const { comment } = req.body;  // Get the comment from the body

  if (!comment) {
    return res.status(400).json({ error: 'Comment is required' });
  }

  try {
    // Insert the comment into the PostgreSQL table
    const result = await pool.query('INSERT INTO comments (comment) VALUES ($1) RETURNING *', [comment]);
    
    // Respond with the inserted comment
    return res.status(201).json({ message: 'Comment submitted successfully', comment: result.rows[0] });
  } catch (error) {
    console.error('Error inserting comment:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
*/