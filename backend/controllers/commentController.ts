import { Request, Response } from 'express';
import { insertComment } from '../services/dbService';

export const createComment = async (req: Request, res: Response) => {
  const { comment } = req.body;

  if (!comment) {
    res.status(400).json({ error: 'Comment is required' });
  }

  try {
    const insertedComment = await insertComment(comment);
    res.status(201).json({ message: 'Comment added successfully', comment: insertedComment });
  } catch (error) {
    console.error('Error creating comment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
