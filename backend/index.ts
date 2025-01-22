import express, { Application } from 'express';
// import cors from 'cors';
import dotenv from 'dotenv';
import commentRoutes from './routes/commentRoutes';
import errorHandler from './middleware/errorHandler';

dotenv.config();

const app : Application = express();
const port = process.env.PORT || 5000;

// Middleware
// app.use(cors());
app.use(express.json());

// Routes
app.use('/api/comments', commentRoutes);

// Error handling middleware
app.use(errorHandler);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
