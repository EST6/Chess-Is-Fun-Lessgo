// import { Pool } from 'pg';
import { pool } from "../config/envConfig";
// Create PostgreSQL connection pool
// const pool = new Pool({
//   user:     process.env.DB_USER,
//   host:     process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: parseInt(process.env.DB_PORT || '5432', 10),
// });

// Insert a new comment into the database
export const insertComment = async (comment: string) => {
    const result = await pool.query('INSERT INTO comments (comment) VALUES ($1) RETURNING *', [comment]);
    return result.rows[0];
};
