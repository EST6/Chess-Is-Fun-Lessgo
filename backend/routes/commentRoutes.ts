import express from 'express';
import { Request, Response } from 'express';
import { createComment } from '../controllers/commentController';

const router = express.Router();

// POST /api/comments - Create a new comment
router.post('/', createComment);

router.get('/users', (req: Request, res: Response) => {
    res.send('Get all users');
});


export default router;
